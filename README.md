# 🚀 OfficialGopi Portfolio Website

A modern, responsive portfolio website built with Next.js 15, showcasing my full-stack development skills, projects, and technical blog posts.

![Portfolio Preview](public/profile-pic.jpg)

## ✨ Features

### 🎯 Core Portfolio

- **Personal Branding**: Professional presentation with dark/light mode support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Built with Next.js 15 for optimal speed and SEO

### 📚 Blog System

- **MDX Support**: Write technical blogs with Markdown + JSX
- **Dynamic Routing**: `/blogs` listing and `/blogs/[slug]` detail pages
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **SEO Optimized**: Metadata, Open Graph tags, and static generation

### 🛠️ Projects Showcase

- **Interactive Cards**: Beautiful project presentations with tech stack
- **Live Demos**: Direct links to deployed applications
- **GitHub Integration**: Source code links for each project

### 🎨 Modern UI/UX

- **Dark/Light Theme**: Automatic theme detection with manual toggle
- **Smooth Animations**: Framer Motion for engaging interactions
- **Typography**: Clean, readable fonts with proper hierarchy

## 🏗️ Architecture

```
src/
├── app/                    # Next.js 15 App Router
│   ├── blogs/             # Blog pages and API routes
│   ├── projects/          # Projects listing page
│   ├── globals.css        # Global styles and Tailwind
│   └── layout.tsx         # Root layout with metadata
├── components/             # Reusable UI components
│   ├── ui/                # Base UI components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── constants/              # Static data and configurations
├── lib/                    # Utility functions and database
└── blogs/                  # MDX blog posts
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Backend & Data

- **Node.js** - Server-side runtime
- **MDX** - Markdown with JSX support
- **Gray Matter** - Frontmatter parsing
- **Remark/Rehype** - Markdown processing pipeline

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Zustand** - State management

## 📱 Projects Showcased

### 1. HelloTalk - Real-time Chat App

- **Tech**: React, Node.js, MongoDB, Socket.io, JWT
- **Features**: Real-time messaging, user authentication, responsive UI
- **Live Demo**: [hellotalk.officialgopi.xyz](https://hellotalk.officialgopi.xyz/)

### 2. CoderRoute - LeetCode Clone

- **Tech**: React, Node.js, PostgreSQL, Prisma, Judge0, Groq AI
- **Features**: Code editor, problem solving, AI assistance, streak tracking
- **Live Demo**: [coderroute.officialgopi.xyz](https://coderroute.officialgopi.xyz/)

## 📝 Blog System

The portfolio includes a comprehensive blog system with technical articles covering:

- **System Design**: Queue systems, scalability principles
- **Backend Development**: Redis patterns, Node.js internals
- **AI/ML**: Learning platforms, RAG systems
- **Best Practices**: Production-ready patterns and trade-offs

### Blog Features

- MDX support for rich content
- Syntax highlighting for code blocks
- Responsive design for all devices
- SEO optimization with metadata
- Static generation for performance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/officialgopi.xyz.git
   cd officialgopi.xyz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── profile-pic.jpg    # Profile picture
│   ├── projects-images/   # Project screenshots
│   └── resume.pdf         # Resume download
├── src/
│   ├── app/               # Next.js pages and API routes
│   ├── components/        # React components
│   ├── constants/         # Static data
│   ├── lib/               # Utilities and helpers
│   ├── blogs/             # MDX blog posts
│   └── store/             # State management
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── next.config.ts         # Next.js configuration
```

## 🎨 Customization

### Adding New Projects

1. Add project image to `public/projects-images/`
2. Update `src/constants/projectLinks.tsx`
3. Include tech stack, description, and links

### Writing New Blogs

1. Create `.mdx` file in `src/blogs/`
2. Add frontmatter with title, date, and excerpt
3. Write content using Markdown + JSX
4. Use image placeholders: `<!-- IMAGE: description -->`

### Styling

- Modify `src/app/globals.css` for global styles
- Use Tailwind classes for component styling
- Theme variables in CSS for consistent theming

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Key Features

### Performance

- **Static Generation**: Blog posts and pages are pre-built
- **Image Optimization**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic bundle optimization

### SEO

- **Metadata**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Semantic HTML markup

### Accessibility

- **Semantic HTML**: Proper heading hierarchy
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader**: ARIA labels and descriptions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Portfolio**: [officialgopi.xyz](https://officialgopi.xyz)
- **GitHub**: [@OfficialGopi](https://github.com/OfficialGopi)
- **LinkedIn**: [Gopikanta Mondal](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- The open-source community for inspiration

---

**Built with ❤️ by Gopikanta Mondal**

_Full-stack developer passionate about building scalable, user-friendly applications_
