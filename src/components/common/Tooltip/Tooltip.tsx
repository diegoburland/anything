import React, { useState } from "react"



const Tooltip = (props:any) => {
    let timeout:any
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, props.delay || 200)
  }

  return (
    <div className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  )
}

export default Tooltip