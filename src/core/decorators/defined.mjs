import { CONFIG } from "../../const/config";
import { validateConfig } from "../functions/validateConfig";

/**
 * @name defined
 * @description If value is defined in object - no error thrown.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function defined(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["defined"].push(propertyName);
  instance[CONFIG]["pick"].push(propertyName);
}
