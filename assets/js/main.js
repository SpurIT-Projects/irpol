// ==================== ГЛАВНЫЙ JAVASCRIPT ФАЙЛ ====================

// Автоматический скролл вверх при смене страницы
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});

// История навигации для автоматического скролла
let lastPath = window.location.pathname;
setInterval(() => {
  if (window.location.pathname !== lastPath) {
    lastPath = window.location.pathname;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}, 100);

// ==================== МОБИЛЬНОЕ МЕНЮ ====================
document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('mobile-open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }
});

// ==================== КНОПКА SCROLL TO TOP ====================
const scrollToTopBtn = document.querySelector('.scroll-to-top');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ==================== АКТИВНАЯ ССЫЛКА В НАВИГАЦИИ ====================
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentLocation || 
      (currentLocation === '/' && linkPath.includes('index.html')) ||
      (currentLocation.includes('index.html') && linkPath === '/')) {
    link.classList.add('active');
  }
});

// ==================== ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '#!') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

// ==================== АНИМАЦИЯ ПРИ СКРОЛЛЕ ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Применяем анимацию к элементам
document.querySelectorAll('.service-card, .advantage-item, .contact-info-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ==================== ЛИПКИЙ HEADER ====================
let lastScroll = 0;
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
  });
}

// ==================== ОБРАБОТЧИКИ КНОПОК ====================
// Обработка кнопок "Записаться на приём"
document.querySelectorAll('.btn-appointment, .btn-primary, .btn-cta-primary').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.getAttribute('href') === '#' || btn.getAttribute('href') === '#!') {
      e.preventDefault();
      alert('Функционал записи на приём находится в разработке.\n\nПожалуйста, позвоните нам по телефону:\n+375 (17) 334-41-91\n+375 (29) 339-98-91');
    }
  });
});

// Обработка кнопок услуг
document.querySelectorAll('.btn-service').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.getAttribute('href') === '#' || btn.getAttribute('href') === '#!') {
      e.preventDefault();
      const serviceName = btn.closest('.service-card').querySelector('h3').textContent;
      alert(`Подробная информация об услуге "${serviceName}" находится в разработке.\n\nДля получения информации позвоните:\n+375 (17) 334-41-91`);
    }
  });
});

// ==================== ЗАЩИТА ОТ СПАМА ФОРМ ====================
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Функционал отправки форм находится в разработке.\n\nПожалуйста, свяжитесь с нами по телефону или email.');
  });
});

// ==================== КОНСОЛЬНОЕ СООБЩЕНИЕ ====================
console.log('%c🦷 Стоматологический центр ИРПОЛ', 'font-size: 20px; font-weight: bold; color: #0891b2;');
console.log('%cСайт разработан с использованием современных веб-технологий', 'font-size: 12px; color: #6b7280;');
console.log('%cУНП: 190438613', 'font-size: 12px; color: #6b7280;');
