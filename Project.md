# Projet : OrbitDash – Le Tableau de Bord Dynamique

## 1. Présentation du projet
L'objectif est de concevoir **OrbitDash**, une interface de monitoring ultra-personnalisable. L'application se compose d'une **Zone Centrale d'Exposition** entourée d'une grille de **Widgets Interactifs**.

L'enjeu majeur réside dans la gestion des différents niveaux d'affichage d'un même composant (vue réduite vs vue détaillée) et la mise en place d'un espace d'administration pour piloter dynamiquement le contenu.

---

## 2. Fonctionnalités de base (Noté sur 15)

### A. Architecture et Composants
* **Composants Génériques :** Création d'un ensemble de composants réutilisables (Boutons, Inputs, Cards).
* **Abstraction des Widgets :** Chaque widget doit respecter un contrat d'interface et pouvoir s'afficher sous trois formes :
    1. **In-place (Vue Grille) :** Interaction rapide (ex: voter à un "sondage du jour").
    2. **Focus (Zone Centrale) :** Vue détaillée avec données étendues (ex: liste des sondages de la dernière semaine).
    3. **Fullscreen :** Mode plein écran pour une immersion totale.
* **Clean Architecture :** Organisation rigoureuse des fichiers, séparation stricte entre les composants de présentation (UI), les hooks de logique métier, et les services d'accès aux données (API).

### B. Système de Focus et Navigation
* Implémentation de la zone centrale qui "reçoit" le widget cliqué pour en afficher les détails.
* Logique permettant de définir si un widget est "focusable" (éligible au focus) ou non.
* Gestion du passage au mode plein écran (Fullscreen) depuis la zone centrale.

### C. Espace Administration
* Création d'une vue dédiée à l'administration du dashboard.
* **Management du contenu :** L'administrateur doit pouvoir modifier les données sources des widgets (ex: ajouter une question au sondage, modifier l'URL d'un flux RSS, etc.).
* Les modifications effectuées en admin doivent se répercuter immédiatement sur l'affichage côté utilisateur.

### D. Persistance des Données
* Connexion à un backend (Supabase, Firebase, Appwrite ou JSON-Server).
* Stockage persistant de la configuration des widgets et des contenus administrables.

---

## 3. Fonctionnalités Avancées (Noté sur 5)

Pour compléter la note finale sur 20, choisissez parmi ces modules :

* **Mode "Admin Layout" :**
    Lorsqu'un utilisateur possède les droits "Admin", il peut réorganiser la grille via un système de **Drag & Swap** (déplacer un widget pour l'échanger avec un autre). Cette fonctionnalité doit être verrouillée pour les utilisateurs standards.
* **Theme Engine :**
    Utilisation d'un Context pour gérer un mode Sombre/Clair, mais aussi des variantes de densité (Compact vs Spaced) impactant tous les widgets.
* **Real-time Update :**
    Intégration de WebSockets/Server-Sent Events ou des abonnements (Subscriptions) Supabase/Firebase pour que les widgets se mettent à jour sans rafraîchir la page (ex: cours de crypto, météo, notifications).
* **Widget Factory :**
    Créer un formulaire permettant à l'utilisateur d'ajouter lui-même un nouveau widget à sa grille en choisissant le type (ex: "Horloge", "Note", "Flux RSS") et sa position.
* **Autres :**
  Proposez une fonctionnalité innovante qui enrichit l'expérience utilisateur ou facilite la gestion du dashboard. Demandez validation avant de l'implémenter.

---

## 4. Contraintes Techniques
* **Framework :** React 18+ (Vite.js).
* **Gestion d'état :** Utilisation de `useState` et `useContext` pour la communication entre les composants ou state managers externes comme Zustand.
* **Backend :** Libre (Firebase, Supabase, JSON-Server, etc.).
* **Stylisation :** Solution moderne au choix (Tailwind CSS, Styled Components, CSS Modules, Bibliothèques de composants).

---

## 5. Livrables attendus
1. **Dépôt Git :** Code source clair, organisé et documenté via un README.
2. **Schéma d'architecture :** Un document expliquant la hiérarchie des composants et la circulation des données (Admin → Backend → Widgets).
3. **Démonstration client :** Présentation du cycle complet : modification en admin, interaction "in-place", et passage en mode "focus/détails".

## 6. Composition de l'équipe

L'équipe doit être composée de 2. Chaque membre doit contribuer de manière significative au projet. Un membre qui n'aura pas de contribution significative (commit) se verra attribuer une note de **0 / 20**, tandis que l'autre membre recevra la note totale du projet.

## 7. Rendu

Le rendu final à déposer sur GitHub avec un README détaillé:
 - composition de l'équipe: nom/prénom + pseudo github
 - qui a fait quoi

Un schéma d'architecture doit être inclus dans le dépôt ou présenté lors de la démonstration.

Envoyer le lien du dépôt GitHub à l'adresse suivante : [adresse email] avant le **21/05/2026 20H**.
Sujet: "*[WSF][OrbitDash] - [Vos noms et prénoms]*".