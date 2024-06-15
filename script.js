// var cnt1 = document.getElementById('cnt1');
// var cnt2 = document.getElementById('cnt2');
// var cnt3 = document.getElementById('cnt3');
// var ceb1 = document.getElementById('ceb1');
// var ceb2 = document.getElementById('ceb2');
// var ceb3 = document.getElementById('ceb3');

// function act1 (){
//     ceb1.style.transform = "translateX(0%)"
//     ceb2.style.transform = "translateX(-100%)"
//     ceb3.style.transform = "translateX(-100%)"
//     ceb1.style.transform = "translateY(0%)"
//     ceb2.style.transform = "translateY(-100%)"
//     ceb3.style.transform = "translateY(-200%)"
//     ceb1.style.transitionDelay = "0.3s"
//     ceb2.style.transitionDelay = "0s"
//     ceb3.style.transitionDelay = "0s"

// }
// function act2 (){
//     ceb1.style.transform = "translateX(-100%)"
//     ceb2.style.transform = "translateX(0%)"
//     ceb3.style.transform = "translateX(-100%)"
//     ceb1.style.transform = "translateY(0%)"
//     ceb2.style.transform = "translateY(-100%)"
//     ceb3.style.transform = "translateY(-200%)"
//     ceb1.style.transitionDelay = "0s"
//     ceb2.style.transitionDelay = "0.3s"
//     ceb3.style.transitionDelay = "0s"

// }
// function act3 (){
//     ceb1.style.transform = "translateX(-100%)"
//     ceb2.style.transform = "translateX(-100%)"
//     ceb3.style.transform = "translateX(0%)"
//     ceb1.style.transform = "translateY(0%)"
//     ceb2.style.transform = "translateY(-100%)"
//     ceb3.style.transform = "translateY(-200%)"
//     ceb1.style.transitionDelay = "0s"
//     ceb2.style.transitionDelay = "0s"
//     ceb3.style.transitionDelay = "0.3s"
 
// }



function run(){
    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlcode+"<style>"+csscode +"</style>";
    output.contentWindow.eval(jscode);

}