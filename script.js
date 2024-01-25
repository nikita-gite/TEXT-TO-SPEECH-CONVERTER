if ("speechSynthesis" in window) {
    var hdemo = document.getElementById("demo"),
        hvoice = document.getElementById("voice"),
        hvol = document.getElementById("vol"),
        hpitch = document.getElementById("pitch"),
        hrate = document.getElementById("rate"),
        hmsg = document.getElementById("msg"),
        hgo = document.getElementById("go");
    
    var voices = () => {
      speechSynthesis.getVoices().forEach((v, i) => {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = v.name;
        hvoice.appendChild(opt);
      });
    };
    voices();
    speechSynthesis.onvoiceschanged = voices;
  
    var speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.voice = speechSynthesis.getVoices()[hvoice.value];
      msg.text = hmsg.value;
      msg.volume = +hvol.value;
      msg.pitch = +hpitch.value;
      msg.rate = +hrate.value;
      speechSynthesis.speak(msg);
      return false;
    };
    
    hdemo.onsubmit = speak;
    hgo.disabled = false;
  }
  