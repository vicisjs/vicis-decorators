import { Serialize } from "./Serialize";

/**
 * @name Cast
 * @description Typecast object values to BOOLEAN, NUMERIC, INTEGER, STRING, JSON
 * @param {object.<string, string>=} propertiesToCast
 * @returns {Function}
 */
export function Cast(propertiesToCast) {
  return Serialize({ cast: propertiesToCast });
}
