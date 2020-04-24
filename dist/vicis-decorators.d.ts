import { IVicisConfig, TYPES_ENUM } from "vicis";

export interface IVicisConfigProperty {
  cast?: TYPES_ENUM;
  defaults?: any;
  defined?: boolean;
  exclude?: boolean;
  omit?: boolean;
  rename?: string;
  replace?: any;
  required?: boolean;
  transform?: (value: any, key: string, data: object) => any;
}

/**
 * @name Defaults
 * @description In case of property has undefined value it will be replaced with value from configuration.
 * @param {Object.<string, any>=} propertyDefaultValues
 * @returns {Function}
 */
export function Defaults(propertyDefaultValues?: { [key: string]: any }): Function;
/**
 * @name Exclude
 * @description Remove from object listed properties.
 * @param {Array.<string|RegExp>=} propertiesToExclude
 * @param {...string|RegExp} exclude
 * @returns {Function}
 */
export function Exclude(
  propertiesToExclude: string | RegExp | Array<string | RegExp>,
  ...exclude: Array<string | RegExp>
): Function;
/**
 * @name Omit
 * @description Remove from object listed properties.
 * @param {Array.<string>|string=} propertiesToOmit
 * @param {...string} omit
 * @returns {Function}
 */
export function Omit(propertiesToOmit?: string | string[], ...omit: string[]): Function;
/**
 * @name Order
 * @description Set order of object property names.
 * @param {Array.<string>|string=} propertiesToStreamline
 * @param {...string} order
 * @returns {Function}
 */
export function Order(propertiesToStreamline?: string | string[], ...order: string[]): Function;
/**
 * @name Pick
 * @description Mark property or getter as serializable.
 * @param {Array.<string>|string=} propertiesToPick
 * @param {...string} pick
 * @returns {Function}
 */
export function Pick(propertiesToPick?: string | string[], ...pick: string[]): Function;
/**
 * @name Required
 * @description If property defined in object - no error thrown.
 * @param {Array.<string>|string=} propertiesRequired
 * @param {...string} required
 * @returns {Function}
 */
export function Required(propertiesRequired?: string | string[], ...required: string[]): Function;
/**
 * @name Serialize
 * @description Make class ready for serialization.
 * @param {object=} config
 * @returns {Function}
 */
export function Serialize(config?: IVicisConfig): Function;

/**
 * @name cast
 * @description Typecast object value to BOOLEAN, NUMERIC, INTEGER, STRING, JSON
 * @param {string} to
 * @returns {Function}
 */
export function cast(to: TYPES_ENUM): Function;
/**
 * @name defaults
 * @description In case of property has undefined value it will be replaced with value from configuration
 * @param {any} value
 * @returns {Function}
 */
export function defaults(value: any): Function;
/**
 * @name defined
 * @description If value is defined in object - no error thrown.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function defined(instance: Object, propertyName: string): any;
/**
 * @name exclude
 * @description Remove from object listed property.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function exclude(instance: Object, propertyName: string): any;
/**
 * @name omit
 * @description Remove property from object. Applies before all other transformations.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function omit(instance: Object, propertyName: string): any;
/**
 * @name pick
 * @description Mark property or getter as serializable.
 * @returns {Function}
 */
export function pick(instance: Object, propertyName: string): any;
/**
 * @name rename
 * @description Rename property to another name and remove original.
 * @param {string} name
 * @returns {Function}
 */
export function rename(name: string): Function;
/**
 * @name replace
 * @description Overrides object value.
 * @param {any} value
 * @returns {Function}
 */
export function replace(value: any): Function;
/**
 * @name required
 * @description If property defined in object - no error thrown.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function required(instance: Object, propertyName: string): any;
/**
 * @name serialize
 * @description Mark property or getter as serializable.
 * @param {object|string=} configOfProperty
 * @returns {Function}
 */
export function serialize(configOfProperty?: IVicisConfigProperty | string): Function;
/**
 * @name transform
 * @description Transform property value with function.
 * @param {Function} transformer
 * @returns {Function}
 */
export function transform(transformer: (value: any, key: string, data: object) => any): Function;
