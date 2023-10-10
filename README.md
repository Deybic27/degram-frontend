# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Docker
# docker-compose
docker-compose up --build --no-recreate -d
docker exec -it degram_frontend sh
npm install && npm install -D sass && npm run dev

# Dockerfile
docker build -t degram_frontend .
docker run -dp 127.0.0.1:70:70 degram_frontend
docker ps