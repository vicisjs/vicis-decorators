import { Vicis } from "vicis";

import { CONFIG } from "../const/config.js";
import { SERIALIZER } from "../const/serializer.js";

import { clone } from "../utils/clone.js";
import { getDefault } from "../config/getDefault.js";
import { merge } from "../utils/merge.js";
import { toJSON } from "../hooks/toJSON.js";

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
