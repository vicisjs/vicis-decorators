import { serialize } from "./serialize.js";

/**
 * @name cast
 * @description Typecast object value to BOOLEAN, NUMERIC, INTEGER, STRING, JSON
 * @param {string} to
 * @returns {Function}
 */
export function cast(to) {
  return serialize({ cast: to });
}
