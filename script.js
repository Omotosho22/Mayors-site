
// script.js
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const header = document.querySelector('header');

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    header.classList.add('dark-mode');
    header.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    header.classList.remove('dark-mode');
    header.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Check for user's theme preference from localStorage (optional)
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  darkModeToggle.checked = true;
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
} else {
  darkModeToggle.checked = false;
  body.classList.add('light-mode');
  header.classList.add('light-mode');
}




/****** smooth scrolling effect */


/************dropdown menu************* */
// Select all navigation links
const navLinks = document.querySelectorAll('.navbar ul.links li a');
const dropdownLinks = document.querySelectorAll('.dropdown_menu li a');

// Function to highlight the active section
function highlightActiveSection() {
    const scrollY = window.scrollY;

    // Loop through each section and check if it's in the viewport
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionOffsetTop = section.offsetTop - 100; // Adjust offset as needed

        if (scrollY >= sectionOffsetTop) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            dropdownLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the corresponding nav link
            const matchingNavLink = document.querySelector(`.navbar ul.links li a[href="#${sectionId}"]`);
            if (matchingNavLink) {
                matchingNavLink.classList.add('active');
            }

            // Add active class to the corresponding dropdown link
            const matchingDropdownLink = document.querySelector(`.dropdown_menu li a[href="#${sectionId}"]`);
            if (matchingDropdownLink) {
                matchingDropdownLink.classList.add('active');
            }
        }
    });
}

// Scroll event listener to highlight active section
window.addEventListener('scroll', highlightActiveSection);

// Initial highlight when the page loads
highlightActiveSection();

// Click event listener for smooth scrolling to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    });
});

dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    });
});


