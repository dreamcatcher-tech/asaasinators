// Small progressive enhancement layer for phase navigation, reveal effects,
// and the illustrative seat compression calculator. No framework or build step.
const phases = {
  shadow: {
    number: '01',
    meter: '25%',
    title: 'Bring up an agent alongside the SaaS app.',
    copy: 'We observe the work, map the screens, catalogue the API/export options, and create the first natural-language routes for common jobs.',
    bullets: [
      'Capture the human workflows that keep the app alive.',
      'Record reliable browser procedures and validation checks.',
      'Identify the minimum seat footprint needed for safe operation.'
    ]
  },
  conduit: {
    number: '02',
    meter: '48%',
    title: 'Route requests through the aSaaSinators conduit.',
    copy: 'Humans stop logging into the SaaS product for routine work. They ask the agent, and the agent chooses API, export/sync, or browser operation.',
    bullets: [
      'Turn questions and jobs into prompt-based commands.',
      'Centralize audit trails, permissions, and exception handling.',
      'Keep the SaaS app functioning while the team changes habits gradually.'
    ]
  },
  compress: {
    number: '03',
    meter: '72%',
    title: 'Replace many paid human seats with one controlled agent seat.',
    copy: 'As confidence grows, seat sprawl collapses. One browser-capable agent can do the bidding of many people while preserving review checkpoints.',
    bullets: [
      'Remove licenses from people who only need outcomes, not the UI.',
      'Use human approval for sensitive operations and autonomous execution for safe routines.',
      'Measure human visits until the SaaS interface reaches zero routine traffic.'
    ]
  },
  replace: {
    number: '04',
    meter: '100%',
    title: 'Mirror the data, rebuild the valuable components, and retire the app.',
    copy: 'The SaaS data shape becomes an owned operating model. Dashboards, forms, search, approvals, and reports become targeted components or agent skills.',
    bullets: [
      'Build a unitary model across several SaaS apps when the org needs one.',
      'Replace UI elements one by one instead of forcing a cutover weekend.',
      'Turn cancellation from a risky migration into a final switch-off.'
    ]
  }
};

const tabs = Array.from(document.querySelectorAll('.phase-tab'));
const phaseTitle = document.querySelector('#phase-title');
const phaseCopy = document.querySelector('#phase-copy');
const phaseNumber = document.querySelector('#phase-number');
const phaseList = document.querySelector('#phase-list');
const phaseMeter = document.querySelector('.phase-meter span');

function setPhase(name) {
  const phase = phases[name];
  if (!phase) return;
  tabs.forEach(tab => {
    const isActive = tab.dataset.phase === name;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });
  phaseNumber.textContent = phase.number;
  phaseTitle.textContent = phase.title;
  phaseCopy.textContent = phase.copy;
  phaseList.innerHTML = phase.bullets.map(item => `<li>${item}</li>`).join('');
  phaseMeter.style.setProperty('--w', phase.meter);
}

tabs.forEach(tab => tab.addEventListener('click', () => setPhase(tab.dataset.phase)));

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const apps = document.querySelector('#apps');
const seats = document.querySelector('#seats');
const cost = document.querySelector('#cost');
const appsValue = document.querySelector('#appsValue');
const seatsValue = document.querySelector('#seatsValue');
const costValue = document.querySelector('#costValue');
const currentCost = document.querySelector('#currentCost');
const futureCost = document.querySelector('#futureCost');
const savings = document.querySelector('#savings');

function updateCalculator() {
  const appCount = Number(apps.value);
  const seatCount = Number(seats.value);
  const monthlySeat = Number(cost.value);
  const current = appCount * seatCount * monthlySeat;
  const compressed = appCount * monthlySeat;
  const delta = Math.max(0, current - compressed);
  appsValue.textContent = appCount;
  seatsValue.textContent = seatCount;
  costValue.textContent = money.format(monthlySeat);
  currentCost.textContent = `${money.format(current)}/mo`;
  futureCost.textContent = `${money.format(compressed)}/mo`;
  savings.textContent = `${money.format(delta)}/mo`;
}
[apps, seats, cost].forEach(input => input.addEventListener('input', updateCalculator));
updateCalculator();

const revealTargets = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(target => observer.observe(target));
} else {
  revealTargets.forEach(target => target.classList.add('is-visible'));
}

document.querySelectorAll('.chart-line').forEach((path, index) => {
  const length = path.getTotalLength?.() || 0;
  if (!length) return;
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;
  path.animate([
    { strokeDashoffset: length },
    { strokeDashoffset: 0 }
  ], { duration: 1200 + index * 180, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'forwards' });
});
