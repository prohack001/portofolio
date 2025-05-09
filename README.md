# Portfolio de Kieffer ILBOUDO

Ce portfolio a été créé avec Astro pour présenter les projets et compétences de Kieffer ILBOUDO, étudiant en intelligence artificielle à l'École Polytechnique de Ouagadougou.

## 🚀 Technologies utilisées

- [Astro](https://astro.build) - Framework web statique
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- [TypeScript](https://www.typescriptlang.org) - Superset de JavaScript typé

## 🧞 Commandes

| Commande                   | Action                                            |
| :------------------------- | :------------------------------------------------ |
| `npm install`              | Installe les dépendances                          |
| `npm run dev`              | Démarre le serveur de développement               |
| `npm run build`            | Génère le site statique pour la production        |
| `npm run preview`          | Prévisualise le site avant déploiement            |

## 📂 Structure des dossiers

```
/
├── public/             # Fichiers statiques
│   └── favicon.svg
├── src/
│   ├── components/     # Composants réutilisables
│   ├── content/        # Contenu (projets, blog)
│   │   └── projects/   # Fichiers markdown des projets
│   ├── data/           # Données structurées
│   ├── layouts/        # Layouts
│   ├── pages/          # Routes de l'application
│   └── styles/         # Styles globaux
└── package.json
```

## 📝 Modifier le contenu

### Projets

Pour ajouter ou modifier un projet, créez ou modifiez un fichier markdown dans le dossier `src/content/projects/`.

Exemple de structure:

```markdown
---
title: "Titre du Projet"
description: "Description courte du projet"
image: "url-de-l-image"
technologies: ["Tech1", "Tech2", "Tech3"]
status: "Statut du projet"
url: "url-optionnelle"
featured: true/false
date: 2023-01-01
---

# Titre du projet

Contenu détaillé du projet...
```

## 🚀 Déploiement

Ce site est conçu pour être déployé sur GitHub Pages. Pour déployer:

1. Mettez à jour le `site` et `base` dans `astro.config.mjs`
2. Exécutez `npm run build`
3. Déployez le contenu du dossier `dist`

## 📝 License

Ce projet est sous licence MIT.