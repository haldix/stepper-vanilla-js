document.addEventListener('DOMContentLoaded', () => {
  let inx = 0;

  function count(action) {
    action === 'add' ? inx++ : inx--;

    if (inx < 0) inx = 0;
    if (inx > steps.length) inx = steps.length;

    stepper(inx);
  }

  function stepper(inx) {
    steps.forEach((el, i) => {
      let srOnly = el.querySelector('.sr-only');
      let stepNumber = el.querySelector('.step__number');
      let numberVal = el.querySelector('.step__number-val');
      let stepDescription = el.querySelector('.step__description');

      if (i === inx) {
        srOnly.innerText = 'current';
        stepNumber.className = 'step__number step__number-selected';
        stepDescription.className =
          'step__description step__description-active';
        numberVal.innerText = i + 1;
      } else if (i < inx) {
        srOnly.innerText = 'completed';
        stepNumber.className = 'step__number step__number-selected';
        stepDescription.className = 'step__description';
        numberVal.innerHTML = '&#10003;';
      } else {
        srOnly.innerText = '';
        stepNumber.className = 'step__number';
        stepDescription.className = 'step__description';
        numberVal.innerText = i + 1;
      }
    });
  }

  const steps = document.querySelectorAll('.horiz .step-cont');
  const btnInc = document.getElementById('btn-inc');
  const btnDec = document.getElementById('btn-dec');
  btnInc.addEventListener('click', () => count('add'));
  btnDec.addEventListener('click', () => count('sub'));
});
