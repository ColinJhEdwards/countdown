const countdown = setInterval(() => {
  //Setting date that is assigned for opening
  const countDate = new Date("Decemeber 25, 2021 00:00:00").getTime();
  // setting date for current time
  const now = new Date().getTime();
  // getting the difference between the two
  const gap = countDate - now;

  //setting times
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //calculate
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //update html
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
}, 1000);

countdown();
