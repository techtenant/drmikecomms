'use client';
import { useState, useEffect } from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ContrastIcon from '@mui/icons-material/Contrast';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import LinkIcon from '@mui/icons-material/Link';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import KeyboardIcon from '@mui/icons-material/Keyboard';

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    highContrast: false,
    grayscale: false,
    textSpacing: false,
    highlightLinks: false,
    readableFont: false,
    keyboardNav: true
  });

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      setSettings(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    // Apply settings to document
    applySettings();
    // Save settings
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings]);

  const applySettings = () => {
    const root = document.documentElement;
    
    // Font size
    root.style.fontSize = `${settings.fontSize}%`;
    
    // High contrast
    if (settings.highContrast) {
      root.style.filter = 'contrast(1.5)';
    } else if (settings.grayscale) {
      root.style.filter = 'grayscale(100%)';
    } else {
      root.style.filter = 'none';
    }
    
    // Text spacing
    if (settings.textSpacing) {
      root.style.letterSpacing = '0.12em';
      root.style.wordSpacing = '0.16em';
      root.style.lineHeight = '1.8';
    } else {
      root.style.letterSpacing = '';
      root.style.wordSpacing = '';
      root.style.lineHeight = '';
    }
    
    // Highlight links
    if (settings.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
    
    // Readable font
    if (settings.readableFont) {
      root.style.fontFamily = 'Arial, sans-serif';
    } else {
      root.style.fontFamily = '';
    }

    // Keyboard navigation focus
    if (settings.keyboardNav) {
      document.body.classList.add('keyboard-nav-enabled');
    } else {
      document.body.classList.remove('keyboard-nav-enabled');
    }
  };

  const increaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.min(prev.fontSize + 10, 150) }));
  };

  const decreaseFontSize = () => {
    setSettings(prev => ({ ...prev, fontSize: Math.max(prev.fontSize - 10, 80) }));
  };

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
      // Disable conflicting settings
      ...(key === 'highContrast' && !prev[key] ? { grayscale: false } : {}),
      ...(key === 'grayscale' && !prev[key] ? { highContrast: false } : {})
    }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      highContrast: false,
      grayscale: false,
      textSpacing: false,
      highlightLinks: false,
      readableFont: false,
      keyboardNav: true
    });
  };

  const features = [
    {
      icon: <ZoomInIcon />,
      label: 'Increase Text',
      action: increaseFontSize,
      type: 'button'
    },
    {
      icon: <ZoomOutIcon />,
      label: 'Decrease Text',
      action: decreaseFontSize,
      type: 'button'
    },
    {
      icon: <ContrastIcon />,
      label: 'High Contrast',
      setting: 'highContrast',
      type: 'toggle'
    },
    {
      icon: <InvertColorsIcon />,
      label: 'Grayscale',
      setting: 'grayscale',
      type: 'toggle'
    },
    {
      icon: <FormatSizeIcon />,
      label: 'Text Spacing',
      setting: 'textSpacing',
      type: 'toggle'
    },
    {
      icon: <LinkIcon />,
      label: 'Highlight Links',
      setting: 'highlightLinks',
      type: 'toggle'
    },
    {
      icon: <TextFieldsIcon />,
      label: 'Readable Font',
      setting: 'readableFont',
      type: 'toggle'
    },
    {
      icon: <KeyboardIcon />,
      label: 'Keyboard Focus',
      setting: 'keyboardNav',
      type: 'toggle'
    }
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-clinic-blue text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform focus:outline-none focus:ring-4 focus:ring-clinic-light"
        aria-label="Accessibility Options"
        title="Accessibility Options"
      >
        <AccessibilityNewIcon sx={{ fontSize: 32 }} />
      </button>

      {/* Toolbar Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 w-80 max-h-[80vh] overflow-y-auto border-4 border-clinic-blue">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <AccessibilityNewIcon className="text-clinic-blue" sx={{ fontSize: 32 }} />
                <h3 className="text-xl font-bold text-clinic-dark">Accessibility</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition p-1"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Font Size Display */}
            <div className="bg-clinic-light/20 rounded-lg p-4 mb-6 text-center">
              <div className="text-sm text-gray-600 mb-1">Text Size</div>
              <div className="text-3xl font-bold text-clinic-blue">{settings.fontSize}%</div>
            </div>

            {/* Features Grid */}
            <div className="space-y-3 mb-6">
              {features.map((feature, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (feature.type === 'button') {
                      feature.action();
                    } else {
                      toggleSetting(feature.setting);
                    }
                  }}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                    feature.type === 'toggle' && settings[feature.setting]
                      ? 'bg-clinic-blue text-white border-clinic-blue'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-clinic-blue hover:bg-gray-50'
                  }`}
                >
                  <div className="text-2xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold">{feature.label}</div>
                  </div>
                  {feature.type === 'toggle' && (
                    <div className={`w-12 h-6 rounded-full transition-all ${
                      settings[feature.setting] ? 'bg-white' : 'bg-gray-300'
                    }`}>
                      <div className={`w-5 h-5 rounded-full bg-clinic-blue transition-transform ${
                        settings[feature.setting] ? 'translate-x-6' : 'translate-x-1'
                      } mt-0.5`}></div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSettings}
              className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
            >
              <RestartAltIcon />
              Reset All Settings
            </button>

            {/* Help Text */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Settings are saved automatically. Use Tab key to navigate. 
                For more info, visit our <a href="/accessibility" className="text-clinic-blue underline">Accessibility page</a>.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Skip to Content Link (for keyboard users) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-clinic-blue text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-4 focus:ring-clinic-light"
      >
        Skip to main content
      </a>

      <style jsx global>{`
        /* Highlight links when enabled */
        body.highlight-links a {
          background-color: yellow !important;
          color: #000 !important;
          text-decoration: underline !important;
          font-weight: bold !important;
        }

        /* Enhanced keyboard navigation focus */
        body.keyboard-nav-enabled *:focus {
          outline: 3px solid #1e4a6b !important;
          outline-offset: 2px !important;
        }

        /* Screen reader only utility class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .sr-only:not(:focus):not(:active) {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
      `}</style>
    </>
  );
}