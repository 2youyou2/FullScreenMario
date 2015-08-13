module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "meta": {
            "paths": {
                "source": "Source",
                "version": "Version",
                "dist": "Dist"
            }
        },
        "tslint": {
            "options": {
                "configuration": grunt.file.readJSON("tslint.json")
            },
            "files": {
                "src": ["<%= meta.paths.source %>/<%= pkg.name %>.ts"]
            }
        },
        "typescript": {
            "base": {
                "src": "<%= meta.paths.source %>/<%= pkg.name %>.ts",
                "dest": "<%= meta.paths.source %>/<%= pkg.name %>.js"
            }
        },
        "clean": ["<%= meta.paths.version %>"],
        "copy": {
            "dist": {
                "files": [{
                    "src": "<%= meta.paths.source %>/index.html",
                    "dest": "<%= meta.paths.dist %>/index.html"
                },{
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.js",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>.js"
                }, {
                    "src": "<%= meta.paths.source %>/<%= pkg.name %>.ts",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>.ts"
                }, {
                    "src": "<%= meta.paths.source %>/References/*.ts",
                    "dest": "<%= meta.paths.version %>/",
                    "expand": true,
                    "flatten": true
                }, {
                    "src": "README.md",
                    "dest": "<%= meta.paths.version %>/"
                }, {
                    "src": "README.md",
                    "dest": "<%= meta.paths.source %>/"
                }, {
                    "src": "LICENSE.txt",
                    "dest": "<%= meta.paths.version %>/"
                }, {
                    "src": "LICENSE.txt",
                    "dest": "<%= meta.paths.source %>/"
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "Fonts/**",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "Sounds/**",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "Theme/**",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "settings/**",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/",
                    "expand": true
                }, {
                    "cwd": "<%= meta.paths.source %>/",
                    "src": "Wrappers/**",
                    "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/",
                    "expand": true
                }]
            }
        },
        "uglify": {
            "options": {
                "compress": true,
                "sourceMap": false
            },
            "dist": {
                "files": {
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>.min.js": ["<%= meta.paths.source %>/<%= pkg.name %>.js"],
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/Wrappers/angularWrapper.min.js": ["<%= meta.paths.source %>/Wrappers/angularWrapper.js"]
                }
            },
            "zip": {
                "files": {
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.min.js": [
                        "<%= meta.paths.source %>/<%= pkg.name %>.js",
                        "<%= meta.paths.source %>/settings/*.js"
                    ],
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.min.js": ["<%= meta.paths.source %>/index.js"],
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/Wrappers/angularWrapper.min.js": ["<%= meta.paths.source %>/Wrappers/angularWrapper.js"]
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/<%= pkg.name %>-<%= pkg.version %>.min.js",
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.min.js",
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/Wrappers/angularWrapper.min.js"
                ],
                dest: "<%= meta.paths.dist %>/<%= pkg.name %>.min.js"
            }
        },
        "cssmin": {
            "options": {
                "sourceMap": true
            },
            "zip": {
                "files": {
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.min.css": ["<%= meta.paths.source %>/index.css"]
                }
            }
        },
        "preprocess": {
            "dist": {
                "src": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>.ts",
                "dest": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>.ts"
            }
        },
        "processhtml": {
            "zip": {
                "options": {
                    "process": true,
                    "data": {
                        "version": "<%= pkg.version %>"
                    }
                },
                "files": {
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.html": "<%= meta.paths.source %>/index.html"
                }
            }
        },
        "htmlmin": {
            "dist": {
                "options": {
                    "removeComments": true,
                    "collapseWhitespace": true
                },
                "files": {
                    "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.html": "<%= meta.paths.version %>/<%= pkg.name %>-<%= pkg.version %>/index.html"
                }
            }
        },
        "zip": {
            "zip": {
                "cwd": "<%= meta.paths.version %>/FullScreenMario-<%= pkg.version %>/",
                "src": "<%= meta.paths.version %>/FullScreenMario-<%= pkg.version %>/**",
                "dest": "<%= meta.paths.version %>/FullScreenMario-<%= pkg.version %>.zip"
            }
        },
        "mocha_phantomjs": {
            "all": ["Tests/*.html"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-mocha-phantomjs");
    grunt.loadNpmTasks("grunt-preprocess");
    grunt.loadNpmTasks("grunt-processhtml");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-typescript");
    grunt.loadNpmTasks("grunt-zip");
    grunt.registerTask("default", [
        "tslint", "typescript", "clean", "copy", "uglify", "concat", "cssmin", "preprocess", "processhtml", "htmlmin", "zip"
    ]);
};