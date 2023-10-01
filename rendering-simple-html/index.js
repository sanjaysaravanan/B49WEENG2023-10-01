let count = 0;

const h1Element = document.querySelector('h1');

h1Element.innerText = count;

const handleInc = () => {
  count += 1; // count = count + 1;
  console.log('Increased', count);
  h1Element.innerText = count;
}

const handleDec = () => {
  count -= 1; // count = count - 1;
  console.log('Decreased', count);
  h1Element.innerText = count;
}