## Projet Ovni news 
#### Lien du projet: http://ovni-news-reactapp.herokuapp.com/  ** Site accesible uniquement en HTTP ** 

--------------------------------------------------------
#### API Symfony 5.3 / Librairie Javascript React / Base de données relationnelle MariaDB

### Résumé & Fonctionnalités

Projet de réseaux social autour de l'actualité avec un partage d'articles provenant de divers journaux couvrant plusieurs thèmes avec un systeme de commentaire pour permettre l'interaction entre utilisateurs enregistré sur la plateforme.

L'utilisateur arrivant sur la page d'accueil aura la possibilité de se connecter et de choisir dans quel catégorie d'information il veux naviguer.
Les appels à l'API se font à chaque fois qu'un utilisateur clique sur la categorie de son choix', la categorie est placé dans l'url d'appel à l'API.
Une fois les articles récupéré de l'API, l'application traitera les données en filtrant les données comportant obligatoire titre, image et url de la source extérieur, puis verifiera si les données sont déjà enregistré ou non dans la base de données et les ajoutes dans celle-ci dans le cas où elle ne serait pas enregistré.

L'utilisateur à accès à un filtre par auteur et par nombre d'articles retournés dans la liste.

Une fois l'article choisi, une page de détai de celui-ci s'affichera, et un espace de commentaire permettant aux utilisateur de réagir à l'info.

Le projet est responsive est adapté à tous les supports avec un dropdown fait maison en JS/CSS pour le menu des catégories.


### Deploiement en local 

- Cloner les fichier sur votre ordinateur avec git `https://github.com/kevin-chlt/Ovni-News_React.git`.
- Installer les dépendances de l'application avec `npm install`.   


Le lien de l'API défini dans le fichier `services/axiosInterceptor.js` et pointe sur la version en ligne de l'API.
Vous pouvez maintenant lancer votre serveur local et commencer à naviguer sur le projet.
