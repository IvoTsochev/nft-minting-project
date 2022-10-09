import { createCurrentUserHook, createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  useCdn: process.env.NDDE_ENV === 'production',
};

export const sanityClient = createClient(config);

// Helper function for easily building image URLs for your Sanity
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
