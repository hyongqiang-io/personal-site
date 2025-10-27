document.addEventListener('DOMContentLoaded', function () {
  // 年份更新
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  // 移动端导航切换
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // 国际化功能
  let currentLang = localStorage.getItem('language') || 'zh-CN';

  // 初始化语言
  function initLanguage() {
    setLanguage(currentLang);
    updateLangButtons(currentLang);
  }

  // 设置语言
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;

    // 更新页面标题和meta描述
    document.title = translations[lang]['page.title'];
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translations[lang]['page.description']);
    }

    // 更新所有带有data-i18n属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // 更新语言切换按钮状态
    updateLangButtons(lang);
  }

  // 更新语言按钮的激活状态
  function updateLangButtons(lang) {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      if (option.getAttribute('data-lang') === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  }

  // 语言切换按钮事件
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    const langOptions = langToggle.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        if (lang !== currentLang) {
          setLanguage(lang);
        }
      });
    });
  }

  // 初始化
  initLanguage();
});
