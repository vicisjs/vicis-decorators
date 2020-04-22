import { CONFIG } from "../const/config";

import { validate } from "../config/validate";

/**
 * @name omit
 * @description Remove property from object. Applies before all other transformations.
 * @param {object} instance
 * @param {string} propertyName
 * @returns {void}
 */
export function omit(instance, propertyName) {
  validate(instance);
  instance[CONFIG]["omit"].push(propertyName);
}
