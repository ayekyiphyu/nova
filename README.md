
## Product Folder Structure

```bash
nova-city/
├── App.tsx                    # Main app entry point
├── app.json                   # Expo configuration
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── assets/                    # Images, icons, fonts
│   ├── images/
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── common/            # Buttons, inputs, etc.
│   │   └── product/           # Product cards, lists, details
│   ├── screens/               # App screens
│   │   ├── HomeScreen.tsx
│   │   ├── ProductListScreen.tsx
│   │   ├── ProductDetailScreen.tsx
│   │   └── CartScreen.tsx
│   ├── navigation/            # React Navigation setup
│   │   ├── AppNavigator.tsx
│   │   └── TabNavigator.tsx
│   ├── store/                 # Redux store and slices
│   ├── services/              # API services
│   ├── utils/                 # Utility functions
│   ├── types/                 # TypeScript type definitions
│   ├── hooks/                 # Custom hooks
│   ├── styles/                # Themes and global styles
│   └── i18n/                  # Localization (en, mm)

```
