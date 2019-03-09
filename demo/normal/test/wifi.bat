@echo off
title Wifi Setting Program 1.2
color 3B
:WindowsZIA
set TempFile_Name=%SystemRoot%\System32\BatTestUACin_SysRt%Random%.batemp
( echo "BAT Test UAC in Temp" >%TempFile_Name% ) 1>nul 2>nul
if exist %TempFile_Name% (
del %TempFile_Name% 1>nul 2>nul
goto:startx
) else (
echo.
echo Oops, we need to be run as administrator !
echo.
pause
goto:ZEnd
)
:startx
del %systemroot%\System32\admintestf.txt
cls
echo.
echo                    Wifi Setting Program 1.2
echo.
echo            * Introduction 1: wifi setting need support of wlan card and drive
echo.
echo            * Introduction 2: Windows Firewall need to be turned of when setting ICS sharing.
echo.
echo Please enter 1-7 to choose functions:
echo.
echo 	      1.  set WiFi            2.  check connecting devices
echo.
echo 	      3.  update WiFi name    4.  update WiFi password
echo.
echo 	      5.  start WiFi service  6.  stop WiFi service
echo.
echo 	      7.  exit
echo.
choice /C 1234567 /N /M " choose functions [1-7]:"
if ERRORLEVEL 7 goto ZEnd
if ERRORLEVEL 6 goto ZStp
if ERRORLEVEL 5 goto ZGot
if ERRORLEVEL 4 goto ZPsw
if ERRORLEVEL 3 goto ZChange
if ERRORLEVEL 2 goto ZSet
if ERRORLEVEL 1 goto ZTech

:ZTech
cls
  netsh wlan set hostednetwork mode=allow
:SetID
echo.
  set /p ssid=Please enter your WiFi name (press C to cancel):
  if "%ssid%"=="" echo Please enter name&pause&goto:SetID
  if "%ssid%"=="c" goto WindowsZIA
  netsh wlan set hostednetwork ssid=%ssid%
:SetKey
echo.
  set /p pw=Please enter your WiFi password:
  if "%pw%"=="" echo Please enter password&pause&goto:SetKey
  netsh wlan set hostednetwork key=%pw%
  netsh wlan start hostednetwork
echo  The WiFi configuration is initialized successfully. Please enter the network connection to continue setting:
echo.
echo  The steps are as follows:
echo 1. Right click on the network icon in the lower right corner of the desktop taskbar
echo 2. Open the network and sharing center
echo 3. Change adapter settings
echo 4. Find the wired network settings that are connecting to the network, let's call it NetGuy.
echo 5. Select "Share" and select the virtual network you just set up:%ssid% or
echo 5. Right click NetGuy and select "attribute" tab and select "share" tab, then check the first checkbox, and select the virtual network you just set up:%ssid% after the checkbox.
echo 6. Done! You can now connect the shared WiFi on other devices.
echo.
echo  If you can't share it, please wait or turn off the anti-virus software firewall. If you can't, please log out and try again~
echo.
echo Press any key to return
 pause>nul
 goto WindowsZIA

:ZSet
cls
netsh wlan show hostednetwork
echo.
echo Press any key to return
 pause>nul
 goto WindowsZIA

:ZChange
cls
echo.
 set /p ssid=Please enter your WiFi name (press C to cancel):
 if "%ssid%"=="" echo ID can't be null&goto:ZChange
 if "%ssid%"=="c" goto WindowsZIA
 netsh wlan set hostednetwork ssid=%ssid%
 goto WindowsZIA

:ZPsw
cls
echo.
 set /p pw=Please enter your new WiFi password (press C to cancel):
 if "%pw%"=="" echo password can't be null&goto:ZPsw
 if "%pw%"=="c" goto WindowsZIA
 netsh wlan set hostednetwork key=%pw%
 goto WindowsZIA



:ZGot
cls
netsh wlan set hostednetwork mode=allow
echo Virtual WiFi has been started !
echo Press any key to return
 pause>nul
 goto WindowsZIA

:ZStp
cls
netsh wlan set hostednetwork mode=disallow
echo Virtual WiFi has been stopped !
echo Press any key to return
 pause>nul
 goto WindowsZIA
end

:ZEnd
exit