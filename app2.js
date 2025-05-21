const content = document.getElementById("content");

const pages = {
  home: `
    <section aria-labelledby="home-heading">
      <h1 id="home-heading">Welcome to Our Simple SPA</h1>
      <p>This is the <strong>Home</strong> section where we introduce our site.</p>
      <img src="https://via.placeholder.com/600x200" alt="Welcome banner" style="max-width:100%;">
      <ul>
        <li>Explore our features</li>
        <li>Learn more about us</li>
        <li>Get in touch</li>
      </ul>
    </section>
  `,

  about: `
    <section aria-labelledby="about-heading">
      <h1 id="about-heading">About Us</h1>
      <p>We are building a basic Single Page Application using only HTML, CSS, and JavaScript.</p>
      <article>
        <h2>Our Mission</h2>
        <p>To teach core web development through hands-on practice.</p>
      </article>
      <article>
        <h2>Technologies Used</h2>
        <ol>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Vanilla JavaScript</li>
        </ol>
        <a href="https://developer.mozilla.org/en-US/" target="_blank" rel="noopener">Learn more on MDN Web Docs</a>
      </article>
    </section>
  `,

  contact: `
    <section aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact Us</h1>
      <p>If you’d like to get in touch, please fill out the form below:</p>
      <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" required></textarea><br><br>

        <button type="submit">Send Message</button>
      </form>
    </section>
  `
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

window.addEventListener("popstate", event => {
  const page = event.state?.page || "home";
  content.innerHTML = pages[page];
});

const initialPage = location.hash.replace("#", "") || "home";
content.innerHTML = pages[initialPage];
