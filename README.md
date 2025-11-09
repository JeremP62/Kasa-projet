# 🏡 KASA — Application de location d’hébergements

## 📘 Présentation du projet

**Kasa** est une application web développée avec **React.js** permettant de consulter des annonces de logements.  
Ce projet a pour objectif de reproduire le site Kasa à partir d’une maquette Figma fournie, en créant une application **dynamique, responsive et accessible**.

L’utilisateur peut :

- Naviguer entre les différentes pages (`Accueil`, `À propos`, `Logement`, `404`)
- Consulter les détails d’un logement (carrousel d’images, description, équipements)
- Explorer des sections repliables grâce à des **collapses dynamiques**

---

## 🚀 Objectifs pédagogiques

- Découvrir et appliquer les **fondamentaux de React**
- Utiliser **React Router** pour la navigation
- Structurer un projet avec des **composants réutilisables**
- Gérer des données dynamiques à partir d’un fichier JSON
- Travailler la **responsivité** et l’**accessibilité**
- Organiser les styles avec **SCSS**

---

## 🧱 Architecture du projet

src/
│
├── components/
│ ├── Header/
│ ├── Footer/
│ ├── Card/
│ ├── Slideshow/
│ └── Collapse/
│
├── pages/
│ ├── Home/
│ ├── Logement/
│ ├── APropos/
│ └── Error/
│
├── assets/
│ ├── images/
│ └── icons/
│
├── data/
│ └── logements.json
│
├── App.jsx
└── index.jsx

---

## ⚙️ Technologies utilisées

| Outil / Lib          | Rôle                                                    |
| -------------------- | ------------------------------------------------------- |
| **React.js**         | Bibliothèque principale pour la création de l’interface |
| **React Router DOM** | Gestion de la navigation entre les pages                |
| **SCSS (Sass)**      | Gestion des styles, variables et media queries          |
| **JavaScript**       | Logique des composants                                  |
| **Vite**             | Environnement de développement rapide                   |
