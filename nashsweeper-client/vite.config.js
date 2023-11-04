import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// deal with CORS
import BackendServerInfo from "./BackendServerInfo.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: { usePolling: true },
    proxy: {
      // // UploadPage CORS
      // "/UploadPage": {
      //   // target: "http://127.0.0.1:5000",
      //   target: BackendServerInfo.backendIP,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/UploadPage": "/UploadPage",
      //   },
      // },
      // "/GetGameData": {
      //   // target: "http://127.0.0.1:5000",
      //   target: BackendServerInfo.backendIP,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/GetGameData": "/GetGameData",
      //   },
      // },
      // // GetUserData CORS
      // "/GetUserData": {
      //   // target: "http://127.0.0.1:5000",
      //   target: BackendServerInfo.backendIP,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/GetUserData": "/GetUserData",
      //   },
      // },
      "/api": {
        target: BackendServerInfo.backendIP,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
});
