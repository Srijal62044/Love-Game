/* ═══════════════════════════════════════════════
   LOVE APP — Vanilla JavaScript (GitHub Pages)
   ═══════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */
const LOVE_QUOTES = [
  { text: "You are my today and all of my tomorrows.", author: "Leo Christopher" },
  { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" },
  { text: "I love you not only for what you are, but for what I am when I am with you.", author: "Roy Croft" },
  { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
  { text: "I would rather spend one lifetime with you, than face all the ages of this world alone.", author: "J.R.R. Tolkien" },
  { text: "If I know what love is, it is because of you.", author: "Hermann Hesse" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
  { text: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.", author: "Leo Christopher" },
  { text: "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.", author: "A.A. Milne" },
  { text: "You're nothing short of my everything.", author: "Ralph Block" },
  { text: "Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.", author: "Unknown" },
  { text: "I look at you and see the rest of my life in front of my eyes.", author: "Unknown" },
  { text: "I need you like a heart needs a beat.", author: "OneRepublic" },
  { text: "Come live in my heart and pay no rent.", author: "Samuel Lover" },
  { text: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.", author: "F. Scott Fitzgerald" },
  { text: "I am who I am because of you.", author: "Nicholas Sparks" },
  { text: "You are my sun, my moon, and all my stars.", author: "E.E. Cummings" },
  { text: "Love understands love; it needs no talk.", author: "Frances Ridley Havergal" },
  { text: "You have my whole heart for my whole life.", author: "Unknown" },
  { text: "Every love story is beautiful, but ours is my favorite.", author: "Unknown" },
  { text: "We loved with a love that was more than love.", author: "Edgar Allan Poe" },
  { text: "In you, I've found the love of my life and my closest, truest friend.", author: "Unknown" },
  { text: "I want all of you, forever, you and me, every day.", author: "Nicholas Sparks" },
  { text: "My heart is and always will be yours.", author: "Jane Austen" },
  { text: "A hundred hearts would be too few to carry all my love for you.", author: "Unknown" },
  { text: "When I saw you I fell in love, and you smiled because you knew.", author: "Arrigo Boito" },
  { text: "You are the best thing that's ever been mine.", author: "Taylor Swift" },
  { text: "I fell in love with her courage, her sincerity, and her flaming self-respect.", author: "F. Scott Fitzgerald" },
  { text: "There is a madness in loving you, a lack of reason that makes it feel so flawless.", author: "Leo Christopher" },
  { text: "You are not just my partner — you are my best friend, my home, and my favorite adventure.", author: "Unknown" }
];

const QUIZ_QUESTIONS = [
  { q: "What's the most romantic movie of all time?", options: ["The Notebook", "Die Hard", "Shrek", "Speed"], ans: 0 },
  { q: "What is the universal symbol of love?", options: ["A pizza slice", "A red heart", "A diamond ring", "A rainbow"], ans: 1 },
  { q: "When is Valentine's Day?", options: ["February 14", "March 14", "April 1", "January 1"], ans: 0 },
  { q: "Which animal is known to mate for life?", options: ["Penguins", "Dogs", "Lions", "Cats"], ans: 0 },
  { q: "What does 'love at first sight' mean?", options: ["Being blind", "Falling instantly", "Swiping right fast", "Good lighting"], ans: 1 }
];

const WYR_QUESTIONS = [
  { opt1: "Always have to hold hands in public", opt2: "Never hold hands again", rxn: "Interesting choice! 🤝" },
  { opt1: "Share a toothbrush", opt2: "Share a towel", rxn: "Both are... concerning. 😂" },
  { opt1: "Travel the world together for a year", opt2: "Buy your dream house together", rxn: "Big dreams! ✈️🏡" },
  { opt1: "Always cook together", opt2: "Always order takeout", rxn: "Food is love either way. 🍕" },
  { opt1: "Matching outfits every day", opt2: "Never be seen together in public", rxn: "Fashion icon! 👔👗" },
  { opt1: "Endless text messages", opt2: "One 3-hour phone call daily", rxn: "Communication is key! 📱" },
  { opt1: "Forget all anniversaries", opt2: "Forget each other's birthdays", rxn: "Neither sounds great... 😬" },
  { opt1: "Your partner sings to you every morning", opt2: "Your partner dances with you every night", rxn: "Romance level: infinite! 🎶💃" },
  { opt1: "Know what your partner is thinking always", opt2: "Know what they dreamed every night", rxn: "No more secrets! 🔮" },
  { opt1: "Stay up all night talking", opt2: "Sleep in on a rainy day together", rxn: "Cozy either way! ☔" }
];

const DATE_IDEAS = [
  { title: "Blanket Fort Movie Night", desc: "Build a cozy fort and binge your favorite films.", cat: "Indoor", cost: "Budget", emoji: "🏰" },
  { title: "Cook a New Recipe Together", desc: "Pick a complex dish neither of you has made and tackle it together.", cat: "Indoor", cost: "Budget", emoji: "🍳" },
  { title: "Board Game Tournament", desc: "Pick 3 games and keep score. Winner gets a massage!", cat: "Indoor", cost: "Budget", emoji: "🎲" },
  { title: "At-Home Spa Night", desc: "Face masks, candles, relaxing music, and a bubble bath.", cat: "Indoor", cost: "Luxury", emoji: "🧖" },
  { title: "Wine & Cheese Tasting", desc: "Buy a few fancy cheeses and wines and rate them together.", cat: "Indoor", cost: "Luxury", emoji: "🍷" },
  { title: "Sunrise Hike & Picnic", desc: "Wake up early, hike to a view, and have a breakfast picnic.", cat: "Outdoor", cost: "Budget", emoji: "🌅" },
  { title: "Stargazing Night", desc: "Drive away from city lights with blankets and hot cocoa.", cat: "Outdoor", cost: "Budget", emoji: "✨" },
  { title: "Hot Air Balloon Ride", desc: "Take a scenic flight at sunrise or sunset.", cat: "Outdoor", cost: "Luxury", emoji: "🎈" },
  { title: "Weekend Cabin Trip", desc: "Rent a cozy cabin in the woods for two nights.", cat: "Outdoor", cost: "Luxury", emoji: "🌲" },
  { title: "Recreate Your First Date", desc: "Go to the exact places and try to wear similar outfits.", cat: "Surprise", cost: "Budget", emoji: "⏪" },
  { title: "Mystery Day Out", desc: "One person plans the entire day, keeping the other in the dark.", cat: "Surprise", cost: "Luxury", emoji: "🕵️" },
  { title: "Bookstore Challenge", desc: "Pick out a book for each other with a $20 limit.", cat: "Indoor", cost: "Budget", emoji: "📚" },
  { title: "Sunset Beach Walk", desc: "Walk along the shore as the sun goes down, hand in hand.", cat: "Outdoor", cost: "Budget", emoji: "🌊" },
  { title: "Farmers Market Morning", desc: "Explore a local farmers market and cook what you buy.", cat: "Outdoor", cost: "Budget", emoji: "🥕" },
  { title: "Couples Pottery Class", desc: "Get creative and messy together at a local studio.", cat: "Indoor", cost: "Luxury", emoji: "🏺" }
];

const MEME_CAPTIONS = [
  "When they reply in 0.001 seconds 😍",
  "Me staring at them doing absolutely nothing 🥺",
  "When they remember that tiny detail I mentioned 3 months ago",
  "POV: We're finally eating the food we spent 2 hours deciding on",
  "How I sleep knowing they're obsessed with me",
  "When they call me by my full name (I'm in danger)",
  "My wallet looking at me buying them gifts again",
  "When we both say the exact same thing at the same time"
];

const MEMORY_EMOJIS = ['❤️', '💕', '💋', '💍', '🌹', '🥂', '🦋', '💌'];

const SPIN_ACTIONS = [
  { emoji: '💋', label: 'Kiss' },
  { emoji: '🎵', label: 'Sing a Song' },
  { emoji: '💌', label: 'Say Something Sweet' },
  { emoji: '😂', label: 'Tell a Joke' },
  { emoji: '🕺', label: 'Dance Together' },
  { emoji: '🤗', label: 'Give a Hug' }
];

const NOTE_COLORS = [
  { cls: 'bg-pink',   hex: '#f9a8d4', dark: '#be185d' },
  { cls: 'bg-purple', hex: '#c4b5fd', dark: '#7c3aed' },
  { cls: 'bg-yellow', hex: '#fde68a', dark: '#b45309' },
  { cls: 'bg-green',  hex: '#a7f3d0', dark: '#065f46' },
  { cls: 'bg-blue',   hex: '#a5f3fc', dark: '#0e7490' },
  { cls: 'bg-orange', hex: '#fed7aa', dark: '#c2410c' }
];

/* ══════════════════════════════════════════
   STATE
══════════════════════════════════════════ */
const state = {
  theme: 'light',
  activeSection: 'home',

  // Home
  coupleProfile: null,
  isEditingProfile: true,
  quoteOffset: 0,
  calcResult: null,
  calcRunning: false,

  // Songs
  songs: [],
  currentSongIdx: 0,
  isPlaying: false,
  songProgress: 0,

  // Gallery
  photos: [],

  // Extras
  extrasTab: 'Letters',
  // Letters
  letterStep: 1,
  letterTo: '',
  letterFrom: '',
  letterTone: 'Sweet',
  letterMemory: '',
  letterWhatYouLove: '',
  letterGenerated: '',
  // Date Ideas
  dateFilter: 'All',
  showFavs: false,
  currentIdea: null,
  favDates: [],
  // Notes
  notes: [],
  noteColor: 0,
  // Bucket List
  bucketList: [],
  bucketCat: '🌍 Travel',
  bucketFilter: 'All',
  // Memes
  memes: [],

  // Games
  gameMode: null,
  // Quiz
  quizQ: 0,
  quizScore: 0,
  quizDone: false,
  // WYR
  wyrQ: 0,
  wyrRxn: null,
  // Memory Match
  memCards: [],
  memFlipped: [],
  memMatched: [],
  memMoves: 0,
  memLocked: false,
  // Spin
  spinRotation: 0,
  spinResult: null,
  spinRunning: false
};

/* ══════════════════════════════════════════
   AUDIO PLAYER
══════════════════════════════════════════ */
const audio = new Audio();
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    state.songProgress = (audio.currentTime / audio.duration) * 100;
    const fill = document.getElementById('player-progress-fill');
    if (fill) fill.style.width = state.songProgress + '%';
  }
});
audio.addEventListener('ended', () => {
  nextSong();
});

/* ══════════════════════════════════════════
   UTILITIES
══════════════════════════════════════════ */
function genId() { return Math.random().toString(36).slice(2, 10); }

function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function getOrdinalSuffix(n) {
  const j = n % 10, k = n % 100;
  if (j === 1 && k !== 11) return n + 'st';
  if (j === 2 && k !== 12) return n + 'nd';
  if (j === 3 && k !== 13) return n + 'rd';
  return n + 'th';
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function pad(n) { return String(n).padStart(2, '0'); }

function calculateLove(n1, n2) {
  const combined = (n1 + n2).toLowerCase().replace(/\s/g, '');
  let sum = 0;
  for (let i = 0; i < combined.length; i++) sum += combined.charCodeAt(i);
  return sum % 101;
}

function getLoveMessage(pct) {
  if (pct <= 20) return "Better as friends... maybe! 😅";
  if (pct <= 40) return "There's a tiny spark there! 🌟";
  if (pct <= 60) return "The chemistry is real! 💫";
  if (pct <= 80) return "You're practically soulmates! 💞";
  if (pct <= 99) return "A match made in heaven! 👼";
  return "PERFECT LOVE! You're destined for each other! 🎉";
}

function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

function load(key, def) {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : def; }
  catch { return def; }
}
function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function svgIcon(path, attrs = '') {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${attrs}>${path}</svg>`;
}

/* ══════════════════════════════════════════
   INITIALIZATION
══════════════════════════════════════════ */
function initApp() {
  // Load persisted state
  state.coupleProfile = load('coupleProfile', null);
  state.isEditingProfile = !state.coupleProfile;
  state.favDates = load('favoriteDates', []);
  state.notes = load('loveNotes', []);
  state.bucketList = load('bucketList', []);

  // Pre-fill letter names from profile
  if (state.coupleProfile) {
    state.letterTo   = state.coupleProfile.name2 || '';
    state.letterFrom = state.coupleProfile.name1 || '';
  }

  initParticles();
  initTheme();
  initNav();
  initMemoryDeck();
  renderSection('home');
  document.getElementById('section-home')
  .classList.add('active-section');

  // Hide loading screen after 1500ms
  setTimeout(() => {
    const ls = document.getElementById('loading-screen');
    ls.classList.add('hidden');
    const app = document.getElementById('app');
    app.classList.add('visible');
  }, 1500);
}

/* ── Particles ── */
function initParticles() {
  const container = document.getElementById('particles-container');
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    el.textContent = '❤️';
    el.style.left = (Math.random() * 100) + '%';
    el.style.fontSize = (Math.random() * 18 + 8) + 'px';
    el.style.animationDuration = (Math.random() * 12 + 10) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(el);
  }
}

/* ── Theme ── */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  setTheme(saved);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    setTheme(state.theme === 'light' ? 'dark' : 'light');
  });
}

function setTheme(t) {
  state.theme = t;
  document.documentElement.classList.toggle('dark', t === 'dark');
  document.getElementById('icon-moon').style.display = t === 'light' ? '' : 'none';
  document.getElementById('icon-sun').style.display  = t === 'dark'  ? '' : 'none';
  localStorage.setItem('theme', t);
}

/* ── Navigation ── */
function initNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      if (section !== state.activeSection) showSection(section);
    });
  });
}

function showSection(name) {
  const prev = document.getElementById('section-' + state.activeSection);
  const next = document.getElementById('section-' + name);

  prev.classList.remove('active-section');
  prev.classList.add('exit-section');
  setTimeout(() => { prev.classList.remove('exit-section'); }, 320);

  state.activeSection = name;
  renderSection(name);

  next.classList.add('active-section');

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.section === name);
  });
}

function renderSection(name) {
  const el = document.getElementById('section-' + name);
  switch (name) {
    case 'home':    renderHome(el);    break;
    case 'songs':   renderSongs(el);   break;
    case 'gallery': renderGallery(el); break;
    case 'extras':  renderExtras(el);  break;
    case 'games':   renderGames(el);   break;
  }
}

/* ══════════════════════════════════════════
   HOME SECTION
══════════════════════════════════════════ */
let countdownTimer = null;

function renderHome(el) {
  clearInterval(countdownTimer);

  const profile = state.coupleProfile;
  const q = LOVE_QUOTES[(getDayOfYear() + state.quoteOffset) % LOVE_QUOTES.length];

  const welcomeHTML = (!state.isEditingProfile && profile && profile.nickname)
    ? `<div class="welcome-greeting">
        <p>Welcome back,</p>
        <h1>${escHtml(profile.nickname)}!</h1>
       </div>`
    : '';

  const profileHTML = renderProfileCard(profile);
  const countdownHTML = (!state.isEditingProfile && profile && profile.anniversary)
    ? `<div class="card" id="countdown-card">
        <h3 class="section-title" style="font-size:1.1rem;margin-bottom:0.75rem">Anniversary Countdown</h3>
        <div id="countdown-inner"></div>
       </div>`
    : '';

  const quoteHTML = `
    <div class="card quote-card">
      <span class="quote-icon">"</span>
      <p class="quote-text">"${escHtml(q.text)}"</p>
      <p class="quote-author">— ${escHtml(q.author)}</p>
      <button class="quote-next-btn" id="quote-next">↻ Next</button>
    </div>`;

  const calcHTML = renderCalcCard();

  el.innerHTML = `
    <div class="section-inner">
      ${welcomeHTML}
      ${profileHTML}
      ${countdownHTML}
      ${quoteHTML}
      ${calcHTML}
    </div>`;

  bindHomeEvents(el);
  if (!state.isEditingProfile && profile && profile.anniversary) {
    updateCountdown(profile.anniversary);
    countdownTimer = setInterval(() => updateCountdown(profile.anniversary), 1000);
  }
}

function renderProfileCard(profile) {
  if (state.isEditingProfile) {
    const p = profile || { name1: '', name2: '', nickname: '', anniversary: '' };
    return `
      <div class="card" id="profile-card">
        <h3 class="section-title" style="font-size:1.1rem;margin-bottom:0.75rem">Couple Profile</h3>
        <div style="display:flex;flex-direction:column;gap:0.65rem">
          <input class="glass-input" type="text" id="p-name1" placeholder="Your Name" value="${escHtml(p.name1)}" />
          <input class="glass-input" type="text" id="p-name2" placeholder="Partner's Name" value="${escHtml(p.name2)}" />
          <input class="glass-input" type="text" id="p-nick"  placeholder="Couple Nickname (e.g. Romeo & Juliet)" value="${escHtml(p.nickname)}" />
          <input class="glass-input" type="date" id="p-anniv" value="${escHtml(p.anniversary)}" />
          <button class="btn-primary" id="profile-save" style="margin-top:0.4rem;border-radius:0.75rem">Save Profile</button>
        </div>
      </div>`;
  }

  return `
    <div class="card" id="profile-card">
      <div class="profile-display">
        <div class="profile-names">
          <span>${escHtml(profile.name1)}</span>
          <span class="profile-heart">❤️</span>
          <span>${escHtml(profile.name2)}</span>
        </div>
        ${profile.nickname ? `<p class="profile-nickname">"${escHtml(profile.nickname)}"</p>` : ''}
        <button class="profile-edit-btn" id="profile-edit" title="Edit profile">
          ${svgIcon('<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>', 'width="16" height="16"')}
        </button>
      </div>
    </div>`;
}

function renderCalcCard() {
  return `
    <div class="card" id="calc-card">
      <div style="text-align:center;margin-bottom:1.25rem">
        <h2 class="section-title">Love Calculator</h2>
        <p class="section-subtitle">Discover your compatibility</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.75rem">
        <input class="glass-input" type="text" id="calc-n1" placeholder="Your Name" style="text-align:center;font-weight:600" />
        <div style="text-align:center;font-size:1.4rem;color:var(--primary);animation:heartbeat 2s ease-in-out infinite">❤️</div>
        <input class="glass-input" type="text" id="calc-n2" placeholder="Their Name" style="text-align:center;font-weight:600" />
      </div>
      <button class="btn-primary" id="calc-btn" style="width:100%;margin-top:1.25rem;border-radius:0.75rem">
        Calculate Love
      </button>
      <div id="calc-result-area"></div>
    </div>`;
}

function bindHomeEvents(el) {
  // Quote next
  el.querySelector('#quote-next')?.addEventListener('click', () => {
    state.quoteOffset++;
    renderHome(document.getElementById('section-home'));
  });

  // Profile save
  el.querySelector('#profile-save')?.addEventListener('click', () => {
    const name1 = el.querySelector('#p-name1').value.trim();
    const name2 = el.querySelector('#p-name2').value.trim();
    const nickname = el.querySelector('#p-nick').value.trim();
    const anniversary = el.querySelector('#p-anniv').value;
    if (!name1 || !name2) return;
    state.coupleProfile = { name1, name2, nickname, anniversary };
    state.isEditingProfile = false;
    state.letterTo   = name2;
    state.letterFrom = name1;
    save('coupleProfile', state.coupleProfile);
    renderHome(document.getElementById('section-home'));
  });

  // Profile edit
  el.querySelector('#profile-edit')?.addEventListener('click', () => {
    state.isEditingProfile = true;
    renderHome(document.getElementById('section-home'));
  });

  // Calculator
  const calcBtn = el.querySelector('#calc-btn');
  calcBtn?.addEventListener('click', () => {
    const n1 = el.querySelector('#calc-n1').value.trim();
    const n2 = el.querySelector('#calc-n2').value.trim();
    if (!n1 || !n2 || state.calcRunning) return;

    playChime();
    state.calcRunning = true;
    state.calcResult = null;
    const resultArea = el.querySelector('#calc-result-area');
    calcBtn.innerHTML = '<span class="calc-heart-spin">❤️</span>';
    calcBtn.disabled = true;

    setTimeout(() => {
      state.calcResult = calculateLove(n1, n2);
      state.calcRunning = false;
      calcBtn.innerHTML = 'Calculate Love';
      calcBtn.disabled = false;
      showCalcResult(resultArea, state.calcResult);
    }, 1500);
  });
}

function showCalcResult(container, pct) {
  container.innerHTML = `
    <div class="calc-result">
      <div class="calc-pct">${pct}%</div>
      <div class="calc-bar-track">
        <div class="calc-bar-fill" id="calc-bar-fill"></div>
      </div>
      <div style="font-size:2.5rem">❤️</div>
      <p class="calc-msg">${getLoveMessage(pct)}</p>
    </div>`;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const fill = document.getElementById('calc-bar-fill');
      if (fill) fill.style.width = pct + '%';
    });
  });
}

function updateCountdown(anniversaryStr) {
  const inner = document.getElementById('countdown-inner');
  if (!inner) return;

  const now = new Date();
  const anniv = new Date(anniversaryStr + 'T00:00:00');
  let nextAnniv = new Date(now.getFullYear(), anniv.getMonth(), anniv.getDate());
  if (nextAnniv < now && !(nextAnniv.toDateString() === now.toDateString())) {
    nextAnniv.setFullYear(now.getFullYear() + 1);
  }

  const isToday = nextAnniv.toDateString() === now.toDateString();
  const year = nextAnniv.getFullYear();
  const annivNum = year - anniv.getFullYear();

  if (isToday) {
    inner.innerHTML = `
      <div class="anniversary-today">
        <div class="big-emoji">🎉</div>
        <h2>Happy Anniversary!</h2>
      </div>`;
    return;
  }

  const diff = Math.max(0, Math.floor((nextAnniv - now) / 1000));
  const days  = Math.floor(diff / 86400);
  const hours = Math.floor((diff % 86400) / 3600);
  const mins  = Math.floor((diff % 3600) / 60);
  const secs  = diff % 60;

  inner.innerHTML = `
    <div class="countdown-grid">
      ${[['Days', days], ['Hours', hours], ['Mins', mins], ['Secs', secs]].map(([label, val]) => `
        <div class="countdown-box">
          <div class="countdown-num">${pad(val)}</div>
          <div class="countdown-label">${label}</div>
        </div>`).join('')}
    </div>
    <p style="text-align:center;font-size:0.82rem;font-weight:600;margin-top:0.85rem;opacity:0.75">
      Until our ${getOrdinalSuffix(annivNum)} anniversary ❤️
    </p>`;
}

/* ══════════════════════════════════════════
   SONGS SECTION
══════════════════════════════════════════ */
function renderSongs(el) {
  const song = state.songs[state.currentSongIdx];

  el.innerHTML = `
    <div class="section-inner">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem">
          <h2 class="section-title">Our Playlist</h2>
          <label class="file-label" style="background:hsl(340,82%,52%,0.12);color:var(--primary);padding:0.5rem;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;">
            ${svgIcon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>', 'width="20" height="20"')}
            <input type="file" accept="audio/*" multiple id="song-upload" style="display:none">
          </label>
        </div>

        <div class="player-area">
          <div class="player-disc${state.isPlaying ? ' playing' : ''}">🎵</div>
          <div>
            <p class="player-song-name">${song ? escHtml(song.name) : 'No song selected'}</p>
            <p class="player-track-info">${state.songs.length > 0 ? `Track ${state.currentSongIdx + 1} of ${state.songs.length}` : 'Upload some music'}</p>
          </div>
          <div class="player-progress" id="player-progress-bar">
            <div class="player-progress-fill" id="player-progress-fill" style="width:${state.songProgress}%"></div>
          </div>
          <div class="player-controls">
            <button class="ctrl-btn" id="song-prev" title="Previous">
              ${svgIcon('<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/>', 'width="26" height="26"')}
            </button>
            <button class="play-btn" id="song-play" title="${state.isPlaying ? 'Pause' : 'Play'}">
              ${state.isPlaying
                ? svgIcon('<rect x="6" y="4" width="4" height="16" fill="white" stroke="none"/><rect x="14" y="4" width="4" height="16" fill="white" stroke="none"/>', 'width="26" height="26"')
                : svgIcon('<polygon points="5 3 19 12 5 21 5 3" fill="white" stroke="none"/>', 'width="26" height="26"')}
            </button>
            <button class="ctrl-btn" id="song-next" title="Next">
              ${svgIcon('<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/>', 'width="26" height="26"')}
            </button>
          </div>
        </div>

        <div class="playlist-scroll scrollbar-hide" id="playlist">
          ${state.songs.length === 0
            ? `<div class="upload-zone">
                ${svgIcon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>')}
                <p>Tap the ↑ icon to add your favorite songs</p>
               </div>`
            : state.songs.map((s, idx) => `
                <div class="playlist-item${idx === state.currentSongIdx ? ' active' : ''}" data-idx="${idx}">
                  <div class="playlist-icon">
                    ${idx === state.currentSongIdx && state.isPlaying
                      ? `<div class="eq-bars"><div class="eq-bar" style="height:4px"></div><div class="eq-bar" style="height:10px"></div><div class="eq-bar" style="height:7px"></div></div>`
                      : svgIcon('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>', 'width="15" height="15" opacity="0.5"')}
                  </div>
                  <span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${escHtml(s.name)}</span>
                </div>`).join('')}
        </div>
      </div>
    </div>`;

  bindSongsEvents(el);
}

function bindSongsEvents(el) {
  el.querySelector('#song-upload')?.addEventListener('change', (e) => {
    if (!e.target.files) return;
    Array.from(e.target.files).forEach(file => {
      state.songs.push({ id: genId(), name: file.name.replace(/\.[^/.]+$/, ''), url: URL.createObjectURL(file) });
    });
    renderSongs(el);
  });

  el.querySelector('#song-play')?.addEventListener('click', () => {
    if (state.songs.length === 0) return;
    togglePlay();
    renderSongs(el);
  });

  el.querySelector('#song-prev')?.addEventListener('click', () => prevSong(el));
  el.querySelector('#song-next')?.addEventListener('click', () => nextSong(el));

  el.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.idx, 10);
      state.currentSongIdx = idx;
      state.isPlaying = true;
      audio.src = state.songs[idx].url;
      audio.play().catch(() => { state.isPlaying = false; });
      renderSongs(el);
    });
  });

  el.querySelector('#player-progress-bar')?.addEventListener('click', (e) => {
    if (!audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pct * audio.duration;
  });
}

function togglePlay() {
  if (state.songs.length === 0) return;
  if (state.isPlaying) {
    audio.pause();
    state.isPlaying = false;
  } else {
    const song = state.songs[state.currentSongIdx];
    if (audio.src !== song.url) audio.src = song.url;
    audio.play().catch(() => { state.isPlaying = false; });
    state.isPlaying = true;
  }
}

function prevSong(el) {
  if (state.songs.length === 0) return;
  state.currentSongIdx = (state.currentSongIdx - 1 + state.songs.length) % state.songs.length;
  state.isPlaying = true;
  audio.src = state.songs[state.currentSongIdx].url;
  audio.play().catch(() => { state.isPlaying = false; });
  if (el) renderSongs(el);
}

function nextSong(el) {
  if (state.songs.length === 0) return;
  state.currentSongIdx = (state.currentSongIdx + 1) % state.songs.length;
  state.isPlaying = true;
  audio.src = state.songs[state.currentSongIdx].url;
  audio.play().catch(() => { state.isPlaying = false; });
  if (el) renderSongs(el || document.getElementById('section-songs'));
}

/* ══════════════════════════════════════════
   GALLERY SECTION
══════════════════════════════════════════ */
function renderGallery(el) {
  el.innerHTML = `
    <div class="section-inner wide">
      <div class="gallery-header">
        <h2 class="section-title">Our Memories</h2>
        <label class="btn-primary file-label" style="border-radius:999px;font-size:0.85rem;display:inline-flex;align-items:center;gap:0.4rem;cursor:pointer">
          ${svgIcon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>', 'width="16" height="16"')}
          Upload
          <input type="file" accept="image/*" multiple id="gallery-upload" style="display:none">
        </label>
      </div>

      ${state.photos.length === 0
        ? `<div class="empty-state">
            <div class="empty-icon">❤️</div>
            <h3>No photos yet</h3>
            <p>Upload your favourite moments together</p>
           </div>`
        : `<div class="gallery-grid" id="gallery-grid">
            ${state.photos.map(p => `
              <div class="gallery-item" data-id="${p.id}">
                <img src="${p.url}" alt="Memory" loading="lazy" />
                <div class="gallery-overlay">
                  ${svgIcon('<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="rgba(255,255,255,0.85)" stroke="none"/>', 'width="48" height="48"')}
                </div>
                <button class="gallery-delete" data-id="${p.id}" title="Delete">✕</button>
              </div>`).join('')}
           </div>`}
    </div>`;

  bindGalleryEvents(el);
}

function bindGalleryEvents(el) {
  el.querySelector('#gallery-upload')?.addEventListener('change', (e) => {
    if (!e.target.files) return;
    Array.from(e.target.files).forEach(file => {
      state.photos.unshift({ id: genId(), url: URL.createObjectURL(file) });
    });
    renderGallery(el);
  });

  el.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-delete')) return;
      const img = item.querySelector('img');
      openLightbox(img.src);
    });
  });

  el.querySelectorAll('.gallery-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      state.photos = state.photos.filter(p => p.id !== id);
      renderGallery(el);
    });
  });
}

function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = src;
  lb.classList.add('open');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}

/* ══════════════════════════════════════════
   EXTRAS SECTION
══════════════════════════════════════════ */
const EXTRAS_TABS = ['Letters', 'Date Ideas', 'Notes', 'Bucket List', 'Memes'];

function renderExtras(el) {
  const tabs = EXTRAS_TABS.map(t => `
    <button class="extras-tab${t === state.extrasTab ? ' active' : ''}" data-tab="${t}">${t}</button>`).join('');

  el.innerHTML = `
    <div class="section-inner wide">
      <div class="extras-tabs">${tabs}</div>
      <div id="extras-content" class="extras-content"></div>
    </div>`;

  el.querySelectorAll('.extras-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.extrasTab = btn.dataset.tab;
      el.querySelectorAll('.extras-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === state.extrasTab));
      renderExtrasContent(el.querySelector('#extras-content'));
    });
  });

  renderExtrasContent(el.querySelector('#extras-content'));
}

function renderExtrasContent(container) {
  container.classList.remove('extras-content');
  void container.offsetWidth;
  container.classList.add('extras-content');
  switch (state.extrasTab) {
    case 'Letters':    renderLetters(container);    break;
    case 'Date Ideas': renderDateIdeas(container);  break;
    case 'Notes':      renderNotes(container);      break;
    case 'Bucket List': renderBucketList(container); break;
    case 'Memes':      renderMemes(container);      break;
  }
}

/* ── Love Letters ── */
function generateLetter(to, from, tone, memory, whatYouLove) {
  const wyl = whatYouLove || 'so much warmth and joy';
  const mem = memory ? `I still smile when I think about ${memory}.` : 'There are so many moments I treasure with you.';
  switch (tone) {
    case 'Sweet':
      return `My dearest ${to},\n\nEvery day I wake up grateful that you are in my life. You have filled my world with ${wyl}.\n\n${mem} That day reminded me how perfectly we fit together.\n\nYou are not just my partner — you are my best friend, my home, and my favourite adventure. I love you more than words can say.\n\nForever yours,\n${from}`;
    case 'Funny':
      return `Hey ${to},\n\nI love you more than pizza, and you know how much I love pizza. You're the only person I'd share my snacks with — and honestly that says everything. Even when you're annoying, you're my favourite annoyance.\n\n${memory ? `Remember ${memory}? Yeah, I still laugh about that.` : 'The things we get up to together could fill a whole comedy series.'} Anyway, you're the absolute best.\n\nLove you lots (and lots),\n${from} 😄`;
    case 'Dramatic':
      return `Dearest ${to},\n\nFrom the moment I first saw you, my world shifted on its axis. You are the crescendo of every song, the punchline of every joke, the final word in every argument I thought I could win.\n\n${whatYouLove ? `Your ${whatYouLove} captivates my very soul.` : 'You are my sun and stars, my beginning and my end.'} ${memory ? `The memory of ${memory} is forever etched in my heart like a scar I never want to heal.` : ''}\n\nI am unequivocally, catastrophically, gloriously in love with you.\n\nPassionately and forever,\n${from}`;
    case 'Poetic':
      return `To ${to},\n\nIf love were a language, your laugh would be its melody — soft at first, then filling every corner of the room. ${whatYouLove ? `In you I find ${whatYouLove}, a kind of grace I never thought to ask for.` : 'In you I find a grace I never thought to ask for.'}\n\n${memory ? `Like ${memory} — a moment pressed between the pages of us.` : 'Every moment with you is a line of poetry I didn\'t know I was writing.'}\n\nYou are not the person I was looking for. You are the poem I stumbled into.\n\nAlways yours,\n${from}`;
    default:
      return '';
  }
}

function renderLetters(container) {
  if (state.letterStep === 1) {
    container.innerHTML = `
      <div class="card">
        <h3 style="font-weight:800;font-size:1.1rem;margin-bottom:1rem">Love Letter Generator 💌</h3>
        <div style="display:flex;gap:0.5rem;margin-bottom:0.75rem">
          <input class="glass-input" type="text" id="l-to"   placeholder="To"   value="${escHtml(state.letterTo)}"   style="flex:1" />
          <input class="glass-input" type="text" id="l-from" placeholder="From" value="${escHtml(state.letterFrom)}" style="flex:1" />
        </div>
        <div class="tone-grid" style="margin-bottom:0.75rem">
          ${['Sweet 💕','Funny 😄','Dramatic 🎭','Poetic 🌸'].map(t => {
              const base = t.split(' ')[0];
              return `<button class="tone-btn${state.letterTone === base ? ' active' : ''}" data-tone="${base}">${t}</button>`;
            }).join('')}
        </div>
        <textarea class="glass-input" id="l-mem"  placeholder="A special memory (optional)" style="height:5rem;resize:none;display:block;margin-bottom:0.65rem">${escHtml(state.letterMemory)}</textarea>
        <textarea class="glass-input" id="l-love" placeholder="What you love most about them (optional)" style="height:5rem;resize:none;display:block;margin-bottom:1rem">${escHtml(state.letterWhatYouLove)}</textarea>
        <button class="btn-primary" id="letter-gen" style="width:100%;border-radius:0.75rem" ${(!state.letterTo && !state.letterFrom) ? 'disabled' : ''}>Generate Letter</button>
      </div>`;

    container.querySelectorAll('.tone-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.letterTone = btn.dataset.tone;
        container.querySelectorAll('.tone-btn').forEach(b => b.classList.toggle('active', b.dataset.tone === state.letterTone));
      });
    });
    container.querySelector('#letter-gen')?.addEventListener('click', () => {
      const to   = container.querySelector('#l-to').value.trim();
      const from = container.querySelector('#l-from').value.trim();
      if (!to || !from) return;
      state.letterTo   = to;
      state.letterFrom = from;
      state.letterMemory       = container.querySelector('#l-mem').value.trim();
      state.letterWhatYouLove  = container.querySelector('#l-love').value.trim();
      state.letterGenerated    = generateLetter(to, from, state.letterTone, state.letterMemory, state.letterWhatYouLove);
      state.letterStep = 2;
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  } else {
    container.innerHTML = `
      <div class="card" style="animation:fadeSlideIn 0.3s ease">
        <div class="letter-output">${escHtml(state.letterGenerated)}</div>
        <div class="letter-btns" style="margin-top:1.25rem">
          <button class="btn-outline" id="letter-copy">📋 Copy Letter</button>
          <button class="btn-primary" id="letter-another" style="border-radius:0.75rem">✨ Another</button>
        </div>
      </div>`;
    container.querySelector('#letter-copy')?.addEventListener('click', () => {
      navigator.clipboard.writeText(state.letterGenerated).catch(() => {});
      const btn = container.querySelector('#letter-copy');
      btn.textContent = '✅ Copied!';
      setTimeout(() => { btn.innerHTML = '📋 Copy Letter'; }, 2000);
    });
    container.querySelector('#letter-another')?.addEventListener('click', () => {
      state.letterStep = 1;
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  }
}

/* ── Date Ideas ── */
function renderDateIdeas(container) {
  const filters = ['All','Indoor','Outdoor','Budget','Luxury','Surprise'];
  const chips = filters.map(f => `
    <button class="chip${state.dateFilter === f && !state.showFavs ? ' active' : ''}" data-filter="${f}">${f}</button>`).join('');

  const favBtn = `<button class="chip fav-btn${state.showFavs ? ' active' : ''}" id="date-fav-toggle">❤️ Favs</button>`;

  let content = '';
  if (!state.showFavs) {
    content = `
      <div style="display:flex;justify-content:center;margin-bottom:0.5rem">
        <button class="btn-primary" id="gen-idea" style="display:inline-flex;align-items:center;gap:0.5rem;border-radius:999px">
          🎲 Generate Date Idea
        </button>
      </div>
      <div id="idea-display">
        ${state.currentIdea ? renderIdeaCard(state.currentIdea) : ''}
      </div>`;
  } else {
    const favs = state.favDates;
    content = favs.length === 0
      ? `<p style="text-align:center;opacity:0.5;padding:2rem">No saved favourites yet.</p>`
      : favs.map(idea => `
          <div class="fav-list-item">
            <span class="fav-item-emoji">${idea.emoji}</span>
            <div class="fav-item-info">
              <p class="fav-item-title">${escHtml(idea.title)}</p>
              <p class="fav-item-desc">${escHtml(idea.desc)}</p>
            </div>
            <button class="fav-del-btn" data-title="${escHtml(idea.title)}">🗑</button>
          </div>`).join('');
  }

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap">
        <div class="filter-chips">${chips}</div>
        ${favBtn}
      </div>
      ${content}
    </div>`;

  container.querySelectorAll('.chip:not(.fav-btn)').forEach(btn => {
    btn.addEventListener('click', () => {
      state.dateFilter = btn.dataset.filter;
      state.showFavs = false;
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });

  container.querySelector('#date-fav-toggle')?.addEventListener('click', () => {
    state.showFavs = !state.showFavs;
    renderExtrasContent(container.closest('#extras-content') || container);
  });

  container.querySelector('#gen-idea')?.addEventListener('click', () => {
    const pool = state.dateFilter === 'All'
      ? DATE_IDEAS
      : DATE_IDEAS.filter(d => d.cat === state.dateFilter || d.cost === state.dateFilter);
    if (pool.length === 0) return;
    state.currentIdea = pool[Math.floor(Math.random() * pool.length)];
    renderExtrasContent(container.closest('#extras-content') || container);
  });

  container.querySelector('.idea-fav-btn')?.addEventListener('click', () => {
    const idea = state.currentIdea;
    if (!idea) return;
    const idx = state.favDates.findIndex(f => f.title === idea.title);
    if (idx > -1) { state.favDates.splice(idx, 1); }
    else           { state.favDates.push(idea); }
    save('favoriteDates', state.favDates);
    renderExtrasContent(container.closest('#extras-content') || container);
  });

  container.querySelectorAll('.fav-del-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.favDates = state.favDates.filter(f => f.title !== btn.dataset.title);
      save('favoriteDates', state.favDates);
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });
}

function renderIdeaCard(idea) {
  const isFav = state.favDates.some(f => f.title === idea.title);
  return `
    <div class="idea-card glass-panel">
      <button class="idea-fav-btn" title="${isFav ? 'Remove from favourites' : 'Save to favourites'}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <div class="idea-emoji">${idea.emoji}</div>
      <h3 class="idea-title">${escHtml(idea.title)}</h3>
      <p class="idea-desc">${escHtml(idea.desc)}</p>
      <div class="idea-badges">
        <span class="badge">${escHtml(idea.cat)}</span>
        <span class="badge">${escHtml(idea.cost)}</span>
      </div>
    </div>`;
}

/* ── Love Notes ── */
function renderNotes(container) {
  const notes = state.notes;

  container.innerHTML = `
    <div style="position:relative;min-height:300px">
      ${notes.length === 0
        ? `<div style="text-align:center;padding:3rem 1rem;opacity:0.55">
            <div style="font-size:3rem;margin-bottom:0.75rem">✍️</div>
            <h3 style="font-weight:700">Write your first love note ✨</h3>
           </div>`
        : `<div class="notes-grid">
            ${notes.map(n => `
              <div class="note-card" style="background:${n.colorHex};color:#333">
                <p>${escHtml(n.text)}</p>
                <p class="note-date">${n.date}</p>
                <button class="note-del" data-id="${n.id}">✕</button>
              </div>`).join('')}
           </div>`}
    </div>`;

  container.querySelectorAll('.note-del').forEach(btn => {
    btn.addEventListener('click', () => {
      state.notes = state.notes.filter(n => n.id != btn.dataset.id);
      save('loveNotes', state.notes);
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });

  // FAB - rendered separately outside the container
  let fab = document.getElementById('notes-fab');
  if (!fab) {
    fab = document.createElement('button');
    fab.id = 'notes-fab';
    fab.className = 'fab';
    fab.innerHTML = '+';
    document.body.appendChild(fab);
  }
  fab.style.display = '';
  fab.onclick = () => openNoteModal(container);
}

function openNoteModal(container) {
  const modal = document.getElementById('note-modal');
  const colorsEl = document.getElementById('note-colors');
  state.noteColor = 0;

  colorsEl.innerHTML = NOTE_COLORS.map((c, i) => `
    <button class="color-dot${i === 0 ? ' selected' : ''}" data-idx="${i}" style="background:${c.hex}" title="${c.cls}"></button>`).join('');

  document.getElementById('note-textarea').value = '';
  modal.classList.add('open');

  colorsEl.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.noteColor = parseInt(dot.dataset.idx, 10);
      colorsEl.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
      dot.classList.add('selected');
    });
  });
}

function closeNoteModal() {
  document.getElementById('note-modal').classList.remove('open');
}

/* ── Bucket List ── */
function renderBucketList(container) {
  const list = state.bucketList;
  const completed = list.filter(i => i.done).length;
  const pct = list.length ? Math.round((completed / list.length) * 100) : 0;
  const cats = ['🌍 Travel','💑 Together','🎯 Experience','🏠 Home','🎉 Celebrate'];

  const filtered = list.filter(i => {
    if (state.bucketFilter === 'Completed') return i.done;
    if (state.bucketFilter === 'Incomplete') return !i.done;
    return true;
  });

  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div class="card">
        <div style="display:flex;justify-content:space-between;font-size:0.82rem;font-weight:700;margin-bottom:0.5rem">
          <span>Bucket List Progress</span>
          <span style="color:var(--primary)">${pct}%</span>
        </div>
        <div class="bucket-progress-bar">
          <div class="bucket-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>

      <div class="card">
        <div class="bucket-input-row">
          <input class="glass-input" type="text" id="bucket-input" placeholder="Add an adventure..." />
          <button class="bucket-add-btn" id="bucket-add">+</button>
        </div>
        <select class="glass-input" id="bucket-cat" style="margin-top:0.6rem;max-width:200px">
          ${cats.map(c => `<option value="${c}"${c === state.bucketCat ? ' selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>

      <div style="display:flex;gap:0.5rem">
        ${['All','Completed','Incomplete'].map(f => `
          <button class="btn-glass${f === state.bucketFilter ? ' btn-primary' : ''}" data-bf="${f}" style="border-radius:999px;font-size:0.78rem">
            ${f}
          </button>`).join('')}
      </div>

      <div style="display:flex;flex-direction:column;gap:0.6rem" id="bucket-items">
        ${filtered.length === 0
          ? `<p style="text-align:center;opacity:0.5;padding:2rem">✨ No items here yet.</p>`
          : filtered.map(item => `
              <div class="bucket-item${item.done ? ' done' : ''}">
                <button class="bucket-check${item.done ? ' checked' : ''}" data-id="${item.id}">
                  ${item.done ? '✓' : ''}
                </button>
                <div style="flex:1">
                  <div class="bucket-text">${escHtml(item.text)}</div>
                  <div class="bucket-cat">${escHtml(item.cat)}</div>
                </div>
                <button class="bucket-del" data-id="${item.id}">🗑</button>
              </div>`).join('')}
      </div>
    </div>`;

  const input = container.querySelector('#bucket-input');
  container.querySelector('#bucket-add')?.addEventListener('click', () => addBucketItem(input, container));
  input?.addEventListener('keydown', e => { if (e.key === 'Enter') addBucketItem(input, container); });
  container.querySelector('#bucket-cat')?.addEventListener('change', e => { state.bucketCat = e.target.value; });

  container.querySelectorAll('[data-bf]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.bucketFilter = btn.dataset.bf;
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });
  container.querySelectorAll('.bucket-check').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      const item = state.bucketList.find(i => i.id === id);
      if (item) { item.done = !item.done; save('bucketList', state.bucketList); }
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });
  container.querySelectorAll('.bucket-del').forEach(btn => {
    btn.addEventListener('click', () => {
      state.bucketList = state.bucketList.filter(i => i.id !== Number(btn.dataset.id));
      save('bucketList', state.bucketList);
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });
}

function addBucketItem(input, container) {
  const text = input.value.trim();
  if (!text) return;
  state.bucketList.push({ id: Date.now(), text, cat: state.bucketCat, done: false });
  save('bucketList', state.bucketList);
  input.value = '';
  renderExtrasContent(container.closest('#extras-content') || container);
}

/* ── Memes ── */
function renderMemes(container) {
  container.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div style="display:flex;justify-content:space-between;align-items:center;background:var(--glass-bg);border:1px solid var(--glass-border);border-radius:1rem;padding:1rem 1.25rem">
        <h2 class="section-title">Meme Wall</h2>
        <label class="btn-primary file-label" style="border-radius:999px;font-size:0.8rem;display:inline-flex;align-items:center;gap:0.4rem;cursor:pointer">
          ${svgIcon('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>', 'width="15" height="15"')}
          Upload Meme
          <input type="file" accept="image/*" multiple id="meme-upload" style="display:none">
        </label>
      </div>

      ${state.memes.length === 0
        ? `<div class="empty-state">
            <div class="empty-icon">😂</div>
            <h3>It's too serious in here</h3>
            <p>Upload some funny pictures or inside jokes</p>
           </div>`
        : `<div class="meme-grid">
            ${state.memes.map(m => `
              <div class="meme-card glass-panel">
                <div class="meme-img-wrap">
                  <img src="${m.url}" alt="Meme" loading="lazy" />
                </div>
                <div class="meme-caption">${escHtml(m.caption)}</div>
                <button class="meme-del" data-id="${m.id}">✕</button>
              </div>`).join('')}
           </div>`}
    </div>`;

  container.querySelector('#meme-upload')?.addEventListener('change', (e) => {
    if (!e.target.files) return;
    Array.from(e.target.files).forEach(file => {
      state.memes.unshift({
        id: genId(),
        url: URL.createObjectURL(file),
        caption: MEME_CAPTIONS[Math.floor(Math.random() * MEME_CAPTIONS.length)]
      });
    });
    renderExtrasContent(container.closest('#extras-content') || container);
  });
  container.querySelectorAll('.meme-del').forEach(btn => {
    btn.addEventListener('click', () => {
      state.memes = state.memes.filter(m => m.id !== btn.dataset.id);
      renderExtrasContent(container.closest('#extras-content') || container);
    });
  });
}

/* ══════════════════════════════════════════
   GAMES SECTION
══════════════════════════════════════════ */
const GAME_DEFS = [
  { id: 'quiz',   label: 'Love Quiz',        emoji: '📝', gradient: 'linear-gradient(135deg, hsl(340,82%,52%), hsl(330,80%,75%))' },
  { id: 'wyr',    label: 'Would You Rather',  emoji: '🤔', gradient: 'linear-gradient(135deg, #9b87f5, #f472b6)' },
  { id: 'memory', label: 'Memory Match',      emoji: '🃏', gradient: 'linear-gradient(135deg, #10b981, #3b82f6)' },
  { id: 'spin',   label: 'Spin the Bottle',   emoji: '🍾', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' }
];

function renderGames(el) {
  const chipsHTML = state.gameMode
    ? `<div class="game-selector-chips">
        ${GAME_DEFS.map(g => `<button class="game-chip${g.id === state.gameMode ? ' active' : ''}" data-game="${g.id}">${g.label}</button>`).join('')}
       </div>`
    : '';

  el.innerHTML = `
    <div class="section-inner">
      ${chipsHTML}
      <div class="card" id="game-area" style="min-height:400px">
        ${state.gameMode ? renderGameContent() : renderGamesLobby()}
      </div>
    </div>`;

  // Chip events
  el.querySelectorAll('.game-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.gameMode = btn.dataset.game;
      resetGameState(state.gameMode);
      renderGames(el);
    });
  });

  // Lobby buttons
  el.querySelectorAll('.game-lobby-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.gameMode = btn.dataset.game;
      resetGameState(state.gameMode);
      renderGames(el);
    });
  });

  // Back button
  el.querySelector('#game-back')?.addEventListener('click', () => {
    state.gameMode = null;
    renderGames(el);
  });

  bindGameEvents(el);
}

