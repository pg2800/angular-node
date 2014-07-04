module.exports = function (grunt){
	grunt.initConfig({
		hostname: 'localhost'
		,autoWatch: false
		,basePath: './'
		,watch: {
			all: {
				files: ['src/**/*.js', 'src/**/*.html', 'build/tasks/**/*.js', 'specs/**/*.spec.js', 'Gruntfile.js', 'package.json', '!**/node_modules/**']
				,tasks: ['build']
				,options: {
					liveReload: true
					,event:'all'
					,keepRunner: true
					,spawn: false
				}
			}
		}
		,karma: {
			unit: {
				options: {
					files: ['specs/**/*.spec.js']
					,browsers: ['Chrome', 'Firefox']
					,singleRun: true
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