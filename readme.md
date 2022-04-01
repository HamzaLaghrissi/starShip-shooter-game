# StarShip game

### Introduction

C'est un jeu vidéo simple dans lequel le joueur contrôle à l'aide du clavier le déplacement vertical d'un vaisseau situé sur la gauche de l'écran. Des soucoupes volantes arrivent de la droite de l'écran et le joueur doit les détruire en leur tirant dessus. A chaque tir réussi le joueur marque des points, à l'inverse si un vaisseau parvient à passer sans être détruit, le joueur perd des points.

### Comment jouer?

- À l'aide des touches (Haut | Bas) du clavier on peut faire bouger le vaisseau vers le haut et le bas
- À l'aide de la touche espace on peut lancer les tirs .
- La cible de gauche permet de générer un seul Saucer
- La cible de droite permet de générer une infinité de Saucers chaque tir = 200 points gangner
- Lorsqu'une soucoupe sort du jeu par la gauche, le score est diminué de 1000 points

### Ce que j'ai appris de ce projet

- Construction d'un jeu en utilisant JavaScript
- Modules et programmation objet en JS
- Creation d'une page html statique
- Les bases de CSS/HTML

### Mise en route

#### Prérequis

- <img src="https://icon-library.com/images/nodejs-icon/nodejs-icon-7.jpg" width="25">  Node.js - an open source development platform for executing JavaScript code server-side
- <img src="https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png" width="25">  NPM - the default package manager for the JavaScript runtime environment Node. js

#### Installation

1. Récupérer le projet en lançant la commande suivante:

```bash
  git clone https://github.com/HamzaLaghrissi/TaskApp.git
```

2. Installer les paquets *Node.js* :

```bash
  npm install
```

3. Pour lancer le serveur de developpement:

```bash
  npm run dev-server
```

4. pour produire une version de travail distribuable sur un serveur

```bash
  npm run build
```
