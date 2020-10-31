import { CONFIG } from "../const/config.js";

import { validate } from "../config/validate.js";

/**
 * @name exclude
 * @description Remove from object listed property.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function exclude(instance, propertyName) {
  validate(instance);
  instance[CONFIG]["exclude"].push(propertyName);
}
