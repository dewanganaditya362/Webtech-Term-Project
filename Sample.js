var arr = document.getElementsByClassName("sample");
var i;

for (i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var choice1 = document.getElementById("like1");
var choice2 = document.getElementById("unlike1");
var textBox = document.getElementById("area1");
var submitB = document.getElementById("submit1"); 
var area = document.getElementById("textArea1");
choice1.addEventListener("click", function () {

    choice1.style.display = "none";
    choice2.style.display = "none";
    var count= Math.floor((Math.random() * 1000) + 1);;
    document.getElementById("rating1").innerHTML = "Like count: " + count;


});

choice2.addEventListener("click", function () {
    
    choice1.style.display = "none";
    choice2.style.display = "none";
    textBox.style.display = "block";

});

submitB.addEventListener("click", function()
{
   area.value=" ";
   area.style.display="none";
    submitB.value="Done!"
});


var choice3 = document.getElementById("like2");
var choice4 = document.getElementById("unlike2");
var textBox1 = document.getElementById("area2");
var submitB1 = document.getElementById("submit2"); 
var area1 = document.getElementById("textArea2");
choice3.addEventListener("click", function () {

    choice3.style.display = "none";
    choice4.style.display = "none";
    var count= Math.floor((Math.random() * 1000) + 1);;
    document.getElementById("rating2").innerHTML = "Like count: " + count;


});

choice4.addEventListener("click", function () {
    
    choice3.style.display = "none";
    choice4.style.display = "none";
    textBox1.style.display = "block";

});

submitB1.addEventListener("click", function()
{
   area1.value=" ";
   area1.style.display="none";
    submitB1.value="Done!"
});


var choice5 = document.getElementById("like3");
var choice6 = document.getElementById("unlike3");
var textBox2 = document.getElementById("area3");
var submitB2 = document.getElementById("submit3"); 
var area2 = document.getElementById("textArea3");
choice5.addEventListener("click", function () {

    choice5.style.display = "none";
    choice6.style.display = "none";
    var count= Math.floor((Math.random() * 1000) + 1);;
    document.getElementById("rating3").innerHTML = "Like count: " + count;


});

choice6.addEventListener("click", function () {
    
    choice5.style.display = "none";
    choice6.style.display = "none";
    textBox2.style.display = "block";

});

submitB2.addEventListener("click", function()
{
   area2.value=" ";
   area2.style.display="none";
    submitB2.value="Done!"
});





