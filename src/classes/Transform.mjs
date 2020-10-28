import { Serialize } from "./Serialize";

/**
 * @name Transform
 * @description Transform property values with function
 * @param {object.<string, Function>=} propertyValuesTransformWith
 * @returns {Function}
 */
export function Transform(propertyValuesTransformWith) {
  return Serialize({ transform: propertyValuesTransformWith });
}
