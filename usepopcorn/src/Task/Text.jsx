import React, { useState } from 'react'

const Text = ({ text, className, textLength = 10, children, collapseText="show less", expanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(expanded)
    const display = isExpanded ? children : children.slice(0,textLength) + '...';

    function showText() {
        setIsExpanded(pre => pre = !pre)
    }
    return (
        <div className="task-text">
            <p>
                {display}
            </p>
            <button className={className} onClick={(showText)}>
                {isExpanded?collapseText:text}
            </button>
        </div>
    )
}

export default Text