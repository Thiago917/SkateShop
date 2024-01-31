import axios from "axios";

export const api = axios.create({
    baseURL : 'https://crudcrud.com/api/7f8e0bad18c641b897714503dd64d3fa',
    timeout: 10000,
});