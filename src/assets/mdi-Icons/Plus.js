import React from 'react'; 
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react'; 

const Plus=()=>{
    return(<Icon path={mdiPlus}
        title="User Profile"
        size={1}
        horizontal
        vertical
        color="grey"/>)
}

export default Plus; 