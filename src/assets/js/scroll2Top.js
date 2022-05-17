window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  let scroll2TopElement = document.getElementById('scroll2Top');
  if (scroll !== 0) {
    scroll2TopElement.style.opacity = '1';
    scroll2TopElement.style.cursor = 'pointer';
  } else {
    scroll2TopElement.style.opacity = '0';
    scroll2TopElement.style.cursor = 'none';
  }
});

function scroll2Top() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
