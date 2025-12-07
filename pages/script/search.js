function searchText(e) {
	if(e.key !== 'Enter')
		return;
	
	console.log("Searching");
	//TODO search request logic
}

document.getElementById("search-text").addEventListener("keydown", searchText);
