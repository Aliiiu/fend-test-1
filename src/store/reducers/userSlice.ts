import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUserService, fetchUsersService } from '../../utils/userService';
import { AxiosError } from 'axios';
import { TUserState, TUsersState } from '.';

type TRequestError = {
	errMessage: string;
};
export const fetchUsers = createAsyncThunk(
	'users/fetchAllUsers',
	async (
		{
			page = 1,
			limit = 10,
			org = '',
			username = '',
			email = '',
			date = '',
			phone = '',
			status = '',
			search = '',
		}: TFetchParams,
		{ rejectWithValue }
	) => {
		try {
			const { data } = await fetchUsersService({
				page,
				limit,
				org,
				username,
				email,
				date,
				phone,
				status,
				search,
			});
			const userData = await data;
			return userData;
		} catch (err) {
			const error: AxiosError<TRequestError> = err as any;
			if (!error.response) {
				throw err;
			}
			return rejectWithValue(error.response.data);
		}
	}
);

export const fetchUser = createAsyncThunk<TUserState, string>(
	'users/fetchUser',
	async (id: string, { rejectWithValue }) => {
		try {
			const { data } = await fetchUserService(id);
			const userDetails = await data;
			return userDetails;
		} catch (err) {
			const error: AxiosError<TRequestError> = err as any;
			if (!error.response) {
				throw err;
			}
			return rejectWithValue(error.response.data);
		}
	}
);

type TUserInitialState = {
	error: boolean;
	loading: boolean;
	userData: TUsersState;
	userDetails: TUserState;
	success: boolean;
	errMsg: string | undefined;
	orgs: string[] | [];
	currentPage: number;
};

const initialState: TUserInitialState = {
	error: false,
	loading: false,
	userData: [],
	userDetails: {} as TUserState,
	success: false,
	errMsg: '' as string | undefined,
	orgs: [],
	currentPage: 1,
};
const userSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getAllOrgs: (state) => {
			state.orgs = Array.from(
				new Set(state.userData.map((item) => item.orgName))
			).sort();
		},
		setCurrentPage: (state, { payload }) => {
			state.currentPage = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.loading = true;
			state.error = false;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.userData = action.payload;
			state.errMsg = '';
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
			state.errMsg = action.error.message;
		});

		builder.addCase(fetchUser.pending, (state, action) => {
			state.loading = true;
			state.error = false;
		});
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.loading = false;
			state.userDetails = action.payload;
			state.errMsg = '';
		});
		builder.addCase(fetchUser.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
			state.errMsg = action.error.message;
		});
	},
});

export const { getAllOrgs, setCurrentPage } = userSlice.actions;
export default userSlice.reducer;
