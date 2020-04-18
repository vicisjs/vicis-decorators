import { Vicis } from "vicis";
import * as merge from "lodash.merge";
import * as cloneDeep from "lodash.clonedeep";

const CONFIG = Symbol("__config__");
const SERIALIZER = Symbol("__serializer__");

const vicisConfigDefault = {
  cast: {},
  defaults: {},
  defined: [],
  exclude: [],
  omit: [],
  order: [],
  pick: [],
  sort: true,
  rename: {},
  replace: {},
  required: [],
  transform: {},
};

function configDefault() {
  return cloneDeep(vicisConfigDefault);
}

function validateConfig(instance) {
  if (!instance[CONFIG]) {
    instance[CONFIG] = configDefault();
    instance[SERIALIZER] = Vicis.factory(instance[CONFIG]);
  }
}

function toJSON() {
  const asJSON = {};
  const propertiesToSerialize = Array.from(new Set(this[CONFIG].pick));
  propertiesToSerialize.forEach((propertyName) => {
    asJSON[propertyName] = this[propertyName];
  });
  const serializedData = Vicis.factory(this[CONFIG], asJSON).getData();
  this[SERIALIZER].clear();
  return serializedData;
}

/**
 * @param {IVicisConfig} config
 */
export function Serializable(config) {
  return function (target) {
    const mergedConfig = merge(configDefault(), cloneDeep(config || {}));
    const protoConfig = cloneDeep(target.prototype[CONFIG] || {});
    const setConfig = merge(mergedConfig, protoConfig);
    target.prototype[CONFIG] = setConfig;
    target.prototype[SERIALIZER] = Vicis.factory(setConfig);
    target.prototype.toJSON = toJSON;
    return target;
  };
}

/**
 * @param {object|string=} configOfProperty
 */
export function Serialize(configOfProperty) {
  let propertyConfig;
  if (typeof configOfProperty === "string") {
    propertyConfig = { rename: configOfProperty };
  } else {
    propertyConfig = { ...configOfProperty };
  }
  return function (instance, propertyName, _descriptor) {
    validateConfig(instance);
    const hasConfig = Object.keys(propertyConfig).length > 0;
    if (hasConfig) {
      instance[CONFIG].pick.push(propertyName);
    }
    Object.keys(propertyConfig).forEach((key) => {
      switch (key) {
        case "rename":
          {
            instance[CONFIG][key][propertyName] = propertyConfig.rename;
            instance[CONFIG]["pick"].push(propertyConfig.rename);
          }
          break;
        default:
          {
            let globalConfigProperty = instance[CONFIG][key];
            if (Array.isArray(globalConfigProperty)) {
              globalConfigProperty = new Set(globalConfigProperty);
              globalConfigProperty.add(propertyConfig[key]);
              globalConfigProperty = Array.from(globalConfigProperty);
            } else {
              globalConfigProperty[propertyName] = propertyConfig[key];
            }
            instance[CONFIG][key] = globalConfigProperty;
          }
          break;
      }
    });
  };
}

/**
 * @name Cast
 * @decorator
 * @param to
 * @returns {*}
 */
export function Cast(to) {
  return Serialize({ cast: to });
}

/**
 * @name Defaults
 * @decorator
 * @param value
 * @returns {*}
 */
export function Defaults(value) {
  return Serialize({ defaults: value });
}

/**
 * @name Defined
 * @decorator
 * @param instance
 * @param propertyName
 * @returns {*}
 */
export function Defined(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["defined"].push(propertyName);
}

/**
 * @name Exclude
 * @decorator
 * @param instance
 * @param propertyName
 * @returns {*}
 */
export function Exclude(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["exclude"].push(propertyName);
}

/**
 * @name Omit
 * @decorator
 * @param instance
 * @param propertyName
 * @returns {*}
 */
export function Omit(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["omit"].push(propertyName);
}

/**
 * @name Rename
 * @decorator
 * @param {*} newName
 * @returns {*}
 */
export function Rename(newName) {
  return Serialize(newName);
}

/**
 * @name Replace
 * @decorator
 * @param {*} value
 * @returns {*}
 */
export function Replace(value) {
  return Serialize({ replace: value });
}

/**
 * @name Transform
 * @decorator
 * @param {Function} transformer
 * @returns {*}
 */
export function Transform(transformer) {
  return Serialize({ transform: transformer });
}
