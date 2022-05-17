function scrollToElement(params) {
  document.querySelector(`#${params}`).scrollIntoView({
    behavior: 'smooth',
  });
}

