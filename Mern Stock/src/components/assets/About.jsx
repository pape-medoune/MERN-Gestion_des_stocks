import React from 'react'
import maintenance from '../assets/images/maintenance.png'

function About() {
    return (
        <div>
            <div className="text-center items-center font-bold text-4xl mt-5 text-blue-700">
                We are working hard to make this page functional 💻💻💻
            </div>
            <img src={maintenance} alt="Image de maintenance" />
        </div>
    )
}

export default About