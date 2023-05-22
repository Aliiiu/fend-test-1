import moment from 'moment';

export const statusTag = (value: string) => {
	const now = moment();
	const lastActive = moment(value);
	const diffInDays = now.diff(lastActive, 'days');
	if (diffInDays < 1) {
		return 'Pending';
	} else if (diffInDays < 7) {
		return 'Active';
	} else if (diffInDays < 30) {
		return 'Inactive';
	} else {
		return 'Blacklisted';
	}
};
