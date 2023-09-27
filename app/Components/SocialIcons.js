import React from 'react'
import './Icons.scss'
const SocialIcons = ({icon}) => {
    return (
        <div class="icon-container">
            <img src={icon} />
        </div>
    )
}

export default SocialIcons