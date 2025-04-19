// get current year
(function () {
    var year = new Date().getFullYear();
    document.querySelector("#currentYear").innerHTML = year;
})();

// Add scroll reveal animations
document.addEventListener('DOMContentLoaded', function() {
  // Add reveal classes to elements that should animate on scroll
  const sections = document.querySelectorAll('.about_section, .service_section, .client_section, .contact_section, .team_section, .info_section');
  const boxes = document.querySelectorAll('.service_section .box, .team_section .box');
  const headings = document.querySelectorAll('.heading_container h2');
  
  sections.forEach(section => {
    section.classList.add('reveal');
    section.classList.add('reveal-bottom');
  });
  
  boxes.forEach(box => {
    box.classList.add('reveal');
    box.classList.add('reveal-bottom');
  });
  
  headings.forEach(heading => {
    heading.classList.add('reveal');
    heading.classList.add('reveal-bottom');
  });
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll animations
  function handleScrollAnimations() {
    const elements = document.querySelectorAll('.reveal');
    
    elements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  // Initial check for elements in viewport
  handleScrollAnimations();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimations);
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add hover effect for service boxes
  const serviceBoxes = document.querySelectorAll('.service_section .box');
  serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 0 15px 0 rgba(0, 0, 0, 0.2)';
    });
  });
  
  // Add hover effect for team boxes
  const teamBoxes = document.querySelectorAll('.team_section .box');
  teamBoxes.forEach(box => {
    box.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
    });
    
    box.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Add form input animations
  const formInputs = document.querySelectorAll('.contact_section input, .info_section input');
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
    
    input.addEventListener('blur', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
  });
  
  // Add button hover animations
  const buttons = document.querySelectorAll('.btn-1, .btn-2, .contact_section button, .info_section button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
  
  // Add current year to footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Mobile menu close button functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (mobileMenuClose && navbarCollapse && navbarToggler) {
    mobileMenuClose.addEventListener('click', function() {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    });
  }
});