export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  client: string;
  role: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "lumina-brand-identity",
    title: "Lumina Brand Identity",
    category: "Branding",
    year: "2024",
    description: "A complete visual identity system for a luxury lighting brand.",
    longDescription:
      "Lumina is a luxury lighting company that needed a visual identity reflecting elegance and innovation. The project spanned logo design, typography systems, color palettes, stationery, and comprehensive brand guidelines. Every element was crafted to evoke warmth, sophistication, and the transformative power of light.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
    ],
    client: "Lumina Lighting Co.",
    role: "Brand Designer",
    tools: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 2,
    slug: "velocity-app-design",
    title: "Velocity App Design",
    category: "UI/UX",
    year: "2024",
    description: "End-to-end mobile experience for a fitness tracking platform.",
    longDescription:
      "Velocity is a fitness tracking app designed to motivate and empower users. I led the full UI/UX process—from user research and wireframes to high-fidelity prototypes and developer handoff. The design focuses on clarity, gamification, and a vibrant visual system that energizes the workout experience.",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    ],
    client: "Velocity Inc.",
    role: "UI/UX Designer",
    tools: ["Figma", "Protopie", "After Effects"],
  },
  {
    id: 3,
    slug: "horizon-packaging",
    title: "Horizon Packaging",
    category: "Packaging",
    year: "2023",
    description: "Sustainable packaging design for an eco-conscious skincare line.",
    longDescription:
      "Horizon is an eco-conscious skincare brand committed to sustainability. The packaging design uses recycled materials, soy-based inks, and a minimalist aesthetic that communicates purity and environmental responsibility. The system was designed to feel premium while remaining fully compostable.",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=1200&h=800&fit=crop",
    ],
    client: "Horizon Naturals",
    role: "Packaging Designer",
    tools: ["Illustrator", "Dimension", "InDesign"],
  },
  {
    id: 4,
    slug: "echo-music-festival",
    title: "Echo Music Festival",
    category: "Event Design",
    year: "2023",
    description: "Full creative direction for an underground electronic music festival.",
    longDescription:
      "Echo is an underground electronic music festival that celebrates sonic exploration. I handled the complete creative direction—from poster design and wayfinding to stage visuals and digital assets. The visual language draws from glitch art, brutalist typography, and neon color palettes to capture the festival's raw, immersive energy.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop",
    ],
    client: "Echo Events",
    role: "Creative Director",
    tools: ["Photoshop", "After Effects", "Cinema 4D"],
  },
  {
    id: 5,
    slug: "verde-organic",
    title: "Verde Organic",
    category: "Branding",
    year: "2023",
    description: "Farm-to-table restaurant identity with organic visual language.",
    longDescription:
      "Verde is a farm-to-table restaurant that celebrates fresh, locally sourced ingredients. The identity uses hand-drawn illustrations, earthy tones, and textured paper stocks to create a warm, inviting brand that feels rooted in nature. Deliverables included logo, menu design, signage, and social media templates.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1200&h=800&fit=crop",
    ],
    client: "Verde Restaurant Group",
    role: "Brand Designer",
    tools: ["Illustrator", "Photoshop", "Procreate"],
  },
  {
    id: 6,
    slug: "pulse-fitness-app",
    title: "Pulse Fitness App",
    category: "UI/UX",
    year: "2022",
    description: "Health and wellness platform with gamified workout experiences.",
    longDescription:
      "Pulse is a health and wellness platform that turns workouts into a game. I designed the end-to-end experience—including onboarding, workout tracking, social challenges, and achievement systems. The dark-mode-first interface uses bold accent colors and fluid animations to keep users engaged and motivated.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    ],
    client: "Pulse Health Ltd.",
    role: "Lead UI Designer",
    tools: ["Figma", "Principle", "Lottie"],
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
