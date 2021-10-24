import React from 'react'; 
import { mdiNoteEditOutline } from '@mdi/js';
import Icon from '@mdi/react'; 


    const MakeNotes=()=>{
        return(<Icon path={mdiNoteEditOutline}
            title="User Profile"
            size={1}
            horizontal
            vertical
            rotate={180}
            color="white"
            />)
    }

export default MakeNotes;