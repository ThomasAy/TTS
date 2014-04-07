Global
=======

* fonction de navigation sur la page et sur l'appli. lecture des balise.

* Système de favoris : 
	Utiliser localStorage pour stocker les favoris dans le "namespace" localStorage.bookmarks.
	
* Système d'historique : 
	Utiliser localStorage pour stocker l'historique dans le "namespace" localstorage.hyitory sous la forme :
		exemple : localStorage.history.google = {
						base: "http://google.fr",
						"timestamp de la dernière visite" : "http://google.fr/search?q=toto"
					}

* Navigation global :
	- raccourcis clavier :
		* élément suivant : tab
		* élément précédent : shift + tab 
		* suivant : alt + fleche droite
		* précédent : alt + fleche gauche
		* rechercher dans a page : ctrl + f
		* filtrer par element : ctrl + shift + f
		* start/stop reconnaissance vocale : ctrl + espace
		* volume + : ctrl + +
		* volume - : ctrl + -
		* zoom + : ctrl + +
		* zoom - : ctrl + -
		* couleur ? : 
		* accès à l'omnibar : ctrl + shift | ctrl + alt | ctrl + entrée
		* accès au favoris : ctrl + shift + d
		* ajouter au favoris :ctrl + d
		* actualiser : f5
	- commandes de l'omnibar (language naturel) : 
		* rechercher sur internet : recherche blablabla sur google
		* acceder à un site web : aller à|sur google (basé sur l'historique)
		* 

* boutton agrandir
* cible pour les boutton
