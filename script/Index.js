Array.prototype.bubblesort = function() {
	var done = false;
	while (! done) {
		done = true;
		for (var i = 1; i < this.length; i++) {
			if (this[i - 1] > this[i]) {
				done = false;
				var tmp = this[i - 1];
				this[i - 1] = this[i];
				this[i] = tmp;
			}
		}
	}
	return this;
}

geraVector = function(size) {
	var vector = [];
	for(var i = size; i > 0; i--) {
		vector.push(i);
	}
	return vector;
}

$(document).ready(function(){
	var array = geraVector(100000);
	array.bubblesort();
	$.each(array, function(){
		$('#order').append(this + ", ");
	});
});