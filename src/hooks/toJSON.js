import { CONFIG } from "../const/config.js";
import { SERIALIZER } from "../const/serializer.js";

/**
 * @name toJSON
 * @description Mixin for serialization class.
 * @returns {any}
 */
export function toJSON() {
  const asJSON = {};
  const propertiesToSerialize = Array.from(new Set(this[CONFIG].pick));
  propertiesToSerialize.forEach((propertyName) => {
    asJSON[propertyName] = this[propertyName];
  });
  const serializedData = this[SERIALIZER].config(this[CONFIG]).data(asJSON).getData();
  (async () => {
    this[SERIALIZER].clear();
  })();
  return serializedData;
}
