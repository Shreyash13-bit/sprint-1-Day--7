const content = document.getElementById("content");

const pages = {
  home: `<h1>Welcome to Home Page</h1><p>This is the home section of the SPA.</p>`,
  about: `<h1>About Us</h1><p>This is the about section of the SPA.</p>`,
  contact: `<h1>Contact Us</h1><p>This is the contact section of the SPA.</p>`
};

function navigate(event) {
  event.preventDefault();
  const page = event.target.getAttribute("data-page");
  if (pages[page]) {
    content.innerHTML = pages[page];
    history.pushState({ page }, "", `#${page}`);
  }
}

document.querySelectorAll("a[data-page]").forEach(link =>
  link.addEventListener("click", navigate)
);

// Handle browser back/forward navigation
window.addEventListener("popstate", event => {
  const page = event.state?.page || "home";
  content.innerHTML = pages[page];
});

// Initial load
const initialPage = location.hash.replace("#", "") || "home";
content.innerHTML = pages[initialPage];
