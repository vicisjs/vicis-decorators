import { CONFIG } from "../../const/config";
import { validateConfig } from "../functions/validateConfig";

/**
 * @name omit
 * @description Remove property from object. Applies before all other transformations.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function omit(instance, propertyName) {
  validateConfig(instance);
  instance[CONFIG]["omit"].push(propertyName);
}
