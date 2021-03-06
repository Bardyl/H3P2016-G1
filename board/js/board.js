var board={
	defaults : {
		board : '#boardCanvas',
		recorded : function(){},
		rendered : function(){}
	},
	
	init : function(options){
		this.params=$.extend(this.defaults,options);
	},
	
	record : function(datas){
		var key=datas.date;
		localStorage.setItem(key,JSON.stringify(datas));
		this.params.recorded.call(this,datas);
	},
	
	render : function(datas){
		var div=$('<div>').addClass('card');
		var d=new Date(datas.date);
		var date=d.getFullYear()+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+('0'+d.getDate()).slice(-2);
		var dateSpan=$('<span>').addClass('date').html(date);
		var textSpan=$('<span>').addClass('text').html(datas.title);
		var deleteButton=$('<a>').addClass('deleteButton').attr('href','').text('[delete]');
		div.append(dateSpan,textSpan,deleteButton);
		$(this.params.board).append(div);
		this.params.rendered.call(this);
	},
	
	checkout : function(){
		for(i in localStorage){
			this.render(JSON.parse(localStorage.getItem(i)));
		}
	}
}


























