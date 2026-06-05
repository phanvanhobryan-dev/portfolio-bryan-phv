# ============================================================
#  DEPLOY.ps1 — Setup Git + push vers GitHub
#  Double-clic -> "Exécuter avec PowerShell"
# ============================================================

Set-Location $PSScriptRoot
$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "  Portfolio Bryan PHV — Setup Git + GitHub  " -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# ── 1. Supprimer un éventuel .git corrompu ──────────────────
if (Test-Path ".git") {
    Write-Host "→ Suppression de l'ancien dossier .git..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".git"
}

# ── 2. Initialiser Git ──────────────────────────────────────
Write-Host "→ Initialisation du dépôt Git..." -ForegroundColor Green
git init -b main
git config user.email "phanvanhobryan@gmail.com"
git config user.name "Bryan PHV"

# ── 3. Installer les dépendances npm ───────────────────────
Write-Host ""
Write-Host "→ Installation des dépendances npm..." -ForegroundColor Green
npm install

# ── 4. Premier commit ───────────────────────────────────────
Write-Host ""
Write-Host "→ Premier commit..." -ForegroundColor Green
git add .
git commit -m "feat: init portfolio — Vite + React refactorisé"

# ── 5. Demander l'URL du repo GitHub ───────────────────────
Write-Host ""
Write-Host "--------------------------------------------" -ForegroundColor Cyan
Write-Host " ACTION REQUISE" -ForegroundColor Yellow
Write-Host "--------------------------------------------" -ForegroundColor Cyan
Write-Host ""
Write-Host " 1. Va sur https://github.com/new" -ForegroundColor White
Write-Host " 2. Nomme le repo : portfolio-bryan-phv" -ForegroundColor White
Write-Host " 3. Laisse-le PUBLIC, sans README, sans .gitignore" -ForegroundColor White
Write-Host " 4. Clique 'Create repository'" -ForegroundColor White
Write-Host " 5. Copie l'URL SSH ou HTTPS affichée" -ForegroundColor White
Write-Host ""
$repoUrl = Read-Host "Colle ici l'URL du repo GitHub (ex: https://github.com/TonPseudo/portfolio-bryan-phv.git)"

# ── 6. Push ─────────────────────────────────────────────────
Write-Host ""
Write-Host "→ Connexion au repo distant et push..." -ForegroundColor Green
git remote add origin $repoUrl
git push -u origin main

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "  SUCCÈS ! Code poussé sur GitHub.          " -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host " Prochaine étape — Vercel :" -ForegroundColor Cyan
Write-Host " 1. Va sur https://vercel.com/new" -ForegroundColor White
Write-Host " 2. Clique 'Import Git Repository'" -ForegroundColor White
Write-Host " 3. Sélectionne 'portfolio-bryan-phv'" -ForegroundColor White
Write-Host " 4. Framework : Vite (auto-détecté)" -ForegroundColor White
Write-Host " 5. Clique Deploy — c'est tout !" -ForegroundColor White
Write-Host ""
Write-Host " Ton site sera en ligne en ~1 minute." -ForegroundColor Green
Write-Host ""

Read-Host "Appuie sur Entrée pour fermer"
