import { serialize } from "./serialize";

/**
 * @name replace
 * @description Overrides object value.
 * @param {any} value
 * @returns {Function}
 */
export function replace(value) {
  return serialize({ replace: value });
}
