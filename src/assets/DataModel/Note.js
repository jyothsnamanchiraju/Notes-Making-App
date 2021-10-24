import {v4 as uuid} from 'uuid'; 
import dayjs from 'dayjs'; 
const Note=[{
        id:uuid(), 
        text:"",
        category:"",
        favourite:false,
        created:dayjs().format(),
        lastupdated: dayjs().format()
}]; 

export default Note; 