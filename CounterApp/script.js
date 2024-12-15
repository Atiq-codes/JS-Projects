const decrementbtn = document.getElementById("decrease");
const incrementbtn = document.getElementById("Increase");
const resetbtn = document.getElementById("reset");
const countlabel = document.getElementById("Counter");
let count = 0;

incrementbtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
decrementbtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}
