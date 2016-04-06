/**
 * Description of output task
 *
 * uses the following parameters:
 *     config.message {String}
 */

'use strict';

var gulp = require( 'gulp' );

module.exports = function outputTaskFunc( name, config ) {
    gulp.task( name, config.dependency, function() {
        console.log( config.message );
    } );
};
