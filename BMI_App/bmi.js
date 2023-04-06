var standard_btn = document.getElementById("standard-btn");
var metric_btn = document.getElementById("metric-btn");

standard_btn.addEventListener('click', when_std_btn_clicked);
when_std_btn_clicked ();

function when_std_btn_clicked (){
    document.getElementById("metric-tab").style.setProperty('display','none');
    document.getElementById("standard-tab").style.setProperty('display', 'block');
    document.getElementById("standard-btn").style.setProperty('background-color', 'lightgreen');
    document.getElementById("metric-btn").style.setProperty('background-color','');
}

metric_btn.addEventListener('click', when_met_btn_clicked);

function when_met_btn_clicked (){
    document.getElementById("metric-tab").style.setProperty('display','block');
    document.getElementById("standard-tab").style.setProperty('display', 'none');
    document.getElementById("standard-btn").style.setProperty('background-color', '');
    document.getElementById("metric-btn").style.setProperty('background-color','mediumpurple');
}

document.querySelector("#standard-tab button").onclick = function () {
    var foot = Number(document.getElementById("foot").value);
    var inch = Number(document.getElementById("inch").value);
    var pound = Number(document.getElementById("pound").value);
    var bmi = pound / (foot*12 + inch)**2 * 703;
    document.querySelector("#standard-tab p").innerHTML = explain(bmi);
}

document.querySelector("#metric-tab button").onclick = function () {
    var cm = Number(document.getElementById("cm").value);
    var kg = Number(document.getElementById("kg").value);
    var bmi = kg / (cm*0.01)**2;
    document.querySelector("#metric-tab p").innerHTML = explain(bmi);
}

function explain(bmi){
    var result = "Your BMI is" + bmi.toFixed(1);
    if (bmi < 18.5) {
        result += "(Underweight)"
    } else if (bmi < 24.9) {
        result += "(Normal weight)"
    } else if (bmi < 29.9) {
        result += "(Overweight)"
    } else {
        result += "(Obesity)"
    }
    return result;
}




