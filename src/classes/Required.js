import { Serialize } from "./Serialize.js";
import { argsAsArray } from "../utils/argsAsArray.js";

/**
 * @name Required
 * @description If property defined in object - no error thrown.
 * @param {Array.<string>|string=} propertiesRequired
 * @param {...string} required
 * @returns {Function}
 */
export function Required(propertiesRequired, ...required) {
  return Serialize({ required: argsAsArray(propertiesRequired, ...required) });
}
