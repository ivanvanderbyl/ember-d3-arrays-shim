/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'd3-arrays',

  treeForAddon: function() {
    var packagePath = path.join(this.project.addonPackages['ember-d3-arrays-shim'].path, 'node_modules', 'd3-arrays');
    var d3ArraysTree = this.treeGenerator(packagePath);
    return this._super.treeForAddon.call(this, d3ArraysTree);
  }
};
