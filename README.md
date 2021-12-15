## Projet Ovni news 
#### Lien du projet : http://ovni-news-reactapp.herokuapp.com/  ** Site accesible uniquement en HTTP ** 

--------------------------------------------------------
#### API Symfony 5.3 / Librairie Javascript React / Base de données relationnelle MariaDB

### Résumé & Fonctionnalités

Projet de réseaux social autour de l'actualité avec un partage d'articles provenant de divers journaux couvrant plusieurs thèmes avec un système de commentaire pour permettre l'interaction entre utilisateurs enregistré sur la plateforme.

L'utilisateur arrivant sur la page d'accueil aura la possibilité de se connecter et de choisir dans quelle catégorie d'information il veut naviguer.
Les appels à l'API se font à chaque fois qu'un utilisateur clique sur la catégorie de son choix', la catégorie est placée dans l'url d'appel à l'API.
Une fois les articles récupérés de l'API, l'application traitera les données en filtrant les données comportant obligatoire titre, image et url de la source extérieur, puis vérifiera si les données sont déjà enregistrées ou non dans la base de données et les ajoutes dans celle-ci dans le cas où elle ne serait pas enregistré.

L'utilisateur à accès à un filtre par auteur et par nombre d'articles retournés dans la liste.

Une fois l'article choisi, une page de détail de celui-ci s'affichera et un espace de commentaire permettant aux utilisateurs de réagir à l'info.

### Deploiement en local 

- Cloner les fichiers sur votre ordinateur avec GIT `https://github.com/kevin-chlt/Ovni-News_React.git`.
- Installer les dépendances de l'application avec `npm install`.
- Le lien de l'API défini dans le fichier `services/axiosInterceptor.js` et pointe sur la version en ligne de l'API.


Vous pouvez maintenant lancer votre serveur local et commencer à naviguer sur le projet.
