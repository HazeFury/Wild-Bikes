
# Wild Bikes

Wild Bikes est une application pour un concessionnaire de moto qui souhaite exposer ses motos afin d'attirer de nouveaux clients via son site. L'application dispose d'une partie back-office pour gérer son stock de moto.

## Installation

Pour commencer, créer un nouveau dossier et rendez-vous dedans avec votre terminal favori, puis tapez les commandes suivante :



```
 git clone https://github.com/HazeFury/Wild-Bikes.git
```

```
 cd Wild-Bikes
```
```
 npm i
```

Par sécurité, vous pouvez également executer la commande npm i dans le dossier "frontend" et "backend". Pour s'y rendre :
```
cd backend
``` 
```
npm i
``` 
```
cd ..\frontend
``` 
```
npm i
``` 
et refaite la commande :
```
cd ..
``` 
afin de revenir au dossier racine.


Ouvrez ensuite une éditeur SQL (dans l'exemple suivant, nous utilisons mySQL) et depuis votre compte root, tapez les lignes suivante :

```
CREATE USER 'exemple_wild_bikes'@'localhost' IDENTIFIED BY 'wild_bikes_exemple123';
CREATE DATABASE wild_bikes_db;
GRANT ALL privileges ON wild_bikes_db.* TO 'exemple_wild_bikes'@'localhost';
```

Dans le dossier que vous avez récemment cloné depuis GitHub, rendez-vous dans le dossier "backend" et faite une copie du fichier ".env sample" et renomez le en ".env" et remplacez les valeur par défaut de la base données par celles que vous venez de créés.

En reprenant l'exemple au dessus, voilà ce que vous devriez obtenir :

```
APP_PORT=5000
FRONTEND_URL=http://localhost:5173
DB_HOST=localhost
DB_PORT=3306
DB_USER=exemple_wild_bikes
DB_PASSWORD=wild_bikes_exemple123
DB_NAME=wild_bikes_db
```

Après avoir fait cela, rendez-vous dans le dossier "frontend" à la racine du projet et faite de nouveau une copie du fichier ".env sample" que renomerez en ".env". 

Pour terminer il ne vous reste plus qu'a taper cette commande dans votre terminal pour remplir la base données : 

```
npm run migrate
```

Si tout c'est bien passé, vous pouvez tapez cette commande pour lancer le serveur et découvrir l'application Wild Bikes : 

```
npm run dev
``` 

## Utilisation

Vous arriverez sur la page d'accueil sur laquelle vous pourrez visualiser les différentes parties du site. À ce jour le site n'est pas fini, il y à donc des liens qui vont ramenerons sur la page d'accueil.

La partie Administrateur est disponbile en cliquant sur le logo uilisateur en haut à droite de votre écran.
Vous devrez vous connecter pour accéder à cette partie. Sans les identifiants, il vous sera impossible de voir ses pages dont l'accès est sécurisé.

Il y un compte admin prévu pour essayer l'application, voici les identifiants :

```
mail : admin@wildbikes.com
mot de passse : 12345
``` 

Une fois connecté, vous aurez le loisir de découvrir la partie stock des motos dans laquelle vous pourrez voir, créer, modifier et suprimer les motos dans votre stock.

Enjoy =)
## 🚀 À propos

Ce projet à été réalisé dans le cadre d'une évaluation de compétence dirigé par la WILD CODE SCHOOL de Lyon.

