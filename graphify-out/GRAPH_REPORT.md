# Graph Report - .  (2026-07-29)

## Corpus Check
- 34 files · ~115,513 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 164 nodes · 215 edges · 27 communities (17 shown, 10 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.76)
- Token cost: 0 input · 269,621 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Homepage Section Composition|Homepage Section Composition]]
- [[_COMMUNITY_Profile & About Interactions|Profile & About Interactions]]
- [[_COMMUNITY_Card Components (BlogProjectContact)|Card Components (Blog/Project/Contact)]]
- [[_COMMUNITY_Reference Screenshot Kristi.digital Portfolio|Reference Screenshot: Kristi.digital Portfolio]]
- [[_COMMUNITY_Form UI Primitives|Form UI Primitives]]
- [[_COMMUNITY_Shuffle Text Animation|Shuffle Text Animation]]
- [[_COMMUNITY_Reference Screenshot SharinXDC Wallet App|Reference Screenshot: SharinXDC Wallet App]]
- [[_COMMUNITY_Reference Screenshot Pulsar-Ai Landing Page|Reference Screenshot: Pulsar-Ai Landing Page]]
- [[_COMMUNITY_App Bootstrap & Theming|App Bootstrap & Theming]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Navbar & Theme Toggle|Navbar & Theme Toggle]]
- [[_COMMUNITY_Reference Diagram Java Server Threading|Reference Diagram: Java Server Threading]]
- [[_COMMUNITY_README  Deployment Notes|README / Deployment Notes]]
- [[_COMMUNITY_Reference Diagram MPA vs SPA|Reference Diagram: MPA vs SPA]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Next.js Config|Next.js Config]]
- [[_COMMUNITY_Root Layout & Providers|Root Layout & Providers]]
- [[_COMMUNITY_Tailwind Config (doc)|Tailwind Config (doc)]]
- [[_COMMUNITY_PostCSS Config (doc)|PostCSS Config (doc)]]
- [[_COMMUNITY_ESLint Config (doc)|ESLint Config (doc)]]
- [[_COMMUNITY_Next.js Config (doc)|Next.js Config (doc)]]
- [[_COMMUNITY_cn Utility|cn Utility]]
- [[_COMMUNITY_Developer Profile Photo|Developer Profile Photo]]
- [[_COMMUNITY_Reference Screenshot SocialSync Dashboard|Reference Screenshot: SocialSync Dashboard]]

