const react = require("@vitejs/plugin-react");

// https://vitejs.dev/config/
module.exports = {
  plugins: [react()],
  server: {
    port: 3500,
  },
};
