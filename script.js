const input = document.getElementById("form__input");
const btn = document.getElementById("form__btn");
const text = document.querySelector(".item__span")
const text_1 = document.getElementById("item__span-1");
const text_2 = document.getElementById("item__span-2");
const text_3 = document.getElementById("item__span-3");
const text_4 = document.getElementById("item__span-4");

btn.addEventListener("click", function (e) {
    e.preventDefault()


    function sec2hms(timect) {
        if (timect === undefined || timect == 0 || timect === null) {
            return ''
        };
        //timect is seconds, NOT milliseconds
        var se = (timect % 60).toFixed(0); //the remainder after div by 60
        timect = Math.floor(timect / 60);
        var mi = (timect % 60).toFixed(0); //the remainder after div by 60
        timect = Math.floor(timect / 60);
        var hr = (timect % 24).toFixed(0); //the remainder after div by 24
        var dy = Math.floor(timect / 24);
        return padify(se, mi, hr, dy);
    }

    function padify(se, mi, hr, dy) {
        hr = hr < 10 ? "0" + hr : hr;
        mi = mi < 10 ? "0" + mi : mi;
        se = se < 10 ? "0" + se : se;
        dy = dy > 0 ? dy + "d " : "";
        return dy + hr + ":" + mi + ":" + se;
    }


    const time_1 = ((Number(input.value) * 1000) / (5.1 * (5 / 18))).toFixed(2)
    text_1.textContent = sec2hms(time_1)
    document.querySelector("#item__span-1").style.fontSize = "26px";
    document.querySelector("#item__span-1").style.margin = "30px 0 0 0";

    const time_2 = ((Number(input.value) * 1000) / (22 * (5 / 18))).toFixed(2)
    text_2.textContent = sec2hms(time_2);
    document.querySelector("#item__span-2").style.fontSize = "26px";
    document.querySelector("#item__span-2").style.margin = "30px 0 0 0";

    const time_3 = ((Number(input.value) * 1000) / (80 * (5 / 18))).toFixed(2)
    text_3.textContent = sec2hms(time_3);
    document.querySelector("#item__span-3").style.fontSize = "26px";
    document.querySelector("#item__span-3").style.margin = "30px 0 0 0";

    const time_4 = ((Number(input.value) * 1000) / (800 * (5 / 18))).toFixed(2)
    text_4.textContent = sec2hms(time_4);
    document.querySelector("#item__span-4").style.fontSize = "26px";
    document.querySelector("#item__span-4").style.margin = "30px 0 0 0";

    console.log(sec2hms(time_1));
})