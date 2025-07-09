
## Product Folder Structure

1. Install dependencies

   ```bash
  nova-city/
├── App.tsx                          # Main app entry point
├── app.json                         # Expo configuration
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── assets/                          # Images, icons, fonts
│   ├── images/
│   │   ├── logo.png
│   │   ├── xxxx.png
│   │   └── xxx.png
│   ├── icons/
│   └── fonts/
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├──
│   │   │   └──
│   │   ├── product/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductDetails.tsx
│   │   │   └──
│   │   ├── xxxx/
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   └── xxx/
│   │       └──
│   ├── screens/                     # Screen components
│   │   ├── HomeScreen.tsx
│   │   ├── ProductListScreen.tsx
│   │   ├── ProductDetailScreen.tsx
│   │   ├── CartScreen.tsx
│   │   ├──
│   │   ├──
│   │   └──
│   ├── navigation/                  # Navigation configuration
│   │   ├── AppNavigator.tsx
│   │   ├── TabNavigator.tsx
│   │   └──
│   ├── store/                       # Redux store and slices
│   │   ├── index.ts
│   │   ├── slices/
│   │   │   ├── productSlice.ts
│   │   │   ├──
│   │   │   ├──
│   │   │   └──
│   │   └── api/
│   │       └──
│   ├── services/                    # API calls and external services
│   │   ├── api.ts
│   │   ├──
│   │   ├──
│   │   ├──
│   │   └──
│   ├── utils/                       # Utility functions
│   │   ├──
│   │   ├──
│   │   ├──
│   │   └──
│   ├── types/                       # TypeScript type definitions
│   │   ├── product.ts
│   │   ├──
│   │   ├──
│   │   └──
│   ├── hooks/                       # Custom React hooks
│   │   ├──
│   │   ├──
│   │   └──
│   ├── styles/                      # Global styles and themes
│   │   ├── theme.ts
│   │   ├── colors.ts
│   │   └── globalStyles.ts
│   └── i18n/                        # Internationalization (future)
│       ├── index.ts
│       ├── en.json
│       ├── mm.json
   ```
