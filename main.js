canvas = d3.select('#canvas');
display = document.getElementById('display')

canvas.on('click', function(){

	x_coor = event.pageX
	y_coor = event.pageY

	display.innerHTML = 'page coordinates: ' + x_coor + ', ' + y_coor

	canvas.append('circle')
		.attr('cx', event.pageX)
		.attr('cy', event.pageY)
		.attr('r', 10)
		.attr('fill', 'green')
})

