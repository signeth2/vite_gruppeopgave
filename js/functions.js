function CreatePreview() {
	let input = marked.parse(document.getElementById('markdown').value);
	document.getElementById('preview').innerHTML = input;
}