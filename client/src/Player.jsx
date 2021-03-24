import React, {useEffect, useState} from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'

export default function Player({accessToken, trackUri}) {
    const [play, setPlay] = useState(false)
    
    useEffect(() => {
        trackUri ? setPlay(true) : null
    }, [trackUri])
    
    if (!accessToken) return null
    return <SpotifyWebPlayer token={accessToken} callback = {state => {if (!state.isPlaying) {setPlay(false)}}} showSaveIcon play={play} uris={trackUri ? [trackUri] : []} />
}