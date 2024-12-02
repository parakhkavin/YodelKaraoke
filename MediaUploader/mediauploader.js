$(document).ready(function () {
    $("#selectVideo").change(function () {
        var fileInput = document.getElementById("selectVideo");
        var fileUrl = window.URL.createObjectURL(fileInput.files[0])
        $("#playVideo").attr("src", fileUrl);


    })

    $("#closeMediaPlayer").click(function () {
        var c = confirm("Do You Want To Exit?");
        if (c == true) {
            window.close();
        }
    })
})