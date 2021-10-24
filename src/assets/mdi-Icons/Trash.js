import React from "react"; 
import Icon from '@mdi/react'; 
import { mdiTrashCanOutline   } from '@mdi/js';

const Trash=()=>{
    return(<Icon path={mdiTrashCanOutline }
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={180}
        color="white"/>)
}

export default Trash; 