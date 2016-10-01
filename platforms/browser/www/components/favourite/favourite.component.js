

angular.module('favourite').component('favourite',{
	templateUrl:'./components/favourite/favourite.tmp.html'

}).component('favouriteList',{
	templateUrl:'./components/favourite/favourite-list.tmp.html',
	controller: function FavouriteListController(){
		var self = this
		self.favoritos = [{
			'nome':'Musica 1',
			'categoria':"Entrada"
		},
		{
			'nome':'Musica 2',
			'categoria':"Entrada"
		},
		{
			'nome':'Musica 3',
			'categoria':"Entrada"
		}];
	}
})