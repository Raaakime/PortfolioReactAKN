
  const section = document.getElementById("cacherSection");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.classList.remove("hidden", "opacity-0");
        section.classList.add("block", "opacity-100");
      }
    });
  });

  observer.observe(section);
