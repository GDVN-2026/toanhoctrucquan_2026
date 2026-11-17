@echo off
cd /d "%~dp0"
node --preserve-symlinks-main bo-cong-cu-goc.mjs --open
if errorlevel 1 pause
