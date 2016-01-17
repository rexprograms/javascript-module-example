requirejs.config({
    baseUrl: '/scripts/modules',
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js',
        angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js'
    },
    shim:{
        'angular':{
            exports:'angular'
        },
        'jquery':{
            exports:['jquery','$']
        }
    }
});

console.log('requiring basic modules');
//require(['exalert','exhtml'], function (exa,htm) {
//    console.log('ex modules loaded');
//    window.exa = exa;
//    window.htm = htm;
//});
require(['exalert'], function (exa,htm) {
    console.log('ex modules loaded');
    window.exa = exa;
    window.htm = htm;
});

console.log('requiring angular components');
require(['angularComponents']);