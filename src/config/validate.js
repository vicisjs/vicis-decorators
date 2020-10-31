import { Vicis } from "vicis";

import { CONFIG } from "../const/config.js";
import { SERIALIZER } from "../const/serializer.js";

import { getDefault } from "./getDefault.js";

/**
 * @name validate
 * @description Check wherever serializable object already has Vicis serializer.
 * @param {object} instance
 * @returns {void}
 */
export function validate(instance) {
  if (!instance[CONFIG]) {
    instance[CONFIG] = getDefault();
    instance[SERIALIZER] = Vicis.factory(instance[CONFIG]);
  }
}
