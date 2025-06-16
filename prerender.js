
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Define all routes from App.tsx
const routesToPrerender = [
  '/',
  '/how-it-works',
  '/pricing',
  '/booking',
  '/booking-facebook',
  '/booking-google',
  '/services',
  '/projects',
  '/service-areas',
  '/contact',
  '/blog',
  '/privacy',
  '/terms',
  '/accessibility',
  // Service category pages
  '/services/furniture-junk-removal',
  '/services/appliance-removal',
  '/services/electronic-waste-removal',
  '/services/outdoor-item-removal',
  '/services/construction-debris-removal',
  '/services/estate-cleanout-services',
  // NEW: Phase 2 Secondary Category Pages
  '/residential-junk-removal-cincinnati',
  '/commercial-junk-removal-cincinnati',
  '/estate-cleanout-services-cincinnati',
  '/light-demolition-services-cincinnati',
  '/appliance-furniture-removal-cincinnati',
  // Neighborhood SEO pages
  '/junk-removal-over-the-rhine',
  '/junk-removal-downtown-cincinnati',
  '/junk-removal-hyde-park',
  '/junk-removal-oakley',
  '/junk-removal-mount-adams',
  '/junk-removal-clifton',
  '/junk-removal-walnut-hills',
  '/junk-removal-blue-ash',
  '/junk-removal-mason',
  '/junk-removal-west-chester'
];

// Function to ensure directory exists
const ensureDirectoryExists = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

(async () => {
  for (const url of routesToPrerender) {
    try {
      const appHtml = render(url);
      const html = template.replace('<!--app-html-->', appHtml);

      // Determine the file path
      let filePath;
      if (url === '/') {
        filePath = 'dist/index.html';
      } else {
        // Remove leading slash and add .html extension
        const cleanUrl = url.substring(1);
        filePath = `dist/${cleanUrl}.html`;
      }

      const absoluteFilePath = toAbsolute(filePath);
      
      // Ensure the directory exists before writing the file
      ensureDirectoryExists(absoluteFilePath);
      
      fs.writeFileSync(absoluteFilePath, html);
      console.log('pre-rendered:', filePath);
    } catch (error) {
      console.error(`Error pre-rendering ${url}:`, error);
    }
  }
})();
