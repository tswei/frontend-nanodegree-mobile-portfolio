module.exports = function(grunt) {

	// load npm tasks listed in package.json
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				files: [ {
					expand: true,
					cwd: 'assets',
					src: '**/*.js',
					dest: 'build',
					ext: '.js',
					extDot: 'first'
				} ]
			}
		},
		jshint: {
			build: {
				files: [ {
					expand: true,
					cwd: 'assets',
					src: '**/*.js',
				} ]
			}
		},
		cssmin: {
			build: {
				files: [ {
					expand: true,
					cwd: 'assets',
					src: '**/*.css',
					dest: 'build',
					ext: '.css',
					extDot: 'first'
				} ]
			}
		},
		csslint: {
			build: {
				files: [ {
					expand: true,
					cwd: 'assets',
					src: '**/*.css'
				}]
			}
		},
		htmlhint: {
			build: {
				options: {
					'tag-pair' : true,
					'tagname-lowercase' : true,
					'attr-lowercase' : true,
					'attr-value-double-quotes' : true,
					'doctype-first' : true,
					'spec-char-escape' : true,
					'id-unique' : true,
					'head-script-disabled' : true,
					'img-alt-require' : true
				},
				files: {
					expand: true,
					cwd: '',
					src: ['assets/**/*.html', 'index.html'],
				}
			}
		},
		htmlmin: {
			build: {
				files: [ {
					expand: true,
					cwd: '',
					src: ['assets/**/*.html', 'index.html'],
					dest: 'build',
					ext: '.min.html',
					extDot: 'first'
				},],
			}
		},
		imagemin: {
			build: {
				options: {
					optimizationLevel: 3,
					svgoPlugins: [{ removeViewBox: false}],
				},
				files: [ {
					expand: true,
					cwd: 'assets',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'build',
				} ]
			}
		},
		watch: {
			html: {
				files: ['index.html', 'assets/**/*.html'],
				tasks: ['buildhtml']
			},
			js: {
				files: ['assets/**/*.js'],
				tasks: ['buildjs']
			},
			css: {
				files: ['assets/**/*.css'],
				tasks: ['buildcss']
			},
			img: {
				files: ['assets/**/*.{png,jpg,gif}'],
				tasks: ['buildimg']
			}
		}
	});

	// Default task(s)
	grunt.registerTask('default', ['buildhtml', 'buildcss', 'buildjs', 'buildimg']);
	grunt.registerTask('buildhtml', ['htmlhint', 'htmlmin']);
	grunt.registerTask('buildcss', ['csslint', 'cssmin']);
	grunt.registerTask('buildjs', ['jshint', 'uglify']);
	grunt.registerTask('buildimg', ['imagemin']);

};