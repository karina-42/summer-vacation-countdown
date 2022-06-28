

function countdown() {
  let now = new Date()
  

  let bedtime = new Date(now.getFullYear(), now.getMonth(), now.getDate()).setHours(22)
  
  let difference = bedtime - now.getTime();
  

  const hour = Math.floor(difference/1000/60/60)%60;
  const minute =Math.floor(difference/1000/60)%60;
  const second = Math.floor(difference/1000)%60;

  document.querySelector('p').textContent = `${String(hour).padStart(2, '0')} hours, ${String(minute).padStart(2, '0')} minutes, ${String(second).padStart(2, '0')} seconds`
  setInterval(countdown, 1000);

  if (difference < 0) {
    document.querySelector('h1').textContent = " COUNTDOWN IS OVER"
    document.querySelector('p').textContent = "GO TO BED";
    document.querySelector('body').style.background = 'black';
    document.querySelector('main').style.color = 'white';
  }
}
countdown();

// document.querySelector('#reset').addEventListener('click', countdown)