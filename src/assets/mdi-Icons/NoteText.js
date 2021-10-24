import React from 'react'; 
import Icon from '@mdi/react'; 
import { mdiNoteTextOutline } from '@mdi/js';

const NoteText=()=>{
    return(<Icon path={mdiNoteTextOutline}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="white"/>)
}

export default NoteText; 