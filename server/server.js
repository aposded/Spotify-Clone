const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const app = express()

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '250a9153ab334c6cba6723476cf799eb',
        clientSecret: 'a4405b6610f94bcb97bd3c26c6af5575'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        }).catch(() => {
            res.sendStatus(404)
        })
    })
})