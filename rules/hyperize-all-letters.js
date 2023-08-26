import { rule, map, ifDevice, withCondition, withMapper } from 'karabiner.ts'

const a = 'a'.charCodeAt(0)
const z = 'z'.charCodeAt(0)
const letter_keys = []

for (let i = a; i <= z; i++) {
  letter_keys.push(String.fromCharCode(i))
}

// rule(), layer(), simlayer(), hyperLayer(), duoLayer()
export default rule('Hyperize All Letters').manipulators([
  // You can get the product id from Karabiner
  // 45890 is K380's product id
  withCondition(ifDevice({ product_id: 45890 }))(
    withMapper(letter_keys)((k, i) => map(k).to(k, '⌘⌥⌃⇧')),
  ),
])
