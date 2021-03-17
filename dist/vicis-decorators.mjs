import{Vicis as e}from"vicis";import r from"lodash.clonedeep";import t from"lodash.merge";const i=Symbol("__vicis_config__"),n=Symbol("__vicis_serializer__");function clone(e){return r(e)}const a={cast:{},defaults:{},defined:[],exclude:[],nullish:{},omit:[],order:[],pick:[],sort:!0,rename:{},replace:{},required:[],transform:{}};function getDefault(){return clone(a)}function merge(e,r){return t(e,r)}function toJSON(){const e={};Array.from(new Set(this[i].pick)).forEach((r=>{e[r]=this[r]}));const r=this[n].config(this[i]).data(e).getData();return(async()=>{this[n].clear()})(),r}function Serialize(r={}){return function(t){if(Object.is(t.prototype.toJSON,toJSON)||(t.prototype.toJSON=toJSON),i in t.prototype)t.prototype[i]=merge(clone(t.prototype[i]),clone(r||{}));else{const a=merge(getDefault(),clone(r||{})),o=merge(a,clone(t.prototype[i]||{}));t.prototype[i]=o,t.prototype[n]=e.factory(o)}return t}}function Cast(e){return Serialize({cast:e})}function Defaults(e={}){return Serialize({defaults:e})}function argsAsArray(e,...r){let t;return t=void 0!==e?Array.isArray(e)?[...e]:[e]:[],r.length&&(t=t.concat(r)),t}function Exclude(e,...r){return Serialize({exclude:argsAsArray(e,...r)})}function Nullish(e={}){return Serialize({defaults:e})}function Omit(e,...r){return Serialize({omit:argsAsArray(e,...r)})}function Order(e,...r){return Serialize({order:argsAsArray(e,...r)})}function Pick(e,...r){return Serialize({pick:argsAsArray(e,...r)})}function Rename(e){return Serialize({rename:e})}function Replace(e){return Serialize({replace:e})}function Required(e,...r){return Serialize({required:argsAsArray(e,...r)})}function Transform(e){return Serialize({transform:e})}function validate(r){r[i]||(r[i]=getDefault(),r[n]=e.factory(r[i]))}function serialize(e){let r;return r="string"==typeof e?{rename:e}:{...e},function(e,t){validate(e);Object.keys(r).length>0||e[i].pick.push(t),Object.keys(r).forEach((n=>{switch(n){case"defined":case"exclude":case"omit":case"required":!0===r[n]&&e[i][n].push(t);break;case"rename":e[i][n][t]=r.rename,e[i].pick.push(r.rename),e[i].pick.push(t);break;default:{let a=e[i][n];Array.isArray(a)?(a=new Set(a),a.add(r[n]),a=Array.from(a)):a[t]=r[n],e[i][n]=a}}}))}}function cast(e){return serialize({cast:e})}function defaults(e){return serialize({defaults:e})}function defined(e,r){validate(e),e[i].defined.push(r),e[i].pick.push(r)}function exclude(e,r){validate(e),e[i].exclude.push(r)}function nullish(e){return serialize({nullish:e})}function omit(e,r){validate(e),e[i].omit.push(r)}function pick(e,r){validate(e),e[i].pick.push(r)}function rename(e){return serialize(e)}function replace(e){return serialize({replace:e})}function required(e,r){validate(e),e[i].required.push(r)}function transform(e){return serialize({transform:e})}export{Cast,Defaults,Exclude,Nullish,Omit,Order,Pick,Rename,Replace,Required,Serialize,Transform,cast,defaults,defined,exclude,nullish,omit,pick,rename,replace,required,serialize,transform};
//# sourceMappingURL=vicis-decorators.mjs.map
