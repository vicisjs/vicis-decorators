![Vicis](docs/_media/128.png?raw=true "Vicis")

# Vicis Transform Date

Vicis transformation plugin for date and time.

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
const { Vicis } = require("vicis");
const { VicisTransformDate } = require("@vicis/decorators");
```

Import as ECMAScript module.

```javascript
import { Vicis } from "vicis";
import { VicisTransformDate } from "@vicis/decorators";
```

Export separately as functions.

```javascript
const {
  VicisTransformDate,
  toDateTime, toFormat, toHourMinSec, toISO,
  toISO8601, toRFC2822, toUnix, toYearMonthDay,
} = require("@vicis/decorators");
```

## API

```javascript
const serializer = Vicis.factory();

const model = { createdAt: new Date(), };
serializer.data(model);
```

### Default serializer behaviour

```javascript
console.log(serializer.getData());
```

```json
{ "createdAt": "2020-06-15T12:30:45.290Z" }
```

### toDateTime()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toDateTime(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

### toFormat()

```javascript
const format = "YYYY-MM-DD HH:mm:ss";
serializer.transform({
  createdAt: VicisTransformDate.toFormat(format),
});
```

```json
{ "createdAt": "2020-06-15 12:30:45" }
```

### toHourMinSec()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toHourMinSec(),
});
```

```json
{ "createdAt": "12:30:45" }
```

### toISO()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toISO(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000Z" }
```

### toISO8601()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toISO8601(),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

### toRFC2822()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toRFC2822(),
});
```

```json
{ "createdAt": "Mon, 15 Jun 2020 12:30:45 GMT" }
```

### toUnix()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toUnix(),
});
```

```json
{ "createdAt": 1592224245000 }
```

### toYearMonthDay()

```javascript
serializer.transform({
  createdAt: VicisTransformDate.toYearMonthDay(),
});
```

```json
{ "createdAt": "2020-06-15" }
```

### toDateTime() with configuration

Priority: unixTimestamp, format, anything else for iso formatting.

```javascript
const config = {
  format: undefined,
  keepLocalTime: true,
  keepOffset: true,
  unixTimestamp: false,
  utcOffset: undefined,
};
serializer.transform({
  createdAt: VicisTransformDate.toDateTime(config),
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

## ⚠ For test purposes only ⚠

If you are 💯 sure that you have correct dates and UTC offsets.

```javascript
serializer.transform({
  createdAt: VicisTransformDate,
});
```

```json
{ "createdAt": "2020-06-15T12:30:45.000+00:00" }
```

---

*If you use this project don't forget to give a ⭐
[star](https://github.com/r37r0m0d3l/vicis) ⭐ to it on GitHub!*

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
