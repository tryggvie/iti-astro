# Strapi CMS Setup for ITI Astro Project

This guide will help you configure your Astro project to use Strapi CMS instead of Decap CMS.

## What Changed

- ✅ Removed all Decap CMS configurations and files
- ✅ Updated admin pages to redirect to Strapi
- ✅ Created Strapi configuration file
- ✅ Cleaned up unused CMS files

## Configuration Steps

### 1. Update Strapi URL

You need to update the Strapi URL in these files with your actual Railway URL:

- `src/config/strapi.ts` - Main configuration file
- `src/pages/admin.astro` - Admin page
- `public/admin.html` - Admin HTML file

Replace `https://your-strapi-railway-url.com` with your actual Railway URL, which should look like:
```
https://your-app-name.railway.app
```

### 2. Set Up Strapi Content Types

In your Strapi admin panel, create the following content types to match your existing content structure:

#### Articles
- Title (Text)
- Summary (Long Text)
- Date (Date)
- Category (Enumeration: celestial-events, geological-formations, historical-figures, scientific-principles, tech-concepts)
- Tags (JSON)
- Body (Rich Text)
- SEO Title (Text, optional)
- SEO Description (Long Text, optional)
- Schema Markup (JSON, optional)

#### Pages
- Title (Text)
- Description (Long Text)
- Hero Title (Text)
- Hero Description (Long Text)
- Categories (Component: name, icon, link)
- Latest Articles (Component: title, summary, date, link)

#### Site Settings
- Site Title (Text)
- Site Description (Long Text)
- Brand Colors (Component: primary, secondary)
- Footer Text (Long Text)
- Footer Tagline (Long Text)

### 3. Environment Variables (Optional)

If you want to use API tokens for authenticated requests, add this to your `.env` file:

```env
STRAPI_API_TOKEN=your_strapi_api_token_here
```

### 4. Update Content Fetching

You'll need to update your Astro pages to fetch content from Strapi instead of the local markdown files. Here's an example:

```typescript
// Before (local markdown)
import { getEntry } from 'astro:content';
const homepage = await getEntry('pages', 'homepage');

// After (Strapi API)
import { getStrapiUrl } from '../config/strapi';

export async function getStaticProps() {
  const response = await fetch(getStrapiUrl('/api/pages?filters[slug][$eq]=homepage'));
  const data = await response.json();
  return { props: { page: data.data[0] } };
}
```

## Accessing Strapi Admin

1. Go to `/admin` on your Astro site
2. Click "Open Strapi Admin" button
3. This will open your Strapi admin panel in a new tab

## Benefits of Using Strapi

- 🎯 **Visual Content Editor**: Rich text editor with media management
- 🔐 **User Management**: Multiple user roles and permissions
- 📱 **API-First**: REST and GraphQL APIs out of the box
- 🖼️ **Media Library**: Built-in image and file management
- 🔌 **Plugin System**: Extensible with plugins and custom fields
- ☁️ **Cloud Hosting**: Easy deployment on Railway

## Next Steps

1. Update the Strapi URLs in the configuration files
2. Set up your content types in Strapi
3. Migrate your existing content to Strapi
4. Update your Astro pages to fetch from Strapi API
5. Test the content management workflow

## Troubleshooting

- **CORS Issues**: Make sure your Strapi instance allows requests from your Astro domain
- **API Endpoints**: Verify that your content types are published and accessible via the API
- **Media URLs**: Check that media files are being served correctly from Strapi

## Support

If you encounter any issues:
1. Check the Strapi documentation: https://docs.strapi.io/
2. Verify your Railway deployment is running correctly
3. Check the browser console for any JavaScript errors
