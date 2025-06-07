document.addEventListener("DOMContentLoaded", () => {
  setLanguage('en'); // idioma padrão
});

const translations = {
  pt: {
    menu: {
      home: "início",
      about: "sobre",
      skills: "habilidades",
      work: "projetos",
      contact: "contato"
    },
    hero: {
      title: "Desenvolvedor Full-Stack",
      subtitle: "Foco em soluções completas, com experiência em suporte técnico e desenvolvimento web.",
      button: "Vamos conversar!"
    },
    about: {
      h2: "Sobre",
      p: "Sou Luan Dias Brito, um desenvolvedor full-stack em constante crescimento. Tenho experiência em suporte técnico, manutenção de computadores e atualmente trabalho com tecnologias como HTML, CSS, JavaScript, Python e bancos de dados como MySQL. Estou cursando Engenharia de Software e estou sempre em busca de novos desafios e oportunidades para aprender."
    },
    skills: {
      title: "Minhas Habilidades",
      technologies: "Tecnologias",
      soft: "Habilidades Interpessoais",
      tools: "Ferramentas",
      liCloud: "Cloud (basico)",
      liProa: "Proatividade",
      liTeam: "Trabalho em equipe",
      liCommun: "Comunicação",
      liFig: "Figma (basico)"
    }
    ,
    work: {
      h2: "Projetos",
      h3: "Sistema de Suporte Técnico",
      p: "Aplicativo para registro de chamados e acompanhamento do suporte em tempo real.",
      a: "Ver Projeto"
    },

    work2: {
      h3: "Site Institucional.",
      p: "Site responsivo para pequena empresa de tecnologia. Desenvolvido com HTML, CSS e JS.",
      a: "Ver Projeto"
    },

    contact: {
      h2: "Contatos",
      p1: "Vamos conversar sobre oportunidades, ideias ou projetos?",
      p2: "Email: luandb90@gmail.com",
      p3: "Telefone: +55 (11) 94457-4807",
      p4: "LinkedIn: luan-dias-brito",
    },
    // Adicione mais traduções aqui conforme precisar
  },
  en: {
    menu: {
      home: "Home",
      about: "About",
      skills: "Skills",
      work: "Work",
      contact: "Contact"
    },
    hero: {
      title: "Full-Stack Developer",
      subtitle: "Focus on complete solutions, with experience in technical support and web development.",
      button: "Let's talk!"
    },
    about: {
      h2: "About",
      p: "I'm Luan Dias Brito, a full-stack developer in constant growth. I have experience in technical support, computer maintenance, and currently work with technologies such as HTML, CSS, JavaScript, Python, and databases like MySQL. I'm studying Software Engineering and always looking for new challenges and opportunities to learn."
    },
    skills: {
      title: "My Skills",
      technologies: "Technologies",
      soft: "Soft Skills",
      tools: "Tools",
      liCloud: "Cloud (basico)",
      liProa: "Proactivity",
      liTeam: "Teamwork",
      liCommun: "Communication",
      liFig: "Figma (basic)",
    },

    work: {
      h2: "Work",
      h3: "Technical Support System.",
      p: "Responsive website for a small technology company. Developed with HTML, CSS, and JS.",
      a: "View Project"
    },

    work2: {
      h3: "Institutional Website.",
      p: "Application for logging tickets and tracking support in real time.",
      a: "View Project"
    },

    contact: {
      h2: "Contact",
      p1: "Shall we talk about opportunities, ideas, or projects?",
      p2: "Email: luandb90@gmail.com",
      p3: "Telephone: +55 (11) 94457-4807",
      p4: "LinkedIn: luan-dias-brito",
    },
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keys = el.getAttribute("data-i18n").split(".");
    let text = translations[lang];
    keys.forEach(k => {
      text = text[k];
    });
    el.textContent = text;

  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-card').forEach(card => {
  observer.observe(card);
});

