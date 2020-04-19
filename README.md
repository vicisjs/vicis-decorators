![Vicis](docs/_media/128.png?raw=true "Vicis")

# Vicis Decorators

Vicis decorators create serializable objects without a configuration.

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
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} = require("@vicis/decorators");
```

Import as ECMAScript module.

```javascript
import {
  cast, defaults, defined, exclude, omit, rename,
  replace, serializable, serialize, transform,
} from "@vicis/decorators";
```

## API

### Serializable

[Configuration 🡆](https://vicis.js.org/#/en/configuration_object)

```typescript
@serializable({
  pick: ["id", "login"]
})
class MyClass {
  protected id: number | string;
  protected login: string;
}
```

### Serialize

[Serialize configuration 🡆](https://vicis.js.org/#/en/configuration_object)

Any decorator that does not remove the property mark it as serializable.

```typescript
@serializable()
class MyClass {
  @serialize()
  protected id: number | string;
}
```

Passing string instead of object rename property.

```typescript
@serializable()
class MyClass {
  @serialize("ID")
  protected id: number | string;
}
```

You can use a configuration object.

```typescript
import { Vicis } from "vicis";
@serializable()
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
@serializable()
class MyClass {
  @required
  @cast(Vicis.INTEGER)
  protected id: number | string;
}
```

### Cast

[Cast 🡆](https://vicis.js.org/#/en/cast)

```typescript
import { Vicis } from "vicis";
@serializable()
class MyClass {
  @cast(Vicis.INTEGER)
  protected id: number | string;
}
```

### Defaults

[Defaults 🡆](https://vicis.js.org/#/en/defaults)

```typescript
@serializable()
class MyClass {
  @defaults(false)
  protected active: any;
}
```

### Defined

[Defined 🡆](https://vicis.js.org/#/en/defined)

```typescript
@serializable()
class MyClass {
  @defined
  protected email: string;
}
```

### Exclude

[Exclude 🡆](https://vicis.js.org/#/en/exclude)

```typescript
@serializable()
class MyClass {
  @exclude
  protected password: string;
}
```

### Omit

[Omit 🡆](https://vicis.js.org/#/en/omit)

```typescript
@serializable()
class MyClass {
  @omit
  protected secret: string;
}
```

### Rename

[Rename 🡆](https://vicis.js.org/#/en/rename)

```typescript
@serializable()
class MyClass {
  @rename("firstName")
  protected first_name: string;
}
```

### Replace

[Replace 🡆](https://vicis.js.org/#/en/replace)

```typescript
@serializable()
class MyClass {
  @replace("*****")
  protected hasInformation: string;
}
```

### Transform

[Transform 🡆](https://vicis.js.org/#/en/transform)

```typescript
@serializable()
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
