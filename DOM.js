var bgcolor = document.getElementById("bg-color");
    var txtcolor = document.getElementById("text-color");

    bgcolor.addEventListener("change", event => {
        document.body.style.backgroundColor = bgcolor.value;
    });
    txtcolor.addEventListener("change", event => {
        document.body.style.color = txtcolor.value;
    });