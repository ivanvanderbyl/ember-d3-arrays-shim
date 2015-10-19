/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'Ember D3 Arrays Shim',

  // init: function(name) {
  //   var assets_path = require('path').join('d3-arrays','src','index.js');
  //   this.treePaths.vendor = require.resolve('d3-arrays').replace(assets_path, '');
  // },

  included: function(app) {
    // console.log('d3-arrays included', app);

    app.import(path.join(app.project.nodeModulesPath, 'd3-arrays', 'src', 'index.js'));

    // var options = this.app.options.icAjaxOptions || {enabled: true};

    // if (options.enabled) {
    //   this.app.import('vendor/ic-ajax/dist/named-amd/main.js', {
    //     exports: {
    //       'ic-ajax': [
    //         'default',
    //         'defineFixture',
    //         'lookupFixture',
    //         'raw',
    //         'request',
    //       ]
    //     }
    //   });
    // }
  }
};
