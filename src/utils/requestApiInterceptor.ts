import axios, { AxiosInstance } from 'axios';

const Axios: AxiosInstance = axios.create({
	baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/',
	timeout: 20000,
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
});

export default Axios;
