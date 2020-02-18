$(".to-pack-button").click(function(){
    let packThis = $(".to-pack-input").val();
    $(".packing-list").append(`<li>${packThis}</li>`);
});