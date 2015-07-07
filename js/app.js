    var app = angular.module('eventList', ['ngRoute']);
    app.controller('EvntController',function(){
        this.news = news;
         });
    app.config(function($routeProvider){
        $routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'html/home.html',
				controller  : 'EvntController'
			})
			.when('/events', {
				templateUrl : 'html/events.html',
				controller  : 'EvntController'
			})
			.when('/login', {
				templateUrl : 'html/login.html',
				controller  : 'EvntController'
			});        
    });
   
    var news = [
        {titl: 'angular title!', cntnt: 'angular content'},
        {titl: ' snd angular title!', cntnt: 'another angular content'}
    ];


/*
- SOLID прочитать
- отрефакторить текущий код чтобы удовлетворял SOLID
- вынести тестовые данные в отельный файл
- сделать структуру проекта
- вынести html в отельные шаблоны для страниц и хедера
- сделать страницу со списком ивентов
- сделать навигацию
- уметь создать иерархию классов. уметь обьявить поля класса через прототипы и через замыкание
*/