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
			window.open("./musicas/marcadavitoria.pdf","_blank")
			// window.open(
			// 	'http://docs.google.com/gview?embedded=true&url=http://gama-ca.com.br/guia-in/gama-guia.pdf',
			// 	'_blank',
			// 	 'location=yes')
			cordova.plugins.fileOpener2.open(
			    './musicas/marcadavitoria.pdf', // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
			    'application/pdf', 
			    { 
			        error : function(e) { 
			            console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
			            alert(e.message)
			        },
			        success : function () {
			            console.log('file opened successfully');          
			            alert('kos')

			        }
			    })
		})
		
	}]

})