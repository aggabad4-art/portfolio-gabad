// ===== Mobile menu =====
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

function setMenu(open) {
  navMenu.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "✕" : "☰";
}
menuBtn.addEventListener("click", () => setMenu(!navMenu.classList.contains("open")));
navMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// ===== Theme toggle (Black <-> Beige), naaalala ng browser =====
const themeBtn = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0b0f" : "#f5e9d8");
}

let savedTheme = "dark";
try { savedTheme = localStorage.getItem("theme") || "dark"; } catch (e) {}
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "beige" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// ===== Typing effect =====
const words = ["BSIT Student", "Beginner Coder", "Creative Thinker", "Sunset Photographer"];
const typingEl = document.getElementById("typing");
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
  const word = words[wordIndex];
  typingEl.textContent = word.slice(0, charIndex);
  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(type, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1400);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 45);
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}
type();

// ===== Greeting galing sa Python API (api/hello.py) =====
// Kapag walang API (hal. binuksan lang ang file sa phone/PC), JavaScript na ang bahala.
const greetingEl = document.getElementById("greeting");

function localGreeting() {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", { hour: "numeric", hour12: false, timeZone: "Asia/Manila" }).format(new Date())
  ) % 24;
  if (hour < 12) return "Good morning! ☀️";
  if (hour < 18) return "Good afternoon! 🌤️";
  return "Good evening! 🌅";
}

greetingEl.textContent = localGreeting();
fetch("/api/hello")
  .then((res) => (res.ok ? res.json() : Promise.reject()))
  .then((data) => { if (data && data.greeting) greetingEl.textContent = data.greeting; })
  .catch(() => { /* okay lang, local greeting na ang gamit */ });

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("show"));
}

// ===== Active nav link =====
const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 140) current = s.id; });
  links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
}, { passive: true });

// ===== Contact form (bubukas ang email app ng phone) =====
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    statusEl.className = "form-status error";
    statusEl.textContent = "Paki-fill out ang lahat ng fields.";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    statusEl.className = "form-status error";
    statusEl.textContent = "Mukhang mali ang email address.";
    return;
  }

  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\n- " + name + " (" + email + ")");
  statusEl.className = "form-status ok";
  statusEl.textContent = "Binubuksan ang email app mo...";
  window.location.href = "mailto:aggabad4@gmail.com?subject=" + subject + "&body=" + body;
});

// ===== Print / Save resume as PDF =====
document.getElementById("print-btn").addEventListener("click", () => window.print());

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
