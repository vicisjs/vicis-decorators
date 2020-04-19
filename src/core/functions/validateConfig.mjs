import { Vicis } from "vicis";

import { CONFIG } from "../../const/config";
import { SERIALIZER } from "../../const/serializer";
import { getDefaultConfig } from "./getDefaultConfig";

/**
 * @name validateConfig
 * @description Check wherever serializable object already has Vicis serializer.
 * @param {object} instance
 * @returns {void}
 */
export function validateConfig(instance) {
  if (!instance[CONFIG]) {
    instance[CONFIG] = getDefaultConfig();
    instance[SERIALIZER] = Vicis.factory(instance[CONFIG]);
  }
}
