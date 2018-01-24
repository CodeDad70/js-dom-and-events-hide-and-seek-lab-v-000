function getFirstSelector(selector) {
	return document.querySelector(selector)
};

function nestedTarget(nested){
	return document.querySelector('#nested .target')
};


function increaseRankBy(n) {
	const ranked = document.querySelectorAll('.ranked-list')

	for (let i =0; i < ranked.length; i++) {
		let rankedList = ranked[i].children

	for (let idx = 0; idx < rankedList.length; idx++)
		rankedList[idx].innerHTML = parseInt(rankedList[idx].innerHTML) + n	
	}
}

function deepestChild() {
	let mainLevel = document.getElementById('grand-node')
	let lowerLevel = mainLevel.children[0]

	while (lowerLevel) {
		mainLevel = lowerLevel
		lowerLevel = mainLevel.children[0]
		
	}	
	return mainLevel
}
