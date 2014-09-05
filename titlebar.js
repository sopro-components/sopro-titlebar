/**
 * @ngdoc module
 * @name sopro.components.titlebar
 */
angular.module('sopro.components.titlebar', [
  'material.animations',
  'material.services.compiler'
])
  .directive('soproTitlebar', [
    '$$rAF',
    SoProTitlebarDirective
  ]);

/**
* @ngdoc directive
* @name soproTitlebar
* @module sopro.components.titlebar
*
* @restrict E
*
* @description
* The `<sopro-titlebar>` directive is an input element placed at the top of a card app.
*
* @usage
* <hljs lang="html">
* <sopro-titlebar title-hint="Add a group...">
* </sopro-titlebar>
* </hljs>
*
*/
function SoProTitlebarDirective($$rAF) {
  return {
    restrict: 'E',
    controller: function($scope, element, attr){
      if(attr["title-hint"] === "" || attr["title-hint"] === undefined){
        $scope.titleHint = "Add New...";       
      } else {
        $scope.titleHint = attr["title-hint"];
      }
    }, 
    compile: function(element, attr) {
    },
    link: function($scope, element, attr) {
      $$rAF(function() {
      });
    },
    template:
      '<div id="quickAddBox">' +
        '<form name="quickAddForm" style="padding-left:20px;">' +
          '<material-input-group>' +
            '<label for="quickAddTitle">{{titleHint}}</label>' +
            '<material-input name="quickAddTitle" id="quickAddTitle" type="text" size="45" ng-model="newTitle" flex>' +
          '</material-input-group>' +
            '<material-button id="quickAddButton" class="material-button-colored" ng-show="quickAddForm.$dirty" ng-click="newGroup()">' +
              'SAVE' +
            '</material-button>' +
        '</form>' +
      '</div>',
  };
}