## God Nodes (most connected - your core abstractions)
1. `Home Page Component` - 8 edges
2. `ContactSection` - 7 edges
3. `kristi.digital Portfolio Website (Screenshot)` - 7 edges
4. `cn()` - 6 edges
5. `Reveal()` - 6 edges
6. `ProjectsSection Component` - 6 edges
7. `Reveal Component` - 6 edges
8. `FloatingShapes` - 6 edges
9. `Navbar` - 6 edges
10. `RevealGroup()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `useMousePosition Hook` --semantically_similar_to--> `ProjectCard Component`  [INFERRED] [semantically similar]
  app/hooks/use-mouse-position.ts → components/project-card.tsx
- `BlogCard()` --calls--> `cn()`  [EXTRACTED]
  components/blog-card.tsx → lib/utils.ts
- `Home Page Component` --calls--> `ContactSection`  [EXTRACTED]
  app/page.tsx → components/contact-section.tsx
- `Shuffle Text Animation Component` --semantically_similar_to--> `Reveal Component`  [INFERRED] [semantically similar]
  components/Shuffle.tsx → components/reveal.tsx
- `Home Page Component` --calls--> `Navbar`  [EXTRACTED]
  app/page.tsx → components/navbar.tsx

## Hyperedges (group relationships)
- **Next.js App Bootstrap and Theming Chain** — next_config_nextconfig, layout_rootlayout, providers_providers, page_home [INFERRED 0.85]
- **Scroll Reveal Animation Composition** — projects_section_projectssection, reveal_reveal, reveal_revealgroup, reveal_revealitem [EXTRACTED 1.00]
- **Reveal-based scroll-in animation pattern shared across sections** — about_section_aboutsection, skills_section_skillssection, blog_section_blogsection, contact_section_contactsection, reveal_reveal, reveal_revealgroup, reveal_revealitem [EXTRACTED 0.90]
- **shadcn-style neo-brutalist form control primitives (Button, Input, Textarea) consumed by ContactSection and BlogCard** — button_button, input_input, textarea_textarea, contact_section_contactsection, blog_card_blogcard [INFERRED 0.85]
- **GSAP pointer/mouse-driven parallax and tilt micro-interaction pattern** — floating_shapes_floatingshapes, floating_shapes_handlepointermove, developer_profile_developerprofile, developer_profile_handlemove [INFERRED 0.85]

## Communities (27 total, 10 thin omitted)

### Community 0 - "Homepage Section Composition"
Cohesion: 0.12
Nodes (19): AboutSection(), timeline, BlogSection(), featuredPosts, colorClass, DoodleShape, FloatingShapes(), shapes (+11 more)

### Community 1 - "Profile & About Interactions"
Cohesion: 0.13
Nodes (24): AboutSection, timeline, BlogSection, featuredPosts, DeveloperProfile, handleMove, socials, FloatingShapes (+16 more)

### Community 2 - "Card Components (Blog/Project/Contact)"
Cohesion: 0.2
Nodes (11): BlogCard(), BlogCardProps, ContactSection(), ProjectCard(), ProjectCardProps, cn(), Button, ButtonProps (+3 more)

### Community 3 - "Reference Screenshot: Kristi.digital Portfolio"
Cohesion: 0.18
Nodes (13): 'Available for Freelance' Badge, 'Start growing' CTA Button, Floating Figma Icon Decoration, Hero Section - 'I DESIGN FOR GROWTH.', kristi.digital Portfolio Website (Screenshot), Kristina (Senior Growth Product Designer), Navbar (About, What I Do, My Work), Playful Hand-drawn Shape/Sticker Design Style (+5 more)

### Community 4 - "Form UI Primitives"
Cohesion: 0.2
Nodes (12): BlogCard, toggleExpand, Button, buttonVariants, ContactSection, handleChange, handleSubmit, Input (+4 more)

### Community 5 - "Shuffle Text Animation"
Cohesion: 0.22
Nodes (6): DeveloperProfile(), socials, AnimationMode, ShuffleDirection, ShuffleProps, ShuffleTag

### Community 6 - "Reference Screenshot: SharinXDC Wallet App"
Cohesion: 0.39
Nodes (8): All Chains Filter Dropdown, Create New Wallet Form, Multi-chain Crypto Wallet Management (Domain), Navigation Tabs (My Wallets / Create Wallet / Seed Phrase), SharinXDC, Theme Toggle Icon (Sun), Wallet Dashboard Screen, Wallet Summary Panel (Total/ETH/SOL Wallets)

### Community 7 - "Reference Screenshot: Pulsar-Ai Landing Page"
Cohesion: 0.32
Nodes (8): Email Integration Feature, Hero Headline: Never Miss a Build, Deployment, or Alert Again, Pulsar-Ai Landing Page Screenshot, Navbar (Features, How it Works, Preview), Slack-style Notification Preview Card (#general), Pulsar-Ai, Sign in with GitHub Button, Slack Integration Feature

### Community 8 - "App Bootstrap & Theming"
Cohesion: 0.4
Nodes (3): metadata, spaceGrotesk, Providers()

### Community 9 - "ESLint Config"
Cohesion: 0.4
Nodes (4): compat, __dirname, eslintConfig, __filename

### Community 10 - "Navbar & Theme Toggle"
Cohesion: 0.5
Nodes (3): Navbar(), navLinks, ThemeToggle()

### Community 11 - "Reference Diagram: Java Server Threading"
Cohesion: 0.6
Nodes (5): java-server.png (Single vs Multi-threaded Server Diagram), Multi-threaded Server Model, Single-threaded Server Model, Socket, Thread

### Community 12 - "README / Deployment Notes"
Cohesion: 0.67
Nodes (3): Geist font optimization, Next.js Project (README), Vercel deployment

### Community 13 - "Reference Diagram: MPA vs SPA"
Cohesion: 1.0
Nodes (3): react.png (MPA vs SPA Diagram), Multi Page Application (MPA), Single Page Application (SPA)

## Ambiguous Edges - Review These
- `kristi.digital Portfolio Website (Screenshot)` → `manav/portfolio Repository`  [AMBIGUOUS]
  Screenshot from 2026-07-29 14-26-29.png · relation: conceptually_related_to

## Knowledge Gaps
- **62 isolated node(s):** `config`, `__filename`, `__dirname`, `compat`, `eslintConfig` (+57 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `kristi.digital Portfolio Website (Screenshot)` and `manav/portfolio Repository`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Home Page Component` connect `Profile & About Interactions` to `Form UI Primitives`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `ContactSection` connect `Form UI Primitives` to `Profile & About Interactions`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `Navbar` connect `Profile & About Interactions` to `Form UI Primitives`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **What connects `config`, `__filename`, `__dirname` to the rest of the system?**
  _62 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Homepage Section Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Profile & About Interactions` be split into smaller, more focused modules?**
  _Cohesion score 0.13 - nodes in this community are weakly interconnected._