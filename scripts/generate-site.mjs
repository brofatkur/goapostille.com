import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.goapostille.com";
const phone = "62817322271";
const alternateMap = {
  "/": "/en/",
  "/en/": "/",
  "/apostille-dokumen-pernikahan/": "/en/marriage-document-apostille/",
  "/en/marriage-document-apostille/": "/apostille-dokumen-pernikahan/",
  "/apostille-dokumen-pendidikan/": "/en/education-document-apostille/",
  "/en/education-document-apostille/": "/apostille-dokumen-pendidikan/",
  "/jasa-penerjemah-tersumpah/": "/en/sworn-translator-jakarta/",
  "/en/sworn-translator-jakarta/": "/jasa-penerjemah-tersumpah/"
};

const pages = [
  {
    path: "/",
    lang: "id",
    title: "GOApostille.com | Jasa Apostille, Legalisasi Dokumen & Penerjemah Tersumpah",
    description:
      "Platform jasa apostille, legalisasi dokumen, dan penerjemah tersumpah yang mobile friendly. Review dokumen gratis via WhatsApp.",
    keywords:
      "jasa apostille, apostille kemenkumham, legalisasi dokumen, penerjemah tersumpah jakarta, legalisasi buku nikah, apostille ijazah",
    eyebrow: "Platform dokumen luar negeri",
    h1: "Urus apostille, legalisasi, dan terjemahan resmi dari satu layar.",
    lead:
      "Kirim foto dokumen, sebutkan negara tujuan, lalu tim membantu memberi arahan proses yang paling sesuai: apostille, legalisasi, atau terjemahan tersumpah.",
    primaryCta: "Free review dokumen",
    secondaryCta: "Lihat layanan",
    defaultMessage:
      "Halo GOApostille, saya ingin free review dokumen untuk apostille/legalisasi/terjemahan tersumpah.",
    appTitle: "GOApostille",
    appLead: "Checklist dokumen, estimasi, dan konsultasi dalam satu alur.",
    stats: [
      ["24/7", "WA aktif"],
      ["3 tahap", "alur ringkas"],
      ["Gratis", "review awal"]
    ],
    servicesTitle: "Pilih layanan sesuai tujuan dokumen",
    servicesLead:
      "Mulai dari dokumen pribadi, pendidikan, pernikahan, sampai dokumen bisnis. Semua diarahkan lewat alur singkat agar Anda tahu langkah berikutnya sebelum mengirim dokumen asli.",
    services: [
      {
        title: "Apostille Dokumen Pernikahan",
        text:
          "Untuk legalisasi buku nikah, legalisasi akta nikah, apostille buku nikah, apostille surat nikah, dan dokumen pernikahan yang dipakai di luar negeri.",
        href: "/apostille-dokumen-pernikahan/"
      },
      {
        title: "Apostille Dokumen Pendidikan",
        text:
          "Untuk legalisasi ijazah, jasa apostille ijazah, apostille diploma, apostille ijazah SMA, degree certificate, dan academic transcript.",
        href: "/apostille-dokumen-pendidikan/"
      },
      {
        title: "Jasa Penerjemah Tersumpah",
        text:
          "Penerjemah tersumpah Jakarta untuk ijazah, paspor, akta lahir, kontrak kerja, visa, beasiswa, imigrasi, dan menikah di luar negeri.",
        href: "/jasa-penerjemah-tersumpah/"
      }
    ],
    trustTitle: "Kenapa prosesnya terasa lebih ringan?",
    trustLead:
      "Calon klien sering ragu karena syarat tiap negara berbeda. Karena itu GOApostille memulai dari review dokumen, bukan dari pembayaran.",
    trustItems: [
      ["Review awal gratis", "Calon klien bisa kirim foto dokumen dulu sebelum bayar."],
      ["Estimasi transparan", "Tim memberi arahan layanan, durasi, dan kebutuhan dokumen."],
      ["Bisa jarak jauh", "Konsultasi dan pengiriman dokumen dapat dimulai dari WhatsApp."],
      ["Fokus luar negeri", "Arahan disesuaikan untuk visa, studi, kerja, menikah, dan bisnis internasional."]
    ],
    keywordsList: [
      "jasa apostille",
      "apostille kemenkumham",
      "legalisasi dokumen",
      "penerjemah tersumpah jakarta",
      "legalisasi buku nikah",
      "legalisasi ijazah",
      "apostille dokumen pendidikan",
      "apostille dokumen pernikahan",
      "jasa penerjemahan dokumen jakarta"
    ],
    faq: [
      [
        "Apa beda apostille dan legalisasi dokumen?",
        "Apostille adalah pengesahan untuk negara peserta Konvensi Apostille. Legalisasi biasa masih dapat melibatkan instansi lain seperti Kemenlu atau kedutaan, tergantung negara tujuan."
      ],
      [
        "Bisa konsultasi dulu sebelum kirim dokumen?",
        "Bisa. GOApostille mendorong free review dokumen via WhatsApp agar kebutuhan layanan lebih jelas sebelum proses dimulai."
      ],
      [
        "Apakah bisa sekalian terjemahan tersumpah?",
        "Bisa. Jika dokumen perlu diterjemahkan, tim dapat mengarahkan ke jasa penerjemah tersumpah resmi sebelum apostille atau legalisasi."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/apostille-dokumen-pernikahan/",
    lang: "id",
    title: "Jasa Apostille Dokumen Pernikahan | Legalisasi Buku Nikah & Akta Nikah",
    description:
      "Jasa apostille dokumen pernikahan untuk legalisasi buku nikah, akta nikah, surat nikah, dan marriage certificate. Free review via WhatsApp.",
    keywords:
      "legalisasi buku nikah, legalisasi akta nikah, apostille buku nikah, legalisasi dokumen pernikahan, apostille dokumen pernikahan, apostille marriage certificate, apostille marriage document, apostille surat nikah, jasa apostille akta nikah, legalisasi akta nikah untuk luar negeri",
    eyebrow: "Dokumen pernikahan luar negeri",
    h1: "Apostille dokumen pernikahan tanpa tebak-tebakan syarat.",
    lead:
      "Kirim foto buku nikah, akta nikah, atau surat nikah. GOApostille bantu cek apakah dokumen perlu terjemahan tersumpah, apostille Kemenkumham, legalisasi tambahan, atau format pendukung untuk negara tujuan.",
    primaryCta: "Cek buku nikah gratis",
    secondaryCta: "Lihat alur",
    defaultMessage:
      "Halo GOApostille, saya ingin free review untuk apostille/legalisasi dokumen pernikahan.",
    appTitle: "Marriage Doc",
    appLead: "Buku nikah, akta nikah, surat nikah, dan marriage certificate.",
    stats: [
      ["Free", "review foto"],
      ["WA", "alur cepat"],
      ["Luar negeri", "siap pakai"]
    ],
    servicesTitle: "Dokumen pernikahan yang sering diproses",
    servicesLead:
      "Setiap dokumen pernikahan bisa memiliki jalur berbeda. Tim akan mengecek jenis dokumen, bahasa, dan negara tujuan sebelum memberi estimasi proses.",
    services: [
      {
        title: "Legalisasi buku nikah",
        text:
          "Cocok untuk pasangan yang membutuhkan legalisasi buku nikah untuk visa keluarga, spouse visa, administrasi imigrasi, atau pencatatan pernikahan di luar negeri.",
        href: "#konsultasi"
      },
      {
        title: "Apostille akta nikah",
        text:
          "Bantuan jasa apostille akta nikah, apostille marriage certificate, dan legalisasi akta nikah untuk luar negeri sesuai kebutuhan negara tujuan.",
        href: "#konsultasi"
      },
      {
        title: "Terjemahan dokumen pernikahan",
        text:
          "Jika negara tujuan meminta bahasa Inggris atau bahasa lain, dokumen dapat diarahkan ke penerjemah tersumpah sebelum proses apostille.",
        href: "/jasa-penerjemah-tersumpah/"
      }
    ],
    trustTitle: "Untuk pasangan yang butuh kepastian",
    trustLead:
      "Dokumen pernikahan sering sensitif karena berkaitan dengan visa, pindah negara, atau pencatatan sipil. Karena itu CTA diarahkan ke review dokumen dulu, bukan langsung bayar.",
    trustItems: [
      ["Cek dokumen awal", "Tim melihat jenis dokumen dan kondisi file dari foto."],
      ["Arahan negara tujuan", "Kebutuhan bisa berbeda antara negara apostille dan non-apostille."],
      ["Bahasa dokumen dicek", "Jika butuh terjemahan tersumpah, alurnya disiapkan sejak awal."],
      ["Update via WhatsApp", "Klien tidak perlu bolak-balik membuka email hanya untuk tanya status."]
    ],
    keywordsList: [
      "legalisasi buku nikah",
      "legalisasi akta nikah",
      "apostille buku nikah",
      "legalisasi dokumen pernikahan",
      "apostille dokumen pernikahan",
      "apostille marriage certificate",
      "apostille marriage document",
      "apostille surat nikah",
      "jasa apostille akta nikah",
      "legalisasi akta nikah untuk luar negeri"
    ],
    faq: [
      [
        "Apakah buku nikah bisa apostille?",
        "Bisa diarahkan sesuai kebutuhan negara tujuan. Tim akan cek dulu apakah dokumen perlu legalisasi, terjemahan tersumpah, apostille, atau dokumen pendukung."
      ],
      [
        "Apa bisa untuk marriage certificate?",
        "Bisa. Halaman ini juga ditujukan untuk kebutuhan apostille marriage certificate dan apostille marriage document."
      ],
      [
        "Apakah harus datang ke kantor?",
        "Konsultasi awal dapat dimulai via WhatsApp dengan mengirim foto dokumen. Untuk dokumen fisik, tim akan memberi arahan pengiriman atau penyerahan."
      ]
    ],
    schemaType: "LegalService"
  },
  {
    path: "/apostille-dokumen-pendidikan/",
    lang: "id",
    title: "Jasa Apostille Ijazah & Dokumen Pendidikan | GOApostille.com",
    description:
      "Jasa apostille dan legalisasi ijazah, transkrip nilai, diploma, degree certificate, dan academic transcript untuk studi atau kerja luar negeri.",
    keywords:
      "legalisasi ijazah, jasa apostille ijazah, apostille ijazah, legalisasi transkrip nilai, apostille dokumen pendidikan, apostille diploma, apostille degree certificate, apostille ijazah sma, apostille academic transcript, legalisasi ijazah resmi",
    eyebrow: "Studi dan kerja luar negeri",
    h1: "Apostille ijazah, transkrip, dan dokumen pendidikan dibuat lebih praktis.",
    lead:
      "Untuk beasiswa, kampus luar negeri, credential evaluation, visa kerja, atau HR global. Kirim foto ijazah dan transkrip, lalu GOApostille bantu petakan langkah legalisasi ijazah resmi.",
    primaryCta: "Review ijazah gratis",
    secondaryCta: "Cek dokumen",
    defaultMessage:
      "Halo GOApostille, saya ingin free review untuk apostille/legalisasi ijazah atau dokumen pendidikan.",
    appTitle: "Edu Apostille",
    appLead: "Ijazah, transkrip nilai, diploma, dan degree certificate.",
    stats: [
      ["Ijazah", "SMA/D3/S1+"],
      ["Transkrip", "nilai akademik"],
      ["Global", "studi/kerja"]
    ],
    servicesTitle: "Kebutuhan pendidikan yang bisa dibantu",
    servicesLead:
      "Keyword Google Ads seperti legalisasi ijazah, jasa apostille ijazah, apostille diploma, dan apostille academic transcript ditempatkan secara natural.",
    services: [
      {
        title: "Apostille ijazah",
        text:
          "Untuk ijazah SMA, diploma, sarjana, magister, atau dokumen akademik lain yang akan dipakai untuk kampus, visa, atau pekerjaan luar negeri.",
        href: "#konsultasi"
      },
      {
        title: "Legalisasi transkrip nilai",
        text:
          "Transkrip nilai dan academic transcript dapat dicek untuk kebutuhan apostille, legalisasi, atau terjemahan tersumpah."
      },
      {
        title: "Apostille degree certificate",
        text:
          "Bantuan untuk diploma, degree certificate, dan dokumen pendidikan berbahasa Inggris yang perlu pengesahan resmi."
      }
    ],
    trustTitle: "Lebih mudah untuk pelajar, profesional, dan keluarga",
    trustLead:
      "Halaman dibuat agar calon klien cepat paham: dokumen apa yang dikirim, tujuan apa yang dijelaskan, dan kapan tim menghubungi balik.",
    trustItems: [
      ["Bahasa awam", "Penjelasan dibuat ringkas agar mudah dipahami sejak konsultasi pertama."],
      ["Keyword tepat", "SEO tetap kuat untuk apostille ijazah dan legalisasi transkrip nilai."],
      ["CTA jelas", "Review dokumen gratis diarahkan langsung ke WhatsApp."],
      ["Mobile first", "Tampilan nyaman untuk user yang datang dari Google Ads mobile."]
    ],
    keywordsList: [
      "legalisasi ijazah",
      "jasa apostille ijazah",
      "apostille ijazah",
      "legalisasi transkrip nilai",
      "apostille dokumen pendidikan",
      "apostille diploma",
      "apostille degree certificate",
      "apostille ijazah sma",
      "apostille academic transcript",
      "legalisasi ijazah resmi"
    ],
    faq: [
      [
        "Apakah ijazah SMA bisa apostille?",
        "Bisa dicek. GOApostille dapat membantu kebutuhan apostille ijazah SMA dan dokumen pendidikan lain sesuai syarat negara tujuan."
      ],
      [
        "Apakah transkrip nilai perlu diterjemahkan?",
        "Tergantung bahasa dokumen dan persyaratan lembaga tujuan. Jika perlu, dokumen dapat diarahkan ke penerjemah tersumpah."
      ],
      [
        "Untuk beasiswa luar negeri bisa?",
        "Bisa. Jelaskan tujuan beasiswa atau kampusnya saat konsultasi agar rekomendasi alur lebih tepat."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/jasa-penerjemah-tersumpah/",
    lang: "id",
    title: "Jasa Penerjemah Tersumpah Jakarta Resmi | GOApostille.com",
    description:
      "Jasa penerjemah tersumpah Jakarta untuk ijazah, paspor, akta lahir, kontrak kerja, visa, beasiswa, imigrasi, dan menikah.",
    keywords:
      "penerjemah tersumpah jakarta, jasa penerjemahan dokumen jakarta, jasa penerjemah tersumpah resmi, penerjemah tersumpah express, harga penerjemah tersumpah, penerjemah tersumpah ijazah, penerjemah tersumpah paspor, penerjemah tersumpah akta lahir, penerjemah tersumpah kontrak kerja, penerjemah tersumpah untuk beasiswa, penerjemah tersumpah untuk visa, penerjemah tersumpah untuk imigrasi, penerjemah tersumpah untuk menikah",
    eyebrow: "Terjemahan resmi",
    h1: "Jasa penerjemah tersumpah Jakarta dengan alur cepat via WhatsApp.",
    lead:
      "Upload foto dokumen, sebutkan bahasa dan tujuan pemakaian. GOApostille membantu kebutuhan penerjemah tersumpah resmi untuk visa, beasiswa, imigrasi, menikah, kontrak, dan dokumen pribadi.",
    primaryCta: "Cek biaya terjemahan",
    secondaryCta: "Lihat dokumen",
    defaultMessage:
      "Halo GOApostille, saya ingin konsultasi jasa penerjemah tersumpah resmi.",
    appTitle: "Sworn Translate",
    appLead: "Dokumen pribadi, pendidikan, imigrasi, dan perusahaan.",
    stats: [
      ["Express", "opsional"],
      ["Resmi", "tersumpah"],
      ["WA", "estimasi cepat"]
    ],
    servicesTitle: "Dokumen yang sering diterjemahkan",
    servicesLead:
      "Sebelum menghitung biaya, tim perlu melihat jenis dokumen, bahasa tujuan, jumlah halaman, dan apakah dokumen perlu dilegalisasi setelah diterjemahkan.",
    services: [
      {
        title: "Penerjemah tersumpah ijazah",
        text:
          "Untuk ijazah, transkrip nilai, diploma, dan dokumen akademik yang akan dipakai untuk kampus, beasiswa, credential evaluation, atau kerja."
      },
      {
        title: "Paspor, akta lahir, dan dokumen sipil",
        text:
          "Jasa penerjemah tersumpah paspor, penerjemah tersumpah akta lahir, akta nikah, kartu keluarga, dan dokumen keluarga lain."
      },
      {
        title: "Kontrak kerja dan dokumen bisnis",
        text:
          "Penerjemah tersumpah kontrak kerja, dokumen perusahaan, perjanjian, legal document, dan kebutuhan korporasi."
      }
    ],
    trustTitle: "Terjemahan resmi perlu rapi sejak awal",
    trustLead:
      "Sebelum memberi harga penerjemah tersumpah, tim perlu melihat bahasa, jumlah halaman, kualitas scan, format nama, dan kebutuhan legalisasi lanjutan.",
    trustItems: [
      ["Estimasi dari dokumen", "Biaya dihitung setelah melihat file, bukan asal tebak."],
      ["Tujuan pemakaian dicatat", "Untuk visa, beasiswa, imigrasi, atau menikah bisa berbeda kebutuhan."],
      ["Express tersedia", "Penerjemah tersumpah express dapat dicek sesuai antrean dan bahasa."],
      ["Bisa lanjut apostille", "Jika perlu pengesahan setelah terjemahan, alurnya bisa disambungkan."]
    ],
    keywordsList: [
      "penerjemah tersumpah jakarta",
      "jasa penerjemahan dokumen jakarta",
      "jasa penerjemah tersumpah resmi",
      "penerjemah tersumpah express",
      "harga penerjemah tersumpah",
      "penerjemah tersumpah ijazah",
      "penerjemah tersumpah paspor",
      "penerjemah tersumpah akta lahir",
      "penerjemah tersumpah kontrak kerja",
      "penerjemah tersumpah untuk beasiswa",
      "penerjemah tersumpah untuk visa",
      "penerjemah tersumpah untuk imigrasi",
      "penerjemah tersumpah untuk menikah"
    ],
    faq: [
      [
        "Berapa harga penerjemah tersumpah?",
        "Harga tergantung bahasa, jenis dokumen, jumlah halaman, dan kebutuhan express. Kirim dokumen via WhatsApp untuk estimasi yang lebih akurat."
      ],
      [
        "Apakah bisa penerjemah tersumpah express?",
        "Bisa dicek. Ketersediaan express bergantung pada bahasa, jumlah halaman, dan antrean dokumen."
      ],
      [
        "Apakah hasil terjemahan bisa dipakai untuk visa?",
        "Terjemahan tersumpah sering dibutuhkan untuk visa, imigrasi, beasiswa, menikah, dan administrasi luar negeri. Tim akan menanyakan tujuan pemakaian saat review."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/en/",
    lang: "en",
    title: "GOApostille.com | Apostille, Legalization & Sworn Translation Services",
    description:
      "Mobile-first apostille, document legalization, and sworn translation service for Indonesia-issued documents. Free WhatsApp review.",
    keywords:
      "apostille service indonesia, document legalization indonesia, sworn translator jakarta, marriage certificate apostille, diploma apostille",
    eyebrow: "Indonesia document platform",
    h1: "A smoother way to prepare Indonesian documents for overseas use.",
    lead:
      "GOApostille helps you review documents, estimate the right process, and continue through WhatsApp for apostille, legalization, and sworn translation services.",
    primaryCta: "Free document review",
    secondaryCta: "View services",
    defaultMessage:
      "Hello GOApostille, I would like a free document review for apostille/legalization/sworn translation.",
    appTitle: "GOApostille",
    appLead: "Document checklist, estimate, and WhatsApp consultation.",
    stats: [
      ["24/7", "WhatsApp"],
      ["Remote", "first review"],
      ["Clear", "next steps"]
    ],
    servicesTitle: "Services for overseas document use",
    servicesLead:
      "The English pages support international users looking for Indonesia apostille, marriage document apostille, education document apostille, and sworn translation.",
    services: [
      {
        title: "Marriage Document Apostille",
        text:
          "For buku nikah, marriage certificate, marriage document apostille, and legalization needs for spouse visa or civil registration overseas.",
        href: "/en/marriage-document-apostille/"
      },
      {
        title: "Education Document Apostille",
        text:
          "For diploma apostille, degree certificate apostille, academic transcript apostille, and education document legalization.",
        href: "/en/education-document-apostille/"
      },
      {
        title: "Sworn Translation",
        text:
          "For Indonesian documents that need official translation before apostille, embassy legalization, visa, immigration, study, or business use.",
        href: "/jasa-penerjemah-tersumpah/"
      }
    ],
    trustTitle: "Built for mobile users who need certainty",
    trustLead:
      "You can start by sending photos of your documents. The team checks document type, target country, language, and whether translation is needed.",
    trustItems: [
      ["Free first review", "Share photos before committing to the process."],
      ["Remote friendly", "Start from WhatsApp wherever you are."],
      ["Clear guidance", "Know whether you need apostille, legalization, or translation."],
      ["Conversion focused", "Calls to action stay visible on mobile screens."]
    ],
    keywordsList: [
      "apostille service indonesia",
      "document legalization indonesia",
      "sworn translator jakarta",
      "marriage certificate apostille",
      "education document apostille",
      "diploma apostille",
      "degree certificate apostille"
    ],
    faq: [
      [
        "Can I start from outside Indonesia?",
        "Yes. You can start with a WhatsApp review and the team will guide the next steps based on your document and destination country."
      ],
      [
        "Do I need sworn translation first?",
        "It depends on the document language and institution requirements. GOApostille can review this before the apostille or legalization process."
      ],
      [
        "Is apostille accepted in every country?",
        "Apostille is for countries participating in the Apostille Convention. For other countries, legalization may require additional steps."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/en/marriage-document-apostille/",
    lang: "en",
    title: "Marriage Document Apostille Indonesia | GOApostille.com",
    description:
      "Apostille and legalization help for Indonesian marriage documents, buku nikah, marriage certificate, and sworn translation needs.",
    keywords:
      "marriage certificate apostille, apostille marriage document, apostille buku nikah, apostille surat nikah, legalization marriage document indonesia",
    eyebrow: "Marriage document support",
    h1: "Marriage document apostille with a clear WhatsApp-first flow.",
    lead:
      "Send photos of your buku nikah, marriage certificate, or related marriage documents. GOApostille reviews translation, apostille, and legalization needs for overseas use.",
    primaryCta: "Review my document",
    secondaryCta: "See process",
    defaultMessage:
      "Hello GOApostille, I need a review for marriage document apostille or legalization.",
    appTitle: "Marriage Docs",
    appLead: "Buku nikah, marriage certificate, and civil registry documents.",
    stats: [
      ["Free", "photo review"],
      ["WA", "fast flow"],
      ["Overseas", "ready"]
    ],
    servicesTitle: "Marriage documents we can review",
    servicesLead:
      "This page targets English users searching for apostille marriage document, marriage certificate apostille, and Indonesia marriage document legalization.",
    services: [
      {
        title: "Buku nikah apostille",
        text:
          "For spouse visa, family visa, immigration, and overseas civil registration requirements."
      },
      {
        title: "Marriage certificate apostille",
        text:
          "For official marriage certificates that need apostille, legalization, or sworn translation before overseas use."
      },
      {
        title: "Sworn translation review",
        text:
          "The team checks whether your document should be translated before legalization or apostille."
      }
    ],
    trustTitle: "A calmer process for time-sensitive family documents",
    trustLead:
      "Marriage documents often have deadline pressure. The page is designed to move users quickly from question to WhatsApp review.",
    trustItems: [
      ["Country-aware", "Destination country affects the document route."],
      ["Translation check", "Language requirements are reviewed early."],
      ["Remote start", "Begin with document photos via WhatsApp."],
      ["Simple next steps", "Know what to prepare before sending originals."]
    ],
    keywordsList: [
      "marriage certificate apostille",
      "apostille marriage document",
      "apostille buku nikah",
      "apostille surat nikah",
      "legalization marriage document indonesia"
    ],
    faq: [
      [
        "Can Indonesian buku nikah be apostilled?",
        "It can be reviewed for apostille or legalization depending on the document condition and destination country."
      ],
      [
        "Do I need sworn translation?",
        "Some institutions require a sworn translation. GOApostille checks this during the free review."
      ],
      [
        "Can I start remotely?",
        "Yes. Send document photos and your destination country via WhatsApp."
      ]
    ],
    schemaType: "LegalService"
  },
  {
    path: "/en/sworn-translator-jakarta/",
    lang: "en",
    title: "Sworn Translator Jakarta | Official Document Translation",
    description:
      "Sworn translator Jakarta service for diploma, passport, birth certificate, work contract, visa, immigration, scholarship, and marriage documents.",
    keywords:
      "sworn translator jakarta, official document translation jakarta, sworn translation service indonesia, sworn translator for visa, sworn translator for immigration, sworn translator for marriage",
    eyebrow: "Official translation",
    h1: "Sworn translator Jakarta for visa, study, immigration, and marriage.",
    lead:
      "Send photos of your Indonesian documents and tell us the target language and purpose. GOApostille reviews whether sworn translation is needed before apostille, legalization, or overseas submission.",
    primaryCta: "Check translation cost",
    secondaryCta: "See documents",
    defaultMessage:
      "Hello GOApostille, I need a sworn translation review for my document.",
    appTitle: "Sworn Translate",
    appLead: "Official translation for personal, academic, and business documents.",
    stats: [
      ["Official", "translation"],
      ["Remote", "review"],
      ["WA", "estimate"]
    ],
    servicesTitle: "Documents commonly translated",
    servicesLead:
      "This page supports international users searching for sworn translator Jakarta and official document translation in Indonesia.",
    services: [
      {
        title: "Diploma and academic transcript",
        text:
          "For university applications, scholarships, credential evaluation, global hiring, and immigration requirements."
      },
      {
        title: "Passport, birth certificate, and family documents",
        text:
          "For civil registry, visa, family visa, marriage overseas, and other administrative needs."
      },
      {
        title: "Work contract and business documents",
        text:
          "For employment, company documents, agreements, legal documents, and corporate requirements."
      }
    ],
    trustTitle: "Translation is checked before you pay",
    trustLead:
      "The team reviews language, page count, scan quality, name spelling, and whether apostille or legalization is needed after translation.",
    trustItems: [
      ["Document-based estimate", "Cost is checked from the actual file, not guessed blindly."],
      ["Purpose-aware review", "Visa, immigration, scholarship, and marriage may require different details."],
      ["Remote friendly", "Start by sending document photos via WhatsApp."],
      ["Can continue to apostille", "If the translation needs authentication, the flow can continue."]
    ],
    keywordsList: [
      "sworn translator jakarta",
      "official document translation jakarta",
      "sworn translation service indonesia",
      "sworn translator for visa",
      "sworn translator for immigration",
      "sworn translator for marriage"
    ],
    faq: [
      [
        "How much does sworn translation cost?",
        "The cost depends on language, document type, page count, and urgency. Send your document photos via WhatsApp for a clearer estimate."
      ],
      [
        "Can sworn translation be used for visa?",
        "Sworn translation is commonly requested for visa, immigration, scholarship, marriage, and overseas administrative needs."
      ],
      [
        "Can I continue to apostille after translation?",
        "Yes. If authentication is needed after translation, GOApostille can review the next step."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/en/education-document-apostille/",
    lang: "en",
    title: "Education Document Apostille Indonesia | Diploma & Academic Transcript",
    description:
      "Apostille and legalization for Indonesian diploma, degree certificate, academic transcript, and education documents for overseas study or work.",
    keywords:
      "education document apostille, diploma apostille, degree certificate apostille, academic transcript apostille, apostille ijazah indonesia",
    eyebrow: "Study and work overseas",
    h1: "Apostille for diploma, degree certificate, and academic transcript.",
    lead:
      "Prepare Indonesian education documents for overseas universities, scholarships, credential evaluation, immigration, or global hiring with a simple WhatsApp review.",
    primaryCta: "Review education document",
    secondaryCta: "See documents",
    defaultMessage:
      "Hello GOApostille, I need a review for education document apostille or legalization.",
    appTitle: "Edu Docs",
    appLead: "Diploma, degree certificate, and academic transcript.",
    stats: [
      ["Diploma", "review"],
      ["Transcript", "check"],
      ["Global", "use"]
    ],
    servicesTitle: "Education documents we can review",
    servicesLead:
      "This page naturally covers education document apostille, diploma apostille, degree certificate apostille, and academic transcript apostille.",
    services: [
      {
        title: "Diploma apostille",
        text:
          "For Indonesian diplomas and graduation certificates required by overseas institutions."
      },
      {
        title: "Academic transcript apostille",
        text:
          "For transcripts and academic records used for study, credential evaluation, or employment."
      },
      {
        title: "Sworn translation support",
        text:
          "If the institution requires English or another language, sworn translation can be checked before apostille."
      }
    ],
    trustTitle: "Designed for deadline-driven academic applications",
    trustLead:
      "The WhatsApp-first flow helps students and professionals quickly find out what to prepare.",
    trustItems: [
      ["Document-first", "The review starts from your actual diploma or transcript."],
      ["Purpose-aware", "Study, scholarship, and employment may need different details."],
      ["Mobile friendly", "Optimized for users from mobile search ads."],
      ["Clear CTA", "Users are guided to free document review immediately."]
    ],
    keywordsList: [
      "education document apostille",
      "diploma apostille",
      "degree certificate apostille",
      "academic transcript apostille",
      "apostille ijazah indonesia"
    ],
    faq: [
      [
        "Can GOApostille help with diploma apostille?",
        "Yes. Send photos of the diploma and state the destination country or institution."
      ],
      [
        "Can academic transcripts be reviewed?",
        "Yes. Academic transcripts can be reviewed for apostille, legalization, and translation needs."
      ],
      [
        "Is this suitable for scholarship applications?",
        "Yes. Mention the scholarship or university deadline during WhatsApp consultation."
      ]
    ],
    schemaType: "ProfessionalService"
  }
];

const nav = [
  ["Layanan", "#layanan"],
  ["Kepercayaan", "#trust"],
  ["FAQ", "#faq"],
  ["English", "/en/"]
];
const navEn = [
  ["Services", "#layanan"],
  ["Trust", "#trust"],
  ["FAQ", "#faq"],
  ["Indonesia", "/"]
];

const workflow = [
  ["Kirim foto dokumen", "Mulai dari WhatsApp. Foto dokumen cukup untuk review awal dan estimasi kebutuhan."],
  ["Cek jalur layanan", "Tim memetakan apakah perlu apostille, legalisasi, penerjemah tersumpah, atau kombinasi."],
  ["Konfirmasi biaya", "Setelah dokumen jelas, Anda mendapat estimasi biaya, durasi, dan langkah berikutnya."],
  ["Update proses", "Status dan kebutuhan tambahan diinformasikan melalui WhatsApp agar mudah dipantau."]
];
const workflowEn = [
  ["Send document photos", "Start from WhatsApp. Photos are enough for an initial review and service estimate."],
  ["Check the service route", "The team maps whether you need apostille, legalization, sworn translation, or a combination."],
  ["Confirm the estimate", "Once the document is clear, you receive estimated cost, duration, and next steps."],
  ["Get process updates", "Status and additional requirements are shared through WhatsApp so they are easy to follow."]
];
const testimonials = [
  ["Rina P.", "Jakarta", "Dokumen pernikahan untuk luar negeri dibantu dari awal. Saya tinggal kirim foto dokumen dan langsung dijelaskan langkahnya."],
  ["Andreas M.", "Tangerang", "Butuh apostille ijazah untuk kerja. Respon WhatsApp cepat, estimasi jelas, dan tidak dibuat bingung dengan istilah administrasi."],
  ["Sofia L.", "Bekasi", "Terjemahan tersumpah dan legalisasi dokumen keluarga jadi lebih mudah karena alurnya dijelaskan satu per satu."]
];
const testimonialsEn = [
  ["Maria S.", "Jakarta", "The team reviewed my Indonesian marriage document quickly and explained what needed translation and apostille."],
  ["Daniel K.", "Singapore", "Clear WhatsApp guidance for diploma apostille. I knew the next step before sending the original document."],
  ["Nadia R.", "Australia", "Fast response, simple process, and helpful explanation for overseas document requirements."]
];

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

const urlFor = (pagePath) => `${site}${pagePath}`;

function waUrl(message) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function header(page) {
  const navItems = page.lang === "en" ? navEn : nav;
  const links = navItems
    .map(([label, href]) => `<a href="${href}">${label}</a>`)
    .join("");

  return `
    <a class="skip-link" href="#content">Lewati ke konten</a>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <span class="brand-mark">GO</span>
          <span>
            <span class="brand-title">GOApostille</span>
            <span class="brand-subtitle">Mobile document desk</span>
          </span>
        </a>
        <nav class="desktop-nav" aria-label="Navigasi utama">${links}</nav>
        <div class="nav-actions">
          <a class="button secondary" href="tel:+62817322271">0817-322-271</a>
          <a class="button whatsapp" href="${waUrl(page.defaultMessage)}">WhatsApp</a>
          <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="mobile-menu" aria-label="Menu mobile" data-mobile-menu>${links}<a href="${waUrl(page.defaultMessage)}">${page.lang === "en" ? "Free WhatsApp" : "WhatsApp Gratis"}</a></nav>
    </header>`;
}

function phoneMockup(page) {
  const isEn = page.lang === "en";
  const icons = ["OK", "GO", "WA"];
  const serviceItems = page.services
    .slice(0, 3)
    .map(
      (service, index) => `
        <div class="service-mini">
          <span class="mini-icon">${icons[index]}</span>
          <span>
            <strong>${escapeHtml(service.title)}</strong>
            <span>${escapeHtml(service.text.slice(0, 78))}...</span>
          </span>
        </div>`
    )
    .join("");

  const stats = page.stats
    .map(([value, label]) => `<div class="stat-card"><b>${escapeHtml(value)}</b><span>${escapeHtml(label)}</span></div>`)
    .join("");

  return `
    <aside class="phone-card" aria-label="Simulasi platform mobile GOApostille">
      <div class="phone-screen">
        <div class="app-top">
          <div class="app-status"><span>09:41</span><span>Online</span></div>
          <h2>${escapeHtml(page.appTitle)}</h2>
          <p>${escapeHtml(page.appLead)}</p>
        </div>
        <div class="app-panel">
          <div class="step-card">
            <strong>${isEn ? "Document review status" : "Status review dokumen"}</strong>
            <span>${isEn ? "Upload photos, choose a service, and wait for guidance." : "Upload foto, pilih layanan, tunggu arahan tim."}</span>
            <div class="progress-row" aria-hidden="true"><i></i><i></i><i></i></div>
          </div>
          <div class="stat-grid">${stats}</div>
          ${serviceItems}
        </div>
      </div>
    </aside>`;
}

function reviewForm(page, variant = "") {
  const formClass = ["quote-form", variant].filter(Boolean).join(" ");
  const isEn = page.lang === "en";
  return `
          <form class="${formClass}" data-wa-form>
            <div class="deal-card" data-countdown>
              <div>
                <span>${isEn ? "Today only" : "Promo hari ini"}</span>
                <strong>${isEn ? "Claim 10% discount via WhatsApp" : "Klaim diskon 10% via WhatsApp"}</strong>
              </div>
              <b data-countdown-value>14:59</b>
            </div>
            <div class="field">
              <label for="name">${isEn ? "Name" : "Nama"}</label>
              <input id="name" name="name" autocomplete="name" placeholder="${isEn ? "Your name" : "Nama Anda"}" required>
            </div>
            <div class="field">
              <label for="service">${isEn ? "Service" : "Layanan"}</label>
              <select id="service" name="service">
                <option value="apostille">${isEn ? "Document apostille" : "Apostille dokumen"}</option>
                <option value="legalization">${isEn ? "Document legalization" : "Legalisasi dokumen"}</option>
                <option value="translation">${isEn ? "Sworn translation" : "Penerjemah tersumpah"}</option>
                <option value="education">${isEn ? "Education document apostille" : "Apostille dokumen pendidikan"}</option>
                <option value="marriage">${isEn ? "Marriage document apostille" : "Apostille dokumen pernikahan"}</option>
              </select>
            </div>
            <div class="field">
              <label for="document">${isEn ? "Document type" : "Jenis dokumen"}</label>
              <input id="document" name="document" placeholder="${isEn ? "Example: diploma, marriage book, birth certificate" : "Contoh: ijazah, buku nikah, akta lahir"}">
            </div>
            <div class="field">
              <label for="need">${isEn ? "Notes" : "Catatan"}</label>
              <textarea id="need" name="need" placeholder="${isEn ? "Destination country, deadline, or document purpose" : "Negara tujuan, deadline, atau kebutuhan Anda"}"></textarea>
            </div>
            <button class="button whatsapp" type="submit">${isEn ? "Open WhatsApp for free review" : "Buka WhatsApp untuk review gratis"}</button>
          </form>`;
}

function hero(page) {
  const isEn = page.lang === "en";
  const trustBadges = isEn
    ? ["Free consultation", "Document review first", "Mobile friendly", "WhatsApp updates"]
    : ["Free konsultasi", "Review dokumen dulu", "Mobile friendly", "Update via WhatsApp"];
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow"><span class="pulse"></span>${escapeHtml(page.eyebrow)}</span>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="lead">${escapeHtml(page.lead)}</p>
          <div class="hero-actions">
            <a class="button whatsapp" href="${waUrl(page.defaultMessage)}">${escapeHtml(page.primaryCta)}</a>
            <a class="button secondary" href="#layanan">${escapeHtml(page.secondaryCta)}</a>
          </div>
          <ul class="micro-trust" aria-label="${isEn ? "Quick benefits" : "Keunggulan cepat"}">
            ${trustBadges.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="hero-form-card" aria-label="Form review dokumen gratis">
          <span class="kicker">${isEn ? "Document review form" : "Form review dokumen"}</span>
          <h2>${isEn ? "Start with a free document check." : "Mulai dari cek dokumen gratis."}</h2>
          <p>${isEn ? "Fill this in briefly and WhatsApp will open with a clean message format so the team can review your document faster." : "Isi singkat, lalu WhatsApp akan terbuka dengan format pesan yang rapi. Tim bisa langsung memahami dokumen dan tujuan Anda."}</p>
          ${reviewForm(page, "quote-form-light")}
        </aside>
      </div>
      <div class="container hero-proof">
        <div class="proof-pill">
          <strong>5.0</strong>
          <span>★★★★★</span>
          <em>${isEn ? "Trusted by hundreds of satisfied clients" : "Dipercaya ratusan customer puas"}</em>
        </div>
        <div class="proof-pill">
          <strong>10%</strong>
          <span>${isEn ? "Flash discount" : "Flash diskon"}</span>
          <em>${isEn ? "Claim during WhatsApp review" : "Klaim saat review dokumen via WhatsApp"}</em>
        </div>
        <div class="proof-pill">
          <strong>Free</strong>
          <span>${isEn ? "Document review" : "Review dokumen"}</span>
          <em>${isEn ? "Consult before sending originals" : "Konsultasi sebelum kirim dokumen asli"}</em>
        </div>
      </div>
    </section>`;
}

function appPreview(page) {
  const isEn = page.lang === "en";
  return `
    <section class="section app-preview">
      <div class="container app-preview-grid">
        <div class="section-head">
          <span class="kicker">${isEn ? "Mobile flow" : "Alur mobile"}</span>
          <h2>${isEn ? "Simple like an app, handled by a real document team." : "Ringkas seperti memakai aplikasi, tetap ditangani oleh tim manusia."}</h2>
          <p>${isEn ? "This preview shows the GOApostille flow: document review, service mapping, and status updates through WhatsApp." : "Preview ini menunjukkan alur kerja GOApostille: dokumen dicek, kebutuhan layanan dipetakan, lalu update proses tetap mudah dipantau lewat WhatsApp."}</p>
        </div>
        ${phoneMockup(page)}
      </div>
    </section>`;
}

function services(page) {
  const cards = page.services
    .map(
      (service) => `
        <article class="card">
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.text)}</p>
          ${
            service.href
              ? `<a class="card-link" href="${service.href}">Buka layanan -&gt;</a>`
              : `<a class="card-link" href="#konsultasi">Konsultasi -&gt;</a>`
          }
        </article>`
    )
    .join("");

  return `
    <section class="section" id="layanan">
      <div class="container">
        <div class="section-head">
          <span class="kicker">Layanan utama</span>
          <h2>${escapeHtml(page.servicesTitle)}</h2>
          <p>${escapeHtml(page.servicesLead)}</p>
        </div>
        <div class="grid three">${cards}</div>
      </div>
    </section>`;
}

function trust(page) {
  const items = page.trustItems
    .map(
      ([title, text]) => `
        <article class="trust-item">
          <b>${escapeHtml(title)}</b>
          <span>${escapeHtml(text)}</span>
        </article>`
    )
    .join("");

  return `
    <section class="section tight" id="trust">
      <div class="container">
        <div class="section-head center">
          <span class="kicker">Trust builder</span>
          <h2>${escapeHtml(page.trustTitle)}</h2>
          <p>${escapeHtml(page.trustLead)}</p>
        </div>
        <div class="trust-strip">${items}</div>
      </div>
    </section>`;
}

function conversionProof(page) {
  const isEn = page.lang === "en";
  const quoteItems = (isEn ? testimonialsEn : testimonials)
    .map(
      ([name, city, text]) => `
        <article class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>${escapeHtml(text)}</p>
          <strong>${escapeHtml(name)}</strong>
          <span>${escapeHtml(city)}</span>
        </article>`
    )
    .join("");

  return `
    <section class="section proof-section" id="review">
      <div class="container">
        <div class="section-head center">
          <span class="kicker">${isEn ? "Social proof" : "Social proof"}</span>
          <h2>${isEn ? "More confidence before you send important documents." : "Lebih yakin sebelum mengirim dokumen penting."}</h2>
          <p>${isEn ? "Review the route first, claim today's WhatsApp promo, and check service coverage before continuing." : "Cek jalur layanan lebih dulu, klaim promo WhatsApp hari ini, dan pastikan dokumen Anda ditangani dengan alur yang jelas."}</p>
        </div>
        <div class="proof-grid">
          <article class="review-badge">
            <span class="badge-label">${isEn ? "Google-style review badge" : "Badge review Google-style"}</span>
            <strong>5.0 ★★★★★</strong>
            <p>${isEn ? "Hundreds of satisfied clients have trusted apostille, legalization, and sworn translation assistance." : "Ratusan customer puas telah mempercayakan bantuan apostille, legalisasi, dan penerjemah tersumpah."}</p>
            <a class="button secondary" href="${waUrl(isEn ? "Hello GOApostille, I want to claim the 10% WhatsApp promo and review my document." : "Halo GOApostille, saya ingin klaim promo 10% dan review dokumen gratis.")}">${isEn ? "Claim promo on WhatsApp" : "Klaim promo di WhatsApp"}</a>
          </article>
          <article class="maps-card">
            <span class="badge-label">${isEn ? "Service area" : "Area layanan"}</span>
            <h3>${isEn ? "Jakarta document desk, remote friendly." : "Document desk Jakarta, bisa mulai jarak jauh."}</h3>
            <p>${isEn ? "Start from WhatsApp from Jakarta, Jabodetabek, or overseas. The team will guide document delivery when originals are needed." : "Mulai dari WhatsApp untuk area Jakarta, Jabodetabek, maupun luar kota. Jika dokumen asli dibutuhkan, tim akan memberi arahan pengiriman."}</p>
            <a class="card-link" href="https://www.google.com/maps/search/?api=1&query=Jakarta%20apostille%20service" target="_blank" rel="noopener">${isEn ? "Open Google Maps ->" : "Buka Google Maps ->"}</a>
          </article>
        </div>
        <div class="testimonial-grid">${quoteItems}</div>
      </div>
    </section>`;
}

function processSection(page) {
  const isEn = page.lang === "en";
  const cards = (isEn ? workflowEn : workflow)
    .map(
      ([title, text]) => `
        <article class="card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </article>`
    )
    .join("");

  return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <span class="kicker">${isEn ? "Quick process" : "Alur cepat"}</span>
          <h2>${isEn ? "From first review to documents ready for overseas use." : "Dari konsultasi awal sampai dokumen siap dipakai."}</h2>
          <p>${isEn ? "You do not need to guess the right route. The team reviews your document type, destination country, and service needs." : "Anda tidak perlu menebak harus mulai dari mana. Tim akan membantu membaca kebutuhan dokumen berdasarkan negara tujuan dan jenis layanan."}</p>
        </div>
        <div class="workflow">${cards}</div>
      </div>
    </section>`;
}

function keywords(page) {
  const isEn = page.lang === "en";
  const tags = page.keywordsList.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  return `
    <section class="section tight">
      <div class="container">
        <div class="section-head">
          <span class="kicker">${isEn ? "Service topics" : "Topik layanan"}</span>
          <h2>${isEn ? "Common document needs clients search for." : "Jenis pencarian yang sering dibutuhkan klien."}</h2>
          <p>${isEn ? "These topics help match your document with the right service for visa, study, work, marriage, or overseas administration." : "Topik berikut membantu Anda menemukan layanan yang paling dekat dengan kebutuhan dokumen, baik untuk visa, studi, kerja, menikah, maupun administrasi luar negeri."}</p>
        </div>
        <div class="keyword-cloud">${tags}</div>
      </div>
    </section>`;
}

function cta(page) {
  const isEn = page.lang === "en";
  return `
    <section class="section" id="konsultasi">
      <div class="container">
        <div class="cta-panel cta-panel-simple">
          <div>
            <span class="kicker">${isEn ? "Free document review" : "Free review dokumen"}</span>
            <h2>${isEn ? "Not sure which route is right? Send the document first." : "Masih ragu jalurnya? Kirim dulu dokumennya."}</h2>
            <p>${isEn ? "The team can check whether your document needs apostille, legalization, sworn translation, or a combination of services." : "Tim akan membantu mengecek apakah dokumen Anda perlu apostille, legalisasi, penerjemah tersumpah, atau kombinasi beberapa layanan."}</p>
            <div class="hero-actions">
              <a class="button whatsapp" href="${waUrl(page.defaultMessage)}">${isEn ? "Chat on WhatsApp" : "Chat langsung WhatsApp"}</a>
              <a class="button secondary" href="tel:+62817322271">${isEn ? "Call 0817-322-271" : "Telepon 0817-322-271"}</a>
            </div>
          </div>
          <div class="cta-note">
            <strong>${isEn ? "Fast response via WhatsApp" : "Respon cepat via WhatsApp"}</strong>
            <span>${isEn ? "Prepare document photos, destination country, and deadline if any." : "Siapkan foto dokumen, negara tujuan, dan deadline bila ada."}</span>
          </div>
        </div>
      </div>
    </section>`;
}

function faq(page) {
  const isEn = page.lang === "en";
  const items = page.faq
    .map(
      ([question, answer]) => `
        <details>
          <summary>${escapeHtml(question)}</summary>
          <p>${escapeHtml(answer)}</p>
        </details>`
    )
    .join("");

  return `
    <section class="section tight" id="faq">
      <div class="container">
        <div class="section-head">
          <span class="kicker">FAQ</span>
          <h2>${isEn ? "Questions people ask before chatting." : "Pertanyaan yang sering muncul sebelum chat."}</h2>
        </div>
        <div class="faq">${items}</div>
      </div>
    </section>`;
}

function footer(page) {
  const isEn = page.lang === "en";
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <h3>GOApostille.com</h3>
          <p>${isEn ? "A mobile-first platform for apostille, document legalization, and sworn translation. Start with a free WhatsApp document review." : "Platform mobile-first untuk apostille, legalisasi dokumen, dan penerjemah tersumpah. Mulai dari review dokumen gratis via WhatsApp."}</p>
        </div>
        <div>
          <strong>${isEn ? "Services" : "Layanan"}</strong>
          <div class="footer-links">
            <a href="/apostille-dokumen-pernikahan/">${isEn ? "Marriage documents" : "Dokumen pernikahan"}</a>
            <a href="/apostille-dokumen-pendidikan/">${isEn ? "Education documents" : "Dokumen pendidikan"}</a>
            <a href="/jasa-penerjemah-tersumpah/">${isEn ? "Sworn translator" : "Penerjemah tersumpah"}</a>
          </div>
        </div>
        <div>
          <strong>${isEn ? "Language" : "Bahasa"}</strong>
          <div class="footer-links">
            <a href="/">Indonesia</a>
            <a href="/en/">English</a>
            <a href="/en/marriage-document-apostille/">Marriage apostille</a>
            <a href="/en/education-document-apostille/">Education apostille</a>
            <a href="/en/sworn-translator-jakarta/">Sworn translator</a>
          </div>
        </div>
        <div>
          <strong>${isEn ? "Contact" : "Kontak"}</strong>
          <div class="footer-links">
            <a href="tel:+62817322271">0817-322-271</a>
            <a href="${waUrl(isEn ? "Hello GOApostille, I would like a document consultation." : "Halo GOApostille, saya ingin konsultasi dokumen.")}">WhatsApp</a>
            <a href="https://www.goapostille.com/">www.goapostille.com</a>
          </div>
        </div>
      </div>
    </footer>`;
}

function schema(page) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": page.schemaType,
    name: page.title,
    url: urlFor(page.path),
    image: `${site}/favicon.svg`,
    telephone: "+62-817-322-271",
    areaServed: ["Indonesia", "Jakarta"],
    brand: {
      "@type": "Brand",
      name: "GOApostille.com"
    },
    serviceType: page.keywordsList.slice(0, 6)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  };

  return `
    <script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
}

function html(page) {
  const canonical = urlFor(page.path);
  const langAlt = alternateMap[page.path] || (page.lang === "id" ? "/en/" : "/");

  return `<!doctype html>
<html lang="${page.lang}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}">
    <meta name="keywords" content="${escapeHtml(page.keywords)}">
    <meta name="theme-color" content="#0b63f6">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${escapeHtml(page.title)}">
    <meta property="og:description" content="${escapeHtml(page.description)}">
    <meta property="og:url" content="${canonical}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" hreflang="${page.lang}" href="${canonical}">
    <link rel="alternate" hreflang="${page.lang === "id" ? "en" : "id"}" href="${urlFor(langAlt)}">
    <link rel="alternate" hreflang="x-default" href="${site}/">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="stylesheet" href="/styles.css">
    ${schema(page)}
  </head>
  <body>
    ${header(page)}
    <main id="content">
      ${hero(page)}
      ${appPreview(page)}
      ${services(page)}
      ${trust(page)}
      ${conversionProof(page)}
      ${processSection(page)}
      ${keywords(page)}
      ${cta(page)}
      ${faq(page)}
    </main>
    ${footer(page)}
    <a class="mobile-wa" href="${waUrl(page.defaultMessage)}">
      <span class="icon">WA</span>
      <span>
        <strong>${page.lang === "en" ? "Free Document Review" : "Free Review Dokumen"}</strong>
        <span>${page.lang === "en" ? "Free WhatsApp consultation" : "Free konsultasi via WhatsApp"}</span>
      </span>
    </a>
    <script src="/app.js" defer></script>
  </body>
</html>
`;
}

async function writePage(page) {
  const dir = path.join(root, page.path);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html(page).replace(/[ \t]+$/gm, ""), "utf8");
}

async function writeRobots() {
  const robots = `User-agent: *
Allow: /
`;
  await writeFile(path.join(root, "robots.txt"), robots, "utf8");
}

async function writeSitemap() {
  const urls = pages
    .map(
      (page) => `  <url>
    <loc>${urlFor(page.path)}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page.path === "/" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  await writeFile(path.join(root, "sitemap.xml"), sitemap, "utf8");
}

await Promise.all(pages.map(writePage));
await Promise.all([writeRobots(), writeSitemap()]);
console.log(`Generated ${pages.length} pages for GOApostille.com`);
