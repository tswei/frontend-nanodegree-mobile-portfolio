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
				},],
			}
		},
		jshint: {
			dynamic_mappings: {
				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.js', '!node_modules/**/*.js', '!Gruntfile.js'],
				},],
			}
		},
		cssmin: {
			dynamic_mappings: {
				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.css', '!node_modules/**/*.css'],
					dest: '',
					ext: '.min.css',
					extDot: 'first'
				},],
			}
		},
		htmlmin: {
			dynamic_mappings: {
				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.html', '!node_modules/**/*.html'],
					dest: '',
					ext: '.min.html',
					extDot: 'first'
				},],
			}
		},
		imagemin: {
			dynamic_mappings: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{ removeViewBox: false}],
				},
				files: [
				{
					expand: true,
					cwd: '',
					src: ['**/*.{png,jpg,gif}', '!node_modules/**/*.{png,jpg,gif}'],
					dest: '',
				},],
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	// Default task(s)
	grunt.registerTask('default', ['uglify']);

};