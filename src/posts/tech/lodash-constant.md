---
title: "TIL: Lodash's constant is constant"
date: '2019-01-16T03:51:42.660Z'
tags:
  - Javascript
  - Lodash
---

I was working on something that made me produce something like this:

<!--excerpt-->

```javascript
const array = [
  {
    key: 'a',
  },
  {
    key: 'b',
  },
];

const transformedObject = _.chain(arrayOfObjects)
  .keyBy('key')
  .mapValues(
    _.constant({
      someKey: null,
    })
  )
  .value();

console.log(transformedObject);
// Prints out:
// {
//     a: {
//         someKey: null
//     },
//     b: {
//         someKey: null
//     }
// }
```

_**Note**: This is a dumbed out version of the actual code._

When I tried updating one of the properties' `someKey` attribute, I expected it to just modify that particular attribute. Instead, it modified all `someKey` attribute of **all** the properties.

```javascript
transformedObject.a.someKey = 'new value';

console.log(transformedObject);
// Prints out:
// {
//     a: {
//         someKey: 'new value'
//     },
//     b: {
//         someKey: 'new value'
//     }
// }
```

It turns out that, Lodash's `_.constant` is actually _constant_. It returned the same instance of the value passed onto it. It took me about an hour to realize what just happened. 🤦️
