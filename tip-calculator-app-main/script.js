const fivePercent = document.querySelector('.five');
const tenPercent = document.querySelector('.ten');
const fifPercent = document.querySelector('.fifteen');
const twenPercent = document.querySelector('.twenty-five');
const fiftyPercent = document.querySelector('.fifty');

let tip = 0;
const getRandom = Math.floor(Math.random() * 100) + 1;
console.log(getRandom);
fivePercent.addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const custom = Number(document.querySelector('.custom').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * 0.05);
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
  }
});
tenPercent.addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * 0.1);
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
  }
});
fifPercent.addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * 0.15);
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
  }
});
twenPercent.addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * 0.2);
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
  }
});
fiftyPercent.addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * 0.5);
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
  }
});

document.querySelector('.custom').addEventListener('click', function () {
  const bill = Number(document.querySelector('#bill').value);
  const number = Number(document.querySelector('#number').value);
  if (bill && number) {
    tip = Math.round((bill / number) * (getRandom / 100));
    total = Math.round(bill / number) + tip;
    all = total * number;
    document.querySelector('.amounts').textContent = `$${tip}`;
    document.querySelector('.total').textContent = `$${total}`;
    document.querySelector('.all').textContent = `$${all}`;
    document.querySelector('.custom').textContent = `${getRandom}%`;
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  document.querySelector('#bill').value = 'none';
  document.querySelector('#number').value = 'none';
  document.querySelector('.amounts').textContent = `$0.00`;
  document.querySelector('.total').textContent = `$0.00`;
  document.querySelector('.all').textContent = `$0.00`;
  document.querySelector('.custom').textContent = 'Custom';
});
