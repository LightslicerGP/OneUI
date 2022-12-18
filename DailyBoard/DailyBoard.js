const deg = 6,
	hr = document.querySelector('#hr'),
	mn = document.querySelector('#mn'),
	sc = document.querySelector('#sc');
setInterval(() => {
	let day = new Date(),
		hh = day.getHours() * 30,
		mm = day.getMinutes() * deg,
		ss = day.getSeconds() * deg;
	hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})

const textHour = document.getElementById('hour'),
	textMinutes = document.getElementById('minutes'),
	textAmPm = document.getElementById('ampm'),
	dateWeek = document.getElementById('week'),
	dateDay = document.getElementById('day'),
	dateMonth = document.getElementById('month'),
	dateYear = document.getElementById('year')
const clockText = () => {
	let date = new Date()
	let hh = date.getHours(),
		ampm,
		mm = date.getMinutes(),
		day = date.getDate(),
		dayweek = date.getDay(),
		month = date.getMonth(),
		year = date.getFullYear()
	// We change the hours from 24 to 12 hours and establish whether it is AM or PM
	if (hh >= 12) {
		hh = hh - 12
		ampm = 'PM'
	} else {
		ampm = 'AM'
	}
	// We detect when it's 0 AM and transform to 12 AM
	if (hh == 0) {
		hh = 12
	}
	// Show a zero before hours
	if (hh < 10) {
		hh = `0${hh}`
	}
	// Show time
	textHour.innerHTML = `${hh}:`
	// Show a zero before the minutes
	if (mm < 10) {
		mm = `0${mm}`
	}
	// Show minutes
	textMinutes.innerHTML = mm
	// Show am or pm
	textAmPm.innerHTML = ampm
	// If you want to show the name of the day of the week
	let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
	// We get the months of the year and show it
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	// We show the day, the month and the year
	dateDay.innerHTML = day
	dateWeek.innerHTML = `${week[dayweek]}`
	dateMonth.innerHTML = `${months[month]},`
	dateYear.innerHTML = year
}
setInterval(clockText, 1000); // 1000 = 1s