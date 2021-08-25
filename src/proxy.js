const express = require('express')
const router = express.Router()

const { createProxyMiddleware } = require('http-proxy-middleware')

router.use('*', createProxyMiddleware({ 
    target: 'https://api.beyonic.com',
    logLevel: 'debug',
    changeOrigin: true
 }))

module.exports = router