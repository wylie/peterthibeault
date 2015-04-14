module.exports = function(grunt) {

	// project config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		php: {
			serve: {
				options: {
					port: 7020,
					hostname: 'localhost',
					base: 'dist/',
					keepalive: true,
					open: true
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
						src: 'dev/css/*',
						dest: 'dist/css/',
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
		watch: {
			html: {
				files: ['dev/*.php'],
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
			}
		}

	});

	grunt.loadNpmTasks('grunt-php');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('phpwatch', [
		'php',
		'watch'
	]);

	grunt.registerTask('server', [
		'phpwatch'
	]);

	grunt.registerTask('dev', [
		'sass:live',
		'watch'
	]);

	grunt.registerTask('build', [
		'copy'
	]);

	grunt.registerTask('live', [
		'sass:live',
		'copy'
	]);
	
};