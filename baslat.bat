@echo off
chcp 65001 >nul
color 0A
cls
echo.
echo ==========================================
echo      SteadyShell Baslatiliyor... 🐢
echo ==========================================
echo.
echo [INFO] Sunucu hazirlaniyor, lutfen bekleyin...

:: Proje dizinine git (Dosya neredeyse orayi baz alir)
cd /d "%~dp0"

:: 4 saniye sonra tarayiciyi otomatik ac
start "" cmd /c "timeout /t 4 >nul && start http://localhost:3000"

:: Sunucuyu baslat
echo [INFO] npm run dev calistiriliyor...
echo.
npm run dev

pause
