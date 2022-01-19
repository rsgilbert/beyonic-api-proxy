const express = require('express')
const router = express.Router()

const { createProxyMiddleware } = require('http-proxy-middleware')

router.use('*', createProxyMiddleware({ 
    target: 'http://41.198.122.46:5000',
    logLevel: 'debug',
    changeOrigin: true
 }))

module.exports = router