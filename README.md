# Ember D3 Arrays shim

D3.js version 4.x is written in ES2015 compatible code, but ember CLI cannot natively load this module. This shim loads the D3 Array source tree so you can use specific functions from D3 Arrays without loading the entire D3 library.

# Usage (In your Ember CLI app)

```js
import {mean, ascending} from "d3-arrays";

export default Ember.Service.extend({
  values: [],

  meanValues: Ember.computed('values.[]', function() {
    return mean(this.get('values').sort(ascending));
  }),
});
```

# Installation

```bash
ember install ember-d3-arrays-shim
```

# Documentation

Full API documentation is available on the actual [D3-Arrays repository](/d3/d3-arrays).

# License

MIT
