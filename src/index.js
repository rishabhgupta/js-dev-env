import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
// eslint-disable-next-line no-console
console.log(`You will pay ${courseValue} for this course.`);
