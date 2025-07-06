function saklar(no) {
    let togel1 = document.getElementById("cek1");
    let togel2 = document.getElementById("cek2");
    let togel3 = document.getElementById("cek3");
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (togel1.checked) {
        lampu1.src = "on.png";
    } else {
        lampu1.src = "off.png";
    }

    if (togel2.checked) {
        lampu2.src = "on.png";
    } else {
        lampu2.src = "off.png";
    }

    if (togel3.checked) {
        lampu3.src = "on.png";
    } else {
        lampu3.src = "off.png";
    }
}
