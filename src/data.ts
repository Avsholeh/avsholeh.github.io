import type {
  Certificate,
  Education,
  Experience,
  Project,
  SkillCategory,
  SocialLink,
} from "./types";

export const personalInfo = {
  name: "Muhammad Sholeh",
  role: "Senior Full Stack Engineer",
  summary:
    "Fullstack developer dengan pengalaman lebih dari 3 tahun, berfokus pada solusi nyata untuk mempercepat pelayanan, menyederhanakan manajemen data, dan mengotomatisasi laporan. Berkomitmen menciptakan solusi teknologi yang berdampak nyata.",
  location: "Sidoarjo, Jawa Timur",
  email: "avsholeh@gmail.com",
  phone: "+6281275032223",
  photo: "/profile.webp",
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Go (Golang)", "PHP", "Python", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "MUI", "shadcn/ui"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "Node.js", "Express", "Go Fiber", "Django"],
  },
  {
    category: "Infrastructure & Tools",
    skills: ["Docker", "PostgreSQL", "MySQL", "Redis", "Git/GitHub", "Figma"],
  },
];

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Inspektorat Daerah",
    role: "Fullstack Developer",
    period: "Jan 2024 – Jun 2025",
    location: "Karimun, Kepulauan Riau",
    type: "Project",
    description: [
      "Membangun Sistem Informasi Pengawasan (SIMWAS) menggunakan Go (Fiber), React.js dan TypeScript.",
      "Merancang skema database PostgreSQL untuk mendukung alur pengawasan APIP.",
      "Implementasi autentikasi dan otorisasi menggunakan JWT dan RBAC (Role-Based Access Control).",
      "Membuat dashboard real-time dengan grafik interaktif serta fitur export PDF/Excel.",
    ],
    stack: ["Go", "React", "TypeScript", "PostgreSQL"],
  },

  {
    id: "exp-2",
    company: "PT Global Medika Digitama",
    role: "Web Programmer",
    period: "Mei 2023 – Jul 2024",
    location: "Surabaya, Jawa Timur",
    type: "Full-time",
    description: [
      "Full-stack development & maintenance SIMRS berbasis Laravel, MySQL, Bootstrap, jQuery.",
      "Mengembangkan modul inti: Pendaftaran, RME, Farmasi, Rawat Jalan/Inap, Medical Assessment (CRUD).",
      "Pengembangan lanjutan bridging BPJS (VClaim, PCare, Antrean, SEP, Rujukan) sesuai standar Kemenkes.",
      "Mengelola version control dengan Git (Github) pada setiap pengembangan dan release.",
      "Memberikan dukungan implementasi di 30+ rumah sakit selama instalasi, migrasi data, dan pelatihan.",
    ],
    stack: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: "exp-3",
    company: "PT BPR Karimun Sejahtera",
    role: "IT Staff",
    period: "Apr 2019 – Feb 2022",
    location: "Karimun, Kepulauan Riau",
    type: "Full-time",
    description: [
      "Mengembangkan aplikasi internal perbankan menggunakan Laravel, CodeIgniter, MySQL, dan MSSQL.",
      "Implementasi SMS Gateway untuk notifikasi nasabah menggunakan Gammu & playSMS.",
      "Mengelola dan memelihara software, hardware dan infrastruktur IT perbankan.",
      "Menerapkan standar keamanan IT yang ketat untuk melindungi data dan aset digital perusahaan.",
    ],
    stack: ["Laravel", "CodeIgniter", "MSSQL", "MySQL"],
  },
  {
    id: "exp-4",
    company: "BPKAD",
    role: "Fullstack Developer",
    period: "Apr 2019 – Feb 2022",
    location: "Karimun, Kepulauan Riau",
    type: "Project",
    description: [
      "Mengembangkan Sistem Informasi Kearsipan Daerah (SIKANDA) Laravel, jQuery, Bootstrap, dan MySQL.",
      "Membangun fitur lengkap pengelolaan arsip (upload, validasi, pelacakan riwayat arsip, role-based access).",
      "Menyusun dan melaksanakan program pelatihan untuk 20+ staf pemerintahan.",
    ],
    stack: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    id: "exp-5",
    company: "Universitas Karimun",
    role: "Fullstack Developer",
    period: "Apr 2021 – Sep 2021",
    location: "Karimun, Kepulauan Riau",
    type: "Project",
    description: [
      "Mengembangkan Sistem Informasi Geografis (SIG) menggunakan PHP native, MySQL, ArcGIS, dan Bing API.",
      "Mengimplementasikan Bing Maps API sebagai alternatif peta dasar (base map) dan untuk menampilkan layer kustom berupa marker, polyline, polygon, serta infobox interaktif.",
      "Integrasi data spasial dari ArcGIS (shapefile & feature layer) dengan database MySQL.",
      "Membuat modul administrasi CRUD untuk penambahan/pembaruan data lokasi, kandungan dan kualitas air.",
    ],
    stack: ["PHP", "MySQL", "ArcGIS", "BingMap API"],
  },

  {
    id: "exp-6",
    company: "PT XL Axiata Tbk",
    role: "Programmer",
    period: "Apr 2021 – Sep 2021",
    location: "Malang, Jawa Timur",
    type: "Internship",
    description: [
      "Mengembangkan sistem keamanan CCTV untuk meningkatkan keamanan di lingkungan perusahaan.",
      "Merancang aplikasi mobile untuk monitoring jaringan perusahaan, membantu tim dalam pemantauan performa jaringan secara real time.",
      "Menyusun dokumentasi yang mendetail terkait aktivitas monitoring dan kinerja jaringan untuk keperluan analisis dan evaluasi lebih lanjut.",
    ],
    stack: ["Java", "Android Studio", "MySQL"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Sistem Informasi Pengawasan - SIMWAS",
    description:
      "Platform pengawasan kinerja tinggi untuk inspektorat daerah dengan fitur pelacakan audit real-time.",
    longDescription:
      "Sistem Informasi Pengawasan (SIMWAS) yang komprehensif dirancang untuk Inspektorat Daerah. Sistem ini menyederhanakan proses audit mulai dari perencanaan, pelaksanaan hingga pemantauan. Sistem ini digunakan oleh Inspektorat Daerah untuk meningkatkan efisiensi, transparansi, dan akuntabilitas pengawasan internal.",
    features: [
      "Visualisasi penerbitan dokumen perencanaan, status, dan progres tindak lanjut",
      "Pembuatan Program Kerja Pengawasan Tahunan (PKPT), Surat Perintah Tugas (SPT), pengelompokan objek berdasarkan risiko, prioritas, dan period",
      "Mengelola Laporan Hasil Audit (LHA), Kertas Kerja Audit (KKA) dan Temuan.",
      "Pembentukan tim dan anggota, penugasan otomatis, tracking kontribusi anggota",
      "Implementasi Autentikasi JWT & RBAC",
      "Dashboard analitik real-time dengan visualisasi grafik",
      "Pembuatan laporan PDF & Excel otomatis",
    ],
    tags: ["Go", "React", "TypeScript", "PostgreSQL"],
    stats: "",
    image: "/portfolio/simwas/simwas-screenshoot01.webp",
  },
  {
    id: "proj-2",
    title: "Sistem Informasi Rumah Sakit - SIMRS",
    description:
      "Sistem Manajemen Rumah Sakit menyeluruh yang menjembatani standar data kesehatan BPJS dengan alur kerja internal.",
    longDescription:
      "Sistem Manajemen Rumah Sakit (SIMRS) end-to-end yang dikembangkan untuk mendigitalkan operasional rumah sakit. Fokus utamanya adalah interoperabilitas dengan standar kesehatan nasional (BPJS) dan menyederhanakan alur perawatan pasien dari pendaftaran hingga farmasi.",
    features: [
      "Pengembangan full-stack modul Pendaftaran, RME, dan Farmasi",
      "Implementasi Bridging BPJS VClaim, PCare, dan Antrean",
      "Optimasi query database untuk data pasien volume tinggi",
      "Modul Medical Assessment CRUD terintegrasi",
      "Diimplementasikan di 30+ rumah sakit dengan dukungan migrasi",
    ],
    tags: ["Laravel", "Bridging API", "MySQL"],
    stats: "",
    image: "/portfolio/medify/medify-screenshoot00.webp",
  },
  {
    id: "proj-3",
    title: "Sistem Kearsipan Daerah - SIKANDA",
    description:
      "Sistem Informasi Kearsipan Daerah untuk pengelolaan dokumen pemerintah yang efisien dan terstruktur.",
    longDescription:
      "SIKANDA adalah solusi manajemen arsip digital yang dikembangkan untuk BPKAD. Sistem ini menggantikan metode pengarsipan manual yang rentan kesalahan dengan platform digital yang aman, memungkinkan pencarian cepat, validasi dokumen, dan pelacakan riwayat akses arsip.",
    features: [
      "Manajemen upload dan validasi arsip digital",
      "Sistem pelacakan riwayat arsip (audit trail)",
      "Role-based access control untuk keamanan dokumen",
      "Fitur pencarian arsip yang cepat dan akurat",
      "Pelatihan dan implementasi untuk 20+ staf",
    ],
    tags: ["Laravel", "Bootstrap", "MySQL", "jQuery"],
    stats: "",
    image: "/portfolio/sikanda/sikanda-screenshoot00.webp",
  },
  {
    id: "proj-4",
    title: "Sistem Informasi Layanan Tahanan",
    description:
      "Sistem terintegrasi untuk manajemen data tahanan, mulai dari pendaftaran, hingga proses persidangan.",
    longDescription:
      "Sistem informasi untuk mengelola data tahanan, mulai dari pendaftaran hingga proses persidangan. Memfasilitasi pencatatan identitas tahanan, jadwal kunjungan untuk meningkatkan efisiensi layanan di lembaga pemasyarakatan. Semua proyek dirancang dengan antarmuka yang user-friendly, keamanan data yang kuat, dan kemampuan adaptasi terhadap kebutuhan pengguna.",
    features: [
      "Manajemen kunjungan dan jadwal persidangan tahanan",
      "Pengelolaan data identitas dan riwayat tahanan",
      "Managemen data hakim, jaksa, dan narapidana",
      "Sistem pelaporan otomatis untuk manajemen",
    ],
    tags: ["Laravel", "JQuery", "Bootstrap", "MySQL"],
    stats: "",
    image: "/portfolio/sinahan/sinahan-screenshoot00.webp",
  },
  {
    id: "proj-5",
    title: "Sistem Informasi Manajemen Perpustakaan",
    description:
      "Sistem informasi untuk mengelola koleksi buku, transaksi peminjaman, pengembalian, dan pelaporan di perpustakaan dengan akses berbasis web.",
    longDescription:
      "Aplikasi yang dirancang khusus untuk memudahkan pengelolaan perpustakaan. Aplikasi ini memungkinkan petugas perpustakaan mencatat seluruh koleksi buku secara digital, mengelola proses peminjaman dan pengembalian, serta memantau riwayat transaksi. Pengguna dapat mencari buku yang diinginkan melalui katalog online, melakukan peminjaman mandiri dan menerima notifikasi otomatis saat masa pinjam hampir berakhir. Sistem ini juga mampu menghitung denda keterlambatan secara otomatis, sehingga mengurangi kesalahan perhitungan manual.",
    features: [
      "Mengelola koleksi buku secara digital",
      "Proses peminjaman dan pengembalian buku",
      "Pencarian buku melalui katalog online",
      "Notifikasi otomatis untuk pengingat pengembalian",
      "Perhitungan denda keterlambatan otomatis",
    ],
    tags: [
      "Laravel",
      "MySQL",
      "Livewire",
      "Alpine.js",
      "Laravel Excel",
      "FilePond",
    ],
    stats: "",
    image: "portfolio/elibraria/elibraria-screenshoot00.webp",
  },
  {
    id: "proj-6",
    title: "Aplikasi Surat Masuk & Keluar",
    description:
      "Aplikasi untuk mencatat, melacak, dan mengarsipkan surat masuk/keluar instansi dengan manajemen disposisi dan prioritas.",
    longDescription:
      "Sistem digital untuk mengelola surat menyurat di instansi atau organisasi. Aplikasi ini memfasilitasi pencatatan surat masuk dan keluar secara terstruktur, memantau proses disposisi, serta menyediakan arsip digital yang mudah diakses. Fitur notifikasi akan mengingatkan pengguna tentang surat-surat penting yang memerlukan tindak lanjut. Dengan sistem pencarian yang canggih, pengguna dapat menemukan surat tertentu dalam waktu singkat tanpa harus membuka arsip fisik.",
    features: [
      "Pencatatan surat masuk dan keluar secara digital",
      "Manajemen disposisi surat dengan prioritas",
      "Arsip digital yang mudah diakses",
      "Pencarian surat yang efisien",
    ],
    tags: [
      "Laravel",
      "MySQL",
      "Livewire",
      "Alpine.js",
      "Laravel Excel",
      "FilePond",
    ],
    stats: "",
    image: "portfolio/esimelia/esimelia-screenshoot00.webp",
  },
  {
    id: "proj-7",
    title: "Images to WebP Bulk Converter - WebPBox.com",
    description:
      "Aplikasi web berbasis Nextjs untuk mengkonversi ribuan gambar sekaligus (JPG, PNG, GIF) ke format WebP secara massal dengan optimasi kualitas dan ukuran yang dapat diatur.",
    longDescription:
      "WebPBox adalah tool konversi gambar massal yang dirancang khusus untuk web developer, designer, dan pemilik website yang ingin mengoptimalkan loading time situs dengan format WebP modern dari Google. Aplikasi ini memungkinkan pengguna mengunggah ratusan hingga ribuan gambar sekaligus melalui antarmuka drag-and-drop, memilih tingkat kompresi (lossy/lossless), mengatur kualitas output, serta melakukan resize otomatis jika diperlukan. Hasil konversi dapat di-download dalam bentuk ZIP atau langsung disimpan ke folder server. Dilengkapi fitur preview sebelum dan sesudah konversi serta laporan penghematan ukuran file.",
    features: [
      "Konversi massal JPG/PNG/GIF ke WebP",
      "Drag-and-drop upload dengan progress bar real-time",
      "Pengaturan kualitas WebP (1-100) dan mode kompresi",
      "Preview before-after dan estimasi penghematan ukuran",
      "Download hasil sebagai ZIP atau simpan langsung ke server",
      "Dukungan upload hingga ribuan gambar sekaligus",
    ],
    tags: ["Nextjs", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    stats: "",
    image: "portfolio/webpbox/webpbox01.webp",
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Brawijaya",
    degree: "S1 Teknik Informatika",
    period: "Jun 2013 – Sep 2018",
    location: "Malang, Jawa Timur",
    research:
      "Implementasi Load Balancing menggunakan Algoritme Least Connection dengan Agen Psutils pada Web Server.",
    researchLink:
      "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/4237",
  },
];

export const certificates: Certificate[] = [
  {
    id: "cert-1",
    name: "SQL Problem Solving",
    issuer: "University of California, Davis - Coursera",
    description:
      "Menguasai pemecahan masalah kompleks menggunakan SQL, termasuk query lanjutan, join, subquery, window functions, dan optimasi performa database.",
    date: "Des 2025",
    links: [
      "https://www.coursera.org/account/accomplishments/verify/582ADU20PIV1",
    ],
  },
  {
    id: "cert-2",
    name: "Programming with Google Go Specialization",
    issuer: "University of California, Irvine - Coursera",
    description:
      "Menguasai Go dari dasar hingga lanjutan: tipe data, functions, methods, interfaces, polymorphism, serta concurrent programming dengan goroutines dan channels.",
    date: "Des 2025",
    links: [
      "https://www.coursera.org/account/accomplishments/verify/M12AFFFYW9YE",
      "https://www.coursera.org/account/accomplishments/verify/N6SG9ZV53IL6",
      "https://www.coursera.org/account/accomplishments/specialization/certificate/RI1I6PEW2G5J",
    ],
  },
  {
    id: "cert-3",
    name: "Flutter & Dart - Complete App Development",
    issuer: "Packt - Coursera",
    description:
      "Menguasai Flutter & Dart: setup environment, widget stateless/stateful, state management, navigation, JSON parsing, dynamic list, SQLite lokal, integrasi Firebase & REST API, serta state management lanjutan untuk app mobile efisien.",
    date: "Des 2025",
    links: [
      "https://www.coursera.org/account/accomplishments/verify/830CNYPITRL8",
      "https://www.coursera.org/account/accomplishments/verify/IXLGLUBFWBB1",
      "https://www.coursera.org/account/accomplishments/verify/LRIXY7MKSB6N",
    ],
  },
  {
    id: "cert-4",
    name: "Big Data Training",
    issuer: "University of Brawijaya",
    description:
      "Pelatihan intensif pengolahan dan analisis Big Data menggunakan tools modern seperti Hadoop, Spark, dan teknik distributed computing.",
    date: "Jun 2017",
    links: [
      "https://drive.google.com/drive/folders/1JUkFkqcJI9LN0LzfHjSDo3E6yZbgqxQO",
    ],
  },
  {
    id: "cert-5",
    name: "Microsoft Office Training",
    issuer: "University of Brawijaya",
    description:
      "Menguasai Microsoft Office (Word, Excel, PowerPoint, Outlook) untuk produktivitas kerja, pembuatan laporan, dan presentasi profesional.",
    date: "Jun 2016",
    links: [
      "https://drive.google.com/drive/folders/1JUkFkqcJI9LN0LzfHjSDo3E6yZbgqxQO",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/avsholeh", icon: "Github" },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/muhammad-sholeh",
    icon: "Linkedin",
  },
  { platform: "Email", url: "mailto:avsholeh@gmail.com", icon: "Mail" },
];
