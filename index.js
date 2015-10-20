/* jshint node: true */
'use strict';

var d3ArraysFactory = require('d3-arrays');

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {

    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return d3ArraysFactory;
}));

// var path = require('path');

// module.exports = {
//   name: 'Ember D3 Arrays Shim',

//   init: function(name) {
//     var assets_path = require('path').join('d3-arrays','index.js');
//     this.treePaths.vendor = require.resolve('d3-arrays').replace(assets_path, '');
//   },

//   included: function(app) {
//     // console.log('d3-arrays included', app);

//     // this.app.import(path.join(this.app.project.nodeModulesPath, 'd3-arrays', 'src', 'index.js'));

//     // var options = this.app.options.icAjaxOptions || {enabled: true};

//     // if (options.enabled) {
//     //   this.app.import('vendor/ic-ajax/dist/named-amd/main.js', {
//     //     exports: {
//     //       'ic-ajax': [
//     //         'default',
//     //         'defineFixture',
//     //         'lookupFixture',
//     //         'raw',
//     //         'request',
//     //       ]
//     //     }
//     //   });
//     // }
//   }
// };
