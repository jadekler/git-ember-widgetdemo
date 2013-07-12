// INIT

window.App = Ember.Application.create();

// MODEL

App.Widgets = Ember.ArrayController.create({
	items: []
});

// VIEW

App.CostCenter = Ember.Object.extend({
	title: "default",
	content: null
});

App.Widget = Ember.View.extend({
	templateName: "widget",
	someArr: [1,5,3],
	title: "CTL",
	graphElem: ".graphHere",
	graphMode: true,

	didInsertElement: function() {
		this.graphData();
	},

	switchMode: function() {
		this.set("graphMode", !this.graphMode);
		if(this.graphMode) {
			this.graphData();
		} else {
			this.$().find(this.graphElem).empty();
		}
	},

	graphData: function() {
		var self = this;
		var data = [];
		var graphClass = "graphArea";

		$(document).ready(function() {
			self.$().find(self.graphElem).append("<div class='"+graphClass+"'></div>");

			$(self.data).each(function(){
				var datum = {name: this.title, data: this.content};
				data.push(datum);
			});

			self.$().find("."+graphClass).highcharts({
				title: {
					text: 'Scores',
					x: -20
				},
				xAxis: {
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
					labels: {
						rotation: -45
					}
				},
				yAxis: {
					title: {
						text: 'Score'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: data
			});
		});
	}
});

// CONTROLLER

App.ApplicationController = Ember.Controller.extend({
	init: function() {
		var self = this;
		
		for(var x = 0; x < 2; x++) {
			var tempView = App.Widget.create({
				data: Ember.makeArray([
					App.CostCenter.create({title: "Group A", content: self.getRandomArr(8)}),
					App.CostCenter.create({title: "Group B", content: self.getRandomArr(8)}),
					App.CostCenter.create({title: "Group C", content: self.getRandomArr(8)})
				]),
			});
			App.Widgets.items.pushObject(tempView);
		}
	},

	getRandomArr: function(size) {
		var randomArr = [];

		for(var x = 0; x < size; x++) {
			randomArr.push(this.getRandomInt(0, 10));
		}

		return randomArr;
	},

	getRandomInt: function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	switchMode: function(view) {
		view.switchMode();
	}
});
