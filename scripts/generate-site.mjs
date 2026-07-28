import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.goapostille.com";
const adminPrimary = {
  labelId: "Admin 1 (Utama)",
  labelEn: "Admin 1 (Primary)",
  display: "0819-5626-777",
  tel: "+628195626777",
  wa: "628195626777"
};
const adminSecondary = {
  labelId: "Admin 2",
  labelEn: "Admin 2",
  display: "0817-322-271",
  tel: "+62817322271",
  wa: "62817322271"
};
const phone = adminPrimary.wa;
const googleMapsUrl = "https://maps.app.goo.gl/btEvU1e3E68aQQLs8";
const officeAddress = {
  company: "PT Mega Akses Antarbangsa",
  line1: "AXA Tower 45th Floor",
  line2: "Jl. Prof. Dr. Satrio Kav. 18",
  line3: "Kuningan, Setiabudi, Jakarta 12940"
};
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
      "Layanan apostille Kemenkumham, legalisasi dokumen Kemenlu & Kedutaan, serta penerjemah tersumpah resmi. Pemeriksaan awal dokumen GRATIS via WhatsApp.",
    keywords:
      "jasa apostille, apostille kemenkumham, legalisasi dokumen, penerjemah tersumpah jakarta, legalisasi buku nikah, apostille ijazah",
    eyebrow: "Platform Dokumen Internasional Resmi",
    h1: "Apostille, Legalisasi & Penerjemah Tersumpah Tanpa Ribet.",
    lead:
      "Proses dokumen ke luar negeri lebih tenang & pasti. Tim berpengalaman kami memeriksa kelengkapan berkas Anda secara gratis via WhatsApp sebelum dokumen asli dikirim.",
    primaryCta: "Konsultasi WhatsApp Sekarang",
    secondaryCta: "Lihat Layanan Kami",
    defaultMessage:
      "Halo GOApostille.com, saya ingin konsultasi dan pemeriksaan awal dokumen gratis.",
    appTitle: "GOApostille",
    appLead: "Checklist dokumen, estimasi, dan konsultasi dalam satu alur.",
    stats: [
      ["Tanpa biaya", "konsultasi awal"],
      ["Dokumen diperiksa", "sebelum proses"],
      ["WhatsApp", "pembaruan status"]
    ],
    servicesTitle: "Solusi Lengkap Legalisasi Dokumen Internasional",
    servicesLead:
      "Pengurusan terpadu mulai dari penerjemahan tersumpah hingga sertifikasi Apostille dan pengesahan Kedutaan Besar di Jakarta.",
    services: [
      {
        title: "Apostille Kemenkumham",
        text:
          "Sertifikat Apostille resmi untuk pengakuan dokumen di 120+ negara anggota Hague Convention. Cocok untuk dokumen pernikahan, pendidikan, kerja, dan korporasi.",
        href: "/apostille-dokumen-pernikahan/",
        badge: "Paling Populer",
        icon: "apostille",
        cta: "Konsultasi Apostille"
      },
      {
        title: "Penerjemah Tersumpah",
        text:
          "Terjemahan dokumen resmi oleh penerjemah tersumpah yang diakui pemerintah. Tersedia untuk dokumen pribadi, pendidikan, bisnis, dan kebutuhan imigrasi dalam lebih dari 25 bahasa.",
        href: "/jasa-penerjemah-tersumpah/",
        badge: "25+ Bahasa",
        icon: "translation",
        cta: "Cek Tarif Penerjemah"
      },
      {
        title: "Legalisasi Kemenlu & Kedutaan",
        text:
          "Pengurusan stempel berjenjang Kementerian Luar Negeri RI dan Kedutaan Besar negara tujuan (seperti Qatar, UEA, China, Mesir) tanpa antre sendiri.",
        href: "#konsultasi",
        badge: "Negara Non-Apostille",
        icon: "globe",
        cta: "Tanya Syarat Kedutaan"
      },
      {
        title: "Dokumen Pendidikan",
        text:
          "Pengesahan Ijazah, Transkrip Nilai, Sertifikat Keterangan Lulus (SKL), dan Diploma untuk pendaftaran kuliah, beasiswa luar negeri, atau penyetaraan gelar.",
        href: "/apostille-dokumen-pendidikan/",
        badge: "Beasiswa & Studi",
        icon: "education",
        cta: "Apostille Ijazah"
      },
      {
        title: "Dokumen Pernikahan & Pribadi",
        text:
          "Apostille Buku Nikah, Akta Perkawinan, CNI, Akta Kelahiran, dan Surat Keterangan Lajang untuk pernikahan campuran atau reunifikasi keluarga.",
        href: "/apostille-dokumen-pernikahan/",
        badge: "Visa & Pernikahan",
        icon: "marriage",
        cta: "Apostille Buku Nikah"
      },
      {
        title: "Layanan Express 1-2 Hari",
        text:
          "Solusi kilat untuk dokumen dengan tenggat waktu mendesak. Tim prioritas kami siap mempercepat verifikasi dan penyelesaian dokumen Anda.",
        href: "#konsultasi",
        badge: "Prioritas Express",
        icon: "bolt",
        cta: "Mulai Layanan Express"
      }
    ],
    trustTitle: "Mengapa Proses di GOApostille Terasa Lebih Mudah?",
    trustLead:
      "Setiap negara punya syarat berbeda untuk dokumen yang akan digunakan di luar negeri. Karena itu, GOApostille memulai dari pemeriksaan awal dokumen — bukan dari pembayaran di muka.",
    trustItems: [
      ["Pemeriksaan Awal 100% Gratis", "Kirim foto dokumen lebih dulu via WhatsApp sebelum melanjutkan proses."],
      ["Estimasi Transparan & Jelas", "Anda mendapat arahan jalur layanan, durasi, dan rincian kelengkapan sejak awal."],
      ["Dapat Diurus Jarak Jauh", "Konsultasi dan pengiriman dokumen dapat dilakukan dari mana saja melalui WhatsApp & Kurir."],
      ["Fokus Kebutuhan Luar Negeri", "Arahan disesuaikan spesifik untuk visa, studi, kerja, pernikahan, dan bisnis internasional."]
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
        "Apa perbedaan utama Apostille dan Legalisasi Biasa?",
        "Apostille adalah pengesahan dokumen satu pintu melalui Kemenkumham untuk 120+ negara peserta Konvensi Hague 1961 tanpa perlu ke Kemenlu atau Kedutaan. Sedangkan legalisasi biasa digunakan untuk negara non-Apostille (seperti UEA, Qatar, China) yang memerlukan stempel berjenjang Kemenkumham, Kemenlu, dan Kedutaan Besar negara tujuan."
      ],
      [
        "Apakah pemeriksaan foto dokumen via WhatsApp dikenakan biaya?",
        "Sama sekali GRATIS. Anda cukup mengirimkan foto dokumen yang akan diurus via WhatsApp, dan tim ahli kami akan langsung menganalisis kesesuaian dokumen, persyaratannya, serta memberikan perkiraan estimasi biaya dan waktu pengerjaan secara rinci."
      ],
      [
        "Apakah bisa sekaligus penerjemah tersumpah sebelum Apostille?",
        "Sangat bisa. Kami menyediakan paket terpadu Penerjemah Tersumpah resmi bersertifikat (Sworn Translator) yang diakui Kedutaan dan Kemenkumham, dilanjutkan langsung ke proses Apostille atau Legalisasi sehingga Anda tidak perlu repot berpindah tempat."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/apostille-dokumen-pernikahan/",
    lang: "id",
    title: "Jasa Apostille Dokumen Pernikahan | Legalisasi Buku Nikah & Akta Nikah",
    description:
      "Jasa apostille dokumen pernikahan untuk legalisasi buku nikah, akta nikah, surat nikah, dan marriage certificate. Pemeriksaan awal gratis melalui WhatsApp.",
    keywords:
      "legalisasi buku nikah, legalisasi akta nikah, apostille buku nikah, legalisasi dokumen pernikahan, apostille dokumen pernikahan, apostille marriage certificate, apostille marriage document, apostille surat nikah, jasa apostille akta nikah, legalisasi akta nikah untuk luar negeri",
    eyebrow: "Dokumen Pernikahan Luar Negeri",
    h1: "Apostille Dokumen Pernikahan dengan Alur Jelas & Terpercaya.",
    lead:
      "Kirim foto buku nikah, akta nikah, atau surat nikah. GOApostille membantu memeriksa apakah dokumen memerlukan terjemahan tersumpah, apostille Kemenkumham, atau legalisasi kedutaan.",
    primaryCta: "Periksa Dokumen Pernikahan",
    secondaryCta: "Lihat Alur Kerja",
    defaultMessage:
      "Halo GOApostille, saya ingin pemeriksaan awal untuk apostille/legalisasi dokumen pernikahan.",
    appTitle: "Marriage Doc",
    appLead: "Buku nikah, akta nikah, surat nikah, dan marriage certificate.",
    stats: [
      ["Tanpa biaya", "pemeriksaan awal"],
      ["WhatsApp", "alur jelas"],
      ["Luar negeri", "siap pakai"]
    ],
    servicesTitle: "Dokumen Pernikahan yang Sering Diproses",
    servicesLead:
      "Setiap dokumen pernikahan bisa memiliki jalur berbeda. Tim akan memeriksa jenis dokumen, bahasa, dan negara tujuan sebelum memberi estimasi proses.",
    services: [
      {
        title: "Legalisasi Buku Nikah",
        text:
          "Cocok untuk pasangan yang membutuhkan legalisasi buku nikah untuk visa keluarga, spouse visa, administrasi imigrasi, atau pencatatan pernikahan di luar negeri.",
        href: "#konsultasi",
        badge: "Pernikahan KUA",
        icon: "marriage",
        cta: "Apostille Buku Nikah"
      },
      {
        title: "Apostille Akta Nikah",
        text:
          "Bantuan jasa apostille akta nikah, apostille marriage certificate, dan legalisasi akta nikah untuk luar negeri sesuai kebutuhan negara tujuan.",
        href: "#konsultasi",
        badge: "Catatan Sipil",
        icon: "apostille",
        cta: "Apostille Akta Nikah"
      },
      {
        title: "Terjemahan Dokumen Pernikahan",
        text:
          "Jika negara tujuan meminta bahasa Inggris atau bahasa lain, dokumen dapat diarahkan ke penerjemah tersumpah sebelum proses apostille.",
        href: "/jasa-penerjemah-tersumpah/",
        badge: "Sworn Translator",
        icon: "translation",
        cta: "Terjemahkan Dokumen"
      }
    ],
    trustTitle: "Untuk Pasangan yang Membutuhkan Kepastian Administrasi",
    trustLead:
      "Dokumen pernikahan sering berkaitan dengan visa pasangan, kepindahan domisili, atau pencatatan sipil di luar negeri. Karena itu proses dimulai dari pemeriksaan dokumen, bukan dari pembayaran di muka.",
    trustItems: [
      ["Pemeriksaan Dokumen Awal", "Tim melihat jenis dokumen dan kondisi file dari foto."],
      ["Arahan Negara Tujuan", "Kebutuhan bisa berbeda antara negara apostille dan non-apostille."],
      ["Bahasa Dokumen Diperiksa", "Jika butuh terjemahan tersumpah, alurnya disiapkan sejak awal."],
      ["Pembaruan via WhatsApp", "Klien dapat memantau informasi proses tanpa harus menunggu."]
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
        "Apakah buku nikah KUA bisa di-Apostille?",
        "Bisa. GOApostille membantu verifikasi dokumen ke Kemenag/Kemenkumham sesuai persyaratan negara tujuan."
      ],
      [
        "Apa bisa untuk marriage certificate?",
        "Bisa. Halaman ini juga ditujukan untuk kebutuhan apostille marriage certificate dan apostille marriage document."
      ],
      [
        "Apakah harus datang langsung ke kantor?",
        "Konsultasi awal dapat dimulai via WhatsApp dengan mengirim foto dokumen. Untuk dokumen fisik, dapat dikirimkan melalui jasa kurir."
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
    eyebrow: "Studi & Kerja Luar Negeri",
    h1: "Apostille Ijazah, Transkrip & Dokumen Pendidikan Praktis.",
    lead:
      "Untuk beasiswa, kuliah luar negeri, credential evaluation, visa kerja, atau HR global. Kirim foto ijazah dan transkrip, lalu GOApostille bantu petakan langkah legalisasi resmi.",
    primaryCta: "Periksa Dokumen Pendidikan",
    secondaryCta: "Konsultasi WhatsApp",
    defaultMessage:
      "Halo GOApostille, saya ingin pemeriksaan awal untuk apostille/legalisasi ijazah atau dokumen pendidikan.",
    appTitle: "Edu Apostille",
    appLead: "Ijazah, transkrip nilai, diploma, dan degree certificate.",
    stats: [
      ["Ijazah", "SMA/D3/S1+"],
      ["Transkrip", "nilai akademik"],
      ["Global", "studi/kerja"]
    ],
    servicesTitle: "Kebutuhan Dokumen Pendidikan yang Dibantu",
    servicesLead:
      "Pengesahan ijazah, transkrip nilai, diploma, degree certificate, dan academic transcript dapat diperiksa berdasarkan tujuan studi, kerja, credential evaluation, atau migrasi.",
    services: [
      {
        title: "Apostille Ijazah",
        text:
          "Untuk legalisasi ijazah dan apostille ijazah SMA, diploma, sarjana, magister, atau dokumen akademik lain yang akan dipakai untuk kampus, visa, atau pekerjaan luar negeri.",
        href: "#konsultasi",
        badge: "Kuliah & Beasiswa",
        icon: "education",
        cta: "Apostille Ijazah"
      },
      {
        title: "Legalisasi Transkrip Nilai",
        text:
          "Transkrip nilai dan academic transcript dapat diperiksa untuk kebutuhan apostille, legalisasi, atau terjemahan tersumpah.",
        href: "#konsultasi",
        badge: "Academic Transcript",
        icon: "apostille",
        cta: "Legalisasi Transkrip"
      },
      {
        title: "Apostille Degree Certificate",
        text:
          "Bantuan untuk diploma, degree certificate, dan dokumen pendidikan berbahasa Inggris yang perlu pengesahan resmi.",
        href: "#konsultasi",
        badge: "Degree & Diploma",
        icon: "shield",
        cta: "Degree Certificate"
      }
    ],
    trustTitle: "Solusi Cepat untuk Pelajar & Profesional",
    trustLead:
      "Halaman ini membantu Anda memahami dokumen apa yang perlu disiapkan, tujuan penggunaan yang perlu dijelaskan, dan alur tindak lanjut dari tim.",
    trustItems: [
      ["Penjelasan Mudah Dipahami", "Penjelasan dibuat ringkas agar mudah dipahami sejak konsultasi pertama."],
      ["Transparan Sejak Awal", "Istilah seperti apostille ijazah dan legalisasi transkrip dijelaskan tanpa kebingungan."],
      ["Pemeriksaan WhatsApp Instant", "Pemeriksaan awal dokumen diarahkan langsung melalui WhatsApp."],
      ["Proses Aman & Resmi", "Garansi pengesahan resmi Kemenkumham & Kemendikbud/Kemenag jika diperlukan."]
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
        "Apakah ijazah SMA bisa di-Apostille?",
        "Bisa. GOApostille membantu kebutuhan apostille ijazah SMA dan dokumen pendidikan lain sesuai syarat negara tujuan."
      ],
      [
        "Apakah transkrip nilai perlu diterjemahkan dulu?",
        "Tergantung bahasa dokumen dan persyaratan lembaga tujuan. Jika perlu, dokumen dapat diarahkan ke penerjemah tersumpah."
      ],
      [
        "Untuk pendaftaran beasiswa luar negeri bisa?",
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
    eyebrow: "Penerjemahan Resmi & Bersertifikat",
    h1: "Jasa Penerjemah Tersumpah Jakarta Resmi & Berpengalaman.",
    lead:
      "Kirim foto dokumen, sebutkan bahasa tujuan dan keperluan penggunaan. GOApostille membantu kebutuhan penerjemah tersumpah resmi untuk visa, beasiswa, imigrasi, pernikahan, kontrak, dan dokumen pribadi.",
    primaryCta: "Periksa Estimasi Biaya",
    secondaryCta: "Konsultasi WhatsApp",
    defaultMessage:
      "Halo GOApostille, saya ingin konsultasi jasa penerjemah tersumpah resmi.",
    appTitle: "Sworn Translate",
    appLead: "Dokumen pribadi, pendidikan, imigrasi, dan perusahaan.",
    stats: [
      ["Express", "opsional"],
      ["Resmi", "tersumpah"],
      ["WhatsApp", "estimasi awal"]
    ],
    servicesTitle: "Jenis Dokumen yang Sering Diterjemahkan",
    servicesLead:
      "Sebelum menghitung biaya, tim perlu melihat jenis dokumen, bahasa tujuan, jumlah halaman, dan apakah dokumen perlu dilegalisasi setelah diterjemahkan.",
    services: [
      {
        title: "Penerjemah Tersumpah Ijazah & Academic",
        text:
          "Untuk ijazah, transkrip nilai, diploma, dan dokumen akademik yang akan dipakai untuk kampus, beasiswa, credential evaluation, atau kerja.",
        href: "#konsultasi",
        badge: "Pendidikan",
        icon: "translation",
        cta: "Terjemahkan Ijazah"
      },
      {
        title: "Paspor, Akta Lahir & Dokumen Sipil",
        text:
          "Jasa penerjemah tersumpah paspor, penerjemah tersumpah akta lahir, akta nikah, kartu keluarga, dan dokumen keluarga lain.",
        href: "#konsultasi",
        badge: "Dokumen Pribadi",
        icon: "shield",
        cta: "Terjemahkan Akta"
      },
      {
        title: "Kontrak Kerja & Dokumen Bisnis",
        text:
          "Penerjemah tersumpah kontrak kerja, dokumen perusahaan, perjanjian, legal document, dan kebutuhan korporasi.",
        href: "#konsultasi",
        badge: "Korporasi",
        icon: "building",
        cta: "Terjemahkan Kontrak"
      }
    ],
    trustTitle: "Hasil Terjemahan Presisi & Diakui Kedutaan",
    trustLead:
      "Sebelum memberi harga penerjemah tersumpah, tim perlu melihat bahasa, jumlah halaman, kualitas scan, format nama, dan kebutuhan legalisasi lanjutan.",
    trustItems: [
      ["Estimasi Berdasarkan Dokumen Real", "Biaya dihitung setelah dokumen diperiksa, bukan dari perkiraan tanpa dasar."],
      ["Tujuan Penggunaan Diperhatikan", "Kebutuhan untuk visa, beasiswa, imigrasi, atau pernikahan dapat disesuaikan."],
      ["Layanan Express Tersedia", "Penerjemah tersumpah express dapat diperiksa sesuai antrean dan bahasa."],
      ["Bisa Langsung Apostille", "Jika perlu pengesahan setelah terjemahan, alurnya bisa langsung dilanjutkan."]
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
        "Berapa tarif jasa penerjemah tersumpah?",
        "Harga tergantung bahasa tujuan, jenis dokumen, jumlah halaman, dan tingkat kekhususan istilah. Kirim foto dokumen via WhatsApp untuk estimasi akurat."
      ],
      [
        "Apakah bisa pengerjaan express (kilat)?",
        "Bisa. Ketersediaan pengerjaan express bergantung pada bahasa tujuan dan jumlah halaman dokumen."
      ],
      [
        "Apakah hasil terjemahan diakui untuk pengajuan visa?",
        "Ya, terjemahan oleh Sworn Translator bersertifikat diakui oleh Kedutaan Besar, Imigrasi, dan Kementerian di dalam maupun luar negeri."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/en/",
    lang: "en",
    title: "GOApostille.com | Apostille, Legalization & Sworn Translation Services",
    description:
      "Professional apostille, document legalization, and sworn translation support for Indonesia-issued documents. Start with a FREE WhatsApp document review.",
    keywords:
      "apostille service indonesia, document legalization indonesia, sworn translator jakarta, marriage certificate apostille, diploma apostille",
    eyebrow: "Official Indonesia Document Platform",
    h1: "Apostille, Legalization & Sworn Translation Made Simple.",
    lead:
      "GOApostille helps review your Indonesian documents, identify the correct legal route, and coordinate apostille or translation via WhatsApp before original files are sent.",
    primaryCta: "WhatsApp Consultation Now",
    secondaryCta: "Explore Our Services",
    defaultMessage:
      "Hello GOApostille.com, I would like a free document review for apostille/legalization.",
    appTitle: "GOApostille",
    appLead: "Document checklist, estimate, and WhatsApp consultation.",
    stats: [
      ["WhatsApp", "consultation"],
      ["Remote", "initial review"],
      ["Clear", "next steps"]
    ],
    servicesTitle: "Complete Services for Overseas Document Processing",
    servicesLead:
      "From sworn translation to Apostille and Embassy legalization in Jakarta. Managed professionally with a clear process.",
    services: [
      {
        title: "Apostille Service",
        text:
          "Official Apostille certification under the Hague Convention for 120+ member countries. Ideal for marriage, education, employment, and corporate documents.",
        href: "/en/marriage-document-apostille/",
        badge: "Hague Convention",
        icon: "apostille",
        cta: "Consult Apostille"
      },
      {
        title: "Sworn Translation",
        text:
          "Official translation by certified Sworn Translators recognized by Ministries & Embassies in over 25 languages.",
        href: "/en/sworn-translator-jakarta/",
        badge: "25+ Languages",
        icon: "translation",
        cta: "Check Translator Rates"
      },
      {
        title: "Embassy & Ministry Legalization",
        text:
          "Legalization through the Ministry of Foreign Affairs (Kemenlu) and foreign embassies in Jakarta (e.g. UAE, Qatar, China).",
        href: "#konsultasi",
        badge: "Non-Apostille Route",
        icon: "globe",
        cta: "Ask Embassy Route"
      },
      {
        title: "Education Documents",
        text:
          "Legalization of diplomas, academic transcripts, and degree certificates for university admissions, scholarships, or employment.",
        href: "/en/education-document-apostille/",
        badge: "Study & Work",
        icon: "education",
        cta: "Apostille Diploma"
      },
      {
        title: "Marriage & Civil Records",
        text:
          "Apostille for marriage certificates (buku nikah), birth certificates, and single status certificates for overseas marriage or visa.",
        href: "/en/marriage-document-apostille/",
        badge: "Family & Visa",
        icon: "marriage",
        cta: "Marriage Certificate"
      },
      {
        title: "Express Service (1-2 Days)",
        text:
          "Urgent processing option for tight deadlines with dedicated priority tracking.",
        href: "#konsultasi",
        badge: "Express Priority",
        icon: "bolt",
        cta: "Start Express Service"
      }
    ],
    trustTitle: "Why Clients Trust GOApostille",
    trustLead:
      "Document requirements differ per country. We start by reviewing your document photos for free before any commitment.",
    trustItems: [
      ["100% Free Initial Review", "Share document photos on WhatsApp before committing."],
      ["Clear & Transparent Costing", "Get clear guidance on route, duration, and requirements up front."],
      ["Remote & Remote-Friendly", "Consultation and processing managed smoothly via WhatsApp and courier."],
      ["Global Acceptance", "Compliant with Hague Convention & Ministry standards."]
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
        "What is the difference between Apostille and regular Legalization?",
        "Apostille is a streamlined single-window certification by Kemenkumham for 120+ Hague Convention countries. Regular legalization requires step-by-step stamps from Ministry of Foreign Affairs and destination Embassies."
      ],
      [
        "Can I start from outside Indonesia?",
        "Yes. You can start with a WhatsApp photo review, and our team will guide you on how to send original documents if needed."
      ],
      [
        "Do I need sworn translation first?",
        "It depends on your target country and institution. GOApostille can review your file and handle both translation and apostille seamlessly."
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
    eyebrow: "Overseas Marriage Support",
    h1: "Indonesian Marriage Document Apostille & Legalization.",
    lead:
      "Send photos of your buku nikah or marriage certificate via WhatsApp for an initial review before overseas submission or visa application.",
    primaryCta: "Review Marriage Document",
    secondaryCta: "WhatsApp Consultation",
    defaultMessage:
      "Hello GOApostille, I need a review for marriage document apostille or legalization.",
    appTitle: "Marriage Docs",
    appLead: "Buku nikah, marriage certificate, and civil registry documents.",
    stats: [
      ["Photo", "review"],
      ["WhatsApp", "consultation"],
      ["Overseas", "ready"]
    ],
    servicesTitle: "Marriage Documents We Handle",
    servicesLead:
      "We assist with apostille, legalization, and sworn translation of Indonesian marriage records.",
    services: [
      {
        title: "Buku Nikah / Marriage Book",
        text:
          "For spouse visa, family visa, immigration, and overseas civil registration.",
        href: "#konsultasi",
        badge: "KUA Marriage",
        icon: "marriage",
        cta: "Apostille Buku Nikah"
      },
      {
        title: "Civil Marriage Certificate",
        text:
          "For official civil marriage certificates requiring Apostille or Embassy stamps.",
        href: "#konsultasi",
        badge: "Catatan Sipil",
        icon: "apostille",
        cta: "Apostille Certificate"
      },
      {
        title: "Sworn Translation Service",
        text:
          "Official translation into English, German, French, Dutch, or 25+ other languages.",
        href: "/en/sworn-translator-jakarta/",
        badge: "Sworn Translator",
        icon: "translation",
        cta: "Translate Document"
      }
    ],
    trustTitle: "Peace of Mind for Important Family Clearances",
    trustLead:
      "Marriage documents involve tight visa deadlines. We provide clear steps right from your initial WhatsApp inquiry.",
    trustItems: [
      ["Country-Specific Guidance", "Routes tailored to Hague Apostille or Embassy requirements."],
      ["Translation Check", "Language compliance reviewed prior to legalization."],
      ["Remote Processing", "Start with document photos via WhatsApp from anywhere."],
      ["Transparent Turnaround", "Clear estimates on duration and costs."]
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
        "Can Indonesian Buku Nikah be apostilled?",
        "Yes, Buku Nikah from KUA can be processed for Apostille or Embassy legalization."
      ],
      [
        "Do I need sworn translation?",
        "Most overseas authorities require English or native language translations. We review this for you."
      ],
      [
        "Can I start remotely?",
        "Yes. Send document photos via WhatsApp for an immediate assessment."
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
    eyebrow: "Certified Translation Services",
    h1: "Sworn Translator Jakarta - Official & Accredited.",
    lead:
      "Send photos of your Indonesian documents to check translation requirements for visas, university admission, immigration, or legal contracts.",
    primaryCta: "Check Translation Rate",
    secondaryCta: "WhatsApp Consultation",
    defaultMessage:
      "Hello GOApostille, I need a sworn translation review for my document.",
    appTitle: "Sworn Translate",
    appLead: "Official translation for personal, academic, and business documents.",
    stats: [
      ["Official", "translation"],
      ["Remote", "review"],
      ["WhatsApp", "estimate"]
    ],
    servicesTitle: "Documents We Translate",
    servicesLead:
      "We provide certified sworn translations accepted by Embassies, Ministries, and International Universities.",
    services: [
      {
        title: "Academic & Diplomas",
        text:
          "Diplomas, transcripts, graduation certificates for university admissions and credential evaluation.",
        href: "#konsultasi",
        badge: "Academic",
        icon: "translation",
        cta: "Translate Diploma"
      },
      {
        title: "Civil & Personal Records",
        text:
          "Passports, birth certificates, marriage certificates, and police records (SKCK).",
        href: "#konsultasi",
        badge: "Personal",
        icon: "shield",
        cta: "Translate Certificate"
      },
      {
        title: "Legal & Contracts",
        text:
          "Company articles, agreements, corporate contracts, and court documents.",
        href: "#konsultasi",
        badge: "Corporate",
        icon: "building",
        cta: "Translate Contract"
      }
    ],
    trustTitle: "Accredited & Globally Recognized",
    trustLead:
      "All translations are performed by sworn translators appointed by the government with official stamps.",
    trustItems: [
      ["Accurate Page-Based Pricing", "Cost calculated transparently after document review."],
      ["Purpose-Driven Formatting", "Formatted specifically for Embassy or University standards."],
      ["Express Turnaround", "Priority 1-day processing available upon request."],
      ["Apostille Integration", "Direct transition to Apostille after translation."]
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
        "How much does a sworn translation cost?",
        "Pricing depends on the target language, page count, and complexity. Send your document on WhatsApp for a quick quote."
      ],
      [
        "Is express translation available?",
        "Yes, express same-day or 1-day turnaround is available for urgent deadlines."
      ],
      [
        "Can I get Apostille after translation?",
        "Yes, we offer complete end-to-end packages from translation to Apostille certification."
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
    eyebrow: "Study & Work Abroad",
    h1: "Indonesian Diploma & Academic Transcript Apostille.",
    lead:
      "Prepare your Indonesian academic documents for overseas study, scholarships, credential evaluations (WES), or global work visas.",
    primaryCta: "Review Education Document",
    secondaryCta: "WhatsApp Consultation",
    defaultMessage:
      "Hello GOApostille, I need a review for education document apostille or legalization.",
    appTitle: "Edu Docs",
    appLead: "Diploma, degree certificate, and academic transcript.",
    stats: [
      ["Diploma", "review"],
      ["Transcript", "check"],
      ["Global", "use"]
    ],
    servicesTitle: "Academic Documents We Handle",
    servicesLead:
      "Full assistance for Indonesian high school, bachelor, master, and doctoral degree documents.",
    services: [
      {
        title: "Diploma & Degree Certificate",
        text:
          "Apostille for Indonesian high school diplomas, S1, S2, and S3 degree certificates.",
        href: "#konsultasi",
        badge: "Degree",
        icon: "education",
        cta: "Apostille Diploma"
      },
      {
        title: "Academic Transcript",
        text:
          "Apostille and legalization for official course grades and transcripts.",
        href: "#konsultasi",
        badge: "Transcript",
        icon: "apostille",
        cta: "Apostille Transcript"
      },
      {
        title: "Sworn Translation Package",
        text:
          "Official sworn translation into English, German, Japanese, etc., prior to Apostille.",
        href: "/en/sworn-translator-jakarta/",
        badge: "Sworn Translator",
        icon: "translation",
        cta: "Translate & Apostille"
      }
    ],
    trustTitle: "Seamless Process for Students & Professionals",
    trustLead:
      "Save time and avoid rejection from overseas admissions or HR departments.",
    trustItems: [
      ["Direct WhatsApp Review", "Send photos of your diploma for an instant check."],
      ["Verified Kemenkumham Route", "100% official Apostille certificates."],
      ["Recognized Worldwide", "Accepted by universities, WES, and global employers."],
      ["Fast Track Available", "Priority processing within 1-2 business days."]
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
        "Can high school diplomas be apostilled?",
        "Yes, high school (SMA/SMK) diplomas can be apostilled for study abroad."
      ],
      [
        "Is translation required before Apostille?",
        "If your diploma is only in Indonesian, most foreign universities require a sworn English translation."
      ],
      [
        "How long does education apostille take?",
        "Standard processing takes 3-5 business days. Express processing (1-2 days) is also available."
      ]
    ],
    schemaType: "ProfessionalService"
  }
];

const nav = [
  ["Layanan", "#layanan"],
  ["Alur Kerja", "#alur"],
  ["Keunggulan", "#kepercayaan"],
  ["Ulasan", "#testimoni"],
  ["FAQ", "#faq"],
  ["English", "/en/"]
];
const navEn = [
  ["Services", "#layanan"],
  ["Workflow", "#alur"],
  ["Benefits", "#kepercayaan"],
  ["Reviews", "#testimoni"],
  ["FAQ", "#faq"],
  ["Indonesia", "/"]
];

const workflow = [
  ["Kirim Foto Dokumen", "Cukup foto dokumen Anda dengan jelas dan kirimkan via WhatsApp untuk pemeriksaan awal tanpa biaya."],
  ["Analisis & Rencana Jalur", "Tim ahli memetakan apakah Anda membutuhkan Apostille, Legalisasi Kemenlu/Kedutaan, atau Penerjemah Tersumpah."],
  ["Penawaran Transparan", "Anda mendapatkan rincian estimasi biaya resmi, durasi pengerjaan, dan instruksi penyerahan dokumen asli."],
  ["Proses & Pengiriman", "Dokumen diproses ke kementerian/kedutaan. Update status dikirim berkala dan dokumen siap diantar kembali."]
];
const workflowEn = [
  ["Send Document Photo", "Take a clear photo of your document and send it via WhatsApp for a complimentary review."],
  ["Review & Service Route", "Our team checks whether you need Apostille, Ministry/Embassy Legalization, or Sworn Translation."],
  ["Transparent Quote", "Receive a clear breakdown of estimated official fees, processing time, and delivery instructions."],
  ["Processing & Dispatch", "We process your document with authorities. Status updates are sent regularly via WhatsApp."]
];
const testimonials = [
  ["Rina P.", "Jakarta Selatan", "Dokumen nikah campuran saya dan suami untuk dibawa ke Jerman dibantu dengan sangat profesional. Dari penerjemah tersumpah sampai stempel Apostille Kemenkumham selesai tepat waktu!"],
  ["Aditya M.", "Bandung", "Pengurusan Apostille Ijazah S1 & Transkrip Nilai untuk Beasiswa ke Belanda sangat cepat. Fast response via WhatsApp dan tidak ada biaya tersembunyi. Recomended!"],
  ["Suryadi L.", "Surabaya", "Perusahaan kami butuh legalisasi dokumen perjanjian bisnis ke Kedutaan Qatar. Tim GOApostille menangani alur Kemenlu dan Kedutaan dengan rapi dan terstruktur."]
];
const testimonialsEn = [
  ["Sarah M.", "Jakarta", "The team reviewed my Indonesian marriage document quickly and explained what needed translation and apostille."],
  ["David K.", "Singapore", "Clear WhatsApp guidance for diploma apostille. I knew the next step before sending the original document."],
  ["Nathan R.", "Australia", "Fast response, simple process, and helpful explanation for overseas document requirements."]
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

function iconSvg(type) {
  const icons = {
    marriage: '<svg viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" stroke-width="2"/></svg>',
    education: '<svg viewBox="0 0 24 24" fill="none"><path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" stroke-width="2"/><path d="M6 12v5c3 3 9 3 12 0v-5" stroke="currentColor" stroke-width="2"/></svg>',
    translation: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 8h14M5 12h14M5 16h10" stroke="currentColor" stroke-width="2"/></svg>',
    apostille: '<svg viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="2"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" stroke-width="2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" stroke-width="2"/></svg>',
    building: '<svg viewBox="0 0 24 24" fill="none"><path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" stroke="currentColor" stroke-width="2"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" stroke="currentColor" stroke-width="2"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };
  return icons[type] || icons.apostille;
}

function header(page) {
  const navItems = page.lang === "en" ? navEn : nav;
  const isEn = page.lang === "en";
  const links = navItems
    .map(([label, href]) => `<a href="${href}">${label}</a>`)
    .join("");

  return `
    <a class="skip-link" href="#content">Lewati ke konten</a>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/">
          <span class="brand-mark">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3h7l4 4v14H7V3Z"/>
              <path d="M14 3v5h4"/>
              <path d="m9.4 14 1.8 1.9 4-4.3"/>
              <path d="M9 19h6"/>
            </svg>
          </span>
          <div class="brand-text">
            <span class="brand-title">GO<span>Apostille</span></span>
            <span class="brand-subtitle">Official Document Desk</span>
          </div>
        </a>
        <nav class="desktop-nav" aria-label="Navigasi utama">${links}</nav>
        <div class="nav-actions">
          <a class="phone-header-link" href="tel:${adminPrimary.tel}">${adminPrimary.display}</a>
          <a class="btn-header-wa" href="${waUrl(page.defaultMessage)}" target="_blank" rel="noopener">
            ${iconSvg("chat")}
            ${isEn ? "WhatsApp Review" : "Review WhatsApp"}
          </a>
          <button class="menu-toggle" type="button" aria-label="Buka menu" aria-expanded="false" data-menu-toggle>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="mobile-menu" aria-label="Menu mobile" data-mobile-menu>
        ${links}
        <a class="cta-drawer" href="${waUrl(page.defaultMessage)}" target="_blank" rel="noopener">
          💬 ${isEn ? "Chat WhatsApp Now" : "Chat WhatsApp Langsung"}
        </a>
      </nav>
    </header>`;
}

function reviewForm(page) {
  const isEn = page.lang === "en";
  return `
    <form class="cro-form" data-wa-form>
      <div class="form-group">
        <label for="name">${isEn ? "Full Name" : "Nama Lengkap"}</label>
        <input class="form-input" id="name" name="name" type="text" placeholder="${isEn ? "Your name" : "Masukkan nama Anda"}" required>
      </div>
      <div class="form-group">
        <label for="service">${isEn ? "Main Service" : "Layanan Utama"}</label>
        <select class="form-select" id="service" name="service">
          <option value="apostille">${isEn ? "Apostille Kemenkumham (Hague Convention)" : "Apostille Kemenkumham (Hague Convention)"}</option>
          <option value="legalization">${isEn ? "Ministry & Embassy Legalization" : "Legalisasi Kemenlu & Kedutaan Besar"}</option>
          <option value="translation">${isEn ? "Sworn Translator (Official Translation)" : "Penerjemah Tersumpah (Sworn Translator)"}</option>
          <option value="education">${isEn ? "Education Document Apostille" : "Apostille Dokumen Pendidikan (Ijazah/Transkrip)"}</option>
          <option value="marriage">${isEn ? "Marriage & Civil Record Apostille" : "Apostille Dokumen Pernikahan / Keluarga"}</option>
          <option value="express">${isEn ? "Express Service (1-2 Working Days)" : "Layanan Express Prioritas 1-2 Hari Kerja"}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="document">${isEn ? "Document Type & Target Country" : "Jenis Dokumen & Negara Tujuan"}</label>
        <input class="form-input" id="document" name="document" type="text" placeholder="${isEn ? "e.g. Diploma to Germany / Marriage Book to UAE" : "Contoh: Ijazah S1 ke Jerman / Buku Nikah ke UEA"}">
      </div>
      <div class="form-group">
        <label for="need">${isEn ? "Notes / Target Deadline (Optional)" : "Catatan / Tenggat Waktu (Opsional)"}</label>
        <textarea class="form-textarea" id="need" name="need" placeholder="${isEn ? "State destination country or timeline..." : "Tuliskan jika ada kebutuhan khusus atau deadline tertentu"}"></textarea>
      </div>
      <button class="btn-submit-wa" type="submit">
        ${iconSvg("chat")}
        ${isEn ? "Consult via WhatsApp Now" : "Konsultasi WhatsApp Sekarang"}
      </button>
      <div class="form-guarantee">
        ${iconSvg("shield")}
        ${isEn ? "100% confidential & free initial review" : "Kerahasiaan dokumen 100% terjamin aman & tidak perlu bayar dimuka"}
      </div>
    </form>`;
}

function hero(page) {
  const isEn = page.lang === "en";
  const trustBullets = isEn
    ? ["100% Free Initial Review", "Official Ministry Guarantee", "Real-Time WhatsApp Updates", "Express 1-2 Day Option"]
    : ["Pemeriksaan Awal 100% Gratis", "Garansi Resmi Kemenkumham & Kemenlu", "Update Progres Real-Time via WhatsApp", "Opsi Express Prioritas 1-2 Hari Kerja"];

  const authorityItems = isEn
    ? [
        ["ISO 9001:2015 Aligned", "Quality Document Process"],
        ["Kemenkumham Decree", "Hague Apostille Certified"],
        ["Registered Kemenlu", "International Legalization"],
        ["50+ Foreign Embassies", "Connected in Jakarta"]
      ]
    : [
        ["Standar ISO 9001:2015", "Manajemen Mutu Dokumen"],
        ["SK Kemenkumham RI", "Apostille Konvensi Hague"],
        ["Terdaftar Kemenlu RI", "Legalisasi Lintas Negara"],
        ["50+ Kedutaan Asing", "Terhubung di Jakarta"]
      ];

  const authorityHtml = authorityItems
    .map(
      ([title, desc]) => `
        <div class="authority-item">
          <div class="authority-icon">${iconSvg("shield")}</div>
          <div class="authority-text">
            <strong>${escapeHtml(title)}</strong>
            <span>${escapeHtml(desc)}</span>
          </div>
        </div>`
    )
    .join("");

  return `
    <section class="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-glow-secondary" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="kicker">
            <span class="pulse-dot"></span>
            ${escapeHtml(page.eyebrow)}
          </div>
          <h1>${escapeHtml(page.h1)}</h1>
          <p class="lead">${escapeHtml(page.lead)}</p>

          <div class="pill-selector-title">${isEn ? "Select document type for instant assessment:" : "Pilih jenis dokumen Anda untuk estimasi instan:"}</div>
          <div class="pill-container">
            <button class="doc-pill active" type="button" data-doc="Ijazah & Transkrip Nilai" data-service="education">
              ${iconSvg("education")}
              ${isEn ? "Education / Diploma" : "Apostille Ijazah / Beasiswa"}
            </button>
            <button class="doc-pill" type="button" data-doc="Buku Nikah / Akta Perkawinan" data-service="marriage">
              ${iconSvg("marriage")}
              ${isEn ? "Marriage Document" : "Apostille Dokumen Nikah"}
            </button>
            <button class="doc-pill" type="button" data-doc="Akta Lahir / KK / KTP" data-service="apostille">
              ${iconSvg("apostille")}
              ${isEn ? "Personal Civil Record" : "Apostille Dokumen Pribadi"}
            </button>
            <button class="doc-pill" type="button" data-doc="Dokumen Perusahaan / Kontrak Bisnis" data-service="legalization">
              ${iconSvg("building")}
              ${isEn ? "Business Legalization" : "Legalisasi Bisnis / Kemenlu"}
            </button>
            <button class="doc-pill" type="button" data-doc="Dokumen Perlu Terjemahan Tersumpah" data-service="translation">
              ${iconSvg("translation")}
              ${isEn ? "Sworn Translator" : "Penerjemah Tersumpah"}
            </button>
          </div>

          <ul class="hero-trust-list">
            ${trustBullets.map((item) => `<li>${iconSvg("check")}${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>

        <aside class="hero-form-card">
          <div class="form-header">
            <span class="form-badge">⚡ ${isEn ? "Fast Response < 5 Mins" : "Response Cepat < 5 Menit"}</span>
            <h2>${isEn ? "Free Document Review" : "Pemeriksaan Dokumen Gratis"}</h2>
            <p>${isEn ? "Fill out this quick form to connect directly with our WhatsApp admin." : "Isi formulir singkat ini untuk langsung terhubung dengan Admin WhatsApp resmi kami."}</p>
          </div>
          ${reviewForm(page)}
        </aside>
      </div>

      <div class="container authority-bar">
        <div class="authority-title">${isEn ? "Official Legalization & Compliance Accreditation:" : "Jaminan Penanganan Legalisasi Resmi & Terdaftar:"}</div>
        <div class="authority-grid">${authorityHtml}</div>
      </div>
    </section>`;
}

function services(page) {
  const isEn = page.lang === "en";
  const cards = page.services
    .map((service) => {
      const isExpress = service.title.toLowerCase().includes("express");
      return `
        <article class="service-card ${isExpress ? "express-card" : ""}">
          <div class="service-card-top">
            <div class="service-icon-box" ${isExpress ? 'style="background: rgba(37, 211, 102, 0.2); color: #25D366;"' : ''}>
              ${iconSvg(service.icon || "apostille")}
            </div>
            ${service.badge ? `<span class="service-badge" ${isExpress ? 'style="background: var(--wa-green); color: #000;"' : ''}>${escapeHtml(service.badge)}</span>` : ""}
          </div>
          <h3>${escapeHtml(service.title)}</h3>
          <p>${escapeHtml(service.text)}</p>
          <div class="service-card-action">
            <a class="btn-card-wa" href="${waUrl(`${isEn ? "Hello GOApostille.com, I want to consult about" : "Halo GOApostille.com, saya ingin konsultasi"} ${service.title}.`)}" target="_blank" rel="noopener" ${isExpress ? 'style="color: #ffffff;"' : ''}>
              ${escapeHtml(service.cta || (isEn ? "Consult Now" : "Konsultasi Layanan"))} <span>→</span>
            </a>
          </div>
        </article>`;
    })
    .join("");

  return `
    <section class="section-padding" id="layanan">
      <div class="container">
        <div class="section-head">
          <div class="kicker">${isEn ? "Our Main Services" : "Layanan Utama Kami"}</div>
          <h2>${escapeHtml(page.servicesTitle)}</h2>
          <p>${escapeHtml(page.servicesLead)}</p>
        </div>
        <div class="services-grid">${cards}</div>
      </div>
    </section>`;
}

function processSection(page) {
  const isEn = page.lang === "en";
  const items = (isEn ? workflowEn : workflow)
    .map(
      ([title, text], idx) => `
        <div class="process-card">
          <div class="process-step-num">0${idx + 1}</div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </div>`
    )
    .join("");

  return `
    <section class="section-padding process-section" id="alur">
      <div class="container">
        <div class="section-head">
          <div class="kicker">${isEn ? "Quick Workflow" : "Alur Kerja Cepat"}</div>
          <h2>${isEn ? "4 Simple Steps to Get Your Documents Processed" : "4 Langkah Mudah Pengurusan Dokumen Anda"}</h2>
          <p>${isEn ? "No administrative hassle. Follow these simple steps from home." : "Anda tidak perlu bingung menentukan prosedur administrasi. Cukup ikuti tahapan praktis berikut dari rumah Anda."}</p>
        </div>
        <div class="process-grid">${items}</div>
      </div>
    </section>`;
}

function trust(page) {
  const isEn = page.lang === "en";
  const quoteItems = (isEn ? testimonialsEn : testimonials)
    .map(
      ([name, city, text]) => `
        <article class="testimonial-card">
          <div>
            <div class="stars">★★★★★</div>
            <p>"${escapeHtml(text)}"</p>
          </div>
          <div class="testimonial-author">
            <strong>${escapeHtml(name)}</strong>
            <span>${escapeHtml(city)}</span>
          </div>
        </article>`
    )
    .join("");

  return `
    <section class="section-padding proof-section" id="kepercayaan">
      <div class="container">
        <div class="proof-grid">
          <div class="proof-highlight-card">
            <div>
              <div class="kicker">${isEn ? "Client Trust" : "Kepercayaan Klien"}</div>
              <div class="rating-badge">
                <div class="rating-score">5.0</div>
                <div>
                  <div class="rating-stars">★★★★★</div>
                  <div class="rating-count">${isEn ? "Based on 500+ Satisfied Clients" : "Berdasarkan 500+ Ulasan Puas"}</div>
                </div>
              </div>
              <p>${escapeHtml(page.trustLead)}</p>
            </div>
            <a class="btn-submit-wa" href="${waUrl(isEn ? "Hello GOApostille, I want a WhatsApp document consultation." : "Halo GOApostille, saya ingin konsultasi via WhatsApp.")}" target="_blank" rel="noopener">
              ${isEn ? "WhatsApp Consultation Now" : "Konsultasi WhatsApp Sekarang"}
            </a>
          </div>

          <div class="maps-card">
            <div class="kicker">${isEn ? "Official Office Location" : "Lokasi Kantor Resmi"}</div>
            <h3>${isEn ? "Based in Jakarta Financial District, Serving Worldwide" : "Berbasis di Jakarta Pusat Bisnis, Melayani Seluruh Indonesia & Mancanegara"}</h3>
            <p>${isEn ? "Consultation starts online via WhatsApp. When physical documents are required, send via courier to our Jakarta office." : "Konsultasi awal bisa dimulai dari mana saja secara online. Bila dokumen fisik diperlukan, kantor pusat kami berlokasi di area strategis Kuningan, Jakarta Selatan."}</p>
            <div class="office-info">
              <strong>${officeAddress.company} (GOApostille.com)</strong>
              <address>
                ${officeAddress.line1}, ${officeAddress.line2}, ${officeAddress.line3}
              </address>
            </div>
            <a class="btn-card-wa" href="${googleMapsUrl}" target="_blank" rel="noopener">
              📍 ${isEn ? "Open Google Maps" : "Lihat di Google Maps"} <span>→</span>
            </a>
          </div>
        </div>

        <div class="section-head" id="testimoni" style="margin-bottom: 2rem;">
          <div class="kicker">${isEn ? "Verified Feedback" : "Pengalaman Klien"}</div>
          <h2>${isEn ? "What Our Clients Say About Us" : "Apa Kata Mereka yang Sudah Menggunakan Jasa Kami?"}</h2>
        </div>
        <div class="testimonial-grid">${quoteItems}</div>
      </div>
    </section>`;
}

function cta(page) {
  const isEn = page.lang === "en";
  return `
    <section class="section-padding">
      <div class="container">
        <div class="cta-banner">
          <div class="kicker">${isEn ? "Risk-Free Consultation" : "Konsultasi Tanpa Risiko"}</div>
          <h2>${isEn ? "Unsure Which Route Your Document Needs?" : "Masih Ragu Jalur Mana yang Tepat Untuk Dokumen Anda?"}</h2>
          <p>${isEn ? "Send your document photo for an immediate assessment via WhatsApp." : "Jangan biarkan dokumen Anda tertahan atau ditolak di luar negeri. Kirimkan foto dokumen Anda sekarang untuk kami periksa secara gratis via WhatsApp."}</p>
          <div class="cta-actions">
            <a class="btn-cta-primary" href="${waUrl(page.defaultMessage)}" target="_blank" rel="noopener">
              ${iconSvg("chat")}
              ${isEn ? "Chat WhatsApp Admin Now" : "Chat Admin WhatsApp Sekarang"}
            </a>
            <a class="btn-cta-secondary" href="tel:${adminPrimary.tel}">
              📞 ${isEn ? "Direct Phone:" : "Telepon Direct:"} ${adminPrimary.display}
            </a>
          </div>
        </div>
      </div>
    </section>`;
}

function faq(page) {
  const isEn = page.lang === "en";
  const items = page.faq
    .map(
      ([question, answer], idx) => `
        <details class="faq-item" ${idx === 0 ? "open" : ""}>
          <summary>${escapeHtml(question)}</summary>
          <p>${escapeHtml(answer)}</p>
        </details>`
    )
    .join("");

  return `
    <section class="section-padding" id="faq" style="background: var(--primary-navy-surface); border-top: 1px solid var(--border-light);">
      <div class="container">
        <div class="section-head">
          <div class="kicker">FAQ</div>
          <h2>${isEn ? "Frequently Asked Questions" : "Segala Hal yang Sering Ditanyakan Sebelum Konsultasi"}</h2>
        </div>
        <div class="faq-container">${items}</div>
      </div>
    </section>`;
}

function footer(page) {
  const isEn = page.lang === "en";
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <h3>GOApostille.com</h3>
            <p>${isEn ? "Indonesia official document service for Apostille, Ministry Legalization, and Sworn Translation." : "Platform pengurusan dokumen lintas negara terpercaya di Indonesia. Menyediakan layanan Apostille Kemenkumham, Legalisasi Kemenlu & Kedutaan, serta Penerjemah Tersumpah resmi."}</p>
          </div>
          <div class="footer-col">
            <h4>${isEn ? "Services" : "Layanan Utama"}</h4>
            <ul class="footer-links">
              <li><a href="#layanan">Apostille Kemenkumham</a></li>
              <li><a href="#layanan">Penerjemah Tersumpah</a></li>
              <li><a href="#layanan">Legalisasi Kemenlu & Kedutaan</a></li>
              <li><a href="#layanan">Dokumen Pendidikan</a></li>
              <li><a href="#layanan">Dokumen Pernikahan</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${isEn ? "Official Contacts" : "Kontak Resmi"}</h4>
            <ul class="footer-links">
              <li><a href="https://wa.me/${adminPrimary.wa}" target="_blank" rel="noopener">Admin 1: ${adminPrimary.display} (WA)</a></li>
              <li><a href="https://wa.me/${adminSecondary.wa}" target="_blank" rel="noopener">Admin 2: ${adminSecondary.display} (WA)</a></li>
              <li><a href="tel:${adminPrimary.tel}">Phone: ${adminPrimary.display}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${isEn ? "Office Address" : "Alamat Kantor"}</h4>
            <p><strong>${officeAddress.company}</strong><br>
            ${officeAddress.line1}<br>
            ${officeAddress.line2}<br>
            ${officeAddress.line3}</p>
          </div>
        </div>
        <div class="footer-bottom">
          <div>&copy; 2026 GOApostille.com. ${isEn ? "All rights reserved." : "Hak Cipta Dilindungi Undang-Undang."}</div>
          <div>${isEn ? "Trusted Official Document Desk in Indonesia" : "Layanan Dokumen Resmi & Terpercaya di Indonesia"}</div>
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
    telephone: adminPrimary.tel,
    contactPoint: [
      {
        "@type": "ContactPoint",
        name: "Admin 1",
        telephone: adminPrimary.tel,
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"]
      },
      {
        "@type": "ContactPoint",
        name: "Admin 2",
        telephone: adminSecondary.tel,
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${officeAddress.line1}, ${officeAddress.line2}`,
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "12940",
      addressCountry: "ID"
    },
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
    <meta name="theme-color" content="#0b132b">
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
      ${services(page)}
      ${processSection(page)}
      ${trust(page)}
      ${cta(page)}
      ${faq(page)}
    </main>
    ${footer(page)}

    <!-- Mobile Bottom CRO Bar -->
    <div class="mobile-bottom-bar" aria-label="Navigasi Akses Cepat Mobile">
      <div class="bottom-bar-info">
        <strong>${page.lang === "en" ? "Free Document Review" : "Pemeriksaan Dokumen Gratis"}</strong>
        <span>🟢 ${page.lang === "en" ? "Admin Online via WhatsApp" : "Admin Online via WhatsApp"}</span>
      </div>
      <a class="btn-bottom-wa" href="${waUrl(page.defaultMessage)}" target="_blank" rel="noopener">
        ${iconSvg("chat")}
        Chat WA
      </a>
    </div>

    <!-- Floating WA Desktop -->
    <a class="floating-wa-btn" href="${waUrl(page.defaultMessage)}" target="_blank" rel="noopener" aria-label="WhatsApp">
      <span class="floating-wa-tooltip">${page.lang === "en" ? "Free WhatsApp Consultation" : "Konsultasi Gratis via WhatsApp"}</span>
      ${iconSvg("chat")}
    </a>

    <!-- Social Proof Toast -->
    <div class="proof-toast" data-proof-toast aria-live="polite">
      <div class="proof-toast-avatar">✓</div>
      <div class="proof-toast-content">
        <strong data-proof-name>Fatimah Z.</strong>
        <small data-proof-action>baru mengirim dokumen untuk pemeriksaan awal</small>
      </div>
    </div>

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
