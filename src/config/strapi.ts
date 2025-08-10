// Strapi CMS Configuration
// Update these values with your actual Strapi instance details

export const strapiConfig = {
  // Your Strapi instance URL (replace with your actual Railway URL)
  baseUrl: 'https://iti-strapi-production.up.railway.app',
  
  // Strapi API token (optional, for authenticated requests)
  apiToken: process.env.STRAPI_API_TOKEN || '',
  
  // Content types you want to fetch from Strapi
  contentTypes: {
    articles: 'articles',
    pages: 'pages',
    'site-settings': 'site-settings',
  },
  
  // API endpoints
  endpoints: {
    articles: '/api/articles',
    pages: '/api/pages',
    'site-settings': '/api/site-settings',
    upload: '/api/upload',
  },
  
  // Admin panel URL
  adminUrl: '/admin',
  
  // Media settings
  media: {
    baseUrl: 'https://iti-strapi-production.up.railway.app',
    uploadEndpoint: '/api/upload',
  },
};

// Helper function to get full API URL
export const getStrapiUrl = (endpoint: string): string => {
  return `${strapiConfig.baseUrl}${endpoint}`;
};

// Helper function to get admin panel URL
export const getStrapiAdminUrl = (): string => {
  return `${strapiConfig.baseUrl}${strapiConfig.adminUrl}`;
};

// Helper function to get media URL
export const getMediaUrl = (path: string): string => {
  if (path.startsWith('http')) {
    return path;
  }
  return `${strapiConfig.media.baseUrl}${path}`;
};
