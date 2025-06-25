# Development Workflow Guide

## 🌟 **Clean Frontend-Only Structure**

### **Main Branch (`main`)**
- **Purpose:** Production-ready code
- **Deployment:** Automatically deploys to Vercel production
- **URL:** https://aireal-platform-cpvudg84l-saadtarikks-projects.vercel.app
- **Protected:** Only merge through pull requests

### **Development Branch (`development`)**
- **Purpose:** Active development and testing
- **Testing:** Local development and staging
- **Merge target:** All feature branches merge here first

## 🚀 **MAJOR CLEANUP COMPLETED** ✅

### **✅ What Was Fixed:**
- **Removed:** Duplicate config files (client/ vs root)
- **Removed:** Unused server/, shared/ folders (saved 13,489 lines!)
- **Removed:** 171 server dependencies (express, drizzle, etc.)
- **Moved:** All client files to root directory
- **Fixed:** All TypeScript paths and configs
- **Result:** Clean, simple React + Vite frontend project

### **📦 New Project Structure:**
```
AerialBusiness/                 # Clean frontend-only
├── src/                       # React application
│   ├── components/            # UI components
│   │   ├── sections/         # Page sections (Hero, About, etc.)
│   │   ├── ui/              # Radix UI components
│   │   └── animations/       # Framer Motion variants
│   ├── pages/                # Page components
│   ├── lib/                 # Utilities & constants
│   └── hooks/               # Custom React hooks
├── public/                   # Static assets
├── dist/                    # Build output
├── package.json             # Dependencies (309 packages)
├── tailwind.config.ts       # Styling configuration
├── vite.config.ts          # Build configuration
├── vercel.json             # Deployment config
└── index.html              # Entry point
```

## 🔄 **Development Workflow**

### **1. Start New Feature**
```bash
# Switch to development branch
git checkout development

# Pull latest changes
git pull origin development

# Create feature branch
git checkout -b feature/your-feature-name
```

### **2. Development Process**
```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Make your changes and test locally
# Open http://localhost:5173

# Commit changes
git add .
git commit -m "Add: your feature description"

# Push feature branch
git push origin feature/your-feature-name
```

### **3. Testing & Integration**
```bash
# Build test
npm run build

# Preview production build
npm run preview

# Merge to development for testing
git checkout development
git merge feature/your-feature-name
git push origin development
```

### **4. Production Release**
```bash
# Create pull request: development → main
# Review changes
# Merge to main (triggers production deployment)
```

## 🛠️ **Available Scripts**

```bash
npm run dev      # Start development server (port 5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # TypeScript check
npm run lint     # ESLint check
```

## 🚀 **Deployment**

### **Automatic Deployment**
- **Main branch** → Production deployment
- **Root directory** used (no more client/ folder!)
- **Build command:** `npm run build`
- **Output directory:** `dist`

### **Manual Deployment**
```bash
npx vercel deploy --prod
```

## 📊 **Build Performance**
- **CSS Bundle:** 70.30 kB (gzipped: 12.18 kB) ✅
- **JS Bundle:** 418.63 kB (gzipped: 133.75 kB) ✅  
- **Build Time:** ~2 seconds ⚡
- **Dependencies:** 309 packages (down from 480+)

## 🎨 **Features Preserved**
- ✨ Dark OLED theme with glassmorphism
- 🎬 Smooth Framer Motion animations
- 📱 Fully responsive design
- 🌈 Custom Aireal color schemes
- ⚡ Lightning-fast performance

## 🔧 **Troubleshooting**

### **Styling Issues**
- Check `tailwind.config.ts` content paths
- Verify safelist includes custom classes
- CSS bundle should be ~70KB

### **Build Failures**
- Run `npm run check` for TypeScript errors
- Check all imports use correct paths
- Verify no references to old client/ structure

### **Development Issues**
- Make sure you're in root directory (not client/)
- Run `npm install` if dependencies are missing
- Check port 5173 is available

## 📋 **Best Practices**

1. **Always work in feature branches**
2. **Test builds before merging**
3. **Use descriptive commit messages**
4. **Keep main branch stable**
5. **No more client/ folder confusion!**

---

**🎉 Your Aireal platform is now clean, fast, and ready for development!** 