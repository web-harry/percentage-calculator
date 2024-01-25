function calc() {
    var student_name = document.querySelector("#sn1").value;
    var TM = document.querySelector("#tm1").value;
    var OM = document.querySelector("#om1").value;
    var res = (OM / TM) * 100;

    document.querySelector(
        "#change"
    ).innerHTML = `Hey "${student_name}" your marks percentage is (${res} %)`;
}