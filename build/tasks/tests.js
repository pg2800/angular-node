module.exports = function (grunt){
	// to run karma:unit:run 
	// we need to execute karma:unit task then
	// we need to open a browser in "localhost:9876"
	grunt.registerTask('tests', ['karma:unit:run']);
}; 