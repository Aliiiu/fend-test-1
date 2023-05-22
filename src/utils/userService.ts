import Axios from './requestApiInterceptor';

export const fetchUsersService = ({
	page,
	limit,
	org,
	username,
	email,
	date,
	phone,
	status,
	search,
}: TFetchParams) => {
	return Axios.get(
		`users?page=${page}&limit=${limit}${org}${username}${email}${date}${phone}${status}${search}`
	);
};

export const fetchUserService = (id: string) => {
	return Axios.get(`users/${id}`);
};
