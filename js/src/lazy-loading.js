let images = document.querySelectorAll('img[lazy-src]');

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 300px 0px'
};

const lazyLoad = image => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('lazy-src');
        img.setAttribute('src', src);
        img.classList.add('fade-in');
        observer.disconnect();
      }
    });
  }, imgOptions);
  io.observe(image);
};

if (images.length > 0) {
  images.forEach(lazyLoad);
}
