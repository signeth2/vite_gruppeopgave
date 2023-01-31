import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="flex">
<div class="markdown">
<textarea name="" id="" cols="30" rows="40" onchange="CreateMD">

</textarea>
</div>

<div class="preview" id="preview">
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
document.getElementById('preview').innerHTML =
marked.parse('# Marked in the browser\n\nRendered by **marked**.');
</script>
</div>
</div>
`

setupCounter(document.querySelector('#counter'))
