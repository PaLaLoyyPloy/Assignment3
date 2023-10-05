'use client'
import { useEffect, useRef } from "react"
export function VideoPlayer({vdoScr, isPlaying}:{vdoScr : string, isPlaying : boolean}){
    const vdoRef = useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        //alert('width is ' + vdoRef.current?.videoWidth)
        if(isPlaying){
            vdoRef.current?.play()
        }else{
            vdoRef.current?.pause()
        }
    })
    return(
        <video className='w-[40%]' src={vdoScr} ref={vdoRef} muted loop controls/>
    )
}