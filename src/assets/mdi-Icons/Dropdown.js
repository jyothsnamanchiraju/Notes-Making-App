import React from 'react'; 
import { mdiChevronUp} from '@mdi/js';
import Icon from '@mdi/react'; 

const Dropdown=()=>{
    return(<Icon path={mdiChevronUp}
        title="User Profile"
        size={1}
        horizontal
        vertical
        color="grey"/>)
}

export default Dropdown; 