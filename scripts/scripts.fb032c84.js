"use strict";angular.module("yoangularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/store",{templateUrl:"views/store.html",controller:"StoreCtrl",controllerAs:"store"}).when("/category",{templateUrl:"views/category.html",controller:"CategoryCtrl",controllerAs:"category"}).when("/product",{templateUrl:"views/product.html",controller:"ProductCtrl",controllerAs:"product"}).when("/cart",{templateUrl:"views/cart.html",controller:"CartCtrl",controllerAs:"cart"}).when("/experiment",{templateUrl:"views/experiment.html",controller:"ExperimentCtrl",controllerAs:"experiment"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("yoangularApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("StoreCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("CategoryCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("ProductCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("CartCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return"/"+a===b.path()},a.dropdowns=[{title:"Aktuellt",items:[{title:"Nyheter",href:"nyheter"},{title:"Kalender",href:"kalender"},{title:"Eventanmälan",href:"eventanmälan"},{title:"Experiment",href:"experiment"}]},{title:"Community",items:[{title:"Anslut",href:"anslut"}]},{title:"För funktionärer",items:[{title:"STAB16",href:"stab16"}]},{title:"Sektionen",items:[{title:"Om sektionen",href:"sektionen"},"-",{title:"Swagtest",href:"swagtest"},{title:"Store",href:"store"}]},{title:"För företag",href:"foretag"},{title:"About",href:"about"}]}]),angular.module("yoangularApp").controller("ExperimentCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("yoangularApp").directive("parallax",["$window",function(a){return{restrict:"A",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@",parallaxHorizontalOffset:"@"},link:function(b,c,d){var e=function(){b.parallaxHorizontalOffset||(b.parallaxHorizontalOffset="0");var d=a.pageYOffset*(b.parallaxRatio?b.parallaxRatio:1.1);if(d<=a.innerHeight){var e=d<b.parallaxVerticalOffset?b.parallaxVerticalOffset:d,f=-1===b.parallaxHorizontalOffset.indexOf("%")?b.parallaxHorizontalOffset+"px":b.parallaxHorizontalOffset;c.css("transform","translate("+f+", "+e+"px)")}};e(),angular.element(a).bind("scroll",e),angular.element(a).bind("touchmove",e)}}}]).directive("parallaxBackground",["$window",function(a){return{restrict:"A",transclude:!0,template:"<div ng-transclude></div>",scope:{parallaxRatio:"@",parallaxVerticalOffset:"@"},link:function(b,c,d){var e=function(){var d=(c.prop("offsetTop")-a.pageYOffset)*(b.parallaxRatio?b.parallaxRatio:1.1)-(b.parallaxVerticalOffset||0);c.css("background-position","50% "+d+"px")};angular.element(a).bind("load",function(a){e(),b.$apply()}),angular.element(a).bind("scroll",e),angular.element(a).bind("touchmove",e)}}}]),angular.module("yoangularApp").run(["$templateCache",function(a){a.put("views/about.html",'<p>This is the about view.</p> <div ng-repeat="thing in about.awesomeThings"> <p>I <span class="glyphicon glyphicon-heart"></span> {{thing}}</p> </div>'),a.put("views/cart.html","<p>This is the cart view.</p>"),a.put("views/category.html","<p>This is the category view.</p>"),a.put("views/experiment.html",'<div style="background-image: url(images/bg_0.16b51c44.jpg)" parallax-background class="photo nature" parallax-ratio="0.5"><span style="font-size:1em">Nature</span></div> <br><br><br><br> <img src="images/bg_0.16b51c44.jpg" parallax parallax-ratio="0.8"><span style="font-size:4em">Food</span> <br><br><br><br><br><br><br><br><br> <div style="background-image: url(images/bg_0.16b51c44.jpg)" parallax-background class="photo animals" parallax-ratio="0.7">Animals</div>'),a.put("views/header.html",'<!-- Add your site or application content here --> <div class="header" ng-controller="HeaderCtrl"> <div class="navbar transparent navbar-inverse navbar-fixed-top" role="navigation"> <div class="container"> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#/"> <img src="images/d_logo_pink.2f177a24.png" alt="Dsek logo"> </a> </div> <div class="collapse navbar-collapse" id="js-navbar-collapse"> <ul class="nav navbar-nav"> <li class="dropdown" ng-repeat="dropdown in dropdowns" ng-class="{ active: isActive(dropdown.href)}"> <a ng-if="!dropdown.items.length" href="#/{{dropdown.href}}">{{dropdown.title}}</a> <a ng-if="dropdown.items.length" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{dropdown.title}} <span class="caret"></span></a> <ul ng-if="dropdown.items.length" class="dropdown-menu"> <li ng-repeat="item in dropdown.items" ng-class="{ active: isActive(item.href)}" class="{{item == \'-\' ? \'divider\' : \'\'}}"> <a href="#/{{item.href}}">{{item.title}}</a> </li> </ul> </li> </ul> </div> </div> </div> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Staben 16</h1> <p class="lead"> <img src="images/d_logo_pink.2f177a24.png" width="62" alt="I\'m Yeoman"><br><br> Hemsidan är under konstruktion. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Uppfattat!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/product.html","<p>This is the product view.</p>"),a.put("views/store.html","<p>This is the store view.</p>")}]);