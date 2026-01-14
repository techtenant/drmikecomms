# Git Workflow for Development

## Branch Strategy

### Main Branch
- `main` - Production-ready code (deployed to live site)

### Development Branch
- `dev` - Development work happens here
- Feature branches created from `dev`

## Setup Your Development Environment

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd drmikecomins-website
```

2. **Create your development branch:**
```bash
git checkout -b dev
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your local development values
```

4. **Install dependencies:**
```bash
npm install
```

5. **Start development server:**
```bash
npm run dev
```

## Working with Branches

### Create a Feature Branch
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```

### Commit Your Changes
```bash
git add .
git commit -m "Description of your changes"
```

### Push to Remote
```bash
git push origin feature/your-feature-name
```

### Merge into Dev
```bash
git checkout dev
git merge feature/your-feature-name
git push origin dev
```

### Deploy to Production
Only when dev is stable and tested:
```bash
git checkout main
git merge dev
git push origin main
```

## Files to Keep Local (Never Commit)

These are automatically ignored by `.gitignore`:
- `.env.local` - Your local environment variables
- `node_modules/` - Dependencies (reinstall with npm install)
- `.next/` - Build files
- Any files in `/local-dev/` folder
- Files ending in `.local.*` or `*-local.*`

## Files to Commit

Always commit:
- Source code (`/src/**`)
- Package files (`package.json`, `package-lock.json`)
- Configuration (`next.config.js`, `tailwind.config.js`)
- Public assets (`/public/**`)
- `.env.example` (template only, no real values)

## Quick Commands

```bash
# Check current branch
git branch

# See what files changed
git status

# See your changes
git diff

# Discard changes to a file
git checkout -- <filename>

# Update from remote
git pull origin dev

# See commit history
git log --oneline

# Create and switch to new branch
git checkout -b branch-name

# Switch branches
git checkout branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name
```

## Best Practices

1. **Commit often** with clear messages
2. **Pull before push** to avoid conflicts
3. **Never commit** .env files with real API keys
4. **Test locally** before merging to dev
5. **Test on dev** before merging to main
6. **Use feature branches** for new features
7. **Keep commits small** and focused

## Typical Workflow

```bash
# Start new feature
git checkout dev
git pull origin dev
git checkout -b feature/contact-form-validation

# Make changes, test locally
npm run dev

# Commit changes
git add .
git commit -m "Add contact form validation"

# Push to remote
git push origin feature/contact-form-validation

# Merge to dev (after testing)
git checkout dev
git merge feature/contact-form-validation
git push origin dev

# Deploy to production (when ready)
git checkout main
git merge dev
git push origin main
```

## Environment Variables

Development uses `.env.local` (not committed)
Production uses environment variables set in hosting platform (Vercel/Netlify/etc.)

Copy `.env.example` to `.env.local` and fill in your values.
