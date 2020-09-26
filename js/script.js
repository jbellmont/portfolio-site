const sectionToFadeIn = document.querySelectorAll('.section-to-fade-in');

const appearOnScroll = () => {
  // Controls when a section should fade in based on the scroll depth

  sectionToFadeIn.forEach(section => {
    const ratio = () => {
      // Helps with when each section should fade in
      return section.contains(document.querySelector('.about-sec')) ? 1
        : section.contains(document.querySelector('.skills-sec')) ? 0.5 //0.5
        : section.contains(document.querySelector('.projects-sec')) ? 2
        : 0.08
    };
    
    const imageTop = section.getBoundingClientRect().top;
    const imageBottom = section.getBoundingClientRect().bottom;
    const appearAt = (window.scrollY + window.innerHeight) - section.clientHeight / ratio();
    const isHalfShown = appearAt > imageTop;
  
    if (isHalfShown && imageBottom > 0) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', appearOnScroll);