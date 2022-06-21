<<<<<<< HEAD
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    './api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      
    })
  );
=======
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    './api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      
    })
  );
>>>>>>> a4e30c69416dfbd4ffba73aeb416bc9aea026526
};