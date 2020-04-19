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
export function defined(target: Object, propertyKey: string): any;
/**
 * @name exclude
 * @description Remove from object listed property.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function exclude(target: Object, propertyKey: string): any;
/**
 * @name omit
 * @description Remove property from object. Applies before all other transformations.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function omit(target: Object, propertyKey: string): any;
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
 * @name serializable
 * @description Make class ready for serialization.
 * @param {object} config
 * @returns {Function}
 */
export function serializable(config?: IVicisConfig | string): Function;
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
