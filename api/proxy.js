const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
  let target = "https://github.com/";//your website url
    if (
      req.url.startsWith("/api") ||
      req.url.startsWith("/auth") ||
      req.url.startsWith("/signup") ||
      req.url.startsWith("/login")
    ) {
      // target = "http://106.15.2.32:6969";
      res.statusCode = 404;
      res.end("Not Found");
      return;
    }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};
