import { CONFIG } from "../../const/config";
import { validateConfig } from "../functions/validateConfig";

/**
 * @name exclude
 * @description Remove from object listed property.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function exclude(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["exclude"].push(propertyName);
}
