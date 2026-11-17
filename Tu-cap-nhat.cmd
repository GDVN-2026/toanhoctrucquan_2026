@echo off
cd /d "%~dp0"
node --preserve-symlinks-main build.mjs --watch
if errorlevel 1 pause
