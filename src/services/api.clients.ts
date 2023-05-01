import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ebd4d57894df4fb7b28df87d4f9c1a55'
    }
})