/**
 * Christine Adib - Personal Portfolio Website
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Cache Elements ---
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const toggleFormBtn = document.getElementById('toggle-form-btn');
  const contactDrawer = document.getElementById('contact-drawer');
  const copyrightYear = document.getElementById('copyright-year');

  // Set current copyright year
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // --- Sticky Header Scroll Styling ---
  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Mobile Navigation Toggle ---
  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;
      navToggle.setAttribute('aria-expanded', String(newState));
      navMenu.classList.toggle('is-open', newState);
      if (newState) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    };

    navToggle.addEventListener('click', () => toggleMenu());

    // Close on nav link click
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-open')) {
          toggleMenu(false);
        }
      });
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('is-open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(false);
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  // --- Active Nav Indicator (IntersectionObserver) ---
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => navObserver.observe(section));

  // --- Toggle Contact Message Drawer ---
  if (toggleFormBtn && contactDrawer) {
    toggleFormBtn.addEventListener('click', () => {
      const isOpen = contactDrawer.classList.toggle('is-open');
      if (isOpen) {
        toggleFormBtn.querySelector('span').textContent = 'Close Form';
        const nameInput = document.getElementById('user-name');
        if (nameInput) setTimeout(() => nameInput.focus(), 150);
      } else {
        toggleFormBtn.querySelector('span').textContent = 'Get In Touch';
      }
    });
  }

  // --- Contact Form Handling (Mailto submission with validation) ---
  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('user-name');
      const emailInput = document.getElementById('user-email');
      const subjectInput = document.getElementById('user-subject');
      const messageInput = document.getElementById('user-message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Reset status banner
      formStatus.className = 'form-status-msg';
      formStatus.textContent = '';

      // Validation
      if (!name || !email || !subject || !message) {
        formStatus.classList.add('active');
        formStatus.style.backgroundColor = 'rgba(217, 83, 79, 0.35)';
        formStatus.style.borderColor = '#d9534f';
        formStatus.textContent = 'Please fill out all fields before sending.';
        return;
      }

      // Email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.classList.add('active');
        formStatus.style.backgroundColor = 'rgba(217, 83, 79, 0.35)';
        formStatus.style.borderColor = '#d9534f';
        formStatus.textContent = 'Please provide a valid email address.';
        emailInput.focus();
        return;
      }

      // Prepare mailto link
      const recipient = 'christineadib8@gmail.com';
      const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const formattedBody = encodeURIComponent(
        `Hi Christine,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${formattedSubject}&body=${formattedBody}`;

      // Inform user and trigger mail client
      formStatus.classList.add('active');
      formStatus.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
      formStatus.style.borderColor = 'rgba(255, 255, 255, 0.4)';
      formStatus.innerHTML = `
        <strong>Opening your email client...</strong><br>
        Preparing your draft to <em>${recipient}</em>.
        <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 700; color: #FFFFFF;">Click here if your mail app didn't open</a>.
      `;

      // Trigger mailto link
      window.location.href = mailtoUrl;
    });
  }
});
