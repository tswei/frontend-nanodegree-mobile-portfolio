module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dynamic_mappings: {

				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.js', '!node_modules/**/*.js', '!Gruntfile.js'],
					dest: '',
					ext: '.min.js',
					extDot: 'first'
				},
				],
			}
		},
		jshint: {
			dynamic_mappings: {
				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.js', '!node_modules/**/*.js', '!Gruntfile.js'],
				},
				],
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Default task(s)
	grunt.registerTask('default', ['uglify']);

};