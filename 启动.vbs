Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c start http://localhost:3000 && npx next start", 0, False
