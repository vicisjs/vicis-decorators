import { Serialize } from "./Serialize.js";
import { argsAsArray } from "../utils/argsAsArray.js";

/**
 * @name Order
 * @description Set order of object property names.
 * @param {Array.<string>|string=} propertiesToStreamline
 * @param {...string} order
 * @returns {Function}
 */
export function Order(propertiesToStreamline, ...order) {
  return Serialize({ order: argsAsArray(propertiesToStreamline, ...order) });
}
