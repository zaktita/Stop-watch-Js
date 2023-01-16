let display = document.getElementById("timeDisplay");
let starBtn = document.getElementById("starBtn");
let interval;
let [h, m, s, ms] = [0, 0, 0, 0];

      document.getElementById("starBtn").addEventListener("click", () => {
       
        starBtn.disabled =true
        interval = setInterval(timerDiplay, 10);
      });
      document.getElementById("pauseBtn").addEventListener("click", () => {
        starBtn.disabled =false
        clearInterval(interval);
      });
      document.getElementById("resetBtn").addEventListener("click", () => {
        starBtn.disabled =false
        clearInterval(interval);
        [h, m, s, ms] = [0, 0, 0, 0];
        display.innerHTML = "00 : 00 : 00 : 000";
      });

      function timerDiplay() {
        ms = ms + 10;
        if (ms > 999) {
          ms = 10;
          s++;
          if (s > 59) {
            s = 0;
            m++;
            if (m > 59) {
              m = 0;
              h++;
              if (h > 23) {
                h = 0;
              }
            }
          }
        }

        let heure;
        let sec;
        let mili;

        if (h < 10) {
          heure = "0" + h;
        } else heure = h;

        let minutes = m<10? "0" +m : m // variation of writing a conditions
        if (s < 10) {
          sec = "0" + s;
        } else sec = s;

        if (ms < 100) {
          mili = "0" + ms;
        } else mili = ms;

        display.innerHTML = heure + " : " + minutes + " : " + sec + " : " + mili;
    }