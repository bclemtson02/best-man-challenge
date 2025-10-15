
(function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

function submitQuestionnaire(e){
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const lines = [];
  for (const [k,v] of data.entries()) lines.push(k + ': ' + v);
  const body = encodeURIComponent(lines.join('\n'));
  const email = form.dataset.email || 'your@email.com';
  const subject = encodeURIComponent('Best Man Challenge Questionnaire');
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  alert('Your email client will open with your answers. Send the email to submit!');
}
window.addEventListener('DOMContentLoaded', () => {
  const q = document.getElementById('questionnaire-form');
  if (q) q.addEventListener('submit', submitQuestionnaire);
});
