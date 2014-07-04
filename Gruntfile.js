module.exports = function (grunt){
	grunt.initConfig({
		watch: {
			all: {
				options: {
					event:'all'
					,keepRunner: true
				}
				,files: ['src/**/*.js', 'build/tasks', 'specs/**/*.spec.js', 'Gruntfile.js', 'package.json', '!**/node_modules/**']
				,tasks: ['build']
			}
		}
		,karma: {
			allSpecs: {
				options: {
					files: ['specs/**/*.spec.js']
					,browsers: ['Crhome', 'Firefox']
				}
				,background: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadTasks('./build/tasks');
	grunt.registerTask('default', ['watch']);

};