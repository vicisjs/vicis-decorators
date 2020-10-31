import { serialize } from "./serialize.js";

/**
 * @name defaults
 * @description In case of property has undefined value it will be replaced with value from configuration
 * @param {any} value
 * @returns {Function}
 */
export function defaults(value) {
  return serialize({ defaults: value });
}
