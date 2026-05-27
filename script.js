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
  el.querySelector('#quo