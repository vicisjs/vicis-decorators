import lodashMerge from "lodash.merge";

/**
 * @name merge
 * @description Performs deep merges and tracks traversed objects.
 * @param {any} valueOne
 * @param {any} valueTwo
 * @returns {any}
 */
export function merge(valueOne, valueTwo) {
  return lodashMerge(valueOne, valueTwo);
}
