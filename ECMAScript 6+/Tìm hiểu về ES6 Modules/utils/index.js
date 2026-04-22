// import { PI, add, subtract } from './math.js';
// import calculator from './calculator.js';
// import toTitleCase from './toTitleCase.js';

 export { PI, add, subtract } from './math.js';
 export { default as calculator } from './calculator.js';
 export { default as toNewTitleCase } from './toTitleCase.js';

/**
 * Cách 2: export lại tực tiếp từ các module con
 *      export { PI, add, subtract } from './math.js';
 *      export { default as calculator } from './calculator.js';
 *      export { default as toTitleCase } from './toTitleCase.js';
 */

// export { PI, add, subtract, calculator, toTitleCase };