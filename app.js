(() => {
  const body = document.body;
  const toggle = document.querySelector("[data-menu-toggle]");
  const menuLinks = document.querySelectorAll("[data-mobile-menu] a");
  const forms = document.querySelectorAll("[data-wa-form]");
  const countdowns = document.querySelectorAll("[data-countdown-value]");
  const proofToast = document.querySelector("[data-proof-toast]");
  const proofName = document.querySelector("[data-proof-name]");
  const proofAction = document.querySelector("[data-proof-action]");
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

  const proofItems = [
    ["Fat***", "baru klaim review dokumen gratis"],
    ["Rin***", "baru konsultasi apostille ijazah"],
    ["And***", "baru klaim diskon 10% via WhatsApp"],
    ["Sof***", "baru cek dokumen pernikahan"],
    ["Hen***", "baru tanya penerjemah tersumpah"]
  ];

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

  const updateCountdowns = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const diff = Math.max(0, end - now);
    const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    countdowns.forEach((item) => {
      item.textContent = `${hours}:${minutes}`;
    });
  };

  if (countdowns.length) {
    updateCountdowns();
    window.setInterval(updateCountdowns, 60000);
  }

  if (proofToast && proofName && proofAction) {
    let proofIndex = 0;
    const showProof = () => {
      const [name, action] = proofItems[proofIndex % proofItems.length];
      proofName.textContent = name;
      proofAction.textContent = action;
      proofToast.classList.add("is-visible");
      window.setTimeout(() => proofToast.classList.remove("is-visible"), 4600);
      proofIndex += 1;
    };

    const startProof = () => {
      window.setTimeout(showProof, 2600);
      window.setInterval(showProof, 11500);
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(startProof, { timeout: 5000 });
    } else {
      window.addEventListener("load", startProof, { once: true });
    }
  }

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
        "Saya ingin klaim promo diskon 10% dan review dokumen gratis.",
        `Nama: ${name}`,
        `Layanan: ${service}`,
        `Jenis dokumen: ${documentType}`,
        `Catatan: ${need}`
      ].join("\n");
      openWhatsApp(message);
    });
  });
})();
