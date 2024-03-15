import {
  rule,
  map,
  ifDevice,
  withCondition,
  withMapper,
  withModifier,
} from 'karabiner.ts'

const a = 'a'.charCodeAt(0)
const z = 'z'.charCodeAt(0)
const letter_keys = []

for (let i = a; i <= z; i++) {
  letter_keys.push(String.fromCharCode(i))
}

// rule(), layer(), simlayer(), hyperLayer(), duoLayer()
export default [
  rule('a-z are Hyped Keys!').manipulators([
    // You can get the product id from Karabiner
    // 45890 is K380's product id
    withCondition(ifDevice({ product_id: 45890 }))(
      withMapper(letter_keys)((k, i) => map(k).to(k, '⌘⌥⌃⇧')),
    ),
  ]),

  rule('A-Z are Hyped Keys!').manipulators([
    withCondition(ifDevice({ product_id: 45890 }))(
      withMapper(letter_keys)((k, i) =>
        withModifier('caps_lock')(map(k).to(k, '⌘⌥⌃⇧⇪')),
      ),
    ),
    withCondition(ifDevice({ product_id: 45890 }))(
      withMapper(letter_keys)((k, i) =>
        withModifier('shift')(map(k).to(k, '⌘⌥⌃⇧⇪')),
      ),
    ),
  ]),
]
