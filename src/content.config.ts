import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commonStatus = z.enum(['draft', 'published']).default('draft');

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reviews' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: commonStatus,
    brand: z.string().optional(),
    category: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().default(''),
    amazonUrl: z.string().default('#'),
    ctaText: z.string().default('Check price on Amazon'),
    badge: z.string().default('Product Review'),
    verdict: z.string(),
    bestFor: z.string(),
    avoidIf: z.string(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    features: z.array(z.string()).default([]),
    specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    author: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: commonStatus,
    category: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string().default(''),
    readTime: z.string().default('8 min read'),
    author: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
  })
});

const comparisons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/comparisons' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: commonStatus,
    category: z.string(),
    productA: z.string(),
    productB: z.string(),
    excerpt: z.string(),
    winner: z.string(),
    rows: z.array(z.object({
      feature: z.string(),
      a: z.string(),
      b: z.string()
    })).default([]),
    amazonUrlA: z.string().optional(),
    amazonUrlB: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    publishedAt: z.coerce.date().optional()
  })
});

const deals = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/deals' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    status: commonStatus,
    category: z.string(),
    image: z.string(),
    imageAlt: z.string().default(''),
    excerpt: z.string(),
    amazonUrl: z.string(),
    dealLabel: z.string().default('Featured Deal'),
    expiryNote: z.string().optional(),
    publishedAt: z.coerce.date().optional()
  })
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    seoDescription: z.string(),
    updatedAt: z.coerce.date().optional()
  })
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    icon: z.string(),
    description: z.string(),
    order: z.number().default(99)
  })
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/authors' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    role: z.string().default('Editor'),
    image: z.string().optional(),
    bio: z.string()
  })
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    socialBrandName: z.string().default('TechTroveStore'),
    tagline: z.string(),
    businessEmail: z.string(),
    amazonTag: z.string().optional(),
    facebookUrl: z.string().optional(),
    pinterestUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    homepageTitle: z.string(),
    homepageDescription: z.string(),
    heroHeading: z.string(),
    heroText: z.string(),
    heroImage: z.string().default('/images/techtrovestore-cover.png'),
    primaryCtaText: z.string().default('Explore reviews'),
    primaryCtaUrl: z.string().default('/reviews/')
  })
});

export const collections = {
  reviews,
  guides,
  comparisons,
  deals,
  pages,
  categories,
  authors,
  settings
};
