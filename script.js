let b_ody = document.body;
let calc_Shown = document.querySelector(".calculation-Shown");
let tool_box = document.querySelector(".Tool-Box");
let delete_btn = document.querySelector(".delete-btn");
let Num_btn = document.querySelectorAll("#Num-btn");
let Reset = document.querySelector(".Reset");
let equal = document.querySelector(".Equal");
let calc = document.querySelector(".calc");
let theme = document.querySelector(".theme");
let Rd_btn1 = document.querySelector(".radio-btn").children[0].firstElementChild;
let Rd_btn2 = document.querySelector(".radio-btn").children[1].firstElementChild;
let Rd_btn3 = document.querySelector(".radio-btn").children[2].firstElementChild;



function theme1() {
    b_ody.style.background = "hsl(0, 0%, 90%)";
    b_ody.style.color = "hsl(0, 0%, 100%)";

    calc_Shown.style.background = "white"
    calc_Shown.style.color = "black";

    tool_box.style.background = "hsl(0, 5%, 81%)"
    tool_box.style.background = "hsl(0, 5%, 81%)"

    delete_btn.style.background = "hsl(185, 42%, 37%)"
    delete_btn.style.color = "hsl(45, 7%, 89%)"

    Num_btn.forEach((e) => {
        e.style.background = "hsl(45, 7%, 89%)"
        e.style.color = "black"
    })

    Reset.style.background = "hsl(185, 42%, 37%)"
    Reset.style.color = "hsl(45, 7%, 89%)"

    equal.style.background = "hsl(25, 98%, 40%)"
    equal.style.color = "hsl(45, 7%, 89%)"

    calc.style.color = "black"
    theme.firstElementChild.style.color = "black"

    Rd_btn1.style.color = "black"
    Rd_btn2.style.color = "black"
    Rd_btn3.style.color = "black"
}


function theme2() {
    b_ody.style.background = "hsl(268, 75%, 9%)";
    b_ody.style.color = "hsl(52, 100%, 62%)";

    calc_Shown.style.background = "hsl(268, 71%, 12%)"
    calc_Shown.style.color = "hsl(52, 100%, 62%)";

    tool_box.style.background = "hsl(268, 71%, 12%)"
    // document.querySelector(".Tool-Box").style.background = "hsl(0, 5%, 81%)"

    delete_btn.style.background = "hsl(281, 89%, 26%)"
    delete_btn.style.color = "hsl(0, 0%, 100%)"

    Num_btn.forEach((e) => {
        e.style.background = "hsl(268, 47%, 21%)"
        e.style.color = "hsl(52, 100%, 62%)"
    })

    Reset.style.background = "hsl(281, 89%, 26%)"
    Reset.style.color = "hsl(0, 0%, 100%)"

    equal.style.background = "hsl(176, 100%, 44%)"
    equal.style.color = "hsl(198, 20%, 13%)"

    calc.style.color = "hsl(52, 100%, 62%)"
    theme.firstElementChild.style.color = "hsl(52, 100%, 62%)"

    Rd_btn1.style.color = "hsl(52, 100%, 62%)"
    Rd_btn2.style.color = "hsl(52, 100%, 62%)"
    Rd_btn3.style.color = "hsl(52, 100%, 62%)"
}

function theme3() {
    b_ody.style.background = "hsl(222, 26%, 31%)";
    b_ody.style.color = "hsl(0, 0%, 100%)";

    calc_Shown.style.background = "hsl(223, 31%, 20%)"
    calc_Shown.style.color = "hsl(0, 0%, 100%)";

    tool_box.style.background = "hsl(223, 31%, 20%)"
    // document.querySelector(".Tool-Box").style.background = "hsl(0, 5%, 81%)"

    delete_btn.style.background = "hsl(225, 21%, 49%)"
    delete_btn.style.color = "hsl(30, 25%, 89%)"

    Num_btn.forEach((e) => {
        e.style.background = "hsl(30, 25%, 89%)"
        e.style.color = "hsl(225, 21%, 49%)"
    })

    Reset.style.background = "hsl(225, 21%, 49%)"
    Reset.style.color = "hsl(30, 25%, 89%)"

    equal.style.background = "hsl(6, 63%, 50%)"
    equal.style.color = "hsl(30, 25%, 89%)"

    calc.style.color = "hsl(0, 0%, 100%)"
    theme.firstElementChild.style.color = "hsl(0, 0%, 100%)"

    Rd_btn1.style.color = "hsl(0, 0%, 100%)"
    Rd_btn2.style.color = "hsl(0, 0%, 100%)"
    Rd_btn3.style.color = "hsl(0, 0%, 100%)"

}

let C_shown = "";

Array.from(Num_btn).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            C_shown = eval(C_shown);
            calc_Shown.value = C_shown;
        }
        else if(e.target.innerHTML == 'RESET'){
            C_shown = "";
            calc_Shown.value = C_shown;
        }
        else if(e.target.innerHTML == 'DEL'){
            C_shown = C_shown.substring(0, C_shown.length-1);
            calc_Shown.value = C_shown;
        }
        else {
            // console.log(e.target);
            C_shown = C_shown + e.target.innerHTML;
            calc_Shown.value = C_shown;
        }
    })
})

// let btn = Array.from(Num_btn)
// console.log(btn);

