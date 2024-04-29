# TPs

## TP1

- Un produit est qualifier par un nom, un prix et une description et un id
- Créer un composant product list
- Ajouter un formulaire pour ajouter un produit
- Ajouter un bouton pour supprimer un produit
- Utiliser le module json-server pour simuler une api

Commande: `json-server --watch db.json`

## TP2

- Créer generateur de service gateway à partir d'un service backend et d'un service frontend
- Modifier le système de synchronisation qui est inclus dans le service gateway pour qu'il soit indépendant et puisse être utilisé dans d'autres services gateway
- Créer la possibilité de gérer un panier d'achat utilisant l'architecture MVVC avec l'utilisation du service gateway
  - Ajouter un produit : Modifier la liste des produits pour ajouter un bouton d'ajout au panier
  - Supprimer un produit : Directement dans l'affichage du panier
  - Modifier la quantité d'un produit : Ajouter un bouton + et - pour modifier la quantité à l'affichage du panier
  - Vider le panier : Ajouter un bouton pour vider le panier à l'affichage du panier
  - Calculer le montant total du panier : Ajouter un affichage du montant total du panier

```text
|------------------------------------|
|             Panier                 |
|                                    |
|  Item 1    12€       - 2 +  delete |
|  Item 2    15€         1 +  delete |
|                                    |
|                         Total: 27€ |
|                                    |
| Vider                      Valider |
| ---------------------------------- |
```