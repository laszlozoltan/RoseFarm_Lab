# RoseFarmLab – static copy for GitHub Pages

A static copy of rosefarmlab.org (WordPress.com, theme **Mysa**), built from the WordPress export of 28 Oct 2026.
It contains all published pages and posts, the menu, the header photo and the footer, in the original Mysa design.

The page addresses are the same as on WordPress, for example `/nevjegy/who-we-are-2/` and `/2024/01/30/first-in/`,
so old links keep working if the rosefarmlab.org domain is later pointed here.

## Folder contents

- `index.html`: the home page, with the post list
- `nevjegy/…`: the 9 pages
- `2024/…`: the 2 posts
- `assets/`: the stylesheets (WordPress block styles plus Mysa's settings), the Archivo font and the menu script
- `wp-content/uploads/…`: **the photos go here** (see below)
- `media-list.txt`: the 36 image files the pages use

## Adding the photos

WordPress's text export does not include the photos.

1. In the WordPress.com dashboard, open **Tools → Export → Export media library**.
2. Unpack the archive you get. It contains folders like `2024/01/` and `2024/02/`.
3. Copy those folders into `wp-content/uploads/` here, so you end up with paths like `wp-content/uploads/2024/01/proba2a.jpg`.

## Publishing on GitHub Pages

1. Create a new repository, for example `rosefarmlab`.
2. Upload **the contents** of this folder, including `.nojekyll`, to the top level of the repository.
3. Go to **Settings → Pages → Deploy from a branch → main / (root)**.

## Not copied (these need WordPress to work)

- comments
- the "Subscribe" box
- the WordPress.com bar
- the author and category archive pages (the author and category names are shown as plain text)
