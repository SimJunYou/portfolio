// SCROLL HEIGHT CHECKER
// Used to vanish the scroll indicator

let hasScrolled = false;
function updateScrollHeight() {
  let scrollVar =
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
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
  var myElement = document.getElementById(elementId);
  myElement.scrollIntoView({ behavior: "smooth" });
}

// MAKE ELEMENT TRANSITION IN *ONCE* WHEN VISIBLE

let scrollAnimationElements = document.querySelectorAll(
  "[data-reveal-trigger]"
);

let options = {
  rootMargin: "0px",
  threshold: 0.001,
};

let scrollAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let reveal_id = entry.target.dataset.revealTrigger;
      let element = document.getElementById(reveal_id);
      element.classList.add(element.dataset.reveal);

      setTimeout(() => {
        entry.target.removeAttribute("data-reveal-trigger");
        element.removeAttribute("data-reveal");
        element.removeAttribute("data-reveal-delay");
      }, 3000);

      // Unobserve the entry to prevent infinite loop observing
      scrollAnimationObserver.unobserve(entry.target);
    }
  });
}, options);

scrollAnimationElements.forEach((scrollAnimationElement) => {
  scrollAnimationObserver.observe(scrollAnimationElement);
});

let headerFadeInElements = [
  ...document.querySelectorAll("[data-reveal]"),
].filter((el) => el.dataset.reveal === "fade");

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    headerFadeInElements.forEach((element) => {
      let delay = 0;
      if (element.hasAttribute('data-reveal-delay')) {
        delay = element.dataset.revealDelay;
      };
      if (delay > 0) {
        setTimeout(() => {
          element.style = null;
          element.classList.add("fade");
          element.removeAttribute("data-reveal");
        }, delay*1000);
      } else {
        element.style = null;
        element.classList.add("fade");
        element.removeAttribute("data-reveal");
      }
    });
  }
};
