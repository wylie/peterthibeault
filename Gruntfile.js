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
						src: 'dev/temp/*',
						dest: 'dist/temp/',
						flatten: true
					},
					{
						expand: true,
						src: 'dev/admin/*',
						dest: 'dist/admin/',
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
					}
				]
			}
		},

		less: {
			development: {
				options: {
					paths: ['dev/css']
				},
				files: {
					'dist/css/master.css': 'dev/css/master.less'
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
				files: ['dev/css/*'],
				tasks: ['less'],
				options: {
					spawn: false,
					livereload: false
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

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
