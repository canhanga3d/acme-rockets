/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './../styles/index.css';
const year = document.querySelector('#year')!;
year.innerHTML = new Date().getFullYear().toString();
