// SCROLL HEIGHT CHECKER
// Used to vanish the scroll indicator

let hasScrolled = false;
function updateScrollHeight() {
  let scrollVar =
    window.pageYOffset /
    (document.body.offsetHeight - window.innerHeight);
  if (scrollVar > 0.2 && !hasScrolled) {
    hasScrolled = true;
  } else if (hasScrolled) {
    return;
  }
  document.body.style.setProperty(
    "--scroll",
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
  );
}
updateScrollHeight();
window.addEventListener("scroll", updateScrollHeight, false);

// MAKE BUTTON SCROLL TO ELEMENT

function scrollDownTo(elementId) {
  console.log("test");
  var myElement = document.getElementById(elementId);
  console.log(myElement);
  myElement.scrollIntoView({ behavior: "smooth" });
}

// MAKE ELEMENT SLIDE IN *ONCE* WHEN VISIBLE

let scrollAnimationElements = document.querySelectorAll('[data-reveal]');

let options = {
  rootMargin: '0px',
  threshold: 0.001
};

let scrollAnimationObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target.classList.contains('section-head')){
      console.log(entry)
      console.log(entry.isIntersecting)
    }
    if (entry.isIntersecting) {
      entry.target.classList.add(entry.target.dataset.reveal);

      setTimeout(() => {
        entry.target.removeAttribute('data-reveal');
        entry.target.removeAttribute('data-reveal-delay');
      }, 3000)

      // Unobserve the entry to prevent infinite loop observing
      scrollAnimationObserver.unobserve(entry.target);
    }
  })
}, options);


scrollAnimationElements.forEach(scrollAnimationElement => {
  scrollAnimationObserver.observe(scrollAnimationElement);
});