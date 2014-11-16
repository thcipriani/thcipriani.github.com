module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        watch: {
            scss: {
                files: ['sass/**/*.scss'],
                tasks: 'scss'
            },
        },

        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },

        // https://github.com/nDmitry/grunt-autoprefixer
        autoprefixer: {
            build: {
                options: {
                    browsers: ['last 2 versions', '> 1%']
                },
                files: [
                    {
                        src : ['**/*.css', '!**/*autoprefixed.css'],
                        cwd : 'css',
                        dest : 'css',
                        ext : '.autoprefixed.css',
                        expand : true
                    }
                ]
            }
        }
    });

    grunt.registerTask('scss', ['compass:dist', 'autoprefixer']);
    grunt.registerTask('default', ['scss', 'autoprefixer']);
    grunt.registerTask('dev', ['watch']);

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
