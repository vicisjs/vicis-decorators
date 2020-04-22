import { Vicis } from "vicis";

import { CONFIG } from "../const/config";
import { SERIALIZER } from "../const/serializer";

import { clone } from "../utils/clone";
import { getDefault } from "../config/getDefault";
import { merge } from "../utils/merge";
import { toJSON } from "../hooks/toJSON";

/**
 * @name Serialize
 * @description Make class ready for serialization.
 * @param {object=} config
 * @returns {Function}
 */
export function Serialize(config = {}) {
  /**
   * @param {object} target
   * @returns {object}
   */
  return function (target) {
    if (!Object.is(target.prototype.toJSON, toJSON)) {
      target.prototype.toJSON = toJSON;
    }
    if (CONFIG in target.prototype) {
      target.prototype[CONFIG] = merge(clone(target.prototype[CONFIG]), clone(config || {}));
    } else {
      const mergedConfig = merge(getDefault(), clone(config || {}));
      const protoConfig = clone(target.prototype[CONFIG] || {});
      const setConfig = merge(mergedConfig, protoConfig);
      target.prototype[CONFIG] = setConfig;
      target.prototype[SERIALIZER] = Vicis.factory(setConfig);
    }
    return target;
  };
}
