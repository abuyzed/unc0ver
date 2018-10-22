window.onload = function load() {
	var file = new XMLHttpRequest();
	file.open("GET", "https://raw.githubusercontent.com/pwn20wndstuff/Undecimus/master/Update.txt", true);
	file.onreadystatechange = function() {
		if (file.readyState === 4) {  // Makes sure the document is ready to parse
			if (file.status === 200) {  // Makes sure it's found the file
				text = file.responseText;
				document.getElementById("unc0veRC").innerHTML = text;
				document.getElementById("RC").innerHTML = text;
			}
		}
	}
	file.send();
}