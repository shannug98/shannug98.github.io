/* ==========================================================================
   Shanmuka Gaddam Portfolio Interactive Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    // Close mobile drawer when link clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 2. Active Section Highlight on Scroll
  const sections = document.querySelectorAll('section[id], main[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Modals Handler
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.modal-close, .modal-backdrop');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        targetModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      modals.forEach(modal => modal.classList.remove('open'));
      document.body.style.overflow = 'auto';
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => modal.classList.remove('open'));
      document.body.style.overflow = 'auto';
    }
  });

  // 4. Resume Button Triggers
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeTrigger = document.getElementById('hero-resume-trigger');
  const resumeSection = document.getElementById('resume');

  const scrollToResume = () => {
    if (resumeSection) {
      resumeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', scrollToResume);
  if (heroResumeTrigger) heroResumeTrigger.addEventListener('click', scrollToResume);

  // 5. Download Resume PDF simulation
  const downloadPdfBtn = document.getElementById('download-resume-pdf');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
      // Generate printable/downloadable view or prompt
      const resumeContent = document.querySelector('.resume-paper-card');
      if (resumeContent) {
        window.print();
      }
    });
  }

  // 6. Contact Form Submission Mock
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (contactForm && formAlert) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        formAlert.classList.add('show');
        submitBtn.textContent = 'Message Sent ✓';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }, 3000);
      }, 800);
    });
  }

});
