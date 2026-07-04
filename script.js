const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

menuButton?.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(contactForm).entries());
  const summary = `ありがとうございます。${data.name || 'お客様'}様の「${data.type}」の相談内容を確認しました。実際に送信する場合はフォーム送信先の設定が必要です。`;
  formMessage.textContent = summary;
});
