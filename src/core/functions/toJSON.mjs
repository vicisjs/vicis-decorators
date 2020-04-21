import { CONFIG } from "../../const/config";
import { SERIALIZER } from "../../const/serializer";

/**
 * @name toJSON
 * @description Mixin for serialization class.
 * @returns {any}
 */
export function toJSON() {
  const asJSON = new Object(null);
  const propertiesToSerialize = Array.from(new Set(this[CONFIG].pick));
  propertiesToSerialize.forEach((propertyName) => {
    asJSON[propertyName] = this[propertyName];
  });
  const serializedData = this[SERIALIZER].data(asJSON).getData();
  (async () => {
    this[SERIALIZER].clear();
  })();
  return serializedData;
}
