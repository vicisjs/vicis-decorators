import cloneDeep from "lodash.clonedeep";

/**
 * @name clone
 * @description Recursively clones `value`.
 * @param {any} value
 * @returns {any}
 */
export function clone(value) {
  return cloneDeep(value);
}
