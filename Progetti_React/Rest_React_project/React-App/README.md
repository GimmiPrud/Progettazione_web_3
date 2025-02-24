# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



README PROGETTO DI REACT:  

Per avviare il database DB.json, digitare il seguente comando:

npx json-server DB.json (si troverà sulla porta di default 3000)

Appena sarà partito il server-json, avviare il comando npm run dev sull'applicazione di react 


Purtroppo ho avuto problemi, a casa, ad implementare un nuovo database per colpa di flask ed psycopg2, senza utilizzare quello di postgres(che però funzionava già correttamente in aula).
Infatti ho lasciato l'implementazione del collegamento al database Accademia di pgadmin su /App_react/app.py e per il database ho creato un file chiamato DB.json che con json-server ho lanciato (vedere comando sopra).

