@echo off
cd /d "%~dp0"

echo.
echo ========================================
echo   Push public/ vers GitHub
echo ========================================
echo.

git add public/
git commit -m "feat: add public assets (images, favicon)"
git push origin main

echo.
echo ========================================
echo   DONE ! Vercel va se redeployer auto.
echo ========================================
echo.
pause
