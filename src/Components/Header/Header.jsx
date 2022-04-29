function Header() {
	const monthArr = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const getDate = () => {
		const date = new Date();
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();
		return `${monthArr[month]} ${day}, ${year}`;
	};
	const isNight = () => {
		const date = new Date();
		const hour = date.getHours();
		return hour >= 18 || hour < 6;
	};
	return (
		<div className="header-container">
			<h4 className="header-text">
				{' '}
				<span className="heading-emoji">🌻</span>Lunar Focus
			</h4>
			<h5 className="header-date">
				{!isNight() ? '🌞' : '🌙'} {getDate()}
			</h5>
		</div>
	);
}
export default Header;
