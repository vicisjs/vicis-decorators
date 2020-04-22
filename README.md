![Vicis](docs/_media/128.png?raw=true "Vicis")

# Vicis Decorators

JavaScript's Vicis Decorators create serializable objects without a configuration.

[📃 Vicis Documentation 📃](https://vicis.js.org)

[![npm](https://badgen.net/npm/v/@vicis/decorators?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/@vicis/decorators)
[![downloads](https://badgen.net/npm/dt/@vicis/decorators?&icon=terminal&label=downloads&color=009688)](https://www.npmjs.com/package/@vicis/decorators)
[![stars](https://badgen.net/github/stars/r37r0m0d3l/vicis-decorators?&icon=github&label=stars&color=ffcc33)](https://github.com/r37r0m0d3l/vicis-decorators)
[![types](https://badgen.net/npm/types/@vicis/decorators?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/vicis-decorators/blob/master/dist/vicis-decorators.d.ts)
[![build](https://badgen.net/travis/r37r0m0d3l/vicis-decorators?&icon=travis&label=build)](https://travis-ci.org/r37r0m0d3l/vicis-decorators)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/vicis-decorators?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://lgtm.com/projects/g/r37r0m0d3l/vicis-decorators/alerts/)

---

## Usage

Require CommonJS.

```javascript
const {
  Defaults, Exclude, Omit, Order, Pick, Required, Serialize,
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} = require("@vicis/decorators");
```

Import as ECMAScript module.

```javascript
import {
  Defaults, Exclude, Omit, Order, Pick, Required, Serialize,
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} from "@vicis/decorators";
```

## Classes

### Serialize

[Configuration](https://vicis.js.org/#/en/configuration_object)

```typescript
@Serialize({
  pick: ["id", "login"]
})
class MyClass {
  protected id: number | string;
  protected login: string;
}
```

### Defaults

[Defaults →](https://vicis.js.org/#/en/defaults)

```typescript
@Defaults({ active: false })
class MyClass {
  protected id: number | string;
  protected login: string;
}
```

### Exclude

[Exclude →](https://vicis.js.org/#/en/exclude)

```typescript
@Exclude(["password", "email", /^(?:_)(?:_)?/])
class MyClass {
  protected id: number | string;
  protected login: string;
  protected password: string;
  protected email: string;
}
```

```typescript
@Exclude("password", "email", /^(?:_)(?:_)?/)
class MyClass {
  protected id: number | string;
  protected login: string;
  protected password: string;
  protected email: string;
}
```

### Omit

[Omit →](https://vicis.js.org/#/en/omit)

```typescript
@Omit(["password", "email"])
class MyClass {
  protected id: number | string;
  protected login: string;
  protected password: string;
  protected email: string;
}
```

```typescript
@Omit("password", "email")
class MyClass {
  protected id: number | string;
  protected login: string;
  protected password: string;
  protected email: string;
}
```

### Order

[Order →](https://vicis.js.org/#/en/order)

```typescript
@Order(["id", "login", "name"])
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

```typescript
@Order("id", "login", "name")
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

### Pick

[Pick →](https://vicis.js.org/#/en/pick)

```typescript
@Pick(["id", "name"])
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

```typescript
@Pick("id", "name")
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

### Required

[Required →](https://vicis.js.org/#/en/required)

```typescript
@Required(["id", "login"])
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

```typescript
@Required("id", "login")
class MyClass {
  protected id: number | string;
  protected name: string;
  protected login: string;
}
```

## Properties

### serialize

[Serialize configuration →](https://vicis.js.org/#/en/configuration_object)

Any decorator that does not remove the property mark it as serializable.

```typescript
@Serialize()
class MyClass {
  @serialize()
  protected id: number | string;
}
```

Passing string instead of object rename property.

```typescript
@Serialize()
class MyClass {
  @serialize("ID")
  protected id: number | string;
}
```

You can use a configuration object.

```typescript
import { Vicis } from "vicis";
@Serialize()
class MyClass {
  @serialize({
    cast: Vicis.INTEGER,
    required: true,
  })
  protected id: number | string;
}
```

Or combine multiple decorators.

```typescript
import { Vicis } from "vicis";
@Serialize()
class MyClass {
  @required
  @cast(Vicis.INTEGER)
  protected id: number | string;
}
```

### cast

[Cast →](https://vicis.js.org/#/en/cast)

```typescript
import { Vicis } from "vicis";
@Serialize()
class MyClass {
  @cast(Vicis.INTEGER)
  protected id: number | string;
}
```

### defaults

[Defaults →](https://vicis.js.org/#/en/defaults)

```typescript
@Serialize()
class MyClass {
  @defaults(false)
  protected active: any;
}
```

### defined

[Defined →](https://vicis.js.org/#/en/defined)

```typescript
@Serialize()
class MyClass {
  @defined
  protected email: string;
}
```

### exclude

[Exclude →](https://vicis.js.org/#/en/exclude)

```typescript
@Serialize()
class MyClass {
  @exclude
  protected password: string;
}
```

### omit

[Omit →](https://vicis.js.org/#/en/omit)

```typescript
@Serialize()
class MyClass {
  @omit
  protected secret: string;
}
```

### pick

[Pick →](https://vicis.js.org/#/en/pick)

```typescript
@Serialize()
class MyClass {
  @pick
  protected id: number | string;
}
```

### rename

[Rename →](https://vicis.js.org/#/en/rename)

```typescript
@Serialize()
class MyClass {
  @rename("firstName")
  protected first_name: string;
}
```

### replace

[Replace →](https://vicis.js.org/#/en/replace)

```typescript
@Serialize()
class MyClass {
  @replace("*****")
  protected hasInformation: string;
}
```

### required

[Required →](https://vicis.js.org/#/en/required)

```typescript
@Serialize()
class MyClass {
  @required
  protected id: number | string;
}
```

### transform

[Transform →](https://vicis.js.org/#/en/transform)

```typescript
@Serialize()
class MyClass {
  @transform((text) => text.toUpperCase())
  protected abbreviation: string;
}
```

---

Discover more:

| URL | Description |
|:---|:---|
| [jsonsort.r37r0m0d3l.io](https://r37r0m0d3l.github.io/json_sort) | Neat online JSON sorter |
| [consono.js.org](https://consono.js.org) | The most informative & correct variable inspector |
| [of.js.org](https://of.js.org) | Promise wrapper with some sugar |
| [publish-subscribe.js.org](https://publish-subscribe.js.org) | Implementation of the Publish-Subscribe pattern |
| [vicis.js.org](https://vicis.js.org) | Present & transform for JSON in REST API |
| [npmjs.com/fallback-local-storage](https://npmjs.com/package/fallback-local-storage) | Universal localStorage fallback |
| [npmjs.com/@hilesystem](https://npmjs.com/package/@hilesystem/local) | Filesystem common function wrappers |
| [npmjs.com/@corefunc](https://npmjs.com/package/@corefunc/corefunc) | "Don’t repeat yourself" collection of functions |

---
