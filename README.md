![Vicis](docs/_media/128.png?raw=true "Vicis")

# Vicis Decorators

JavaScript's Vicis Decorators create serializable objects without a configuration.

[Vicis Documentation](https://vicis.js.org)

[![npm](https://badgen.net/npm/v/@vicis/decorators?&icon=npm&label=npm&color=DD3636)](https://www.npmjs.com/package/@vicis/decorators)
[![downloads](https://badgen.net/npm/dt/@vicis/decorators?&icon=terminal&label=downloads&color=009688)](https://www.npmjs.com/package/@vicis/decorators)
[![types](https://badgen.net/npm/types/@vicis/decorators?&icon=typescript&label=types&color=1E90FF)](https://github.com/r37r0m0d3l/vicis-decorators/blob/master/dist/vicis-decorators.d.ts)
[![build](https://badgen.net/travis/r37r0m0d3l/vicis-decorators?&icon=travis&label=build)](https://travis-ci.org/r37r0m0d3l/vicis-decorators)
[![lgtm](https://badgen.net/lgtm/grade/g/r37r0m0d3l/vicis-decorators?&icon=lgtm&label=lgtm:js/ts&color=00C853)](https://lgtm.com/projects/g/r37r0m0d3l/vicis-decorators/alerts/)

---

## Usage

Require CommonJS.

```javascript
const {
  Cast, Defaults, Exclude, Nullish, Omit, Order, Pick, Rename,
  Required, Replace, Serialize, Transform,
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} = require("@vicis/decorators");
```

Import as ECMAScript module.

```javascript
import {
  Cast, Defaults, Exclude, Nullish, Omit, Order, Pick, Rename,
  Required, Replace, Serialize, Transform,
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} from "@vicis/decorators";
```

## Classes

### Serialize (class)

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

### Cast (class)

[Cast →](https://vicis.js.org/#/en/cast)

```typescript
@Cast({ id: Vicis.INTEGER })
class MyClass {
  protected id: number | string;
}
```

### Defaults (class)

[Defaults →](https://vicis.js.org/#/en/defaults)

```typescript
@Defaults({ active: false })
class MyClass {
  protected id: number | string;
  protected login: string;
}
```

### Exclude (class)

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

### Nullish (class)

[Nullish →](https://vicis.js.org/#/en/nullish)

```typescript
@Nullish({ active: null })
class MyClass {
  protected id: number | string;
  protected login: string;
}
```

### Omit (class)

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

### Order (class)

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

### Pick (class)

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

### Rename (class)

[Rename →](https://vicis.js.org/#/en/rename)

```typescript
@Rename({ _uuid: "id" })
class MyClass {
  protected _uuid: string;
}
```

### Required (class)

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

### Replace (class)

[Replace →](https://vicis.js.org/#/en/replace)

```typescript
@Replace({ local: false })
class MyClass {
  protected local: string = "yes";
}
```

### Transform (class)

[Transform →](https://vicis.js.org/#/en/transform)

```typescript
@Transform({ date: (value) => new Date(value) })
class MyClass {
  protected date: string = "2025-06-15";
}
```

## Properties

### serialize (property)

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

### cast (property)

[Cast →](https://vicis.js.org/#/en/cast)

```typescript
import { Vicis } from "vicis";
@Serialize()
class MyClass {
  @cast(Vicis.INTEGER)
  protected id: number | string;
}
```

### defaults (property)

[Defaults →](https://vicis.js.org/#/en/defaults)

```typescript
@Serialize()
class MyClass {
  @defaults(false)
  protected active: any;
}
```

### defined (property)

[Defined →](https://vicis.js.org/#/en/defined)

```typescript
@Serialize()
class MyClass {
  @defined
  protected email: string;
}
```

### exclude (property)

[Exclude →](https://vicis.js.org/#/en/exclude)

```typescript
@Serialize()
class MyClass {
  @exclude
  protected password: string;
}
```

### nullish (property)

[Nullish →](https://vicis.js.org/#/en/nullish)

```typescript
@Serialize()
class MyClass {
  @nullish("ok")
  protected active: any;
}
```

### omit (property)

[Omit →](https://vicis.js.org/#/en/omit)

```typescript
@Serialize()
class MyClass {
  @omit
  protected secret: string;
}
```

### pick (property)

[Pick →](https://vicis.js.org/#/en/pick)

```typescript
@Serialize()
class MyClass {
  @pick
  protected id: number | string;
}
```

### rename (property)

[Rename →](https://vicis.js.org/#/en/rename)

```typescript
@Serialize()
class MyClass {
  @rename("firstName")
  protected first_name: string;
}
```

### replace (property)

[Replace →](https://vicis.js.org/#/en/replace)

```typescript
@Serialize()
class MyClass {
  @replace("*****")
  protected hasInformation: string;
}
```

### required (property)

[Required →](https://vicis.js.org/#/en/required)

```typescript
@Serialize()
class MyClass {
  @required
  protected id: number | string;
}
```

### transform (property)

[Transform →](https://vicis.js.org/#/en/transform)

```typescript
@Serialize()
class MyClass {
  @transform((text) => text.toUpperCase())
  protected abbreviation: string;
}
```

---

## See also

[My Other Projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;" alt="r37r0m0d3l open source projects">

---
