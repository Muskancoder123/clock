setInterval(() => {
    let hoursElem = document.getElementById('hours');
    let minutesElem = document.getElementById('minutes');
    let secondsElem = document.getElementById('seconds');
    let ampmElem = document.getElementById('ampm');
  
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');
  
    let dotH = document.querySelector('.h_dot');
    let dotM = document.querySelector('.m_dot');
    let dotS = document.querySelector('.s_dot');
  
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ap = h >= 12 ? 'PM' : 'AM';
  
    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
        h = 12;
    }
  
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
  
    hoursElem.innerHTML = h + ' Hours';
    minutesElem.innerHTML = m + ' Minutes';
    secondsElem.innerHTML = s + ' Seconds';
    ampmElem.innerHTML = ap;
  
    hh.style.strokeDashoffset = 440 - (440 * (h % 12) / 12);
    mm.style.strokeDashoffset = 440 - (440 * m / 60);
    ss.style.strokeDashoffset = 440 - (440 * s / 60);
  
    dotH.style.transform = `rotate(${h * 30}deg)`;
    dotM.style.transform = `rotate(${m * 6}deg)`;
    dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);
