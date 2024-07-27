// Resume.js

import React from 'react';
import myResume from '/Users/lucas/WebstormProjects/personal_site/src/LucasResume.pdf'

function Resume() {
    return (
        <div>
            <h2>My Resume</h2>
            <object data={myResume} type="application/pdf" width='825px' height='800px'>
                <p>Alternative text - include a link to the PDF!</p>
            </object>
        </div>
    );
}

export default Resume;
