var start_color = document.querySelector("#start-color");
var end_color = document.querySelector("#end-color");

var body = document.getElementById("body");

var css_rule = document.getElementById("bg_gradient");


showGradient();


function showGradient(){
    body.style.background = "linear-gradient(to right,"+start_color.value +","+end_color.value+")";
    
    css_rule.textContent = body.style.background;
}

start_color.addEventListener("input", showGradient)

end_color.addEventListener("input", showGradient);