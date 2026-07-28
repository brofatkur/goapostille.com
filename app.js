(() => {
  const body = document.body;
  const toggle = document.querySelector("[data-menu-toggle]");
  const menuLinks = document.querySelectorAll("[data-mobile-menu] a");
  const forms = document.querySelectorAll("[data-wa-form]");
  const proofToast = document.querySelector("[data-proof-toast]");
  const proofName = document.querySelector("[data-proof-name]");
  const proofAction = document.querySelector("[data-proof-action]");
  const docPills = document.querySelectorAll(".doc-pill");
  const phone = "628195626777";

  const serviceLabels = {
    apostille: "Apostille Kemenkumham",
    legalization: "Legalisasi Dokumen (Kemenlu / Kedutaan)",
    translation: "Penerjemah Tersumpah",
    education: "Apostille Dokumen Pendidikan (Ijazah/Transkrip)",
    marriage: "Apostille Dokumen Pernikahan (Buku Nikah/Akta)",
    express: "Layanan Express 1-2 Hari Kerja"
  };

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Proof Toast Data (Indonesian names and realistic activity)
  const proofItems = [
    ["Fatimah Z.", "baru mengirim foto Ijazah untuk pemeriksaan awal"],
    ["Rizky P.", "baru konsultasi Apostille Buku Nikah ke Jerman"],
    ["Andi K.", "baru minta estimasi Penerjemah Tersumpah Bahasa Inggris"],
    ["Sofia M.", "baru konsultasi Legalisasi Kemenlu & Kedutaan Korea"],
    ["Hendky S.", "baru menggunakan Layanan Express 1-2 Hari Kerja"]
  ];

  // Mobile Menu Toggle
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

  // Document Pill Selector Interactivity
  docPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      docPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      const docVal = pill.getAttribute("data-doc");
      const serviceVal = pill.getAttribute("data-service");

      const docInput = document.getElementById("document");
      const serviceSelect = document.getElementById("service");

      if (docInput && docVal) {
        docInput.value = docVal;
      }
      if (serviceSelect && serviceVal) {
        serviceSelect.value = serviceVal;
      }

      // Smooth scroll to form on mobile if not in view
      const formCard = document.querySelector(".hero-form-card");
      if (formCard && window.innerWidth < 992) {
        formCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  // Dynamic Proof Toast Notification
  if (proofToast && proofName && proofAction) {
    let proofIndex = 0;
    const showProof = () => {
      const [name, action] = proofItems[proofIndex % proofItems.length];
      proofName.textContent = name;
      proofAction.textContent = action;
      proofToast.classList.add("is-visible");
      window.setTimeout(() => proofToast.classList.remove("is-visible"), 4500);
      proofIndex += 1;
    };

    const startProof = () => {
      window.setTimeout(showProof, 2000);
      window.setInterval(showProof, 12000);
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(startProof, { timeout: 4000 });
    } else {
      window.addEventListener("load", startProof, { once: true });
    }
  }

  // WA Form Submission Handler
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "Calon Klien";
      const service = serviceLabels[data.get("service")] || data.get("service") || "Apostille Dokumen";
      const documentType = data.get("document") || "Foto Dokumen Khusus";
      const need = data.get("need") || "Saya ingin pemeriksaan awal dokumen & estimasi biaya.";

      const message = [
        "Halo Admin GOApostille.com 👋",
        "Saya mau konsultasi & review gratis dokumen:",
        "",
        `👤 Nama: ${name}`,
        `📋 Layanan: ${service}`,
        `📄 Jenis Dokumen: ${documentType}`,
        `📌 Catatan / Negara Tujuan: ${need}`,
        "",
        "Mohon bantuannya untuk pemeriksaan awal & jalur pengesahan yang tepat. Terima kasih!"
      ].join("\n");

      openWhatsApp(message);
    });
  });
})();
