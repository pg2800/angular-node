module.exports = function (grunt){
	// new task for travis
	grunt.registerTask('test', ['karma:travis']);
};