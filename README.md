# Angie Wong — GitHub Pages Profile

Place `WongPuiChiAngie_CV.pdf` in this folder (or update the link in `index.html`) so the "Download CV" button works.

To publish as your profile page, create a GitHub repository named `MoChi-131.github.io`, commit these files to `main`, and push. GitHub Pages will serve the site from that repo automatically.

Example commands:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin git@github.com:MoChi-131/MoChi-131.github.io.git
git push -u origin main
```

Detailed Windows PowerShell deployment (HTTPS):

1. Create a new repository on GitHub named `MoChi-131.github.io`.
2. In PowerShell, from this folder run:

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/MoChi-131/MoChi-131.github.io.git
git push -u origin main
```

Notes:
- If you prefer SSH, replace the `origin` URL with `git@github.com:MoChi-131/MoChi-131.github.io.git`.
- After pushing, go to `https://github.com/MoChi-131/MoChi-131.github.io/settings/pages` (or the repository Settings > Pages) to verify the site is published. It usually becomes available at `https://MoChi-131.github.io` within a few minutes.
- To update the site, commit changes and `git push` again.

Optional: use the GitHub CLI to create the repo and publish quickly:

```powershell
gh repo create MoChi-131/MoChi-131.github.io --public --source=. --remote=origin --push
```

If you'd like, I can create the repository and push these files for you now (requires your GitHub authentication on this machine). Tell me to proceed and how you'd like to authenticate (SSH or HTTPS).
