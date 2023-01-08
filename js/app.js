/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('.navbar__menu');
const navList = document.querySelector('#navbar__list');
const scrollToTopButton = document.querySelector('#scrollToTopBtn');
const header = document.querySelector('.page__header');

let scrollTimeOut;

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Toggle the NavBar According to User Scroll Activity
function toggleNavBar() {
  // Default Settings for NavBar while scrolling
  header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
  // Clear timeout throughout the scrolling
  window.clearTimeout(scrollTimeOut);

  // The Timeout to run after scrolling ends
  scrollTimeOut = setTimeout(() => {
    // Hide NavBar after Timeout finished
    header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
  }, 5000);
}

function toggleScrollToTopButton() {
  // Display scrollToTopButton based on scrollY position
  scrollToTopButton.style.display = this.scrollY >= 500 ? "block" : "none";
}

function checkActiveSection() {
  let activeSection;

  // Search for active section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    section.classList.remove("your-active-class");
    if (this.scrollY >= sectionTop - 60) {
      activeSection = section;
    }
  });

  if (activeSection) {
    const activeSectionId = activeSection.getAttribute("id");

    // Add your-active-class class for active section
    activeSection.classList.add("your-active-class");

    // Add active__link class for active link
    navLi.forEach((li) => {
      li.classList.remove("active__link");
      if (li.href.endsWith(activeSectionId)) {
        li.classList.add("active__link");
      }
    });
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  sections.forEach(section => {
    // Create nav list item
    const navItem = document.createElement('li');
    // Add alink to the appropriate section as a navItem first child
    navItem.insertAdjacentHTML('afterbegin', `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
    // Append the navItem to navList
    navList.appendChild(navItem);

    // Create a smooth scrolling when click navItem
    scrollBehavior(navItem, section);
  })

  // Append the navList to navBar
  navBar.appendChild(navList);
}

buildNav();

// Add class 'active' to section when near top of viewport
const navLi = document.querySelectorAll(".menu__link");

window.addEventListener('scroll', () => {
  toggleScrollToTopButton();
  checkActiveSection();
  toggleNavBar();
})


// Scroll to anchor ID using scrollTO event
function scrollBehavior(navItem, section) {
  navItem.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth"
    });
  });
}


// Scroll to top of the Landing Page
scrollToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


