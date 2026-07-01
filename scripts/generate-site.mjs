import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = "https://www.goapostille.com";
const phone = "62817322271";
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
      "Layanan apostille, legalisasi dokumen, dan penerjemah tersumpah untuk kebutuhan luar negeri. Pemeriksaan awal dokumen melalui WhatsApp.",
    keywords:
      "jasa apostille, apostille kemenkumham, legalisasi dokumen, penerjemah tersumpah jakarta, legalisasi buku nikah, apostille ijazah",
    eyebrow: "Platform dokumen lintas negara",
    h1: "Apostille, legalisasi, dan penerjemah tersumpah untuk kebutuhan luar negeri.",
    lead:
      "Tim kami membantu memeriksa dokumen, menentukan jalur pengesahan yang sesuai, dan memberi pembaruan proses melalui WhatsApp sebelum dokumen asli dikirimkan.",
    primaryCta: "Konsultasi via WhatsApp",
    secondaryCta: "Lihat layanan",
    defaultMessage:
      "Halo GOApostille, saya ingin konsultasi dan pemeriksaan awal dokumen untuk apostille/legalisasi/terjemahan tersumpah.",
    appTitle: "GOApostille",
    appLead: "Checklist dokumen, estimasi, dan konsultasi dalam satu alur.",
    stats: [
      ["Tanpa biaya", "konsultasi awal"],
      ["Dokumen diperiksa", "sebelum proses"],
      ["WhatsApp", "pembaruan status"]
    ],
    servicesTitle: "Solusi Lengkap Dokumen Resmi Internasional Anda",
    servicesLead:
      "Dari penerjemahan tersumpah hingga apostille, legalisasi Kemenlu, dan legalisasi kedutaan. Semua ditangani tim profesional berpengalaman dengan alur yang jelas sejak pemeriksaan awal.",
    services: [
      {
        title: "Penerjemah Tersumpah",
        text:
          "Terjemahan dokumen resmi oleh penerjemah tersumpah yang diakui pemerintah. Tersedia untuk dokumen pribadi, pendidikan, bisnis, dan kebutuhan imigrasi dalam lebih dari 25 bahasa.",
        href: "/jasa-penerjemah-tersumpah/",
        badge: "25+ Bahasa",
        icon: "translation",
        cta: "Jasa penerjemah tersumpah"
      },
      {
        title: "Apostille Kemenkumham",
        text:
          "Pengesahan dokumen sesuai Konvensi Hague 1961 untuk penggunaan di negara anggota apostille. Cocok untuk dokumen pernikahan, pendidikan, perusahaan, dan administrasi luar negeri.",
        href: "/apostille-dokumen-pernikahan/",
        badge: "Paling Populer",
        icon: "apostille",
        cta: "Apostille dokumen pernikahan"
      },
      {
        title: "Legalisasi Kemenlu",
        text:
          "Legalisasi resmi Kementerian Luar Negeri RI untuk dokumen yang akan digunakan di luar negeri, terutama jika negara tujuan belum menerima apostille.",
        href: "#konsultasi",
        badge: "Resmi Pemerintah",
        icon: "globe",
        cta: "Konsultasi legalisasi"
      },
      {
        title: "Legalisasi Kedutaan",
        text:
          "Pengurusan legalisasi di kedutaan besar dan konsulat negara tujuan di Jakarta. Tim membantu menyesuaikan persyaratan agar Anda tidak perlu mengurus antrean sendiri.",
        href: "#konsultasi",
        badge: "50+ Negara",
        icon: "building",
        cta: "Cek syarat kedutaan"
      },
      {
        title: "Dokumen Pendidikan",
        text:
          "Ijazah, transkrip nilai, diploma, dan sertifikat akademik untuk beasiswa, kuliah, kerja, penyetaraan, maupun migrasi ke luar negeri.",
        href: "/apostille-dokumen-pendidikan/",
        badge: "Beasiswa & Studi",
        icon: "education",
        cta: "Apostille dokumen pendidikan"
      },
      {
        title: "Layanan Express",
        text:
          "Untuk kebutuhan dengan tenggat ketat, tim dapat memeriksa opsi layanan prioritas 1-2 hari kerja sesuai jenis dokumen, antrean instansi, dan negara tujuan.",
        href: "#konsultasi",
        badge: "1-2 Hari Kerja",
        icon: "bolt",
        cta: "Cek layanan express"
      }
    ],
    trustTitle: "Mengapa prosesnya terasa lebih mudah?",
    trustLead:
      "Setiap negara punya syarat berbeda untuk dokumen yang akan digunakan di luar negeri. Karena itu, GOApostille memulai dari pemeriksaan awal dokumen — bukan dari pembayaran di muka.",
    trustItems: [
      ["Pemeriksaan awal tanpa biaya", "Kirim foto dokumen lebih dulu sebelum melanjutkan proses."],
      ["Estimasi yang jelas", "Anda mendapat arahan layanan, durasi, dan kelengkapan dokumen sejak awal."],
      ["Bisa diurus jarak jauh", "Konsultasi dan pengiriman dokumen dapat dilakukan dari mana saja melalui WhatsApp."],
      ["Fokus kebutuhan luar negeri", "Arahan disesuaikan untuk visa, studi, kerja, pernikahan, dan urusan bisnis internasional."]
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
        "Bisa konsultasi sebelum mengirim dokumen?",
        "Bisa. GOApostille menyarankan pemeriksaan awal melalui WhatsApp agar kebutuhan layanan lebih jelas sebelum proses dimulai."
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
      "Jasa apostille dokumen pernikahan untuk legalisasi buku nikah, akta nikah, surat nikah, dan marriage certificate. Pemeriksaan awal melalui WhatsApp.",
    keywords:
      "legalisasi buku nikah, legalisasi akta nikah, apostille buku nikah, legalisasi dokumen pernikahan, apostille dokumen pernikahan, apostille marriage certificate, apostille marriage document, apostille surat nikah, jasa apostille akta nikah, legalisasi akta nikah untuk luar negeri",
    eyebrow: "Dokumen pernikahan luar negeri",
    h1: "Apostille dokumen pernikahan dengan alur yang jelas.",
    lead:
      "Kirim foto buku nikah, akta nikah, atau surat nikah. GOApostille membantu memeriksa apakah dokumen memerlukan terjemahan tersumpah, apostille Kemenkumham, legalisasi tambahan, atau dokumen pendukung untuk negara tujuan.",
    primaryCta: "Periksa dokumen pernikahan",
    secondaryCta: "Lihat alur",
    defaultMessage:
      "Halo GOApostille, saya ingin pemeriksaan awal untuk apostille/legalisasi dokumen pernikahan.",
    appTitle: "Marriage Doc",
    appLead: "Buku nikah, akta nikah, surat nikah, dan marriage certificate.",
    stats: [
      ["Tanpa biaya", "pemeriksaan awal"],
      ["WhatsApp", "alur jelas"],
      ["Luar negeri", "siap pakai"]
    ],
    servicesTitle: "Dokumen pernikahan yang sering diproses",
    servicesLead:
      "Setiap dokumen pernikahan bisa memiliki jalur berbeda. Tim akan memeriksa jenis dokumen, bahasa, dan negara tujuan sebelum memberi estimasi proses.",
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
      "Dokumen pernikahan sering berkaitan dengan visa pasangan, kepindahan domisili, atau pencatatan sipil di luar negeri. Karena itu proses dimulai dari pemeriksaan dokumen, bukan dari pembayaran di muka.",
    trustItems: [
      ["Pemeriksaan dokumen awal", "Tim melihat jenis dokumen dan kondisi file dari foto."],
      ["Arahan negara tujuan", "Kebutuhan bisa berbeda antara negara apostille dan non-apostille."],
      ["Bahasa dokumen diperiksa", "Jika butuh terjemahan tersumpah, alurnya disiapkan sejak awal."],
      ["Pembaruan via WhatsApp", "Klien dapat memantau informasi proses tanpa harus menunggu balasan email."]
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
        "Bisa diarahkan sesuai kebutuhan negara tujuan. Tim akan memeriksa apakah dokumen memerlukan legalisasi, terjemahan tersumpah, apostille, atau dokumen pendukung."
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
    primaryCta: "Periksa dokumen pendidikan",
    secondaryCta: "Periksa dokumen",
    defaultMessage:
      "Halo GOApostille, saya ingin pemeriksaan awal untuk apostille/legalisasi ijazah atau dokumen pendidikan.",
    appTitle: "Edu Apostille",
    appLead: "Ijazah, transkrip nilai, diploma, dan degree certificate.",
    stats: [
      ["Ijazah", "SMA/D3/S1+"],
      ["Transkrip", "nilai akademik"],
      ["Global", "studi/kerja"]
    ],
    servicesTitle: "Kebutuhan pendidikan yang bisa dibantu",
    servicesLead:
      "Pengesahan ijazah, transkrip nilai, diploma, degree certificate, dan academic transcript dapat diperiksa berdasarkan tujuan studi, kerja, credential evaluation, atau migrasi.",
    services: [
      {
        title: "Apostille ijazah",
        text:
          "Untuk legalisasi ijazah dan apostille ijazah SMA, diploma, sarjana, magister, atau dokumen akademik lain yang akan dipakai untuk kampus, visa, atau pekerjaan luar negeri.",
        href: "#konsultasi"
      },
      {
        title: "Legalisasi transkrip nilai",
        text:
          "Transkrip nilai dan academic transcript dapat diperiksa untuk kebutuhan apostille, legalisasi, atau terjemahan tersumpah."
      },
      {
        title: "Apostille degree certificate",
        text:
          "Bantuan untuk diploma, degree certificate, dan dokumen pendidikan berbahasa Inggris yang perlu pengesahan resmi."
      }
    ],
    trustTitle: "Lebih mudah untuk pelajar, profesional, dan keluarga",
    trustLead:
      "Halaman ini membantu calon klien memahami dokumen apa yang perlu disiapkan, tujuan penggunaan yang perlu dijelaskan, dan alur tindak lanjut dari tim.",
    trustItems: [
      ["Bahasa mudah dipahami", "Penjelasan dibuat ringkas agar mudah dipahami sejak konsultasi pertama."],
      ["Istilah layanan tetap jelas", "Istilah seperti apostille ijazah dan legalisasi transkrip nilai digunakan secara natural."],
      ["Arah konsultasi jelas", "Pemeriksaan awal dokumen diarahkan langsung melalui WhatsApp."],
      ["Nyaman di perangkat mobile", "Tampilan dibuat ringkas untuk pengguna yang datang dari pencarian atau iklan mobile."]
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
        "Bisa diperiksa. GOApostille dapat membantu kebutuhan apostille ijazah SMA dan dokumen pendidikan lain sesuai syarat negara tujuan."
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
      "Kirim foto dokumen, sebutkan bahasa tujuan dan keperluan penggunaan. GOApostille membantu kebutuhan penerjemah tersumpah resmi untuk visa, beasiswa, imigrasi, pernikahan, kontrak, dan dokumen pribadi.",
    primaryCta: "Periksa estimasi biaya",
    secondaryCta: "Lihat dokumen",
    defaultMessage:
      "Halo GOApostille, saya ingin konsultasi jasa penerjemah tersumpah resmi.",
    appTitle: "Sworn Translate",
    appLead: "Dokumen pribadi, pendidikan, imigrasi, dan perusahaan.",
    stats: [
      ["Express", "opsional"],
      ["Resmi", "tersumpah"],
      ["WhatsApp", "estimasi awal"]
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
      ["Estimasi berdasarkan dokumen", "Biaya dihitung setelah dokumen diperiksa, bukan berdasarkan perkiraan tanpa dasar."],
      ["Tujuan penggunaan dicatat", "Kebutuhan untuk visa, beasiswa, imigrasi, atau pernikahan dapat berbeda."],
      ["Express tersedia", "Penerjemah tersumpah express dapat diperiksa sesuai antrean dan bahasa."],
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
        "Bisa diperiksa. Ketersediaan express bergantung pada bahasa, jumlah halaman, dan antrean dokumen."
      ],
      [
        "Apakah hasil terjemahan bisa dipakai untuk visa?",
        "Terjemahan tersumpah sering dibutuhkan untuk visa, imigrasi, beasiswa, menikah, dan administrasi luar negeri. Tim akan menanyakan tujuan pemakaian saat pemeriksaan awal."
      ]
    ],
    schemaType: "ProfessionalService"
  },
  {
    path: "/en/",
    lang: "en",
    title: "GOApostille.com | Apostille, Legalization & Sworn Translation Services",
    description:
      "Professional apostille, document legalization, and sworn translation support for Indonesia-issued documents. Start with an initial WhatsApp document review.",
    keywords:
      "apostille service indonesia, document legalization indonesia, sworn translator jakarta, marriage certificate apostille, diploma apostille",
    eyebrow: "Indonesia document platform",
    h1: "Professional support for Indonesian documents used overseas.",
    lead:
      "GOApostille helps review your documents, identify the right process, and coordinate apostille, legalization, or sworn translation through WhatsApp.",
    primaryCta: "Start document review",
    secondaryCta: "View services",
    defaultMessage:
      "Hello GOApostille, I would like a document review for apostille/legalization/sworn translation.",
    appTitle: "GOApostille",
    appLead: "Document checklist, estimate, and WhatsApp consultation.",
    stats: [
      ["WhatsApp", "consultation"],
      ["Remote", "initial review"],
      ["Clear", "next steps"]
    ],
    servicesTitle: "Complete Support for Official International Documents",
    servicesLead:
      "From sworn translation to apostille, Ministry legalization, and embassy legalization. GOApostille helps you understand the right route before the original documents are sent.",
    services: [
      {
        title: "Sworn Translation",
        text:
          "Official sworn translation for personal, academic, corporate, immigration, and visa documents. Available for more than 25 languages depending on document type and deadline.",
        href: "/en/sworn-translator-jakarta/",
        badge: "25+ Languages",
        icon: "translation",
        cta: "Sworn translator service"
      },
      {
        title: "Apostille Service",
        text:
          "Apostille support for Indonesia-issued documents under the Hague Apostille Convention, including marriage, education, corporate, and civil documents.",
        href: "/en/marriage-document-apostille/",
        badge: "Most Requested",
        icon: "apostille",
        cta: "Marriage document apostille"
      },
      {
        title: "Ministry Legalization",
        text:
          "Official legalization route through Indonesian ministries for documents used in countries or institutions that still require conventional legalization.",
        href: "#konsultasi",
        badge: "Government Route",
        icon: "globe",
        cta: "Consult legalization"
      },
      {
        title: "Embassy Legalization",
        text:
          "Assistance with embassy and consulate legalization in Jakarta, adjusted to the destination country requirements so clients do not have to manage the queue alone.",
        href: "#konsultasi",
        badge: "50+ Countries",
        icon: "building",
        cta: "Check embassy route"
      },
      {
        title: "Education Documents",
        text:
          "Apostille and legalization support for diplomas, academic transcripts, degree certificates, and school records for study, work, scholarship, or migration purposes.",
        href: "/en/education-document-apostille/",
        badge: "Study & Scholarship",
        icon: "education",
        cta: "Education document apostille"
      },
      {
        title: "Express Handling",
        text:
          "For urgent deadlines, the team can review priority options within 1-2 working days depending on document type, queue availability, and destination requirements.",
        href: "#konsultasi",
        badge: "1-2 Working Days",
        icon: "bolt",
        cta: "Ask about express service"
      }
    ],
    trustTitle: "Designed for clients who need clear guidance",
    trustLead:
      "You can start by sending photos of your documents. The team checks document type, target country, language, and whether translation is needed.",
    trustItems: [
      ["Complimentary first review", "Share photos before committing to the process."],
      ["Remote consultation", "Start from WhatsApp wherever you are."],
      ["Clear guidance", "Know whether you need apostille, legalization, or translation."],
      ["Easy on mobile", "Key actions are kept clear and accessible on mobile screens."]
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
    h1: "Marriage document apostille with a clear consultation flow.",
    lead:
      "Send photos of your buku nikah, marriage certificate, or related marriage documents. GOApostille reviews translation, apostille, and legalization needs for overseas use.",
    primaryCta: "Review my document",
    secondaryCta: "See process",
    defaultMessage:
      "Hello GOApostille, I need a review for marriage document apostille or legalization.",
    appTitle: "Marriage Docs",
    appLead: "Buku nikah, marriage certificate, and civil registry documents.",
    stats: [
      ["Photo", "review"],
      ["WhatsApp", "consultation"],
      ["Overseas", "ready"]
    ],
    servicesTitle: "Marriage documents we can review",
    servicesLead:
      "This page explains apostille and legalization needs for Indonesian marriage documents used overseas.",
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
      "Marriage documents often involve important deadlines. This page helps users move from initial questions to a clear WhatsApp consultation.",
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
        "Some institutions require a sworn translation. GOApostille checks this during the initial review."
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
    h1: "Sworn translator support in Jakarta for official document needs.",
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
      ["WhatsApp", "estimate"]
    ],
    servicesTitle: "Documents commonly translated",
    servicesLead:
      "This page helps international clients understand sworn translator and official document translation needs in Indonesia.",
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
    trustTitle: "Translation needs are reviewed before you proceed",
    trustLead:
      "The team reviews language, page count, scan quality, name spelling, and whether apostille or legalization is needed after translation.",
    trustItems: [
      ["Document-based estimate", "Cost is checked from the actual file, not from a rough guess."],
      ["Purpose-aware review", "Visa, immigration, scholarship, and marriage may require different details."],
      ["Remote consultation", "Start by sending document photos via WhatsApp."],
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
    primaryCta: "Review education documents",
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
      ["Mobile accessible", "Designed for users who browse from mobile devices."],
      ["Clear next step", "Users are guided to the document review process immediately."]
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
  ["Kirim foto dokumen", "Mulai dari WhatsApp. Foto dokumen sudah cukup untuk pemeriksaan awal dan estimasi kebutuhan."],
  ["Tentukan jalur layanan", "Tim memetakan apakah dokumen Anda memerlukan apostille, legalisasi, penerjemah tersumpah, atau kombinasi ketiganya."],
  ["Konfirmasi biaya dan estimasi", "Setelah kebutuhan jelas, Anda menerima estimasi biaya, durasi proses, dan dokumen pendukung yang diperlukan."],
  ["Pantau prosesnya", "Status pengerjaan dan kebutuhan tambahan diinformasikan secara berkala melalui WhatsApp."]
];
const workflowEn = [
  ["Send document photos", "Start from WhatsApp. Photos are enough for an initial review and service estimate."],
  ["Check the service route", "The team maps whether you need apostille, legalization, sworn translation, or a combination."],
  ["Confirm the estimate", "Once the document is clear, you receive estimated cost, duration, and next steps."],
  ["Get process updates", "Status and additional requirements are shared through WhatsApp so they are easy to follow."]
];
const testimonials = [
  ["R**** P.", "Jakarta", "Dokumen pernikahan untuk luar negeri dibantu dari awal. Saya tinggal kirim foto dokumen dan langsung dijelaskan langkahnya."],
  ["A****** M.", "Tangerang", "Butuh apostille ijazah untuk kerja. Respons WhatsApp cepat, estimasi jelas, dan istilah administrasi dijelaskan dengan mudah."],
  ["S****** L.", "Bekasi", "Terjemahan tersumpah dan legalisasi dokumen keluarga jadi lebih mudah karena alurnya dijelaskan satu per satu."]
];
const testimonialsEn = [
  ["M***** S.", "Jakarta", "The team reviewed my Indonesian marriage document quickly and explained what needed translation and apostille."],
  ["D***** K.", "Singapore", "Clear WhatsApp guidance for diploma apostille. I knew the next step before sending the original document."],
  ["N***** R.", "Australia", "Fast response, simple process, and helpful explanation for overseas document requirements."]
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
    marriage: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.8 12.4a3.9 3.9 0 1 0 0 5.5 3.9 3.9 0 0 0 0-5.5Z"/><path d="M15.2 12.4a3.9 3.9 0 1 1 0 5.5 3.9 3.9 0 0 1 0-5.5Z"/><path d="m9.5 8.5 2.5-3 2.5 3M10.2 8.5h3.6"/></svg>',
    education: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 8.5 9-4 9 4-9 4-9-4Z"/><path d="M6.8 11.2v4.4c2.9 2.2 7.5 2.2 10.4 0v-4.4"/><path d="M20 9.5v5.7"/></svg>',
    translation: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h8a3 3 0 0 1 3 3v2"/><path d="M5 4v11a3 3 0 0 0 3 3h3"/><path d="M8 8h5M8 11h3"/><path d="m14 20 3.5-8 3.5 8M15.2 17.2h4.6"/></svg>',
    apostille: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h4"/><path d="m9.4 14 1.8 1.9 4-4.3"/><path d="M9 19h6"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5 5.5 6.2v4.9c0 4.2 2.6 7.8 6.5 9.4 3.9-1.6 6.5-5.2 6.5-9.4V6.2L12 3.5Z"/><path d="m8.8 12 2.1 2.1 4.4-4.7"/></svg>',
    globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M3.6 9h16.8M3.6 15h16.8"/><path d="M12 3c2.2 2.3 3.3 5.3 3.3 9S14.2 18.7 12 21c-2.2-2.3-3.3-5.3-3.3-9S9.8 5.3 12 3Z"/></svg>',
    building: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 20.5h15"/><path d="M6 20.5V7l6-3.5L18 7v13.5"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M10 20.5v-3h4v3"/></svg>',
    bolt: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2.8 5.8 13h5.4L10 21.2 18.2 10h-5.7L13 2.8Z"/></svg>',
    map: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z"/><path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v10.5H9.2L5 19.5V5Z"/><path d="M8.5 9h7M8.5 12h4.8"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.2 4.2L19 7.3"/></svg>'
  };
  return icons[type] || icons.apostille;
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
          <span class="brand-mark">${iconSvg("apostille")}</span>
          <span>
            <span class="brand-title">GOApostille</span>
            <span class="brand-subtitle">Document services</span>
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
      <nav class="mobile-menu" aria-label="Menu mobile" data-mobile-menu>${links}<a href="${waUrl(page.defaultMessage)}">${page.lang === "en" ? "WhatsApp Review" : "Konsultasi WhatsApp"}</a></nav>
    </header>`;
}

function phoneMockup(page) {
  const isEn = page.lang === "en";
  const iconTypes = ["marriage", "education", "translation"];
  const serviceItems = page.services
    .slice(0, 3)
    .map(
      (service, index) => `
        <div class="service-mini">
          <span class="mini-icon">${iconSvg(service.icon || iconTypes[index] || "check")}</span>
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
            <strong>${isEn ? "Document review status" : "Status pemeriksaan dokumen"}</strong>
            <span>${isEn ? "Send document photos, choose a service, and receive guidance from the team." : "Kirim foto dokumen, pilih layanan, lalu terima arahan dari tim."}</span>
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
            <div class="review-benefits">
              <span><strong>${isEn ? "Fast response" : "Respons cepat"}</strong>${isEn ? "Team available on business days" : "Tim aktif pada hari kerja"}</span>
              <span><strong>${isEn ? "Initial review" : "Pemeriksaan awal"}</strong>${isEn ? "Consult before sending originals" : "Konsultasi sebelum dokumen asli dikirim"}</span>
              <span><strong>${isEn ? "Trusted" : "Dipercaya"}</strong>${isEn ? "Hundreds of client documents processed" : "Ratusan dokumen klien telah diproses"}</span>
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
            <button class="button whatsapp" type="submit">${isEn ? "Continue via WhatsApp" : "Lanjutkan via WhatsApp"}</button>
          </form>`;
}

function hero(page) {
  const isEn = page.lang === "en";
  const trustBadges = isEn
    ? ["Initial consultation at no cost", "Documents reviewed before processing", "WhatsApp status updates", "Individuals and corporate clients"]
    : ["Konsultasi awal tanpa biaya", "Dokumen diperiksa sebelum proses dimulai", "Pembaruan status melalui WhatsApp", "Melayani individu & korporat"];
  const authorityBadges = isEn
    ? ["Aligned with ISO 9001:2015", "Registered with Ministry of Foreign Affairs", "Ministry of Law and Human Rights decree", "Registered with foreign embassies"]
    : ["Sesuai ISO 9001:2015", "Terdaftar Kemenlu", "SK Kemenkum RI", "Terdaftar Kedutaan Asing"];
  const authorityItems = authorityBadges
    .map((item) => `<li><span>${iconSvg("shield")}</span>${escapeHtml(item)}</li>`)
    .join("");
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
        <aside class="hero-form-card" aria-label="Form pemeriksaan awal dokumen">
          <span class="kicker">${isEn ? "Document review form" : "Form pemeriksaan dokumen"}</span>
          <h2>${isEn ? "Check your document needs at no cost." : "Periksa kebutuhan dokumen Anda — tanpa biaya."}</h2>
          <p>${isEn ? "Fill this in briefly and WhatsApp will open with a clean message format so the team can understand your document and destination." : "Isi data singkat di bawah, lalu lanjutkan ke WhatsApp dengan pesan yang sudah tersusun rapi. Tim kami akan langsung memahami dokumen dan tujuan Anda."}</p>
          ${reviewForm(page, "quote-form-light")}
        </aside>
      </div>
      <div class="container hero-proof">
        <div class="proof-pill">
          <strong>${isEn ? "Response" : "Respons"}</strong>
          <span>${isEn ? "Fast" : "Cepat"}</span>
          <em>${isEn ? "Initial guidance through WhatsApp" : "Arahan awal melalui WhatsApp"}</em>
        </div>
        <div class="proof-pill">
          <strong>${isEn ? "Initial" : "Pemeriksaan"}</strong>
          <span>${isEn ? "Review" : "Awal dokumen"}</span>
          <em>${isEn ? "Consult before sending originals" : "Konsultasi sebelum dokumen asli dikirim"}</em>
        </div>
        <div class="proof-pill">
          <strong>${isEn ? "Trusted" : "Dipercaya"}</strong>
          <span>${isEn ? "Clients" : "Klien"}</span>
          <em>${isEn ? "For personal and corporate documents" : "Untuk dokumen pribadi dan korporat"}</em>
        </div>
      </div>
      <div class="container authority-badges" aria-label="${isEn ? "Authority badges" : "Badge kepercayaan"}">
        <ul>${authorityItems}</ul>
      </div>
    </section>`;
}

function appPreview(page) {
  const isEn = page.lang === "en";
  return `
    <section class="section app-preview">
      <div class="container app-preview-grid">
        <div class="section-head">
          <span class="kicker">${isEn ? "Expert workflow" : "Alur kerja tim"}</span>
          <h2>${isEn ? "Simple to follow, reviewed by a real document team." : "Tetap sederhana, tetap ditangani tim ahli."}</h2>
          <p>${isEn ? "Every submitted document is checked by the team, not an automated system. You can follow each stage through WhatsApp." : "Setiap dokumen yang masuk diperiksa satu per satu oleh tim kami — bukan sistem otomatis. Anda bisa memantau setiap tahap prosesnya langsung melalui WhatsApp, dari pemeriksaan awal hingga dokumen siap digunakan."}</p>
        </div>
        ${phoneMockup(page)}
      </div>
    </section>`;
}

function services(page) {
  const isEn = page.lang === "en";
  const cards = page.services
    .map(
      (service, index) => {
        const iconTypes = ["marriage", "education", "translation"];
        const icon = service.icon || iconTypes[index] || "apostille";
        const cta = service.cta || (isEn ? "Open service" : "Buka layanan");
        return `
        <article class="card service-card">
          <div class="service-card-head">
            <span class="service-icon">${iconSvg(icon)}</span>
            <h3>${escapeHtml(service.title)}</h3>
          </div>
          ${service.badge ? `<span class="service-badge">${escapeHtml(service.badge)}</span>` : ""}
          <p>${escapeHtml(service.text)}</p>
          ${
            service.href
              ? `<a class="card-link" href="${service.href}">${escapeHtml(cta)} -&gt;</a>`
              : `<a class="card-link" href="#konsultasi">${isEn ? "Consult" : "Konsultasi"} -&gt;</a>`
          }
        </article>`;
      }
    )
    .join("");

  return `
    <section class="section" id="layanan">
      <div class="container">
        <div class="section-head">
          <span class="kicker">${isEn ? "Our Services" : "Layanan Kami"}</span>
          <h2>${escapeHtml(page.servicesTitle)}</h2>
          <p>${escapeHtml(page.servicesLead)}</p>
        </div>
        <div class="grid three">${cards}</div>
      </div>
    </section>`;
}

function trust(page) {
  const isEn = page.lang === "en";
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
          <span class="kicker">${isEn ? "Why clients trust us" : "Kepercayaan klien"}</span>
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
          <span class="kicker">${isEn ? "Client experience" : "Pengalaman klien"}</span>
          <h2>${isEn ? "Make sure your important documents are handled properly." : "Pastikan dokumen penting Anda ditangani dengan tepat."}</h2>
          <p>${isEn ? "Check the right service route first, then continue with a clear flow from the first consultation." : "Periksa jalur layanan yang sesuai, dan pastikan dokumen Anda diproses dengan alur yang jelas sejak konsultasi awal."}</p>
        </div>
        <div class="proof-grid">
          <article class="review-badge">
            <span class="badge-label">${isEn ? "Client confidence" : "Kepercayaan klien"}</span>
            <strong>${isEn ? "Hundreds of documents assisted" : "Ratusan dokumen telah dibantu"}</strong>
            <p>${isEn ? "Individual and corporate clients have trusted apostille, legalization, and sworn translation assistance through a clear WhatsApp-guided flow." : "Ratusan klien — individu maupun korporat — telah mempercayakan dokumen apostille, legalisasi, dan penerjemahan tersumpah kepada kami."}</p>
            <a class="button secondary" href="${waUrl(isEn ? "Hello GOApostille, I would like a WhatsApp consultation for my document." : "Halo GOApostille, saya ingin konsultasi via WhatsApp untuk dokumen saya.")}">${isEn ? "Consult on WhatsApp" : "Konsultasi via WhatsApp"}</a>
          </article>
          <article class="maps-card">
            <span class="badge-label">${isEn ? "Service area" : "Area layanan"}</span>
            <h3>${isEn ? "Jakarta-based document service, available remotely." : "Layanan dokumen berbasis Jakarta, bisa dimulai jarak jauh."}</h3>
            <p>${isEn ? "Start from WhatsApp from Jakarta, Jabodetabek, or overseas. The team will guide document delivery when originals are needed." : "Konsultasi dapat dimulai melalui WhatsApp dari Jakarta, Jabodetabek, luar kota, maupun luar negeri. Jika dokumen asli dibutuhkan, tim akan memberi arahan pengiriman."}</p>
            <address class="office-mini">
              <strong>${officeAddress.company}</strong>
              <span>${officeAddress.line1}, ${officeAddress.line2}, ${officeAddress.line3}</span>
            </address>
            <a class="card-link" href="${googleMapsUrl}" target="_blank" rel="noopener">${isEn ? "Open Google Maps ->" : "Buka Google Maps ->"}</a>
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
          <h2>${isEn ? "Four clear steps from initial review to process updates." : "Empat langkah jelas dari pemeriksaan awal sampai proses berjalan."}</h2>
          <p>${isEn ? "You do not need to guess the right route. The team reviews your document type, destination country, and service needs before originals are sent." : "Anda tidak perlu menentukan sendiri jalur pengurusan dokumen. Tim akan membaca kebutuhan dokumen berdasarkan negara tujuan, jenis layanan, dan dokumen pendukung yang diperlukan."}</p>
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
            <span class="kicker">${isEn ? "Document consultation" : "Konsultasi dokumen"}</span>
            <h2>${isEn ? "Not sure where to start? Send your document first." : "Belum yakin harus mulai dari mana?"}</h2>
            <p>${isEn ? "Send your document first. The team can help determine whether you need apostille, legalization, sworn translation, or a combination of services." : "Kirim dokumen Anda terlebih dahulu. Tim kami akan membantu menentukan apakah Anda memerlukan apostille, legalisasi, penerjemah tersumpah, atau kombinasi dari ketiganya."}</p>
            <div class="hero-actions">
              <a class="button whatsapp" href="${waUrl(page.defaultMessage)}">${isEn ? "Consult on WhatsApp" : "Konsultasi via WhatsApp"}</a>
              <a class="button secondary" href="tel:+62817322271">${isEn ? "Call 0817-322-271" : "Telepon 0817-322-271"}</a>
            </div>
          </div>
          <div class="cta-note">
            <strong>${isEn ? "Fast response during business hours" : "Respons cepat di jam kerja"}</strong>
            <span>${isEn ? "Prepare document photos, destination country, and deadline if any." : "Siapkan foto dokumen, negara tujuan, dan tenggat waktu jika ada."}</span>
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
          <h2>${isEn ? "Common questions before consultation." : "Pertanyaan yang sering muncul sebelum konsultasi."}</h2>
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
          <p>${isEn ? "A professional document service for apostille, document legalization, and sworn translation. Start with an initial WhatsApp document review." : "Platform layanan dokumen lintas negara untuk apostille, legalisasi dokumen, dan penerjemah tersumpah. Mulai dari pemeriksaan awal melalui WhatsApp."}</p>
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
        <div>
          <strong>${isEn ? "Office" : "Alamat kantor"}</strong>
          <address>
            ${officeAddress.company}<br>
            ${officeAddress.line1}<br>
            ${officeAddress.line2}<br>
            ${officeAddress.line3}
          </address>
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
    <div class="proof-toast" data-proof-toast aria-live="polite">
      <span class="proof-toast-icon">${iconSvg("chat")}</span>
      <span>
        <strong data-proof-name>Fat***</strong>
        <small data-proof-action>baru mengirim dokumen untuk pemeriksaan awal</small>
      </span>
    </div>
    <nav class="bottom-nav" data-bottom-nav aria-label="${page.lang === "en" ? "Mobile quick navigation" : "Navigasi cepat mobile"}">
      <a href="/"><span>${iconSvg("apostille")}</span><strong>Home</strong></a>
      <a href="#layanan"><span>${iconSvg("shield")}</span><strong>${page.lang === "en" ? "Services" : "Layanan"}</strong></a>
      <a href="#review"><span>${iconSvg("map")}</span><strong>${page.lang === "en" ? "Review" : "Bukti"}</strong></a>
      <a href="${waUrl(page.defaultMessage)}"><span>${iconSvg("chat")}</span><strong>WhatsApp</strong></a>
    </nav>
    <a class="mobile-wa" href="${waUrl(page.defaultMessage)}">
      <span class="icon">${iconSvg("chat")}</span>
      <span>
        <strong>${page.lang === "en" ? "Document Review" : "Pemeriksaan Dokumen"}</strong>
        <span>${page.lang === "en" ? "WhatsApp consultation" : "Konsultasi via WhatsApp"}</span>
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
