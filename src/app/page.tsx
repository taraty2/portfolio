"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const BASE_PATH = "/portfolio";
const projects = [
  {
    number: "01",
    category: "DATA ANALYTICS",
    title: "Dashboard Analisis Performa Penjualan",
    description:
      "Dashboard interaktif untuk memvisualisasikan performa penjualan berdasarkan kota, kategori produk, transaksi, dan tren penjualan bulanan.",
    tags: ["Looker Studio", "Spreadsheet", "Python"],
    link: "",
  },
  {
    number: "02",
    category: "DATA ENGINEERING",
    title: "AI Workforce Data Warehouse",
    description:
      "Data warehouse untuk mengelola dan menganalisis data perkembangan tenaga kerja serta investasi Artificial Intelligence.",
    tags: ["PostgreSQL", "Python", "Data Warehouse"],
    link: "",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "Sistem Analisis Sentimen",
    description:
      "Sistem analisis sentimen untuk mengklasifikasikan opini pengguna media sosial ke dalam kategori positif, negatif, dan netral.",
    tags: ["Python", "TF-IDF", "Naive Bayes", "LSTM"],
    link: "",
  },
  {
    number: "04",
    category: "DATA SCIENCE",
    title: "Analisis Survival Kanker Paru",
    description:
      "Analisis survival untuk mempelajari faktor risiko dan membandingkan performa model prediksi ketahanan hidup pasien kanker paru.",
    tags: ["Python", "Cox PH", "SSVM", "Kaplan-Meier"],
    link: "",
  },
  {
    number: "05",
    category: "UI/UX DESIGN",
    title: "UI/UX Design Donation Platform",
    description:
      "Perancangan antarmuka dan pengalaman pengguna untuk platform donasi digital yang mempermudah pengguna melakukan donasi secara online.",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    link: "",
  },
];

const technicalSkills = [
  "Python",
  "SQL",
  "PostgreSQL",
  "Data Analysis",
  "Data Visualization",
  "Machine Learning",
  "Dashboard Development",
  "UI/UX Design",
];

const tools = [
  "Looker Studio",
  "Microsoft Excel",
  "Figma",
  "Git & GitHub",
  "Jupyter Notebook",
  "Google Sheets",
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Time Management",
  "Adaptability",
];

const organizations = [
  {
    period: "September – November 2024",
    name: "Inagurasi Revolution of Data Science (RELOUD) 2024",
    role: "Divisi Acara",
    description:
      "Menyusun konsep dan rundown acara serta mengoordinasikan talent dan sesi awarding agar kegiatan berjalan lancar.",
  },
  {
    period: "Agustus 2025",
    name: "Orientasi Keluarga MIPA (ORIGAMIPA) 2025",
    role: "Divisi P20 (Perlengkapan, Perizinan, dan Operator)",
    description:
      "Mengelola kebutuhan logistik acara, menyusun spreadsheet operasional, serta bertugas sebagai operator OBS selama pelaksanaan acara.",
  },
  {
    period: "September 2025",
    name: "Revolution in Unity of Data Science (RELOUD) 2025",
    role: "Divisi Sponsorship & Humas",
    description:
      "Mendukung kegiatan sponsorship, berkoordinasi dengan pemateri, serta membantu pengajuan kerja sama dengan pihak eksternal.",
  },
];

const navigation = [
  { id: "profile", label: "Profil" },
  { id: "skills", label: "Keahlian" },
  { id: "organizations", label: "Organisasi" },
  { id: "experience", label: "Pengalaman" },
  { id: "projects", label: "Proyek" },
  { id: "contact", label: "Kontak" },
];

const filters = [
  "ALL",
  "DATA ANALYTICS",
  "DATA ENGINEERING",
  "MACHINE LEARNING",
  "DATA SCIENCE",
  "UI/UX DESIGN",
];

