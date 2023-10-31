import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
    'MEDIA_HOST': JSON.stringify('http://127.0.0.1:8000'),
    'SERVICE_HOST': JSON.stringify('http://127.0.0.1:8000'),
    global: {},
  },
  server: {
    host: true,
    port: 70, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  }
})
