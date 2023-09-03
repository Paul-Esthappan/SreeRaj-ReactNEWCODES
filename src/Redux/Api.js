import axios from 'axios';
import { dataInfo } from './Data'

export const Datas =async(dispach) => {
    try {
        const datas = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('88888', datas);
        dispach(dataInfo(datas.data))
    }
    catch (err) {
        console.log("Error")
    }
}