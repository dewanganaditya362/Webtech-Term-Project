 
var arr = document.getElementsByClassName("endorsement");
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