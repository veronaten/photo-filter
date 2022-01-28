const inputs = document.querySelectorAll('.filters input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const filters = document.querySelector('.filters');

filters.addEventListener('input', (event) => {

  let output = document.querySelector(`output[name=${event.target.name}]`);

  output.value = event.target.value; 
});

// function makeReset() {
//   return filters.reset();
// };

// btn-reset.addEventListener('click', makeReset);

document.addEventListener('click', function (event) {
  if (!event.target.hasAttribute('data-toggle-fullscreen')) return;
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}, false);

