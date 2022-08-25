import apisauce from 'apisauce';
import {IAuthData} from '../Redux/Auth/Ui';

const api = apisauce.create({baseURL: 'http://localhost:3000'});

const login = ({email, password}: IAuthData) =>
  api.post('/login', {email, password});

const getData = () => api.get('/data');

const Api = {login, getData};

export type Api = typeof Api;

export default Api;
