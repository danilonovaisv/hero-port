# Hero Section - Setup Instructions

## Overview
A modern, production-ready HERO section with:
- Animated text with staggered letter animations
- Interactive 3D liquid glass globe that responds to scroll and mouse movement
- Smooth scroll-based transformations
- Fully responsive design

## Features Implemented

### 1. Text Animations
- Three-line animated title with custom colors
- Letter-by-letter stagger animation
- Mobile-optimized fade-in alternative
- Blue accent text: `#0057FF`
- Black text: `#111111`

### 2. 3D Interactive Globe
- Scroll-based rotation (2 full rotations during scroll)
- Mouse tracking for subtle tilt effects
- Liquid glass material with:
  - Transmission: 1 (fully transparent)
  - Chromatic aberration: 0.06
  - Distortion effects for liquid appearance
  - Temporal distortion for dynamic movement
- Fallback torus knot geometry (until model is added)

### 3. Scroll Animations
- Content fades out in first 15% of scroll
- 3D element scales from 0.25 to 1
- Smooth position transitions
- Border radius animation (rounded to square)

## 3D Model Setup

**Important:** Place your `torus_dan.glb` file in `/public/media/`

The component includes a fallback that displays a beautiful torus knot geometry until you add the actual model.

## Component Structure

```
src/components/
├── Hero.tsx              # Main hero section container
├── AnimatedTextLine.tsx  # Letter-by-letter text animation
├── HeroGlassCanvas.tsx   # 3D canvas wrapper
├── TorusDan.tsx          # 3D model with liquid glass material
└── Header.tsx            # Navigation header
```

## Customization

### Colors
- Blue accent: `#0057FF` (primary brand color)
- Black text: `#111111`
- Background: `bg-gray-100`

### Animation Timing
- Letter stagger: 0.04s
- Section scroll height: 450vh
- Content fade: 0-15% of scroll
- Scale animation: 0-25% of scroll

### 3D Material Properties
Adjust in `TorusDan.tsx`:
- `transmission`: Glass transparency
- `roughness`: Surface smoothness
- `thickness`: Glass depth
- `chromaticAberration`: Color separation
- `distortion`: Liquid wave effect

## Performance Optimizations

- Lazy loading of 3D model
- Suspense boundaries
- Optimized material sampling (16 samples)
- Throttled mouse tracking
- Mobile-simplified animations

## Browser Support

- Modern browsers with WebGL support
- Fallback for 3D model loading failures
- Responsive from mobile to desktop

## Next Steps

1. Download `torus_dan.glb` from Google Drive
2. Place it in `/public/media/`
3. The component will automatically detect and use it
4. Adjust colors/timing to match your brand
5. Add additional sections below the hero

## Tips

- The section height (450vh) creates the long scroll effect
- Adjust `scrollYProgress` offsets for different animation timing
- Mouse influence is set to 0.1 for subtle interaction
- The globe continuously rotates on Z-axis for liquid effect
