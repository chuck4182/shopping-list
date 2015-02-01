$(document).ready(function(){

	var add_new_item = function(){
			var div = $("<div class='item_div'><span class='btn_delete'><a href='#'><img src='images/delete.jpg' style='width: 100px; height: 42px'/></a></span></div>");
			var item = $("#add_item_box").val();
			var item_span = $("<span class = 'item_span'></span>").text(item);
			var new_div = div.prepend(item_span);
			var btn_done = $("<span class='btn_done'><input type='checkbox' class='btn_done'>Got It</span>");
			var item_div = new_div.prepend(btn_done);
			item_div.prependTo("#dynamic_list");
	};

	$("#submit").on('click', function(e){
		e.preventDefault(e);
		add_new_item();
		$("#add_item_box").val(" ");
		});

	$("#reset").on('click', function(){
		$(".item_div").remove();
	});

	$("#dynamic_list").on('click', ".btn_delete", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	
	}).on('click', ".btn_done",function(){
		if($(".btn_done").is(':checked')){
			$(this).closest(".item_div").children().css('text-decoration', 'line-through');
			$(".btn_done").css('text-decoration', 'none');
		}
		else {
		$(this).closest(".item_div").children().css('text-decoration', 'none');}

	});
})
