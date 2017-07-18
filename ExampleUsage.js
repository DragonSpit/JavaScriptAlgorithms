function simpleUsageExampleOfRadixSortLSD() {
	var arrayToBeSorted = [ 99, 1999999999, 51, 23, 102];
	var sortedArray = radixSortLSD(arrayToBeSorted);
	for ( var _current = 0; _current < sortedArray.length; _current++ ) {
		console.log(sortedArray[_current]);
	}
}

function compareIDs(a, b) { return a.id - b.id; }

function getKey(elementA) { return elementA.id; }

function javaScriptSortingObjectsExample()
{
	const people = [ 
		{ person: 'George', id: 2},
		{ person: 'Alexa',  id: 4},
		{ person: 'David',  id: 1}
	];
	
	//console.log(people.sort(compareIDs));		// built-in JavaScript sort usage example
	
	console.log(radixSortLSD(people, getKey));	// LSD Radix sort usage example
}
