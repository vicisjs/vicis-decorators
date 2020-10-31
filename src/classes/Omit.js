import { Serialize } from "./Serialize.js";
import { argsAsArray } from "../utils/argsAsArray.js";

/**
 * @name Omit
 * @description Remove from object listed properties.
 * @param {Array.<string>|string=} propertiesToOmit
 * @param {...string} omit
 * @returns {Function}
 */
export function Omit(propertiesToOmit, ...omit) {
  return Serialize({ omit: argsAsArray(propertiesToOmit, ...omit) });
}
