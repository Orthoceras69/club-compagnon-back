# Réponses aux questions

## Quelle est la différence entre un PUT un PATCH
Un PUT remplace une donnée complètement, PATCH met à jour une donné partiellement.


## Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?
Cela peux provenir de la sécurité du navigateur, il faut vérifier que l'API est configuré correctement au niveau des en tete CORS.


## Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?
Il y a plusieurs raisons qui peuvent expliquer la mise en place d'un serveur web :
- Gestion des fichiers statiques : Ils envoient pls facilement les fichiers statiques comme les images et le CSS.
- Répartition de charge : Ils répartissent le trafic du site entre les différentes instances de l'API.
- Gestion des connexions : Ils sont fait pour gérer de nombreuses connexions simultanées.
- Sécurité : Ils ont des fonctionnalités avancées de sécurité comme SSL/TLS et la protection contre les attaques DDOS.
- Optimisation des performances : Ils peuvent mettre en cache les réponses pour améliorer les performances.


## Citez 3 axes vus en cours pour améliorer les performance d'une api Rest
- La mise en cache pour stocker temporairement les réponses afin de réduire les requêtes sur le serveur et d'améliorer le temps de réponse.
- La compression des réponse au format JSON pour faciliter les transfert
- En utilisant des requetes qui se limite et qui ne vont pas aller recherche 100% de la base de donnée