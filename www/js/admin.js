function loadAdminContent(url){
	$.get(url,{},function(data){
		$("#content").removeClass("hidden showMenu");
		$("#navbar").addClass("hideMenu");
		$("#content").html(data);
	})
}

$(function(){
	loadAdminContent("adminContent/about.html");
	$("#admin-teams").click(function(data){
		loadAdminContent("adminContent/teams.html");
	});

	$("#admin-reports").click(function(data){
		loadAdminContent("adminContent/reports.html");
	});

	$("#content table td.name").click(function(){
		//TODO: clicking on the name should popup details
	});
})