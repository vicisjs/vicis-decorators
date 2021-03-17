import { Serialize } from "./Serialize.js";

/**
 * @name Nullish
 * @description In case of property has undefined or null value it will be replaced with value from configuration.
 * @param {object.<string, any>=} propertyNullishValues
 * @returns {Function}
 */
export function Nullish(propertyNullishValues = {}) {
  return Serialize({ defaults: propertyNullishValues });
}
