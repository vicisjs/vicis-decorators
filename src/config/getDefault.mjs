import { clone } from "../utils/clone";

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
 * @name getDefault
 * @description Get default Vicis configuration.
 * @returns {any}
 */
export function getDefault() {
  return clone(vicisConfigDefault);
}
