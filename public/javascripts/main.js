//function to make progress par


function progressBarFunc() {
    var uploadImg = document.querySelector("#input-upload");
    var uploadBtn = document.querySelector("#btn-upload");
    var bar = document.querySelector(".bar");
    var uploadEnded = document.querySelector(".upload-ended");
    uploadBtn.addEventListener("click", function () {
        uploadImg.click();
    });
    uploadImg.addEventListener("change", function () {
        var width = 1;
        var interval = setInterval(frame, 1);
        function frame() {
            if (width >= 150) {
                clearInterval(interval);
                uploadEnded.textContent = "اكتمل التحميل"
            } else {
                width++;
                bar.style.width = width + "%";
                uploadEnded.textContent = "";
            }
        }
    });
}

progressBarFunc();