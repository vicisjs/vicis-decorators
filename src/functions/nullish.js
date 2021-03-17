import { serialize } from "./serialize.js";

/**
 * @name nullish
 * @description In case of property has undefined or null value it will be replaced with value from configuration
 * @param {any} value
 * @returns {Function}
 */
export function nullish(value) {
  return serialize({ nullish: value });
}
