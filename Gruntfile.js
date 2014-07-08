module.exports = function (grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')
		// ,I'm thinking on having a variable here to set the files of what I need to load to execute
		// like:
		// ,distributesScripts: 'src/...'
		// this could potentialy allow me to, when building the dist folder, leave only one scripts of concatenated files
		// like: angular, bootstrap and stuff
		,watch: {
			all: {
				options: {
					liveReload: true
					,event:'all'
					,spawn: false
				}
				,files: ['src/**/*.js', 'src/**/*.html', 'build/tasks/**/*.js', 'build/config/karma/*.conf.js', 'specs/**/*.spec.js', 'Gruntfile.js', 'package.json', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,karma: {
			unit: {
				configFile: 'build/config/karma/karma.conf.js'
				,background: true
			}
			,travis: {
				configFile: 'build/config/karma/karma.conf.js'
				,singleRun: true
				,browsers: ['PhantomJS']
			}
		}
		,uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <% grunt.template.today("yyyy-mm-dd") %> */'
				,mangle: true
				,preserveComments: false
				,compress: {drop_console: true}
			}
			,breadthFirst: {
				files: {
					'dist/breadthFirst/breadthFirst.min.js': [
						//init files
						'src/breadthFirst/module.js'
						,'src/breadthFirst/routes.js'
						,'src/breadthFirst/algorithm.js'
					//end files
					]
				}
			}
		}
		,htmlmin: {
			options: {
				removeComments: true
				,collapseWhitespace: true
			}
			,partials: {
				files: {
					'dist/breadthFirst/breadthFirst.ptl.html': 'src/breadthFirst/breadthFirst.ptl.html'
				}
			}
			,index: {
				files: {
					'dist/index.html': 'src/index.html'
				}
			}
		}
	});
	//
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadTasks('./build/tasks');

	// We need to create a task for DEVELOPMENT
	// grunt develop
	// that will watch for changes and execute tests

	// We need to create a task to build the distribution folder
	// grunt build
	// that will execute the tests, uglify, minify html, move common files (images, vendor files) 
	// to  build the distribution folder

	// when executed: start karma:unit then watch for changes
	grunt.registerTask('default', ['karma:unit', 'watch']);

};