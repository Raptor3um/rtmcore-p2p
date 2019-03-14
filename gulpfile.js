'use strict';

var gulp = require('gulp');
var rtmcoreTasks = require('rtmcore-build');

rtmcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
