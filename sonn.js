$("img").each(function() {
    var num = get_random(413)
    var src = "/res/genel_kültür00" + num + ".jpg";
    $(this).attr("src", src);
});

function get_random(x) {
    var num = Math.floor(Math.random() * x) + 1;
    if (num > 10 && num < 100) {
        return "0" + num;
    } else if (num < 10) {
        return "00" + num;
    } else {
        return num;
    }
}
$("img").on("click", function() {
    var src = "/res/genel_kültür00" + get_random(413) + ".jpg";
    $(this).attr("src", src);
})
