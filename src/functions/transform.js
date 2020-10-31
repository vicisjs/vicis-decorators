import { serialize } from "./serialize.js";

/**
 * @name transform
 * @description Transform property value with function.
 * @param {Function} transformer
 * @returns {Function}
 */
export function transform(transformer) {
  return serialize({ transform: transformer });
}
