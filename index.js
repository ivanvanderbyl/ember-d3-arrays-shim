/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'd3-arrays',

  treeForAddon: function(tree) {
    var packagePath = path.join(this.project.addonPackages['ember-d3-arrays-shim'].path, 'node_modules', 'd3-arrays', 'src');
    var d3ArraysTree = this.treeGenerator(packagePath);

    var trees = mergeTrees([d3ArraysTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
};
