/**
 * Northstar Home Services — Interactive Functionality
 * Art Direction & Front-End Architecture: AS Tech Studio
 * Vanilla JavaScript (ES6+), Zero External Dependencies
 */

(function () {
  'use strict';

  // ==========================================================================
  // DOM Elements
  // ==========================================================================
  const header = document.getElementById('header');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  const faqItems = document.querySelectorAll('.faq-item');
  const serviceSelectBtns = document.querySelectorAll('.service-select-btn');

  const quoteForm = document.getElementById('quote-form');
  const submitQuoteBtn = document.getElementById('submitQuoteBtn');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const serviceTypeSelect = document.getElementById('serviceType');
  const propertyTypeSelect = document.getElementById('propertyType');
  const projectDescInput = document.getElementById('projectDescription');

  const fullNameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const serviceTypeError = document.getElementById('serviceTypeError');
  const projectDescError = document.getElementById('projectDescriptionError');

  const demoResultPanel = document.getElementById('demoResultPanel');
  const resultSummaryBox = document.getElementById('resultSummaryBox');
  const copySummaryBtn = document.getElementById('copySummaryBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const mailtoFallbackLink = document.getElementById('mailtoFallbackLink');
  const resetFormBtn = document.getElementById('resetFormBtn');

  let generatedSummaryText = '';

  // ==========================================================================
  // 1. Sticky Header & Active Navigation Tracking
  // ==========================================================================
  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollY > 24) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Active section indicator via IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ==========================================================================
  // 2. Mobile Navigation Drawer
  // ==========================================================================
  function openMobileNav() {
    mobileNavMenu.classList.add('is-open');
    mobileNavMenu.setAttribute('aria-hidden', 'false');
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    mobileNavClose.focus();
  }

  function closeMobileNav() {
    mobileNavMenu.classList.remove('is-open');
    mobileNavMenu.setAttribute('aria-hidden', 'true');
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    mobileNavToggle.focus();
  }

  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', openMobileNav);
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileNav);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavMenu && mobileNavMenu.classList.contains('is-open')) {
      closeMobileNav();
    }
  });

  // ==========================================================================
  // 3. Service Card Pre-Selection
  // ==========================================================================
  serviceSelectBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetService = btn.getAttribute('data-service-target');
      if (targetService && serviceTypeSelect) {
        serviceTypeSelect.value = targetService;
        // Clear any prior validation error on the select field
        clearFieldError(serviceTypeSelect, serviceTypeError);
      }
      // Smooth scroll to contact quote form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (fullNameInput) {
            fullNameInput.focus();
          }
        }, 600);
      }
    });
  });

  // ==========================================================================
  // 4. Accessible FAQ Accordion
  // ==========================================================================
  faqItems.forEach((item, index) => {
    const trigger = item.querySelector('.faq-trigger');
    const content = item.querySelector('.faq-content');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Toggle this item
      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.hidden = true;
        item.classList.remove('is-open');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.hidden = false;
        item.classList.add('is-open');
      }
    });

    // Keyboard arrow navigation across triggers
    trigger.addEventListener('keydown', (e) => {
      const triggers = Array.from(document.querySelectorAll('.faq-trigger'));
      const currentIndex = triggers.indexOf(trigger);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % triggers.length;
        triggers[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = (currentIndex - 1 + triggers.length) % triggers.length;
        triggers[prevIndex].focus();
      } else if (e.key === 'Home') {
        e.preventDefault();
        triggers[0].focus();
      } else if (e.key === 'End') {
        e.preventDefault();
        triggers[triggers.length - 1].focus();
      }
    });
  });

  // ==========================================================================
  // 5. Form Validation & Interactive Demo Compilation
  // ==========================================================================
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  }

  function setFieldError(input, errorElement, message) {
    input.classList.add('is-invalid');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
  }

  function clearFieldError(input, errorElement) {
    input.classList.remove('is-invalid');
    input.removeAttribute('aria-invalid');
    errorElement.textContent = '';
  }

  // Real-time error clearing
  if (fullNameInput) {
    fullNameInput.addEventListener('input', () => clearFieldError(fullNameInput, fullNameError));
  }
  if (emailInput) {
    emailInput.addEventListener('input', () => clearFieldError(emailInput, emailError));
  }
  if (serviceTypeSelect) {
    serviceTypeSelect.addEventListener('change', () => clearFieldError(serviceTypeSelect, serviceTypeError));
  }
  if (projectDescInput) {
    projectDescInput.addEventListener('input', () => clearFieldError(projectDescInput, projectDescError));
  }

  function validateQuoteForm() {
    let isValid = true;
    let firstInvalidField = null;

    // Validate Full Name
    if (!fullNameInput.value.trim()) {
      setFieldError(fullNameInput, fullNameError, 'Please enter your full name.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = fullNameInput;
    } else {
      clearFieldError(fullNameInput, fullNameError);
    }

    // Validate Email
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      setFieldError(emailInput, emailError, 'Please enter your email address.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = emailInput;
    } else if (!isValidEmail(emailVal)) {
      setFieldError(emailInput, emailError, 'Please enter a valid email address (e.g. name@example.com).');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = emailInput;
    } else {
      clearFieldError(emailInput, emailError);
    }

    // Validate Service Type
    if (!serviceTypeSelect.value) {
      setFieldError(serviceTypeSelect, serviceTypeError, 'Please select a primary service category.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = serviceTypeSelect;
    } else {
      clearFieldError(serviceTypeSelect, serviceTypeError);
    }

    // Validate Project Description
    const descVal = projectDescInput.value.trim();
    if (!descVal) {
      setFieldError(projectDescInput, projectDescError, 'Please provide a short description of what you need.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = projectDescInput;
    } else if (descVal.length < 10) {
      setFieldError(projectDescInput, projectDescError, 'Description is too short. Please provide at least 10 characters.');
      isValid = false;
      if (!firstInvalidField) firstInvalidField = projectDescInput;
    } else {
      clearFieldError(projectDescInput, projectDescError);
    }

    if (firstInvalidField) {
      firstInvalidField.focus();
    }

    return isValid;
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateQuoteForm()) {
        return;
      }

      // Collect Form Data
      const name = fullNameInput.value.trim();
      const email = emailInput.value.trim();
      const service = serviceTypeSelect.value;
      const property = propertyTypeSelect ? propertyTypeSelect.value : 'Single Family Home';
      const description = projectDescInput.value.trim();
      const timingElement = quoteForm.querySelector('input[name="timing"]:checked');
      const timing = timingElement ? timingElement.value : 'Flexible';
      const timestamp = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      // Format Summary for UI Display (Clean & Structured)
      resultSummaryBox.innerHTML = `
        <table class="summary-data-table">
          <tbody>
            <tr>
              <th scope="row">Client Name</th>
              <td>${escapeHTML(name)}</td>
            </tr>
            <tr>
              <th scope="row">Contact Email</th>
              <td>${escapeHTML(email)}</td>
            </tr>
            <tr>
              <th scope="row">Service Category</th>
              <td>${escapeHTML(service)}</td>
            </tr>
            <tr>
              <th scope="row">Property Type</th>
              <td>${escapeHTML(property)}</td>
            </tr>
            <tr>
              <th scope="row">Preferred Window</th>
              <td>${escapeHTML(timing)}</td>
            </tr>
            <tr>
              <th scope="row">Project Scope</th>
              <td>${escapeHTML(description)}</td>
            </tr>
            <tr>
              <th scope="row">Demo Compiled</th>
              <td>${timestamp} (Local Client Session)</td>
            </tr>
          </tbody>
        </table>
      `;

      // Plain Text Summary for Copy & Mailto
      generatedSummaryText = [
        '========================================',
        'NORTHSTAR HOME SERVICES — QUOTE REQUEST',
        '(Fictional Portfolio Demo by AS Tech Studio)',
        '========================================',
        `Date/Time:         ${timestamp}`,
        `Client Name:       ${name}`,
        `Email:             ${email}`,
        `Service Category:  ${service}`,
        `Property Type:     ${property}`,
        `Preferred Window:  ${timing}`,
        '----------------------------------------',
        'PROJECT DESCRIPTION:',
        description,
        '========================================',
        'Notice: This inquiry was generated locally as part of a front-end portfolio concept.'
      ].join('\n');

      // Update Mailto Link
      const mailtoSubject = encodeURIComponent(`[Northstar Demo] Quote Request: ${service} - ${name}`);
      const mailtoBody = encodeURIComponent(generatedSummaryText);
      mailtoFallbackLink.setAttribute('href', `mailto:demo@northstar-concept.example?subject=${mailtoSubject}&body=${mailtoBody}`);

      // Show Result Panel and Smooth Scroll
      demoResultPanel.hidden = false;
      demoResultPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  // ==========================================================================
  // 6. Copy to Clipboard Functionality
  // ==========================================================================
  if (copySummaryBtn) {
    copySummaryBtn.addEventListener('click', async () => {
      if (!generatedSummaryText) return;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(generatedSummaryText);
        } else {
          // Fallback for environments where clipboard API is restricted
          const textarea = document.createElement('textarea');
          textarea.value = generatedSummaryText;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }

        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = 'Copied to Clipboard!';
        copySummaryBtn.style.backgroundColor = 'var(--sage-100)';
        copySummaryBtn.style.color = 'var(--sage-700)';

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copySummaryBtn.style.backgroundColor = '';
          copySummaryBtn.style.color = '';
        }, 2500);
      } catch (err) {
        copyBtnText.textContent = 'Failed to copy (manual select required)';
      }
    });
  }

  // ==========================================================================
  // 7. Reset Form Handler
  // ==========================================================================
  if (resetFormBtn) {
    resetFormBtn.addEventListener('click', () => {
      quoteForm.reset();
      clearFieldError(fullNameInput, fullNameError);
      clearFieldError(emailInput, emailError);
      clearFieldError(serviceTypeSelect, serviceTypeError);
      clearFieldError(projectDescInput, projectDescError);
      demoResultPanel.hidden = true;
      quoteForm.scrollIntoView({ behavior: 'smooth' });
      fullNameInput.focus();
    });
  }

  // ==========================================================================
  // 8. Graceful Image Error Fallback Handler
  // ==========================================================================
  const allImages = document.querySelectorAll('img');
  allImages.forEach((img) => {
    img.addEventListener('error', () => {
      const parent = img.parentElement;
      if (parent) {
        parent.classList.add('img-fallback-active');
      }
    });
  });

  // ==========================================================================
  // Helper: HTML Escaping
  // ==========================================================================
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();
