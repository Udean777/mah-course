const sections = [
  { id: "navbar-section", file: "sections/navbar.html" },
  { id: "header-section", file: "sections/header.html" },
  { id: "features-section", file: "sections/features.html" },
  { id: "showcase-section", file: "sections/showcase.html" },
  { id: "course-package", file: "sections/course_package.html" },
  { id: "testimonials-section", file: "sections/testimonials.html" },
  { id: "cta-section", file: "sections/call_to_action.html" },
  { id: "footer-section", file: "sections/footer.html" },
];

sections.forEach((section) => {
  fetch(section.file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(section.id).innerHTML = data;
    });
});
