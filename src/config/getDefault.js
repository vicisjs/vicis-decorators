import { clone } from "../utils/clone.js";

const vicisConfigDefault = {
  cast: {},
  defaults: {},
  defined: [],
  exclude: [],
  nullish: {},
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
 * @name getDefault
 * @description Get default Vicis configuration.
 * @returns {any}
 */
export function getDefault() {
  return clone(vicisConfigDefault);
}
