@echo off
cd /d "%~dp0"

echo.
echo ========================================
echo   Push vers GitHub - Portfolio Bryan PHV
echo ========================================
echo.

:: Supprimer l'ancien .git si corrompu
if exist ".git" (
    echo Suppression ancien .git...
    rmdir /s /q ".git"
)

:: Init git
echo Initialisation Git...
git init
git checkout -b main

:: Config identite
git config user.email "phanvanhobryan@gmail.com"
git config user.name "Bryan PHV"

:: Ajouter tous les fichiers
git add .

:: Premier commit
git commit -m "feat: init portfolio Vite + React"

:: Connecter au repo GitHub
git remote add origin https://github.com/phanvanhobryan-dev/portfolio-bryan-phv.git

:: Push
echo.
echo Push vers GitHub...
git push -u origin main --force

echo.
echo ========================================
echo   DONE ! Va sur Vercel pour deployer.
echo ========================================
echo.
pause
