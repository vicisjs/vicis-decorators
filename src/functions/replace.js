import { serialize } from "./serialize.js";

/**
 * @name replace
 * @description Overrides object value.
 * @param {any} value
 * @returns {Function}
 */
export function replace(value) {
  return serialize({ replace: value });
}
