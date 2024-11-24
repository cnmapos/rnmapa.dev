import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "React Native Mapa",
  description: "React Native Map SDK for iOS and Android",
  themeConfig: {
    logo: '/assets/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: '/docs/apis' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is React Native Mapa', link: '/docs/' },
          { text: 'Installation', link: '/docs/install' },
          { text: 'API Collection', link: '/docs/apis' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Mapview', link: '/docs/MapView' },
          { text: 'Camera', link: '/docs/Camera' },
          { text: 'Background', link: '/docs/Background' },
          { text: 'Location', link: '/docs/Location' },
          { text: 'ZoomInOut', link: '/docs/ZoomInOut' },
          { text: 'Compass', link: '/docs/Compass' },
          { text: 'Scalebar', link: '/docs/Scalebar' },
          { text: 'POIFinder', link: '/docs/POIFinder' },
          { text: 'Weather', link: '/docs/Weather' },
          { text: 'Images', link: '/docs/image/Images' },
          { text: 'Image', link: '/docs/image/Image' },
          { text: 'Marker', link: '/docs/Marker' }
        ]
      },
      {
        text: 'Sources',
        items: [
          { text: 'VectorSource', link: '/docs/VectorSource' },
          { text: 'RasterSource', link: '/docs/RasterSource' },
          { text: 'GeoJSONSource', link: '/docs/GeoJSONSource' },
          { text: 'ImageSource', link: '/docs/image/ImageSource' }
        ]
      },
      {
        text: 'Layers',
        items: [
          { text: 'LineLayer', link: '/docs/LineLayer' },
          { text: 'FillLayer', link: '/docs/FillLayer' },
          { text: 'SymbolLayer', link: '/docs/SymbolLayer' },
          { text: 'RasterLayer', link: '/docs/RasterLayer' },
          { text: 'CircleLayer', link: '/docs/CircleLayer' },
          { text: 'FillExtrusionLayer', link: '/docs/FillExtrusionLayer' },
          { text: 'ModelLayer', link: '/docs/ModelLayer' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})