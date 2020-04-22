import { Vicis } from "vicis";

import { CONFIG } from "../const/config";
import { SERIALIZER } from "../const/serializer";

import { getDefault } from "./getDefault";

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
