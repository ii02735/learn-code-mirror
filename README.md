# CodeMirror

CodeMirror est une **dépendance JS** qui permet de concevoir un **éditeur de code** sur sa page Web.

Ce petit projet a pour objectif de découvrir les possibilités qu'offre cette dépendance JS.

# Setup

## Vite

Le projet utilise **Vite**, qui est un **serveur de développement local** pour les projets JS côté Front-end.

L'avantage c'est qu'il accélère le **hot-reload**, et est moins lourd que **Webpack**.

Malgré sa popularité, Webpack peut être assez laborieux a configurer, et peut devenir un mastodonte : cet outil est tellement personnalisable, qu'il occupe le rôle de **bundler** mais aussi **d'environnement de développement**.

**Vite ne se préoccupe que de l'environnement local.** Il passe par un **outil-tierce** pour **produire des bundles** : **Rollup**.