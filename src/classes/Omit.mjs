import { Serialize } from "./Serialize";
import { argsAsArray } from "../utils/argsAsArray";

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
