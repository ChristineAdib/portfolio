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
  const themeToggle = document.getElementById('theme-toggle');
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const backToTopBtn = document.getElementById('back-to-top');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');
  const copyButtons = document.querySelectorAll('.btn-copy');
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

  // --- Skills Filter Tabs ---
  if (filterButtons.length > 0 && skillCards.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        // Toggle active button
        filterButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        skillCards.forEach((card) => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            card.style.animation = 'fadeIn 0.3s ease forwards';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Copy to Clipboard Interactions ---
  if (copyButtons.length > 0) {
    copyButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        try {
          await navigator.clipboard.writeText(textToCopy);
          const originalHTML = btn.innerHTML;
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
          `;
          btn.style.color = 'var(--color-success)';

          setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
          }, 2200);
        } catch (err) {
          // Fallback if clipboard API is blocked
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          textarea.style.position = 'fixed';
          textarea.style.opacity = '0';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);

          const originalHTML = btn.innerHTML;
          btn.innerHTML = `<span>Copied!</span>`;
          setTimeout(() => {
            btn.innerHTML = originalHTML;
          }, 2200);
        }
      });
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
      formStatus.className = 'form-status-banner';
      formStatus.textContent = '';

      // Validation
      if (!name || !email || !subject || !message) {
        formStatus.classList.add('is-active', 'error');
        formStatus.textContent = 'Please fill out all required fields before submitting.';
        return;
      }

      // Email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.classList.add('is-active', 'error');
        formStatus.textContent = 'Please provide a valid email address.';
        emailInput.focus();
        return;
      }

      // Prepare mailto link
      const recipient = 'christineadib8@gmail.com';
      const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
      const formattedBody = encodeURIComponent(
        `Hi Christine,\n\n${message}\n\n---\nSender: ${name}\nEmail: ${email}`
      );
      const mailtoUrl = `mailto:${recipient}?subject=${formattedSubject}&body=${formattedBody}`;

      // Inform user and trigger mail client
      formStatus.classList.add('is-active', 'info');
      formStatus.innerHTML = `
        <strong>Opening your email client...</strong><br>
        Preparing your draft to <em>${recipient}</em>. If your email app did not open automatically,
        <a href="${mailtoUrl}" style="text-decoration: underline; font-weight: 600;">click here to launch it</a> or copy my email directly.
      `;

      // Trigger mailto link
      window.location.href = mailtoUrl;
    });
  }

  // --- Dark / Light Theme Toggle ---
  if (themeToggle) {
    // Check saved preference or system preference
    const savedTheme = localStorage.getItem('ca-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('ca-theme', nextTheme);
    });
  }

  // --- Back to Top Smooth Scroll ---
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
