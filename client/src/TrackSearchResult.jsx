import React from 'react'

export default function TrackSearchResult(props) {
    
    function handlePlay() {
        props.chooseTrack(props.track)
    }
       
    return (
        <div className='d-flex m-2 align-items-center' style={{cursor: 'pointer'}} onClick={handlePlay}>
            <img src={props.track.albumURL} style={{height: '64px' }} alt='' />
            <div className='ml-3'>
                <div>{props.track.title}</div>
                <div className='text-muted'>{props.track.artist}</div>
            </div>
        </div>
    )
}