function resetGameState(mode) {
  if (mode === 'quiz')   { state.quizQ = 0; state.quizScore = 0; state.quizDone = false; }
  if (mode === 'wyr')    { state.wyrQ = 0; state.wyrRxn = null; }
  if (mode === 'memory') { initMemoryDeck(); state.memFlipped = []; state.memMatched = []; state.memMoves = 0; state.memLocked = false; }
  if (mode === 'spin')   { state.spinResult = null; state.spinRunning = false; }
}

function renderGamesLobby() {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;gap:1.5rem;padding:1rem 0">
      <div style="text-align:center">
        <h2 style="font-size:1.6rem;font-weight:800;margin-bottom:0.25rem">Game Time!</h2>
        <p style="color:var(--fg-muted);font-size:0.85rem">Pick a mini-game to play</p>
      </div>
      <div class="games-lobby">
        ${GAME_DEFS.map(g => `
          <button class="game-lobby-btn" data-game="${g.id}" style="background:${g.gradient}">
            <span class="game-emoji">${g.emoji}</span>
            <h3>${g.label}</h3>
          </button>`).join('')}
      </div>
    </div>`;
}

function renderGameContent() {
  switch (state.gameMode) {
    case 'quiz':   return renderQuizGame();
    case 'wyr':    return renderWyrGame();
    case 'memory': return renderMemoryGame();
    case 'spin':   return renderSpinGame();
    default:       return '';
  }
}

/* ── Quiz ── */
function renderQuizGame() {
  if (state.quizDone) {
    const s = state.quizScore;
    const msg = s === 5 ? "Perfect! You're a true romantic. 💕"
              : s >= 3  ? "Not bad! You know your stuff. 😊"
              : "Are you sure you know what love is? 😂";
    return `
      <button class="back-btn" id="game-back">← Back to Games</button>
      <div style="text-align:center;padding:1rem;display:flex;flex-direction:column;align-items:center;gap:1rem">
        <h3 style="font-size:1.5rem;font-weight:800">Quiz Complete! 🎉</h3>
        <div class="quiz-score-big">${s} / ${QUIZ_QUESTIONS.length}</div>
        <p class="quiz-result-msg">${msg}</p>
        <button class="btn-primary" id="quiz-restart" style="margin-top:0.5rem">Play Again</button>
      </div>`;
  }
  const q = QUIZ_QUESTIONS[state.quizQ];
  return `
    <button class="back-btn" id="game-back">← Back to Games</button>
    <div class="quiz-header"><span>Question ${state.quizQ + 1} of ${QUIZ_QUESTIONS.length}</span><span>Score: ${state.quizScore}</span></div>
    <p class="quiz-question">${escHtml(q.q)}</p>
    <div class="quiz-options">
      ${q.options.map((opt, i) => `<button class="quiz-option" data-ans="${i}">${escHtml(opt)}</button>`).join('')}
    </div>`;
}

/* ── Would You Rather ── */
function renderWyrGame() {
  const q = WYR_QUESTIONS[state.wyrQ];
  if (state.wyrRxn) {
    return `
      <button class="back-btn" id="game-back">← Back to Games</button>
      <div class="wyr-reaction">
        <div style="font-size:3rem;margin-bottom:0.75rem">💭</div>
        <p class="reaction-text">${escHtml(state.wyrRxn)}</p>
        <button class="btn-primary next-btn" id="wyr-next">Next Scenario →</button>
      </div>`;
  }
  return `
    <button class="back-btn" id="game-back">← Back to Games</button>
    <h3 class="wyr-title">Would You Rather…</h3>
    <div class="wyr-options">
      <button class="wyr-opt" data-opt="1">${escHtml(q.opt1)}</button>
      <p class="wyr-or">— OR —</p>
      <button class="wyr-opt" data-opt="2">${escHtml(q.opt2)}</button>
    </div>`;
}

/* ── Memory Match ── */
function initMemoryDeck() {
  const deck = [...MEMORY_EMOJIS, ...MEMORY_EMOJIS];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  state.memCards = deck;
}

function renderMemoryGame() {
  const done = state.memMatched.length === 16;
  if (done) {
    return `
      <button class="back-btn" id="game-back">← Back to Games</button>
      <div style="text-align:center;padding:1rem;display:flex;flex-direction:column;align-items:center;gap:1rem;animation:fadeUp 0.4s ease">
        <div style="font-size:3rem">🎉</div>
        <h3 style="font-size:1.4rem;font-weight:800">You found all the love!</h3>
        <p style="color:var(--fg-muted)">Completed in ${state.memMoves} moves</p>
        <button class="btn-primary" id="mem-restart">Play Again</button>
      </div>`;
  }
  const cards = state.memCards.map((emoji, i) => {
    const isFlipped  = state.memFlipped.includes(i) || state.memMatched.includes(i);
    const isMatched  = state.memMatched.includes(i);
    return `
      <button class="mem-card${isFlipped ? ' flipped' : ''}${isMatched ? ' matched' : ''}" data-idx="${i}">
        ${isFlipped ? emoji : ''}
      </button>`;
  }).join('');
  return `
    <button class="back-btn" id="game-back">← Back to Games</button>
    <div class="memory-stats"><span>Moves: ${state.memMoves}</span><span>Matches: ${state.memMatched.length / 2} / 8</span></div>
    <div class="memory-grid">${cards}</div>`;
}

/* ── Spin the Bottle ── */
function renderSpinGame() {
  const labels = SPIN_ACTIONS.map((a, i) => {
    const deg = i * 60 + 30;
    return `<div class="spin-label" style="transform:translateX(-50%) rotate(${deg}deg);transform-origin:0 8rem">${a.emoji}</div>`;
  }).join('');

  const resultOverlay = state.spinResult ? `
    <div class="spin-result-overlay">
      <div class="spin-result-emoji">${state.spinResult.emoji}</div>
      <div class="spin-result-text">${escHtml(state.spinResult.label)}</div>
      <button class="spin-dismiss" id="spin-dismiss">Tap to dismiss</button>
    </div>` : '';

  return `
    <button class="back-btn" id="game-back">← Back to Games</button>
    <div style="display:flex;flex-direction:column;align-items:center;gap:1.5rem">
      <div class="spin-wheel-wrap">
        <div class="spin-pointer"></div>
        <div class="spin-wheel" id="spin-wheel" style="transform:rotate(${state.spinRotation}deg)">
          ${labels}
          <div class="spin-center">
            <div class="spin-bottle-emoji">🍾</div>
          </div>
        </div>
        ${resultOverlay}
      </div>
      <button class="btn-primary" id="spin-btn" ${state.spinRunning ? 'disabled' : ''}>🎲 SPIN!</button>
    </div>`;
}

/* ── Game Event Binding ── */
function bindGameEvents(el) {
  // Back
  el.querySelector('#game-back')?.addEventListener('click', () => {
    state.gameMode = null;
    renderGames(el);
  });

  // Quiz
  el.querySelector('#quiz-restart')?.addEventListener('click', () => {
    state.quizQ = 0; state.quizScore = 0; state.quizDone = false;
    rerenderGame(el);
  });
  el.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = parseInt(btn.dataset.ans, 10);
      if (ans === QUIZ_QUESTIONS[state.quizQ].ans) state.quizScore++;
      if (state.quizQ + 1 < QUIZ_QUESTIONS.length) { state.quizQ++; }
      else { state.quizDone = true; }
      rerenderGame(el);
    });
  });

  // WYR
  el.querySelectorAll('.wyr-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      state.wyrRxn = WYR_QUESTIONS[state.wyrQ].rxn;
      rerenderGame(el);
    });
  });
  el.querySelector('#wyr-next')?.addEventListener('click', () => {
    state.wyrRxn = null;
    state.wyrQ = (state.wyrQ + 1) % WYR_QUESTIONS.length;
    rerenderGame(el);
  });

  // Memory
  el.querySelector('#mem-restart')?.addEventListener('click', () => {
    initMemoryDeck();
    state.memFlipped = []; state.memMatched = []; state.memMoves = 0; state.memLocked = false;
    rerenderGame(el);
  });
  el.querySelectorAll('.mem-card').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.idx, 10);
      if (state.memLocked || state.memFlipped.includes(idx) || state.memMatched.includes(idx)) return;
      state.memFlipped.push(idx);
      if (state.memFlipped.length === 2) {
        state.memMoves++;
        const [a, b] = state.memFlipped;
        if (state.memCards[a] === state.memCards[b]) {
          state.memMatched.push(a, b);
          state.memFlipped = [];
          rerenderGame(el);
        } else {
          state.memLocked = true;
          rerenderGame(el);
          setTimeout(() => { state.memFlipped = []; state.memLocked = false; rerenderGame(el); }, 900);
        }
      } else {
        rerenderGame(el);
      }
    });
  });

  // Spin
  el.querySelector('#spin-btn')?.addEventListener('click', () => {
    if (state.spinRunning) return;
    state.spinRunning = true;
    state.spinResult = null;
    const spins = (Math.floor(Math.random() * 4) + 4) * 360;
    const extra = Math.floor(Math.random() * 360);
    state.spinRotation += spins + extra;

    const wheel = document.getElementById('spin-wheel');
    if (wheel) { wheel.style.transform = `rotate(${state.spinRotation}deg)`; }

    setTimeout(() => {
      const normalized = ((state.spinRotation % 360) + 360) % 360;
      const sectionSize = 360 / SPIN_ACTIONS.length;
      const hitIndex = Math.floor(((360 - normalized + sectionSize / 2) % 360) / sectionSize) % SPIN_ACTIONS.length;
      state.spinResult = SPIN_ACTIONS[hitIndex];
      state.spinRunning = false;
      rerenderGame(el);
    }, 3050);
  });

  el.querySelector('#spin-dismiss')?.addEventListener('click', () => {
    state.spinResult = null;
    rerenderGame(el);
  });
}

function rerenderGame(el) {
  const area = document.getElementById('game-area');
  if (!area) return;

  // Update chips
  el.querySelectorAll('.game-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.game === state.gameMode);
  });

  area.innerHTML = renderGameContent();
  bindGameEvents(el);
}

/* ══════════════════════════════════════════
   GLOBAL EVENT LISTENERS
══════════════════════════════════════════ */
function initGlobalEvents() {
  // Lightbox close
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });

  // Note modal close
  document.getElementById('note-modal-cancel').addEventListener('click', closeNoteModal);
  document.querySelector('.note-modal-backdrop')?.addEventListener('click', closeNoteModal);

  // Note modal save
  document.getElementById('note-save').addEventListener('click', () => {
    const text = document.getElementById('note-textarea').value.trim();
    if (!text) return;
    const colorHex = NOTE_COLORS[state.noteColor].hex;
    if (state.notes.length >= 50) { alert('Maximum 50 notes reached. Please delete some first.'); return; }
    state.notes.unshift({ id: Date.now(), text, colorHex, date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
    save('loveNotes', state.notes);
    closeNoteModal();

    // Re-render notes if active
    if (state.activeSection === 'extras' && state.extrasTab === 'Notes') {
      renderExtras(document.getElementById('section-extras'));
    }
  });

  // Hide FAB when not on Notes tab
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fab = document.getElementById('notes-fab');
      if (fab) {
        fab.style.display = (btn.dataset.section === 'extras' && state.extrasTab === 'Notes') ? '' : 'none';
      }
    });
  });
}

/* ══════════════════════════════════════════
   ESCAPE HTML
══════════════════════════════════════════ */
function escHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ══════════════════════════════════════════
   BOOT
══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  initGlobalEvents();
});

// Hide the notes FAB when navigating away or switching tabs
function hideFabIfNeeded() {
  const fab = document.getElementById('notes-fab');
  if (!fab) return;
  const show = state.activeSection === 'extras' && state.extrasTab === 'Notes';
  fab.style.display = show ? '' : 'none';
}

// Patch showSection to hide FAB on navigation
const _baseShowSection = showSection;
window.addEventListener('section-change', hideFabIfNeeded);

