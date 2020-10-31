import { CONFIG } from "../const/config.js";

import { validate } from "../config/validate.js";

/**
 * @name defined
 * @description If value is defined in object - no error thrown.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function defined(instance, propertyName) {
  validate(instance);
  instance[CONFIG]["defined"].push(propertyName);
  instance[CONFIG]["pick"].push(propertyName);
}
