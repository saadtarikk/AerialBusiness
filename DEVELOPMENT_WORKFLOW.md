# Development Workflow Guide

## 🌟 **Branch Structure**

### **Main Branch (`main`)**
- **Purpose:** Production-ready code
- **Deployment:** Automatically deploys to Vercel production
- **URL:** https://aireal-platform-dp5cz2cvu-saadtarikks-projects.vercel.app
- **Protected:** Only merge through pull requests

### **Development Branch (`development`)**
- **Purpose:** Active development and testing
- **Testing:** Local development and staging
- **Merge target:** All feature branches merge here first

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
# Make your changes
# Test locally: cd client && npm run dev

# Commit changes
git add .
git commit -m "Add: your feature description"

# Push feature branch
git push origin feature/your-feature-name
```

### **3. Testing & Integration**
```bash
# Merge to development for testing
git checkout development
git merge feature/your-feature-name
git push origin development

# Test the development branch thoroughly
# Build test: cd client && npm run build
```

### **4. Production Release**
```bash
# Create pull request: development → main
# Review changes
# Merge to main (triggers production deployment)
```

## 🛠️ **Local Development Setup**

### **Start Development Server**
```bash
cd client
npm install
npm run dev
```

### **Build for Production**
```bash
cd client
npm run build
npm run preview
```

### **Vercel Deployment Test**
```bash
cd client
npx vercel deploy --prod
```

## 📁 **Project Structure**
```
AerialBusiness/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   ├── package.json       # Client dependencies
│   ├── tailwind.config.ts # Styling configuration
│   └── vercel.json        # Deployment config
├── server/                # Backend (if needed)
└── shared/               # Shared utilities
```

## 🚀 **Deployment Notes**

- **Auto-deployment:** Main branch → Production
- **Manual deployment:** `npx vercel deploy --prod`
- **Root directory:** Set to `client` in Vercel
- **Build command:** `npm run build`
- **Output directory:** `dist`

## 🔧 **Troubleshooting**

### **Styling Issues**
- Check `tailwind.config.ts` content paths
- Ensure safelist includes custom classes
- Verify CSS bundle size (should be ~70KB)

### **Build Failures**
- Check TypeScript errors: `npm run check`
- Verify all imports are correct
- Check Vercel build logs

## 📋 **Best Practices**

1. **Always work in feature branches**
2. **Test in development before merging to main**
3. **Use descriptive commit messages**
4. **Keep main branch stable for production**
5. **Regular updates from development to main**

---

**Happy coding! 🎉** 