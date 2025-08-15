# 🎨 Frieren - React Design System

[![npm version](https://badge.fury.io/js/@kevinuehara%2Ffrieren.svg)](https://badge.fury.io/js/@kevinuehara%2Ffrieren)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Frieren is a simple and elegant React library of design system components, built with TypeScript and CSS Modules. It offers reusable and consistent components to accelerate user interface development.

## ✨ Features

- 🚀 **React Components** - Built with React 19 and TypeScript
- 🎯 **TypeScript First** - Complete typing for better development experience
- 🎨 **CSS Modules** - Encapsulated and reusable styles
- 📱 **Responsive** - Components adaptable to different screen sizes
- 🎭 **Variants** - Multiple visual variations for each component
- 🎨 **Design Tokens** - Consistent color and spacing system
- 📦 **Optimized Bundle** - Support for UMD and ES modules

## 🚀 Installation

```bash
npm install @kevinuehara/frieren
```

or

```bash
yarn add @kevinuehara/frieren
```

## 📦 Dependencies

This project requires React 19+ as a peer dependency:

```json
{
  "peerDependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  }
}
```

## 🎯 Usage

### Importing Components

```tsx
import { Button, Input } from '@kevinuehara/frieren';

function App() {
  return (
    <div>
      <Button variant="primary">Click here</Button>
      <Input placeholder="Type something..." />
    </div>
  );
}
```

### Button Component

The Button component offers multiple visual variants:

```tsx
import { Button } from '@kevinuehara/frieren';

// Available variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>
<Button variant="danger">Danger</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>

// With native HTML button props
<Button
  variant="primary"
  onClick={() => console.log('Clicked!')}
  disabled
>
  Disabled Button
</Button>
```

### Input Component

The Input component is a simple wrapper for HTML inputs:

```tsx
import { Input } from '@kevinuehara/frieren';

<Input placeholder="Enter your name" />
<Input type="email" placeholder="your@email.com" />
<Input type="password" placeholder="Your password" />
<Input disabled placeholder="Disabled field" />
```

## 🎨 Design Tokens

The system includes design tokens for colors and spacing:

```tsx
import { colors } from '@kevinuehara/frieren';

// Available colors
console.log(colors.primary); // #1E90FF
console.log(colors.secondary); // #FF69B4
console.log(colors.text); // #333333
console.log(colors.background); // #F5F5F5
console.log(colors.danger); // #FF4C4C
console.log(colors.success); // #28a745
console.log(colors.warning); // #ffc107
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installing Dependencies

```bash
npm install
```

### Available Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Automatic build before publish
npm run prepare
```

### Project Structure

```
src/
├── components/          # React components
│   ├── Button/         # Button component
│   │   ├── index.tsx   # Component logic
│   │   └── styles.module.css  # CSS styles
│   └── Input/          # Input component
│       ├── index.tsx   # Component logic
│       └── styles.module.css  # CSS styles
├── tokens/              # Design tokens
│   ├── colors.ts       # Color system
│   └── colors.css      # CSS variables
├── App.tsx             # Example app
└── main.tsx            # Entry point
```

## 📚 Technologies

- **React 19** - User interface library
- **TypeScript** - Typed programming language
- **Vite** - Build tool and dev server
- **CSS Modules** - Encapsulated styling system
- **ESLint** - Code quality linter
- **Prettier** - Code formatter

## 🤝 Contributing

Contributions are welcome! Please feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kevin Uehara** - [@kevinuehara](https://github.com/kevinuehara)

## 🙏 Acknowledgments

- Inspired by modern design system concepts
- React and TypeScript community
- Library contributors and users

---

⭐ If this project helped you, consider giving it a star in the repository!
