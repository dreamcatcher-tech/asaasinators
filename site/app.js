// Small progressive enhancement layer for phase navigation, phase visuals,
// reveal effects, and the illustrative seat compression calculator.
// No framework or build step.
const phaseVisuals = {
  shadow: {
    label: 'Visual showing the agent entering the legacy SaaS app as one authorized user',
    html: `
      <div class="phase-art phase-art--shadow">
        <div class="phase-art__topline"><span>01 / Seat</span><strong>Authorized foothold</strong></div>
        <div class="phase-art__scene" aria-hidden="true">
          <svg class="phase-art__paths" viewBox="0 0 420 280">
            <path class="phase-art__beam phase-art__beam--pink" d="M76 80 C128 42 188 46 225 92" />
            <path class="phase-art__beam phase-art__beam--lime" d="M94 208 C160 210 186 178 225 144" />
            <path class="phase-art__beam phase-art__beam--blue" d="M315 86 C292 108 270 120 238 132" />
          </svg>
          <div class="phase-art__panel" style="--x: 59%; --y: 48%;">
            <span>Legacy SaaS</span>
            <strong>Mapped UI</strong>
            <small>screens · exports · approvals</small>
          </div>
          <div class="phase-art__node phase-art__node--agent" style="--x: 24%; --y: 67%;"><b>Agent</b><small>1 authorized user</small></div>
          <div class="phase-art__chip" style="--x: 17%; --y: 25%;">Email</div>
          <div class="phase-art__chip phase-art__chip--lime" style="--x: 78%; --y: 24%;">API</div>
          <div class="phase-art__chip phase-art__chip--blue" style="--x: 78%; --y: 73%;">Browser route</div>
        </div>
        <figcaption class="phase-art__caption">The agent is safely seated, then maps the app before traffic moves.</figcaption>
      </div>`
  },
  conduit: {
    label: 'Visual showing requests routing through the agent before reaching SaaS or adjacent systems',
    html: `
      <div class="phase-art phase-art--conduit">
        <div class="phase-art__topline"><span>02 / Route</span><strong>One front door</strong></div>
        <div class="phase-art__scene" aria-hidden="true">
          <svg class="phase-art__paths" viewBox="0 0 420 280">
            <path class="phase-art__beam phase-art__beam--pink" d="M78 74 C132 82 163 112 194 134" />
            <path class="phase-art__beam phase-art__beam--pink" d="M76 144 C126 144 158 140 194 137" />
            <path class="phase-art__beam phase-art__beam--pink" d="M78 214 C132 198 160 166 194 143" />
            <path class="phase-art__beam phase-art__beam--lime" d="M235 138 C278 92 316 82 366 76" />
            <path class="phase-art__beam phase-art__beam--lime" d="M235 138 C292 140 326 140 370 140" />
            <path class="phase-art__beam phase-art__beam--blue" d="M235 138 C278 188 318 204 366 212" />
          </svg>
          <div class="phase-art__request" style="--x: 17%; --y: 26%;">reports</div>
          <div class="phase-art__request" style="--x: 15%; --y: 51%;">jobs</div>
          <div class="phase-art__request" style="--x: 17%; --y: 76%;">data access</div>
          <div class="phase-art__node phase-art__node--agent phase-art__node--large" style="--x: 51%; --y: 50%;"><b>Agent</b><small>request broker</small></div>
          <div class="phase-art__chip phase-art__chip--lime" style="--x: 86%; --y: 27%;">API</div>
          <div class="phase-art__chip" style="--x: 88%; --y: 50%;">Email</div>
          <div class="phase-art__chip phase-art__chip--blue" style="--x: 86%; --y: 75%;">Browser</div>
        </div>
        <figcaption class="phase-art__caption">People ask for outcomes; the agent chooses the safest route.</figcaption>
      </div>`
  },
  compress: {
    label: 'Visual showing human SaaS seats shrinking to an operational minimum while the agent handles routine work',
    html: `
      <div class="phase-art phase-art--compress">
        <div class="phase-art__topline"><span>03 / Compress</span><strong>Seat count falls</strong></div>
        <div class="phase-art__scene" aria-hidden="true">
          <svg class="phase-art__paths" viewBox="0 0 420 280">
            <path class="phase-art__beam phase-art__beam--pink" d="M56 184 C132 178 176 150 205 120" />
            <path class="phase-art__beam phase-art__beam--lime" d="M218 118 C254 102 288 95 345 92" />
            <path class="phase-art__burn" d="M70 222 C136 214 195 180 236 134 C270 96 314 78 370 68" />
          </svg>
          <div class="phase-art__seat-stack" style="--x: 20%; --y: 61%;">
            <i></i><i></i><i></i><i></i><i></i>
            <span>human UI seats</span>
          </div>
          <div class="phase-art__node phase-art__node--agent" style="--x: 52%; --y: 43%;"><b>Agent</b><small>routine operator</small></div>
          <div class="phase-art__bill" style="--x: 80%; --y: 45%;"><span>licenses</span><strong>5 → 1</strong><small>minimum safe footprint</small></div>
          <div class="phase-art__chip phase-art__chip--lime" style="--x: 68%; --y: 78%;">approval gates</div>
        </div>
        <figcaption class="phase-art__caption">Routine users stop renting a full UI seat just to move work.</figcaption>
      </div>`
  },
  replace: {
    label: 'Visual showing owned workflows answering requests after SaaS data calls reach zero',
    html: `
      <div class="phase-art phase-art--replace">
        <div class="phase-art__topline"><span>04 / Cut off</span><strong>Zero SaaS calls</strong></div>
        <div class="phase-art__scene" aria-hidden="true">
          <svg class="phase-art__paths" viewBox="0 0 420 280">
            <path class="phase-art__beam phase-art__beam--lime" d="M74 72 C154 76 203 104 250 134" />
            <path class="phase-art__beam phase-art__beam--lime" d="M72 206 C148 196 200 166 250 140" />
            <path class="phase-art__beam phase-art__beam--blue" d="M268 137 C300 108 330 95 372 88" />
            <path class="phase-art__beam phase-art__beam--blue" d="M268 137 C310 154 334 180 372 198" />
            <path class="phase-art__cut" d="M170 48 L170 232" />
          </svg>
          <div class="phase-art__ghost" style="--x: 20%; --y: 52%;"><span>Legacy SaaS</span><strong>off path</strong></div>
          <div class="phase-art__panel phase-art__panel--owned" style="--x: 60%; --y: 50%;"><span>Owned model</span><strong>answers work</strong><small>dashboards · approvals · search</small></div>
          <div class="phase-art__request" style="--x: 16%; --y: 23%;">queries</div>
          <div class="phase-art__request" style="--x: 17%; --y: 77%;">reports</div>
          <div class="phase-art__chip phase-art__chip--lime" style="--x: 78%; --y: 29%;">components</div>
          <div class="phase-art__chip phase-art__chip--blue" style="--x: 78%; --y: 71%;">final switch</div>
        </div>
        <figcaption class="phase-art__caption">Critical answers come from owned workflows; cancellation becomes invisible.</figcaption>
      </div>`
  }
};

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
    ],
    visual: phaseVisuals.shadow
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
    ],
    visual: phaseVisuals.conduit
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
    ],
    visual: phaseVisuals.compress
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
    ],
    visual: phaseVisuals.replace
  }
};

const tabs = Array.from(document.querySelectorAll('.phase-tab'));
const phaseTitle = document.querySelector('#phase-title');
const phaseCopy = document.querySelector('#phase-copy');
const phaseNumber = document.querySelector('#phase-number');
const phaseList = document.querySelector('#phase-list');
const phaseMeter = document.querySelector('.phase-meter span');
const phaseVisual = document.querySelector('#phase-visual');

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
  if (phaseVisual && phase.visual) {
    phaseVisual.className = `phase-visual phase-visual--${name}`;
    phaseVisual.setAttribute('aria-label', phase.visual.label);
    phaseVisual.innerHTML = phase.visual.html;
  }
}

tabs.forEach(tab => tab.addEventListener('click', () => setPhase(tab.dataset.phase)));
const requestedPhase = new URLSearchParams(window.location.search).get('phase');
setPhase(phases[requestedPhase] ? requestedPhase : 'shadow');

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
