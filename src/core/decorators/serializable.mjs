import { Vicis } from "vicis";

import { CONFIG } from "../../const/config";
import { SERIALIZER } from "../../const/serializer";

import { clone } from "../../util/clone";
import { getDefaultConfig } from "../functions/getDefaultConfig";
import { merge } from "../../util/merge";
import { toJSON } from "../functions/toJSON";

/**
 * @name serializable
 * @description Make class ready for serialization.
 * @param {object} config
 * @returns {Function}
 */
export function serializable(config) {
  /**
   * @param {object} target
   * @returns {object}
   */
  return function (target) {
    const mergedConfig = merge(getDefaultConfig(), clone(config || {}));
    const protoConfig = clone(target.prototype[CONFIG] || {});
    const setConfig = merge(mergedConfig, protoConfig);
    target.prototype[CONFIG] = setConfig;
    target.prototype[SERIALIZER] = Vicis.factory(setConfig);
    target.prototype.toJSON = toJSON;
    return target;
  };
}
