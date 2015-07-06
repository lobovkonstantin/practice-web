    var app = angular.module('eventList', []);
    app.controller('EvntController',function(){
        this.news = evnts;
    });
    var evnts = [
        {titl: 'angular title!', cntnt: 'angular content'},
        {titl: ' snd angular title!', cntnt: 'another angular content'}
    ];