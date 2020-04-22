import { CONFIG } from "../const/config";

import { validate } from "../config/validate";

/**
 * @name pick
 * @description Mark property or getter as serializable.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function pick(instance, propertyName) {
  validate(instance);
  instance[CONFIG]["pick"].push(propertyName);
}