// Badge yang ditampilkan di sekitar foto profil.
const profileBadges = [
  {
    icon: "✳",
    label: "Data Analytics",
    position: "badge-top",
  },
  {
    icon: "⌘",
    label: "Machine Learning",
    position: "badge-right",
  },
  {
    icon: "▥",
    label: "Data Visualization",
    position: "badge-left",
  },
  {
    icon: "</>",
    label: "Development",
    position: "badge-bottom",
  },
  {
    icon: "SQL",
    label: "Database",
    position: "badge-top-left",
  },
  {
    icon: "✧",
    label: "UI/UX Design",
    position: "badge-bottom-right",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);

    const updateActiveSection = () => {
      if (window.scrollY < 120) {
        setActiveSection("");
        return;
      }

      const marker = 150;
      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= marker
        ) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const filteredProjects =
    activeFilter === "ALL"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main
      className={darkMode ? "portfolio dark" : "portfolio"}
      id="top"
    >
      {/* NAVIGATION */}
      <nav className="navbar" aria-label="Navigasi utama">
        <a
          href="#top"
          className="logo"
          aria-label="Tara, kembali ke atas"
        >
          tara<span>.</span>
        </a>

        <div className="nav-links">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeSection === item.id ? "active" : ""
              }
              aria-current={
                activeSection === item.id
                  ? "location"
                  : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="theme-toggle"
          onClick={() => setDarkMode((value) => !value)}
          aria-label={
            darkMode
              ? "Aktifkan mode terang"
              : "Aktifkan mode gelap"
          }
          title={darkMode ? "Mode terang" : "Mode gelap"}
          type="button"
        >
          {darkMode ? "☀" : "☾"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot" />
            PORTOFOLIO PRIBADI
          </div>

          <p className="hero-intro">Halo, saya</p>

          <h1>
            Tara<span className="accent">.</span>
            <br />
            <span className="outline-text">
              Data Enthusiast
            </span>
          </h1>

          <p className="hero-description">
            Mahasiswa Sains Data yang tertarik pada data
            analytics, machine learning, visualisasi data,
            dan pengembangan solusi digital yang bermanfaat.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              Lihat proyek <span>↗</span>
            </a>

            <a href="#contact" className="button-secondary">
              Hubungi saya
            </a>
          </div>

          <div className="hero-meta">
            <span>DATA ANALYTICS</span>
            <span>MACHINE LEARNING</span>
            <span>UI/UX DESIGN</span>
          </div>
        </div>

          <div className="hero-visual">
            <div className="profile-orbit" />

            <div className="profile-image-wrapper">
              <Image
                src={`${BASE_PATH}/images/profile.png`}
                alt="Foto profil Tara"
                fill
                priority
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 60vw, 35vw"
                className="profile-image"
              />
            </div>

            <div className="floating-badge badge-analytics">
              <span className="badge-icon">✳</span>
              <span>Data Analytics</span>
            </div>

            <div className="floating-badge badge-uiux">
              <span className="badge-icon">✧</span>
              <span>UI/UX Design</span>
            </div>

            <div className="floating-badge badge-development">
              <span className="badge-icon">&lt;/&gt;</span>
              <span>Development</span>
            </div>
          </div>

        <a href="#profile" className="scroll-indicator">
          <span>SCROLL UNTUK MELIHAT</span>
          <span className="scroll-line" />
        </a>
      </section>

      {/* PROFIL */}
      <section className="profile section" id="profile">
        <div className="section-heading">
          <span className="eyebrow">01 / PROFIL</span>

          <h2>
            Mengenal data.
            <br />
            <span className="muted-text">
              Menciptakan solusi.
            </span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            Saya adalah mahasiswa Sains Data yang memiliki
            ketertarikan pada analisis data, machine learning,
            visualisasi data, serta perancangan pengalaman
            pengguna. Saya senang mengeksplorasi data untuk
            menemukan pola dan insight yang dapat membantu
            proses pengambilan keputusan.
          </p>

          <p>
            Saya juga tertarik mengubah ide menjadi solusi
            digital yang mudah digunakan melalui perpaduan
            pemikiran analitis, kemampuan teknis, dan desain
            yang berorientasi pada pengguna.
          </p>
        </div>

        <div className="profile-facts">
          <div className="fact-card">
            <span className="fact-label">BIDANG UTAMA</span>
            <strong>Data Science</strong>
          </div>

          <div className="fact-card">
            <span className="fact-label">MINAT</span>
            <strong>Analytics & Machine Learning</strong>
          </div>

          <div className="fact-card">
            <span className="fact-label">PENDEKATAN</span>
            <strong>Data-driven & User-centered</strong>
          </div>
        </div>
      </section>

      {/* KEAHLIAN */}
      <section className="skills section" id="skills">
        <div className="section-heading">
          <span className="eyebrow">02 / KEAHLIAN</span>

          <h2>
            Skills &{" "}
            <span className="muted-text">expertise.</span>
          </h2>
        </div>

        <h3 className="subheading">Technical Skills</h3>

        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{skill}</span>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>

        <h3 className="subheading tools-heading">
          Tools & Technologies
        </h3>

        <div className="tag-list">
          {tools.map((tool) => (
            <span className="pill-tag" key={tool}>
              {tool}
            </span>
          ))}
        </div>

        <h3 className="subheading tools-heading">
          Soft Skills
        </h3>

        <div className="tag-list">
          {softSkills.map((skill) => (
            <span className="pill-tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ORGANISASI */}
      <section
        className="organizations section"
        id="organizations"
      >
        <div className="section-heading">
          <span className="eyebrow">
            03 / PENGALAMAN ORGANISASI
          </span>

          <h2>
            Growing through
            <br />
            <span className="muted-text">
              collaboration.
            </span>
          </h2>
        </div>

        <div className="experience-grid">
          {organizations.map((organization) => (
            <article
              className="experience-card"
              key={organization.name}
            >
              <span className="experience-period">
                {organization.period}
              </span>

              <h3>{organization.name}</h3>

              <span className="experience-role">
                {organization.role}
              </span>

              <p>{organization.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PENGALAMAN KERJA */}
      <section className="experience section" id="experience">
        <div className="section-heading">
          <span className="eyebrow">
            04 / PENGALAMAN KERJA
          </span>

          <h2>
            Digital operations.
            <br />
            <span className="muted-text">
              Data in action.
            </span>
          </h2>
        </div>

        <article className="experience-card featured-experience">
          <span className="experience-period">
            Juli – Agustus 2026 · Jakarta, Indonesia · Remote/WFA
          </span>

          <h3>PT Indosat Ooredoo Hutchison</h3>

          <span className="experience-role">
            Event Data Management & Digital Operations
          </span>

          <p>
            Mengelola dan memvalidasi data lebih dari 3.000
            peserta selama rangkaian kompetisi, memperbarui
            data peserta dan hasil kompetisi, membantu
            verifikasi reward, serta menyusun spreadsheet dan
            rekapitulasi untuk mendukung monitoring dan
            pelaporan event.
          </p>

          <div className="project-tags">
            <span>Data Management</span>
            <span>Spreadsheet</span>
            <span>Live Reporting</span>
            <span>Digital Operations</span>
          </div>
        </article>
      </section>

      {/* PROYEK */}
      <section className="projects section" id="projects">
        <div className="section-heading">
          <span className="eyebrow">05 / PROYEK PILIHAN</span>

          <h2>
            Projects that
            <br />
            <span className="muted-text">
              make an impact.
            </span>
          </h2>
        </div>

        <div
          className="project-filters"
          aria-label="Filter kategori proyek"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "filter-button active"
                  : "filter-button"
              }
              aria-pressed={activeFilter === filter}
            >
              {filter === "ALL" ? "SEMUA" : filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-top">
                <span className="project-number">
                  / {project.number}
                </span>

                {project.link ? (
                  <a
                    className="project-icon"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Lihat proyek ${project.title}`}
                  >
                    ↗
                  </a>
                ) : (
                  <span
                    className="project-icon"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                )}
              </div>

              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="project-note">
          Tautan demo dan repository dapat ditambahkan pada
          setiap proyek setelah URL tersedia.
        </p>
      </section>

      {/* KONTAK */}
      <section className="contact section" id="contact">
        <span className="eyebrow">06 / KONTAK</span>

        <h2>
          Punya ide?
          <br />
          <span className="muted-text">
            Mari terhubung.
          </span>
        </h2>

        <p>
          Terbuka untuk kesempatan, kolaborasi, dan proyek
          yang berkaitan dengan data, teknologi, serta desain
          digital.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:24031554107@mhs.unesa.ac.id"
            className="button-primary"
          >
            Kirim email <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tara-tabriza-296454430/"
            className="button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#top" className="logo">
          tara<span>.</span>
        </a>

        <p>Designed & built with curiosity.</p>

        <a href="#top" className="back-to-top">
          Kembali ke atas ↑
        </a>

        <span>© {new Date().getFullYear()} Tara</span>
      </footer>
    </main>
  );
}