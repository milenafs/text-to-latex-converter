import type { SymbolGroup } from '../types';
import { BasicMathSyntaxAndCounts } from './basic-math-syntax-and-counts';
import { DerivativesAndIntegrals } from './derivatives-and-integrals';
import { FunctionsAndRelations } from './functions-and-relations';
import { GreekSymbols } from './greek-symbols';
import { LogicSymbols } from './logic-symbols';
import { OtherUsefulSymbols } from './other-useful-symbols';
import { SetTheorySymbols } from './set-theory-symbols';

// A group's category drives the keycap colours; see .key-* in src/index.css.
export const SymbolGroups: SymbolGroup[] = [
  {
    category: 'basic',
    label: 'Basic math syntax and counts',
    symbols: BasicMathSyntaxAndCounts,
  },
  {
    category: 'functions',
    label: 'Functions and relations',
    symbols: FunctionsAndRelations,
  },
  { category: 'logic', label: 'Logic symbols', symbols: LogicSymbols },
  { category: 'sets', label: 'Set theory symbols', symbols: SetTheorySymbols },
  { category: 'misc', label: 'Other useful symbols', symbols: OtherUsefulSymbols },
  {
    category: 'calculus',
    label: 'Derivatives and integrals',
    symbols: DerivativesAndIntegrals,
  },
  { category: 'greek', label: 'Greek symbols', symbols: GreekSymbols },
];
