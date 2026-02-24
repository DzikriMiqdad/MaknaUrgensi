const defaultConfig = {
  main_title: 'Makna & Urgensi Syahadatain',
  subtitle: 'Memahami fondasi utama keimanan dalam Islam melalui dua kalimat syahadat yang menjadi pintu gerbang menuju cahaya hidayah',
  course_name: 'Mata Kuliah Agama Islam',
  footer_text: 'Mata Kuliah Pendidikan Agama Islam — Makna dan Urgensi Syahadatain',
  background_color: '#0a1628',
  surface_color: '#162a4a',
  text_color: '#94a3b8',
  primary_action: '#D4AF37',
  secondary_action: '#B8860B',
  font_family: 'Noto Sans Arabic',
  font_size: 16
};

async function onConfigChange(config) {
  const mainTitle = document.getElementById('main-title');
  const subtitle = document.getElementById('subtitle');
  const courseBadge = document.getElementById('course-badge');
  const footerText = document.getElementById('footer-text');

  if (mainTitle) mainTitle.textContent = config.main_title || defaultConfig.main_title;
  if (subtitle) subtitle.textContent = config.subtitle || defaultConfig.subtitle;
  if (courseBadge) courseBadge.textContent = config.course_name || defaultConfig.course_name;
  if (footerText) footerText.textContent = config.footer_text || defaultConfig.footer_text;

  // Apply colors
  document.documentElement.style.setProperty('--bg-color', config.background_color || defaultConfig.background_color);
  document.documentElement.style.setProperty('--surface-color', config.surface_color || defaultConfig.surface_color);
  document.documentElement.style.setProperty('--text-color', config.text_color || defaultConfig.text_color);
  document.documentElement.style.setProperty('--primary-action', config.primary_action || defaultConfig.primary_action);
  document.documentElement.style.setProperty('--secondary-action', config.secondary_action || defaultConfig.secondary_action);

  // Apply font
  const fontFamily = config.font_family || defaultConfig.font_family;
  const baseFontStack = 'Noto Sans Arabic, sans-serif';
  document.body.style.fontFamily = `${fontFamily}, ${baseFontStack}`;

  // Apply font size scaling
  const baseSize = config.font_size || defaultConfig.font_size;
  document.documentElement.style.fontSize = `${baseSize}px`;
}

function mapToCapabilities(config) {
  return {
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (value) => {
          config.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (value) => {
          config.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (value) => {
          config.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => config.primary_action || defaultConfig.primary_action,
        set: (value) => {
          config.primary_action = value;
          window.elementSdk.setConfig({ primary_action: value });
        }
      },
      {
        get: () => config.secondary_action || defaultConfig.secondary_action,
        set: (value) => {
          config.secondary_action = value;
          window.elementSdk.setConfig({ secondary_action: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (value) => {
        config.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (value) => {
        config.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(config) {
  return new Map([
    ['main_title', config.main_title || defaultConfig.main_title],
    ['subtitle', config.subtitle || defaultConfig.subtitle],
    ['course_name', config.course_name || defaultConfig.course_name],
    ['footer_text', config.footer_text || defaultConfig.footer_text]
  ]);
}

// Initialize SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});