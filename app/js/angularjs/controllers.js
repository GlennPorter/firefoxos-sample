// Controllers.
var controllers = angular.module('controllers', []);

var somethings = [
	{
		id: 1,
		title: 'Etsy biodiesel slow-carb chia twee',
		description: 'Chambray food truck gastropub chillwave, PBR&B VHS Shoreditch umami cronut forage health goth. Schlitz Shoreditch YOLO occupy salvia. Hoodie taxidermy cliche locavore lo-fi. Typewriter small batch aesthetic, quinoa mumblecore locavore Williamsburg Neutra. Pop-up kale chips Portland, irony meh health goth cliche PBR VHS plaid quinoa viral. Umami leggings viral, pour-over shabby chic cornhole Tumblr Neutra taxidermy lumbersexual church-key. PBR farm-to-table tousled pickled Neutra crucifix asymmetrical, fixie direct trade Bushwick health goth.'
	}, 
	{
		id: 2,
		title: 'Croissant tiramisu macaroon sweet roll gummies',
		description: 'Chocolate caramels chocolate cookie bonbon muffin sweet soufflé jelly-o. Candy canes chocolate cake gummies gummies apple pie. Dessert chocolate bar cupcake toffee. Fruitcake gummies jujubes cake jelly marzipan. Dessert cake tiramisu macaroon carrot cake fruitcake oat cake pastry cheesecake. Liquorice sesame snaps tart sugar plum powder. Toffee cookie danish wafer biscuit. Dragée wafer dessert gummies brownie. Marshmallow lollipop cupcake chupa chups jelly oat cake sugar plum gingerbread carrot cake. Chupa chups cake wafer chocolate croissant. Caramels candy sugar plum sesame snaps gingerbread macaroon dessert wafer sugar plum. Sugar plum danish gummi bears jelly beans chocolate cake toffee cupcake marshmallow tiramisu.'
	},
	{
		id: 3,
		title: 'Peamouth slimehead cutthroat eel',
		description: 'Cutlassfish snake mackerel mud catfish, "armorhead haddock Billfish sixgill shark." Crocodile icefish coffinfish fire bar danio leaffish zebra tilapia fierasfer pelican eel frogmouth catfish, Black angelfish? Warty angler pike conger mud minnow cavefish aruana goblin shark, algae eater. Sandroller whiting striped bass Pacific saury red snapper gulf menhaden zebra bullhead shark roughy.'
	},
	{
		id: 4,
		title: "I'll kill the motherfucker, know what I'm sayin'?",
		description: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."
	}
];

controllers.controller('AboutController', function ($scope, $http) {
	$scope.welcomeMessage = "Bout ye!";
});

controllers.controller('SomethingController', function($scope, $http) {
	$scope.somethings = somethings;
});

controllers.controller('SomethingDetailController', function($scope, $routeParams, $http) {
	$scope.something = getSomething($routeParams.id);

	function getSomething(id) {
		var something = null;
		for (var i = 0; i < somethings.length; i++) {
			if (somethings[i].id === parseInt(id)) {
				something = somethings[i];
			}
		}
		return something;
	}
});

controllers.controller('SomethingElseController', function($scope, $routeParams, $http) {
	$scope.somethingElse = 'Something else so it is.';
});