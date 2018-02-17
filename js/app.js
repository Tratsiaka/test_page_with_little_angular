var app = angular.module("testTask", []);

app.controller('productsCtrl', ['$scope', function ($scope) {
	
	$scope.data = {
		"items": [
		{
			"type" : "child",
			"img" : "item1",
			"price" : "3.20",
			"name" : "T-SHIRT",
			"options": ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "child",
			"img" : "item2",
			"price" : "13.30",
			"name" : "Pants FORCLAZ",
			"options": ["Size", "M", "XL"]
		}
		,{
			"type" : "men",
			"img" : "item1",
			"price" : "5.00",
			"name" : "T-SHIRT",
			"options": ["Size", "XL"]
		}
		,{
			"type" : "women",
			"img" : "item2",
			"price" : "3.21",
			"name" : "T-SHIRT",
			"options":  ["Size", "S", "M", "L", "XL"]
		}
		,{
			"type" : "women",
			"img" : "item3",
			"price" : "31",
			"name" : "backpack",
			"options": ["Color", "red", "blue", "black"]
		}
		, {
			"type" : "other",
			"img" : "item3",
			"price" : "0",
			"name" : "car",
			"options": ["Color", "red", "blue", "black"]
		}
  	]
	};

	$scope.showCategory = {
			"men" : true,
			"women" : true,
			"child": false
	};
	

	// В попытке понять что не так и как пользоваться вашим фильтром, был написан этот фильтр ;)

// $scope.categoryFilter = function(item) {
//   return Object.keys($scope.showCategory).filter(function(key) {
//     return $scope.showCategory[key];
//   }).includes(item.type);      
// };

//Показываем все товары
$scope.showAll = function(){
		for (var k in $scope.showCategory){
			$scope.showCategory[k] = true;
		}
};

// В итоге вашу функцию пришлось немного переделать, ибо она не выполняла возложенные на нее обязательства и теперь все происходит в соответствии с ТЗ =)
 $scope.changeFilter  = function (obj) {
	return $scope.showCategory[obj.type];
};

	
}]);


app.controller('menuCtrl', ['$scope', function ($scope) {
	
	$scope.data = {
		"footerMenu" : [
			{
				"name": "Credits",
				"link": "https://softswiss.com/",
				"title": "credits"
			},
			{
				"name": "Privacy",
				"link": "https://softswiss.com/",
				"title": "privacy"
			},
			{
				"name": "About",
				"link": "https://www.softswiss.com/about-us/",
				"title": "about us"
			},
			{
				"name": "Contact",
				"link": "https://www.softswiss.com/contact-us/",
				"title": "contact us"
			}
		]};

}]);