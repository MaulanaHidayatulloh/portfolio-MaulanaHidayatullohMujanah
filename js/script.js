// Menu icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky Navbar
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove menu icon navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark Mode
const darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.addEventListener("click", () => {
  const darkModeEnabled = document.body.classList.toggle("dark-mode");
  darkModeIcon.classList.toggle("bx-sun", darkModeEnabled);
  darkModeIcon.classList.toggle("bx-moon", !darkModeEnabled);
  darkModeIcon.setAttribute(
    "aria-label",
    darkModeEnabled ? "Switch to light mode" : "Switch to dark mode",
  );
});

// Contact form: open the user's email client with a prepared message.
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone") || "Not provided";
  const subject = formData.get("subject");
  const message = formData.get("message");

  const body = [
    `Hello Maulana,`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Mobile Number: ${phone}`,
    "",
    message,
    "",
    "Sent from Maulana Hidayatulloh Mujanah's portfolio website.",
  ].join("\n");

  window.location.href = `mailto:maulhidayatulloh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .heading", {
  origin: "top",
});
ScrollReveal().reveal(
  ".home-img img, .education-container, projects-box, .contact form, .project-box, .experience-content",
  { origin: "bottom" },
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
