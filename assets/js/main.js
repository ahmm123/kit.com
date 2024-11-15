const plus = document.getElementById("plus");
const negetive = document.getElementById("negetive");
const khazan = document.getElementById("khazan");
const tranzistor = document.getElementById("tranzistor");
const led = document.getElementById("led");
const buzzer = document.getElementById("buzzer");
const arrow = document.getElementById("arrow");
const adder = document.getElementById("adder");
let changing = document.getElementById("e0");
const elements = [
    document.getElementById("e1"),
    document.getElementById("e2"),
    document.getElementById("e3"),
    document.getElementById("e4"),
    document.getElementById("e5"),
    document.getElementById("e6"),
    document.getElementById("e7"),
    document.getElementById("e9"),
    document.getElementById("e10"),
    document.getElementById("e11")
];
const arrows = ["", "", "", "", "", "", "", "", "", ""];
const statuses = ["", "", "", "", "", "", "", "", "", ""];


for (let index = 0; index < 10; index++) {
    elements[index].addEventListener("click", () => {
        changing = elements[index];
    });
}


plus.addEventListener("click", () => {
    if (changing != document.getElementById("e0")) {
        adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "plus";
                adder.hidden = true;
                arrow.hidden = true;
                if (arrows[elements.indexOf(changing)] == "بالا" && statuses[(elements.indexOf(changing) - 4)] == "negetive") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "پایین" && statuses[(elements.indexOf(changing) + 4)] == "negetive") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "چپ" && statuses[(elements.indexOf(changing) + 1)] == "negetive") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "راست" && statuses[(elements.indexOf(changing) - 1)] == "negetive") {
                    alert("!!!خطر اتصالی!!!");
                }else {
                    changing.src = "assets/images/plus.png";
                }
            }
        });
    }else{
        alert("شما هیچ قسمتی را انتخاب نکرده اید.")
    }
});


negetive.addEventListener("click", () => {
    adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "negetive";
                adder.hidden = true;
                arrow.hidden = true;
                if (arrows[elements.indexOf(changing)] == "بالا" && statuses[(elements.indexOf(changing) - 4)] == "plus" || statuses[(elements.indexOf(changing) + 4)] == "plus") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "پایین" && statuses[(elements.indexOf(changing) + 4)] == "plus" || statuses[(elements.indexOf(changing) - 4)] == "plus") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "چپ" && statuses[(elements.indexOf(changing) - 1)] == "plus" || statuses[(elements.indexOf(changing) + 1)] == "plus") {
                    alert("!!!خطر اتصالی!!!");
                }if (arrows[elements.indexOf(changing)] == "راست" && statuses[(elements.indexOf(changing) + 1)] == "plus" || statuses[(elements.indexOf(changing) - 1)] == "plus") {
                    alert("!!!خطر اتصالی!!!");
                }else {
                    changing.src = "assets/images/negetive.png";
                }
            }
        });
});


khazan.addEventListener("click", () => {
    adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "khazan";
                adder.hidden = true;
                arrow.hidden = true;
                changing.src = "assets/images/khazan.png";
            }
        });
});


tranzistor.addEventListener("click", () => {
    adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "tranzistor";
                adder.hidden = true;
                arrow.hidden = true;
                changing.src = "assets/images/tranzistor.png";
            }
        });
});


led.addEventListener("click", () => {
    adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "led";
                adder.hidden = true;
                arrow.hidden = true;
                changing.src = "assets/images/led.png";
            }
        });
});


buzzer.addEventListener("click", () => {
    adder.hidden = false;
        arrow.hidden = false;
        alert("مسیر انتقال برق توسط قطعه را در فیلد وارد کنید.(بالا،پایین،چپ،راست)");
        adder.addEventListener("click", () => {
            if (arrow.value == "بالا" || arrow.value == "پایین" || arrow.value == "چپ" || arrow.value == "راست") {
                arrows[elements.indexOf(changing)] = arrow.value;
                statuses[elements.indexOf(changing)] = "buzzer";
                adder.hidden = true;
                arrow.hidden = true;
                changing.src = "assets/images/buzzer.png";
            }
        });
});
