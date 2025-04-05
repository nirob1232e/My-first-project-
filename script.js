// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Sign In/Sign Up Popup
const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const authPopup = document.getElementById('auth-popup');
const closeBtn = document.querySelector('.close-btn');
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');
const switchForms = document.querySelectorAll('.switch-form');

// Sign In বাটনে ক্লিক করলে
signinBtn.addEventListener('click', (e) => {
  e.preventDefault();
  authPopup.classList.add('active');
  signinForm.style.display = 'block';
  signupForm.style.display = 'none';
});

// Sign Up বাটনে ক্লিক করলে
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  authPopup.classList.add('active');
  signinForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Close বাটনে ক্লিক করলে
closeBtn.addEventListener('click', () => {
  authPopup.classList.remove('active');
});

// পপআপের বাইরে ক্লিক করলে বন্ধ হবে
authPopup.addEventListener('click', (e) => {
  if (e.target === authPopup) {
    authPopup.classList.remove('active');
  }
});

// সাইন ইন এবং সাইন আপ ফর্মের মধ্যে সুইচ করবে
switchForms.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (signinForm.style.display === 'none') {
      signinForm.style.display = 'block';
      signupForm.style.display = 'none';
    } else {
      signinForm.style.display = 'none';
      signupForm.style.display = 'block';
    }
  });
});