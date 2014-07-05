module.exports = function (config){
	config.set({
		basePath: '../../../'
		,files: [ 
		//init files
			//required
			'vendor/angular/v1.2.15/angular.min.js'
			,'vendor/angular/v1.2.15/angular-mocks.js'
			//src
			,'src/breadthFirst/module.js'
			,'src/breadthFirst/routes.js'
			,'src/breadthFirst/algorithm.js'
			//specs
			,'specs/breadthFirst/module.spec.js'
			,'specs/breadthFirst/routes.spec.js'
			,'specs/breadthFirst/algorithm.spec.js'
		//end files
		]
		,autoWatch: false
		,frameworks: ['jasmine']
		,browsers: ['Chrome']
		,plugins: [
		//init plugins
			//karma
			'karma-chrome-launcher'
			,'karma-firefox-launcher'
			,'karma-ie-launcher'
			,'karma-phantomjs-launcher'
			,'karma-jasmine'
		//end plugins
		]

	});
};