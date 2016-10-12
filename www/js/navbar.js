var Navbar = {
	menuBarClass: ".menubar",
	init: function(){
		$("#navbar").click(this.showMenu);
	},
	setHeight: function(height){
		$("#navbar").css({'height':height})
	}

	showMenu: function(){
		$("#navbar").removeClass(".hideMenu")
	},
	hideMenu: function(){
		$("#navbar").addClass(".hideMenu")
	}
}