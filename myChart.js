//Variabele "myChart" wordt aangemaakt
var myChart = new Chartist.Line('.ct-chart', {
	//Labels worden toegevoegd op de horizontale as
	labels: ['', '', '', 'snelheid x 1000', ''],
	//Series worden aangemaakt voor de verticale as met waarden
	series: [
	[5, 8, 7, 10, 6]
	]
}, {
	//Opmaakt voor de grafiek
	fullWidth: true,
	chartPadding: {
		right: 40
	}
});