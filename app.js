// MODULE
var angularApp = angular.module('angularApp', ['ui.bootstrap']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', 'employeeService', function ($scope, employeeService) {}]);

angularApp.controller('employeeListController', ['$scope', 'employeeService', function ($scope, employeeService) {
    $scope.selectedEmployee = null;
    $scope.employees = [];
    $scope.isReadOnly = true;
    $scope.saveEmployeeActionTxt="עריכת";
    $scope.saveSuceeded=false;
    $scope.SaveError=false;
    $scope.isNewEmployee=false;

    employeeService.getList().then(function (employees) {
        $scope.employees = employees;
    });

    $scope.save = function () {
        $scope.saveEmployeeActionTxt="עריכת";
        $scope.saveSuceeded=true;
        $scope.isNewEmployee=false;
    }

    $scope.update = function () {
        $scope.isReadOnly = false;
        $scope.saveEmployeeActionTxt="עריכת";
    }

    $scope.cancel = function () {
        $scope.selectedEmployee = null;
        $scope.saveEmployeeActionTxt="עריכת";
        $scope.saveSuceeded=false;
        $scope.isNewEmployee=false;
    }

    $scope.select = function () {
        $scope.selectedEmployee = this.employee;
        $scope.saveEmployeeActionTxt="עריכת";
    }

    $scope.addNewEmployee = function(){
        var index = $scope.employees.push({});
        $scope.selectedEmployee = $scope.employees[index-1];
        $scope.saveEmployeeActionTxt="הוספת";
        $scope.isNewEmployee=true;
    }

    $scope.submitForm = function(isValid) {
        $scope.saveEmployeeActionTxt="עריכת";
        if (isValid) {
            $scope.saveSuceeded=true;
            $scope.isNewEmployee=false;
            $scope.SaveError = false;
        }
        else
        {
            $scope.SaveError=true;
        }
      }

    
}]);