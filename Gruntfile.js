module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			server: {
				options: {
					port: 8040,
					host: 'http://localhost',
					bases: 'dist'
				}
			}
		},

		copy: {
			dev: {
				files: [
					{
						expand: true,
						src: 'dev/img/*',
						dest: 'dist/img/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/js/*',
						dest: 'dist/js/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/fonts/*',
						dest: 'dist/fonts/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/site/*',
						dest: 'dist/site/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/img/works/*',
						dest: 'dist/img/works/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/img/studio/*',
						dest: 'dist/img/studio/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/data/*',
						dest: 'dist/data/',
						flatten: true
					},
					{
						expand: true,
						flatten: true,
						src: 'dev/*.php',
						dest: 'dist/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'dev/*.html',
						dest: 'dist/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'node_modules/jquery/dist/jquery.js',
						dest: 'dist/js',
						filter: 'isFile'
					}
				]
			},
			admin: {
				files: [
					{
						expand: true,
						src: 'dev/admin/images/*',
						dest: 'dist/admin/images/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/admin/data/*',
						dest: 'dist/admin/data/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/admin/js/*',
						dest: 'dist/admin/js/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/admin/templates/*',
						dest: 'dist/admin/templates/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/admin/resume/*',
						dest: 'dist/admin/resume/',
						flatten: true
					},
					{
						expand: true,
						flatten: true,
						src: 'dev/admin/*.php',
						dest: 'dist/admin/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'dev/admin/*.html',
						dest: 'dist/admin/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten: true,
						src: 'dev/admin/functions/*.php',
						dest: 'dist/admin/functions/',
						filter: 'isFile'
					}
				]
			}
		},

		less: {
			dev: {
				options: {
					paths: ['dev/css']
				},
				files: {
					'dist/css/styles.css': 'dev/less/styles.less'
				}
			},
			admin: {
				options: {
					paths: ['dev/admin/css']
				},
				files: {
					'dist/admin/css/styles.css': 'dev/admin/less/styles.less'
				}
			}
		},

		watch: {
			php: {
				files: ['dev/*.php'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			html: {
				files: ['dev/*.html'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			site: {
				files: ['dev/site/*.php'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			js: {
				files: ['dev/js/*'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			less: {
				files: ['dev/less/*'],
				tasks: ['less:dev'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			data: {
				files: ['dev/data/*'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			adminless: {
				files: ['dev/admin/less/*'],
				tasks: ['less:admin'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			adminjs: {
				files: ['dev/admin/js/*'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			admintemplates: {
				files: ['dev/admin/templates/*'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			adminphp: {
				files: ['dev/admin/functions/*.php'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			},
			adminhtml: {
				files: ['dev/admin/*.html'],
				tasks: ['copy'],
				options: {
					spawn: false,
					livereload: false
				}
			}
		},
		handlebars: {
			options: {
				namespace: false,
				wrapped: false
			},
			compile: {
				files: {
					'dist/admin/js/templates.js': ['dev/admin/templates/*.js']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('default', [
		'build',
		'server'
	]);

	grunt.registerTask('build', [
		'copy',
		'less'
	]);

	grunt.registerTask('dev', [
		'express:dev',
		'less',
		'copy',
		'watch'
	]);

	grunt.registerTask('server', [
		'express',
		'watch',
		'less',
		'copy',
		'express-keepalive'
	]);

};
