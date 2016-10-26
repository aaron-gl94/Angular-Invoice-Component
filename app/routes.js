(function () {
	angular
		.module('app')
		.config(routes);

	routes.$inject = ['$routeProvider'];

	function routes($routeProvider){
		$routeProvider
		.when('/',{
			template: `<invoice-component></invoice-component>`
		})
		.otherwise({
                redirectTo: '/'
            });
	}

})();