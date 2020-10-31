import { Serialize } from "./Serialize.js";

/**
 * @name Rename
 * @description Renames properties to another name and remove original
 * @param {object.<string, string>=} renamePropertyFromTo
 * @returns {Function}
 */
export function Rename(renamePropertyFromTo) {
  return Serialize({ rename: renamePropertyFromTo });
}
