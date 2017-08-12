canvas = d3.select('#canvas');
display = document.getElementById('display')

canvas.on('click', function(){

	x_coor = event.pageX
	y_coor = event.pageY

	display.innerHTML = 'x, y: ' + x_coor + ', ' + (400-y_coor)

	canvas.append('circle')
		.attr('cx', event.pageX)
		.attr('cy', event.pageY)
		.attr('r', 10)
		.attr('fill', 'green')
})

