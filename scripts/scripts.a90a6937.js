"use strict";angular.module("yoangularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/store",{templateUrl:"views/store.html",controller:"StoreCtrl",controllerAs:"store"}).when("/category",{templateUrl:"views/category.html",controller:"CategoryCtrl",controllerAs:"category"}).when("/product",{templateUrl:"views/product.html",controller:"ProductCtrl",controllerAs:"product"}).when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl",controllerAs:"cart"}).otherwise({redirectTo:"/"})}]),angular.module("yoangularApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("StoreCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("CategoryCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("ProductCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("CartCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()}}]),angular.module("yoangularApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.</p> <div ng-repeat="thing in about.awesomeThings"> <p>I <span class="glyphicon glyphicon-heart"></span> {{thing}}</p> </div>'),a.put("views/cart.html","<p>This is the cart view.</p>"),a.put("views/category.html","<p>This is the category view.</p>"),a.put("views/header.html",'<!-- Add your site or application content here --> <div class="header" ng-controller="HeaderCtrl"> <div class="navbar transparent navbar-inverse navbar-fixed-top" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <div class="navbar-brand" href="#/"> <img src="images/d_logo_pink.2f177a24.png" alt="Dsek logo"> </div> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li ng-class="{ active: isActive(\'/\')}"><a href="#/">Home</a></li> <li ng-class="{ active: isActive(\'/store\')}"><a href="#/store">Store</a></li> <li ng-class="{ active: isActive(\'/about\')}"><a href="#/about">About</a></li> </ul> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/product.html","<p>This is the product view.</p>"),a.put("views/store.html","<p>This is the store view.</p>")}]);