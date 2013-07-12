<html>
<head>
	<script type="text/javascript" src="js/jquery/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/highcharts/highcharts.js"></script>
	<script type="text/javascript" src="js/jquery-ui/ui/jquery-ui.js"></script>
	<script type="text/javascript" src="js/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/ember/handlebars-1.0.0-rc.4.js"></script>
	<script type="text/javascript" src="js/ember/ember-1.0.0-rc.6.js"></script>
	<script type="text/javascript" src="js/app.js"></script>

	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap/css/bootstrap-responsive.min.css">
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div class="span12">
				<legend>
					<span>Graphing Widget Prototype</span>
				</legend>
			</div>
		</div>
	</div>

	<script type="text/x-handlebars">
		{{#each widget in App.Widgets.items}}
			{{view widget}}
		{{/each}}
	</script>

	<script type="text/x-handlebars" data-template-name="widget">
		<div class="container-fluid widget span5">
			<div class="row-fluid titlebar">
				<div class="span4 title">
					{{view.title}}
				</div>
				<div class="span8 buttons">
					<button {{action switchMode view}} class="btn">
						{{#if view.graphMode}}
							<i class="icon-th-list"></i>
						{{else}}
							<i class="icon-chevron-left"></i>
						{{/if}}
					</button>
				</div>
			</div>

			<div class="graphHere">
			</div>
			{{#unless view.graphMode}}
				<table class="content table">
					<thead>
						<tr>
							<td>Cost Center</td>
							<td>Jan</td>
							<td>Feb</td>
							<td>Mar</td>
							<td>Apr</td>
							<td>May</td>
							<td>Jun</td>
							<td>Jul</td>
							<td>Aug</td>
						</tr>
					</thead>
					<tbody>
						{{#each costcenter in view.data}}
							<tr>
								<td>{{costcenter.title}} </td>
								{{#each value in costcenter.content}}
									<td>{{value}}</td>
								{{/each}}
							</tr>
						{{/each}}
					<tbody>
				</table>
			{{/unless}}
		</div>
	</script>
</body>
</html>