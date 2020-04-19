import { clone } from "../../util/clone";

const vicisConfigDefault = {
  cast: {},
  defaults: {},
  defined: [],
  exclude: [],
  omit: [],
  order: [],
  pick: [],
  sort: true,
  rename: {},
  replace: {},
  required: [],
  transform: {},
};

/**
 * @name getDefaultConfig
 * @description Get default Vicis configuration.
 * @returns {any}
 */
export function getDefaultConfig() {
  return clone(vicisConfigDefault);
}
