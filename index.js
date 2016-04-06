'use strict';

var path = require( 'path' );
var packageJson = require( __dirname + '/package.json' );

module.exports = {
    'init': [ {
        'action': 'copy',
        'config': {
            'source': __dirname + '/templates',
            'destination': './'
        }
    }, {
        'action': 'parameters',
        'config': {
            'files': [
                './_package.json',
                './readme.md'
            ],
            keywords: {
                'name': path.resolve( '.' ).split( path.sep ).pop().replace( 'rig-', '' ),
                'version': packageJson.version
            }
        }
    }, {
        'action': 'rename',
        'config': {
            'files': [ {
                'from': './_package.json',
                'to': './package.json'
            }, {
                'from': './_.gitignore',
                'to': './.gitignore'
            }, {
                'from': './_.jscsrc',
                'to': './.jscsrs'
            }, {
                'from': './_.jshintrc',
                'to': './.jshintrc'
            } ]
        }
    }, {
        'action': 'run',
        'config': {
            'command': 'npm install'
        }
    } ]
};
