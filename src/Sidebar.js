import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder" />
            </div>

            <a href="/notes">
                <img 
                    src={newHover} 
                    alt="Note note"   
                />
                <img 
                    src={newIcon} 
                    alt="Note note"   
                />
            </a>

            <div class="SignOut">
                <button>
                    <i className="fa fa-sign-out"></i>
                </button>
            </div>

        </div>
        
    )
}

export default Sidebar