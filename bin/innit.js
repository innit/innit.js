#!/usr/bin/env node

traceur = require('traceur');


// set traceur's options instead of using command line arguments

traceur.options.typeAnnotations = true;
traceur.options.typeAssertionModule = 'assert';
traceur.options.annotations = true;
traceur.options.generators = true;

var System = require('systemjs');


System.config({
    map: {
        'di': 'node_modules/di/src/index',
        'log': 'node_modules/diary/src',
        'ws': 'node_modules/ws/index'
    }
});

System.import('bin/main').then(function(app){


    return app.main();



},function(err){
    console.log(err)
}).catch(function(err){
  console.log(err);
})
//console.log(traceur);
////SystemJS module loader

//var System = require('systemjs');


//
//// Node.js has to be run with --harmony_collections to support ES6 Map.
//// If not defined, include a polyfill.
//if (typeof Map === 'undefined') {
//    console.info('Polyfilling: Map');
//    require('es6-shim');
//}
//
//
//var innit = innitLoader.import('innit').catch(function(err){
//    console.log(err);
//});
//
//
//innit.then(function(modules){
//
//   // return modules();
//});
