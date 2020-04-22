import { CONFIG } from "../const/config";

import { validate } from "../config/validate";

/**
 * @name serialize
 * @description Mark property or getter as serializable.
 * @param {object|string=} configOfProperty
 * @returns {Function}
 */
export function serialize(configOfProperty) {
  let propertyConfig;
  if (typeof configOfProperty === "string") {
    propertyConfig = { rename: configOfProperty };
  } else {
    propertyConfig = { ...configOfProperty };
  }
  /**
   * @param {object} instance
   * @param {string} propertyName
   */
  return function (instance, propertyName /*, descriptor*/) {
    validate(instance);
    const hasConfig = Object.keys(propertyConfig).length > 0;
    if (!hasConfig) {
      instance[CONFIG].pick.push(propertyName);
    }
    Object.keys(propertyConfig).forEach((key) => {
      switch (key) {
        case "defined":
          {
            if (propertyConfig[key] === true) {
              instance[CONFIG][key].push(propertyName);
            }
          }
          break;
        case "exclude":
          {
            if (propertyConfig[key] === true) {
              instance[CONFIG][key].push(propertyName);
            }
          }
          break;
        case "omit":
          {
            if (propertyConfig[key] === true) {
              instance[CONFIG][key].push(propertyName);
            }
          }
          break;
        case "rename":
          {
            instance[CONFIG][key][propertyName] = propertyConfig.rename;
            instance[CONFIG]["pick"].push(propertyConfig.rename);
            instance[CONFIG]["pick"].push(propertyName);
          }
          break;
        case "required":
          {
            if (propertyConfig[key] === true) {
              instance[CONFIG][key].push(propertyName);
            }
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
