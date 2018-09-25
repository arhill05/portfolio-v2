import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'sans-serif'],
  bodyColor: '#444',
  headerWeight: '700',
  bodyWeight: '400',
  boldWeight: '700',
  googleFonts: [
    {
      name: 'Lato',
      styles: [
        '400',
        '700',
        '800'
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400','700','800'
      ]
    }
  ],
  overrideStyles: (options => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1
    },
    a: {
      color: '#FF9D00'
    },
    'a:hover,a:active': {
      color: options.bodyColor
    }
  }))
});

export default typography;
