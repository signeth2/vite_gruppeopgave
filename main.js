import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
<div class="flex">
<textarea class="markdown" name="" id="markdown" oninput="CreatePreview()">

</textarea>

<div class="preview" id="preview">

</div>
</div>
`