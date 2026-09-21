# Prototype de refonte — Bowling de l'Ouest Lyonnais (Brignais)

Maquette HTML/CSS statique servant de support à la proposition commerciale.
Quatre pages, quatre directions graphiques, quatre emplacements de navigation :

| Page | Direction | Navigation |
|---|---|---|
| `index.html` | Néon nocturne (noir, rose, cyan) | Barre flottante centrée en haut |
| `bowling.html` | Clair éditorial (blanc cassé, jaune, serif) | Colonne verticale fixe à gauche |
| `karaoke.html` | Scène (violet, magenta, vert acide) | Barre en bas, façon application |
| `bar.html` | Tapis vert & laiton | Bouton menu + panneau plein écran |

Les quatre pages partagent les mêmes liens de navigation : on peut passer de
l'une à l'autre pour comparer les directions. Le bouton « Changer de version »
en bas à droite n'existe que pour la démo, il se supprime en supprimant
`assets/proto.js` et `assets/proto.css`.

## Images

Aucune photo n'est intégrée. Chaque emplacement est un bloc rayé portant le
texte de ce qu'il attend (« Photo — pistes de bowling éclairées », etc.).
Pour poser une vraie image, remplacer le bloc :

```html
<div class="ph"><span>Photo — comptoir du bar</span></div>
```

par :

```html
<img src="assets/img/bar.jpg" alt="Le comptoir du bar" loading="lazy">
```

en gardant la même classe sur le conteneur parent si une hauteur est définie.

## Lancer en local

Ouvrir `index.html` dans un navigateur suffit. Pour un serveur local :

```bash
python3 -m http.server 8000
```

## Mise en ligne sur GitHub Pages

1. Créer un dépôt GitHub et y pousser ces fichiers sur la branche `main`.
2. Dans le dépôt : **Settings → Pages → Build and deployment → Source :
   GitHub Actions**.
3. Chaque `git push` sur `main` déclenche `.github/workflows/deploy.yml` et
   republie le site. L'URL apparaît dans l'onglet **Actions** et dans
   **Settings → Pages**.

```bash
git init
git add .
git commit -m "Prototype de refonte"
git branch -M main
git remote add origin git@github.com:VOTRE-COMPTE/VOTRE-DEPOT.git
git push -u origin main
```

Le fichier `.nojekyll` évite tout traitement Jekyll côté GitHub.

## Points techniques

- Aucun framework, aucune dépendance de build. Polices chargées via Google Fonts.
- Responsive : chaque navigation a son comportement mobile (menu déroulant,
  barre haute, dock, plein écran).
- Focus clavier visible, `prefers-reduced-motion` respecté, contrastes tenus.
- Les tarifs et horaires sont plausibles mais fictifs : à remplacer par les
  vrais chiffres avant toute présentation publique.
