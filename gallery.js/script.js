function addTabFocus() {
    console.log("onload event triggered: Page loaded successfully!");

    var images = document.querySelectorAll(".preview");

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex='0' to image " + (i + 1));
    }
}

function upDate(previewPic) {
    console.log("Hover/Focus event triggered on image:", previewPic.alt);

    var displayBox = document.getElementById("image");
    displayBox.innerHTML = previewPic.alt;
    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    console.log("Mouseleave/Blur event triggered: Resetting display.");

    var displayBox = document.getElementById("image");
    displayBox.style.backgroundImage = "url('')";
    displayBox.innerHTML = "Hover over an image below to display here.";
}
