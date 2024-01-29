import axios from "axios";

export const api = axios.create({
    baseURL : 'https://crudcrud.com/api/e64d5a4c627e4885bcac55285d73445d',
    timeout: 1000,
});