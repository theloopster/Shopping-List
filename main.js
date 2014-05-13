$(document).ready(function() {

var list = $('ul.list');
var buttonA = $('#newItemAdd');
//add an item to the list by button//
buttonA.click(function(){
	var mostuff = $('input').val();
	var newItem = $('<li>'+mostuff.substring(0,29)+'</li>')
	if(mostuff==""){
		alert("Type something in, dumbass")
	}
	else
	{
		var newItem = $('<li>'+mostuff+'</li>')
		list.append(newItem);
		$('input').val('');

}
});
//delete off an item by double clicking//
$('li').dblclick(function(){
$(this).fadeOut('slow');

})
//strike through an item by clicking//
$('li').click(function(){
$(this).css("text-decoration", "line-through");

})
//add an item to the list by enter//
$(document).keypress(function(e){
	if(e.which==13){
	var mostuff = $('input').val();
	var newItem = $('<li>'+mostuff+'</li>')
	if(mostuff!=""){
		list.append(newItem);
		$('input').val('');
	}
	else
	{
				alert("Type something in, dumbass")

}
};
})
//reorderlist - not going to happen in this version//



});