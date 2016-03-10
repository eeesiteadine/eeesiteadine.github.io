$("img").each(function() {
    var num = get_random(413)
    var src = "/res/" + num + ".jpg";
    $(this).attr("id", num);
    $(this).attr("src", src);
});

function get_random(x) {
    var num = Math.floor(Math.random() * x) + 1;
    return num;
}

$(".left").on("click", function() {
    id = $(this).parent().parent().find("img").attr("id");

    $(this).parent().parent().find("img").attr("src", "/res/" + parseInt(id - 1) + ".jpg");
    $(this).parent().parent().find("img").attr("id", parseInt(id - 1));
    console.log(id)
});
$(".right").on("click", function() {
    id = $(this).parent().parent().find("img").attr("id");
    id = parseInt(id) + 1;
    $(this).parent().parent().find("img").attr("src", "/res/" + id + ".jpg");
    $(this).parent().parent().find("img").attr("id", id);
    console.log(id)
});
