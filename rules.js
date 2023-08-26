import {
  // rule and layers
  rule,
  layer,
  simlayer,
  hyperLayer,
  modifierLayer,
  duoLayer,
  // from / map()
  map,
  mapConsumerKey,
  mapPointingButton,
  mapSimultaneous,
  mapDoubleTap,
  // to
  toKey,
  toConsumerKey,
  toPointingButton,
  toHyper,
  to$,
  toApp,
  toPaste,
  // conditions
  ifApp,
  ifDevice,
  ifVar,
  // utils
  withCondition,
  withMapper,
} from 'karabiner.ts'

// Docs: https://evan-liu.github.io/karabiner.ts/
export const rules = () => {
  const a = 'a'.charCodeAt(0)
  const z = 'z'.charCodeAt(0)
  const letter_keys = []

  for (let i = a; i <= z; i++) {
    letter_keys.push(String.fromCharCode(i))
  }

  return [import('./rules/hyperize-all-letters')]
}
