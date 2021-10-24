import React from 'react'; 
import Icon from '@mdi/react'; 
import { mdiStarOutline } from '@mdi/js';

const Star=()=>{
    return(<Icon path={mdiStarOutline}
        title="User Profile"
        size={1}
        horizontal
        vertical
        color="white"/>)
}
export default Star; 