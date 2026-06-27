(() => {
  const body = document.body;
  const toggle = document.querySelector("[data-menu-toggle]");
  const menuLinks = document.querySelectorAll("[data-mobile-menu] a");
  const forms = document.querySelectorAll("[data-wa-form]");
  const phone = "62817322271";

  const serviceLabels = {
    apostille: "Apostille dokumen",
    legalization: "Legalisasi dokumen",
    translation: "Penerjemah tersumpah",
    education: "Apostille dokumen pendidikan",
    marriage: "Apostille dokumen pernikahan"
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("menu-open");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelectorAll("[data-wa-message]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const message = link.getAttribute("data-wa-message");
      if (!message) return;
      event.preventDefault();
      openWhatsApp(message);
    });
  });

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "Calon klien";
      const service = serviceLabels[data.get("service")] || data.get("service") || "Apostille dokumen";
      const documentType = data.get("document") || "Belum disebutkan";
      const need = data.get("need") || "Saya ingin review dokumen gratis.";
      const message = [
        "Halo GOApostille, saya mau konsultasi.",
        `Nama: ${name}`,
        `Layanan: ${service}`,
        `Jenis dokumen: ${documentType}`,
        `Catatan: ${need}`
      ].join("\n");
      openWhatsApp(message);
    });
  });
})();
