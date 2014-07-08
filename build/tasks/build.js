module.exports = function(grunt){
	grunt.registerTask('build', ['tests', 'uglify', 'htmlmin']);
};