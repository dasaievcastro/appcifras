

angular.module('search').component('search',{
	templateUrl:'/components/search/search.tmp.html',
	controller: ["$http",function SearchController($http){
		var self = this
		self.musicas = [];
		self.filtro="";
		$http.get('/data/musicas.json').success(function(data){
			self.musicas = data;
		})
	}]

})