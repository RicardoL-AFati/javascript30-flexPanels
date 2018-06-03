const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  /* Safari transitionend event.propertyName === flex */ /* Chrome + FF === flex-grow */
  // multiple transitions ending, if its flex - toggle open-active.
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
}
// Adding click event to each panel to open
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// once each panel is done opening - first and last p elements are shown 
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
