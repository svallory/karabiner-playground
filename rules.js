/**
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
**/

import HyperAllLetters from './rules/hyperize-all-letters'

console.log('HyperAllLetters', HyperAllLetters)

// Docs: https://evan-liu.github.io/karabiner.ts/
export const rules = () => [HyperAllLetters]
