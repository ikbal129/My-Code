  let lmpRk1 = document.getElementById('r-k1');
  let lmpRk2 = document.getElementById('r-k2');
  let lmpRk3 = document.getElementById('r-k3');
  let lmpRm = document.getElementById('r-m');
  let lmpRt1 = document.getElementById('r-t1');
  let lmpRt2 = document.getElementById('r-t2');
  let lmpRta1 = document.getElementById('r-ta1');
  let lmpRta2 = document.getElementById('r-ta2');
  let lmpRta3 = document.getElementById('r-ta3');
  let lmpRta4 = document.getElementById('r-ta4');
  let tmblRk1 = document.getElementById('lmp-rk1');
  let tmblRk2 = document.getElementById('lmp-rk2');
  let tmblRk3 = document.getElementById('lmp-rk3');
  let tmblAll = document.getElementById('rk-all');
  let tmblRm = document.getElementById('lmp-rm');
  let tmblRt1 = document.getElementById('lmp-rt1');
  let tmblRt2 = document.getElementById('lmp-rt2');
  let rtAll = document.getElementById('rtAll');
  let tmblRta1 = document.getElementById('lmp-rta1');
  let tmblRta2 = document.getElementById('lmp-rta2');
  let tmblRta3 = document.getElementById('lmp-rta3');
  let tmblRta4 = document.getElementById('lmp-rta4');
  
let rtaAll = document.getElementById('rta-all');

function saklar() {
  
  if (tmblRk1.checked && tmblAll.checked == false) {
    lmpRk1.src = "on.png";
  } else {
    lmpRk1.src = "off.png";
  }
  
  if (tmblRk2.checked) {
    lmpRk2.src = "on.png";
  } else {
    lmpRk2.src = "off.png";
  }
  
  if (tmblRk3.checked) {
    lmpRk3.src = "on.png";
  } else {
    lmpRk3.src = "off.png";
  }
  
  if (tmblRt1.checked) {
    lmpRt1.src = "on.png";
  }
  else {
    lmpRt1.src = "off.png";
  }
  
  if(tmblRt2.checked) {
    lmpRt2.src = "on.png";
  }
  else {
    lmpRt2.src = "off.png";
  }
  
  if (tmblRta1.checked) {
    lmpRta1.src = "on.png";
  }
  else {
    lmpRta1.src = "off.png";
  }
  
  if (tmblRta2.checked) {
    lmpRta2.src = "on.png";
  }
  else {
    lmpRta2.src = "off.png";
  }
  
  if (tmblRta3.checked) {
    lmpRta3.src = "on.png";
  }
  else {
    lmpRta3.src = "off.png";
  }
  
  if (tmblRta4.checked) {
    lmpRta4.src = "on.png";
  }
  else {
    lmpRta4.src = "off.png";
  }
}

function saklarAll() {
  if (tmblAll.checked) {
    lmpRk1.src = "on.png";
    lmpRk2.src = "on.png";
    lmpRk3.src = "on.png";
  } else {
    lmpRk1.src = "off.png";
    lmpRk2.src = "off.png";
    lmpRk3.src = "off.png";
  }
  
  if (tmblRm.checked) {
    lmpRm.src = "on.png"; 
  } else {
    lmpRm.src = "off.png";
  }
  
  if (rtAll.checked) {
    lmpRt1.src = "on.png";
    lmpRt2.src = "on.png";
  } else {
    lmpRt1.src = "off.png";
    lmpRt2.src = "off.png";
  }
  
  if (rtaAll.checked) {
    lmpRta1.src = "on.png";
    lmpRta2.src = "on.png";
    lmpRta3.src = "on.png";
    lmpRta4.src = "on.png";
  } else {
    lmpRta1.src = "off.png";
    lmpRta2.src = "off.png";
    lmpRta3.src = "off.png";
    lmpRta4.src = "off.png";

  }
}