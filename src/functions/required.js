import { CONFIG } from "../const/config.js";

import { validate } from "../config/validate.js";

/**
 * @name required
 * @description If property defined in object - no error thrown.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function required(instance, propertyName) {
  validate(instance);
  instance[CONFIG]["required"].push(propertyName);
}
