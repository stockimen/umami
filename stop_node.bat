@echo off
echo Stopping all Node.js processes...

:: 查找所有 node.exe 进程
for /f "tokens=2 delims=," %%a in ('tasklist /nh /fi "imagename eq node.exe" /fo csv') do (
    :: 终止每个找到的进程
    echo Stopping Node.js process with PID: %%a
    taskkill /F /PID %%a
)

echo All Node.js processes have been stopped.
pause
