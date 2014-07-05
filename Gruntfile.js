module.exports = function (grunt){
	grunt.initConfig({
		watch: {
			karma: {
				options: {
					liveReload: true
					,event:'all'
					,keepRunner: true
					,spawn: false
				}
				,files: ['src/**/*.js', 'src/**/*.html', 'build/tasks/**/*.js', 'build/config/karma/*.conf.js', 'specs/**/*.spec.js', 'Gruntfile.js', 'package.json', '!**/node_modules/**']
				,tasks: ['tests']
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
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadTasks('./build/tasks');

	// when executed: start karma:unit then watch for changes
	grunt.registerTask('default', ['karma:unit', 'watch']);

};