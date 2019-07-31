var hamburgerButton = document.getElementById('hamburgerButton');
var navigation = document.getElementById('navigation');
hamburgerButton.addEventListener('click', (event) => {
  if (navigation.classList.contains('smallScreenHidden')) {
    navigation.classList.add('smallScreenVisible');
    navigation.classList.remove('smallScreenHidden');
  } else {
    navigation.classList.add('smallScreenHidden');
    navigation.classList.remove('smallScreenVisible');
  }
})
