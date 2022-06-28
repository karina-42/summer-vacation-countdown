function countdown() {
  const today = new Date()
  let freedom = new Date(2022, 6, 16)  
  let difference = freedom - today.getTime();
  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24
  

  const days = Math.floor(difference/day);
  const hours =Math.floor((difference % day) / hour);
  const minutes = Math.floor((difference % hour) / minute);
  const seconds = Math.floor ((difference % minute) / second)

  document.querySelector('p').textContent = `${String(days).padStart(2, '0')} days, ${String(hours).padStart(2, '0')} hours, ${String(minutes).padStart(2, '0')} minutes, ${String(seconds).padStart(2, '0')} seconds`
  setInterval(countdown, 1000);

}
countdown();