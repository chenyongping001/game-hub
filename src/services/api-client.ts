import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        'key':'01b29da6c41841458b00aa22c947a464',
    }
})