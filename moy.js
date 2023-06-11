function twotests(DS, EX, coeff) {
    return (((DS + EX * 2) / 3) * coeff);
}

function onetest(DS, coeff) {
    return (DS * coeff);
}

const err = `
border: 3px solid red; 
outline-color: red`;

const succ = `
border: 3px #00FF00 solid; 
outline-color: #00FF00 `;

function Verify()
{
var dev = document.getElementsByClassName("dev");
var test = true;
for (var i = 0; i < dev.length; i++) {
    if (parseFloat(dev[i].value) < 0 || parseFloat(dev[i].value) > 20 || dev[i].value == '') {
        dev[i].style.cssText = err;
        test = false;
    }
    else{
        dev[i].style.cssText = succ;

    }
}
if (test == false) {
    alert("Please make sure you fill all inputs and that all inputs are Numbers between 0 and 20")
}
return test;

}

function clicked() {
    if (Verify())
    {

    var note = 0;
    var dev = document.getElementsByClassName("dev");

    var x = 2;

    for (var i = 0; i < dev.length; i += x) {
        if (dev[i].classList[2] == "coef1") {
            var coef = 1;
        }
        else if (dev[i].classList[2] == "coef15") {
            var coef = 1.5;
        }
        else {
            var coef = 0.5;
        }

        if (dev[i].classList[1] == "two") {
            note += twotests(parseFloat(dev[i].value), parseFloat(dev[i + 1].value), coef)



        }
        else {
            console.log(i)
            note += onetest(parseFloat(dev[i].value), coef);
        }
        if (i == 16) {
            ++i;
            x = 1;

        }
    }

    but = document.getElementById("but");
    but.addEventListener("click", show);

    function show() {
        d = document.getElementById("NOT")
        d.textContent = ("La moyenne est : " + (note / 15).toFixed(2));
    }


}
}


