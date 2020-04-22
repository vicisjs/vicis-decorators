import { Serialize } from "./Serialize";

/**
 * @name Defaults
 * @description In case of property has undefined value it will be replaced with value from configuration.
 * @param {object.<string, any>=} propertyDefaultValues
 * @returns {Function}
 */
export function Defaults(propertyDefaultValues = {}) {
  return Serialize({ defaults: propertyDefaultValues });
}
