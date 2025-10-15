// Highlight current page
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

// Questionnaire mailto submission
function submitQuestionnaire(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const lines = [];
  for (const [key, value] of data.entries()) {
    lines.push(key + ': ' + value);
  }
  const body = encodeURIComponent(lines.join('\n'));
  const email = form.dataset.email || 'your@email.com'; // <-- replace with your email
  const subject = encodeURIComponent('Best Man Challenge Questionnaire');
  const mailto = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  alert('Your email client will open with your answers. Send the email to submit!');
}

window.addEventListener('DOMContentLoaded', () => {
  const qForm = document.getElementById('questionnaire-form');
  if (qForm) qForm.addEventListener('submit', submitQuestionnaire);
});