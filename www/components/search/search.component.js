angular.module('search').component('search',{
	templateUrl:'./components/search/search.tmp.html',
	controller: ["$http",function SearchController($http,$cordovaFileOpener2){
		var self = this
		self.musicas = [];
		self.filtro="";
		$http.get('./data/musicas.json').success(function(data){
			self.musicas = data;
		})
		$(document.body).on('click','.openMusic',function(){
			//window.open("./musicas/teste.docx","_blank")
			var url = $(this).data("href");
			window.open(
				url,
				'_blank',
				 'location=no')
			
		})
		
	}]

})