
$(document).ready(function() {

/* In JQuery we target id by using # insteadof keyword GetElementById */

var el = document.getElementById('text');

$('[data-trigger="dropdown"]').on('mouseenter', function(){

var submenu = $('.submenu');         /* or var submenu = $(this).parent().find('submenu') */
submenu.fadeIn('500');

$('.profile-menu').on('mouseleave', function() {

submenu.fadeOut('500');
})

});

$('#go-button').on('click', function() {
alert("Thanks for Clicking");
});

$('#append, #prepend, #replace').on('click', function(e) {
var el = $(e.currentTarget);
var action = el.attr('id');
var content = $('.text').val();


if(action == "append") {
  console.log("Appending...", content);
$('#main').append(content);

}else if(action == "prepend") {
  console.log("Prepending...", content);
$('#main').prepend(content);

}else if(action == "replace") {
  console.log("Replacing...");
}
});

/* We target class using . symbol instead of GetElementsByClass */
/*$('.my-input').val("New Value");*/
});
