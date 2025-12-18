# Photo Directories for Wedding Invitation

This folder contains all the images for your wedding invitation website.

## Directory Structure

```
public/images/
├── gallery/          # Main gallery photos (engagement, pre-wedding, etc.)
├── haldi/            # Haldi ceremony photos
├── mehendi/          # Mehendi ceremony photos  
├── sangeet/          # Sangeet night photos
└── wedding/          # Wedding ceremony photos
```

## How to Add Photos

1. **Gallery photos**: Add your engagement/pre-wedding photos to `gallery/` folder
   - Recommended: 8-12 photos
   - Name them: `photo-1.jpg`, `photo-2.jpg`, etc.
   - Supported formats: .jpg, .jpeg, .png, .webp

2. **Event-specific photos**: Add to respective folders as needed
   - These can be used later for individual event pages

## Recommended Image Sizes

- **Gallery images**: 800x800px or 1200x800px (landscape/square works best)
- **Hero/Banner images**: 1920x1080px
- **Thumbnails**: 400x400px

## Current Status

The gallery currently uses placeholder images from Unsplash. Once you add your own photos to the `gallery/` folder, update the `Gallery.tsx` component to reference your local images.

Example update in Gallery.tsx:
```tsx
const galleryImages = [
  { id: 1, src: "/images/gallery/photo-1.jpg", alt: "Engagement photo", category: "portraits" },
  { id: 2, src: "/images/gallery/photo-2.jpg", alt: "Pre-wedding shoot", category: "portraits" },
  // ... add more
];
```
