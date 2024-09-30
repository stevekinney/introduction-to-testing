export function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Click Me';

  button.addEventListener('click', () => {
    button.textContent = 'Clicked!';
  });

  return button;
}
