import React, { useRef, useEffect } from 'react'

export const useClickOutside = (handler:any, active:boolean) => {
    const domNode = useRef<HTMLHeadingElement>()
    useEffect(() => {
        let maybeHandler = (e:any) => {
            const current:any = domNode.current
            if((current !== null && current !== undefined) && !current.contains(e.target) && active) handler()
        }

        document.addEventListener('mousedown', maybeHandler)

        return () => {
            document.removeEventListener('mousedown', maybeHandler)
        }
    })

    return domNode
}