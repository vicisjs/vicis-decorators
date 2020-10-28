import { Serialize } from "./Serialize";

/**
 * @name Replace
 * @description Overrides object values
 * @param {object.<string, *>=} replacePropertyValues
 * @returns {Function}
 */
export function Replace(replacePropertyValues) {
  return Serialize({ replace: replacePropertyValues });
}
