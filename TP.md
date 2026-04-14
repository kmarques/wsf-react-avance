# TPs

## TP1 Props + Composant générique

Ce TP consiste à créer un composant qui permet de lister des données. Ce composant doit par défaut créer une liste HTML. Ce composant doit être réutilisable et configurable. Il doit permettre de personnaliser l'affichage des éléments de la liste, par exemple utilisation d'ul/li par défaut, mais possibilité d'utiliser d'autres balises HTML ou même des composants personnalisés.

## TP2 State

Ce TP consiste à créer une todo list manageable (CRUD).
Ensuite permettre au composant générique créé précédemment de gérer une liste (CRUD) en lui passant des fonctions de modifications (ajout/suppression/modification) et un composant formulaire.

## TP3 useEffect

Ce TP consiste à créer un gestionnaire de magasins. Chaque magasin a une liste de produits (id, nom, prix, description, quantité). L'utilisateur peut passer une commande (nom, prénom, orderItems, status) pour plusieurs produits du magasin (id, produitId, quantité). Une fois, l'ajout au panier terminé, l'utilisateur peut soumettre sa commande.

Un utilisateur (email, password) peut se connecter pour gérer le magasin
- ajouter des produits
- supprimer des produits
- modifier les produits (fiche ou stock)
- voir les commandes en cours et les valider, ce qui met à jour le stock des produits
- ajouter des utilisateurs.

*Utiliser json-server pour simuler une API REST.*   
   
   ***Attention !!! à ne pas écrire les requêtes fetch en dur dans les composants, mais à créer des fonctions de service pour cela. Par exemple, une fonction getProducts() qui fait un fetch vers /products et retourne les produits.***