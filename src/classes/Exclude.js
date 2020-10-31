import { Serialize } from "./Serialize.js";
import { argsAsArray } from "../utils/argsAsArray.js";

/**
 * @name Exclude
 * @description Remove from object listed properties.
 * @param {Array.<string|RegExp>=} propertiesToExclude
 * @param {...string|RegExp} exclude
 * @returns {Function}
 */
export function Exclude(propertiesToExclude, ...exclude) {
  return Serialize({ exclude: argsAsArray(propertiesToExclude, ...exclude) });
}
