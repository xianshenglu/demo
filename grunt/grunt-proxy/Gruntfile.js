module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8000,
          keepalive: true,
          open: false,
          base: 'dist',
          middleware: function (connect, options, defaultMiddleware) {
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest
            return [proxy].concat(defaultMiddleware)
          },
        },
        proxies: [
          {
            host: 'localhost',
            changeOrigin: true,
            port: 8001,
            context: '/api',
            rewrite: {
              '/api': '/data',
            },
          },
        ],
      },
    },
  })

  grunt.loadNpmTasks('grunt-connect-proxy')
  grunt.loadNpmTasks('grunt-contrib-connect')

  grunt.registerTask('default', ['configureProxies:server', 'connect:server'])
}
