var employeeService = angularApp.factory('employeeService', ['$http',
    function ($http) {

        var employees = null;

        this.getList = function () {
            return $http.get("data/employees.json").then(function (response) {
                this.employees = response.data;
                return this.employees;
            }, function (xhr) {});
        }

        return this;
    }
]);