// Forumla for hour hand
// 12hrs -> 360degree
// 1hr -> 30 deg
// for h hours 30*h

// 60 min -> 30degree
// 1 min ->  0.5degree
// for m mins 0.5m

// hence, 30h + 0.5m , here we did not include seconds coz its effect is negligible.

// Similarly for Minutes
// 60Min -> 360deg
// 1Min -> 6deg
// m min -> 6m deg

// for Seconds
// 60Sec -> 360deg
// 1Sec -> 6deg
// s Sec -> 6S deg

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

}, 1000);