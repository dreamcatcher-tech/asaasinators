// Small progressive enhancement layer for phase navigation, reveal effects,
// and the illustrative seat compression calculator. No framework or build step.
const phases = {
  shadow: {
    number: '01',
    meter: '25%',
    title: 'Seat the agent inside the SaaS app.',
    copy: 'We add the agent as a normal authorized user, teach it the app, map the screens, catalogue API/export options, and connect the first adjacent systems such as email.',
    bullets: [
      'Capture the human workflows and inbox handoffs that keep the app alive.',
      'Record reliable browser routes, validation checks, and approval points.',
      'Identify the minimum SaaS footprint needed for safe operation.'
    ]
  },
  conduit: {
    number: '02',
    meter: '50%',
    title: 'Make the agent the front door for work.',
    copy: 'Questions, jobs, reports, and data requests route to the agent before anyone opens the SaaS UI. The agent facilitates the request through email, API, export, sync, or browser operation.',
    bullets: [
      'Turn personal information needs into natural-language requests.',
      'Centralize audit trails, permissions, and exception handling.',
      'Reach phase one when routine user queries flow to the agent first.'
    ]
  },
  compress: {
    number: '03',
    meter: '74%',
    title: 'Compress human licenses to the operational minimum.',
    copy: 'As confidence grows, the team stops renting UI seats just to ask questions or move data between systems. The controlled agent seat keeps the old SaaS available in the background.',
    bullets: [
      'Remove licenses from people who only need outcomes, not the interface.',
      'Use human approval for sensitive operations and autonomous execution for safe routines.',
      'Measure direct SaaS visits until routine human traffic reaches zero.'
    ]
  },
  replace: {
    number: '04',
    meter: '100%',
    title: 'Answer without SaaS data calls, then cut off invisibly.',
    copy: 'The mirrored model and owned components take over dashboards, reports, approvals, search, and reminders until critical answers no longer require the vendor app.',
    bullets: [
      'Build a unitary model across email, exports, APIs, and SaaS objects.',
      'Replace useful UI elements one by one instead of forcing a cutover weekend.',
      'Turn cancellation from a risky migration into a final switch nobody feels.'
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
const annualCurrent = document.querySelector('#annualCurrent');
const annualFuture = document.querySelector('#annualFuture');
const annualSavings = document.querySelector('#annualSavings');

function updateCalculator() {
  const appCount = Number(apps.value);
  const seatCount = Number(seats.value);
  const monthlySeat = Number(cost.value);
  const current = appCount * seatCount * monthlySeat;
  const compressed = appCount * monthlySeat;
  const delta = Math.max(0, current - compressed);
  const annualCurrentValue = current * 12;
  const annualFutureValue = compressed * 12;
  const annualDeltaValue = delta * 12;
  appsValue.textContent = appCount;
  seatsValue.textContent = seatCount;
  costValue.textContent = money.format(monthlySeat);
  annualCurrent.textContent = `${money.format(annualCurrentValue)}/yr`;
  annualFuture.textContent = `${money.format(annualFutureValue)}/yr`;
  annualSavings.textContent = `${money.format(annualDeltaValue)}/yr`;
  currentCost.textContent = `${money.format(current)}/mo`;
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
