import './style.css'
import { complexModifications } from 'karabiner.ts'
import { rules } from './rules.js'

let code = ''
let error = ''

try {
  const config = complexModifications(rules()).rules
  code = JSON.stringify(config.length === 1 ? config[0] : config, null, 2)
} catch (e) {
  error = e?.message || e || 'Unknown error'
}

document.querySelector('#app').innerHTML = `\
<div>
  <a href="https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/" target="_blank">
    🔗 Karabiner Elements Manipulator Definition
  </a>
      
  <pre${error ? ' class="error"' : ''}>${error || code}</pre>
</div>`
