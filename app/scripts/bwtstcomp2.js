/**
 * Sample directive implementation.
 * The module is declared in bwtstcomp2.js
 */
angular.module('bwtstcomp2',[]);

angular.module('bwtstcomp2').directive('compTest2', function () {

	'use strict';

	return {
    restrict: 'AE',
    scope: {
      msg: '@tdMsg'
    },
		template: '<div>{{msg}}</div>'
	};

});
