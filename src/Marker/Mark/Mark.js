import React, { useState } from 'react';

function Mark(props) {

    const text = props.text;
    const mark = props.mark;

    function markText(text, mark) {
        if(text.includes(mark)) {
            let replace = text.replaceAll(mark, `<span class="marker">${mark}</span>`);
            return <span dangerouslySetInnerHTML={{__html: replace}}></span>
        }
        return text;
    }

    return (
        <li>
            {markText(text, mark)}
        </li>
    );
}

export default Mark;
