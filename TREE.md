# 🕷️ Spider Web Wallet - Complete Directory Tree

Generated: December 5, 2025

```
d:\Spider Web\spider-web-wallet\
│
├── 📚 DOCUMENTATION (9 files)
│   ├── 00_START_HERE.md          🌟 Start here!
│   ├── QUICKSTART.md             Quick start guide (5 min)
│   ├── CHECKLIST.md              Step-by-step testing
│   ├── DOCS_MAP.md               Documentation navigation
│   ├── INDEX.md                  File index & navigation
│   ├── README.md                 Complete documentation
│   ├── SUMMARY.md                Technical deep-dive
│   ├── EXTENSION.md              Extension building guide
│   ├── DELIVERABLES.md           What's included
│   ├── REFERENCE.md              Quick reference card
│   └── TREE.md                   This file (directory tree)
│
├── 💻 SOURCE CODE
│   ├── src/
│   │   ├── App.tsx               Main app component
│   │   ├── main.tsx              React entry point
│   │   ├── global.d.ts           TypeScript shims
│   │   ├── styles.css            Global styles
│   │   │
│   │   ├── components/
│   │   │   ├── Wallet.tsx        🎯 Wallet gen/import/balance
│   │   │   ├── Send.tsx          💰 Transaction signing
│   │   │   └── P2P.tsx           🌐 WebRTC messaging & relay
│   │   │
│   │   ├── contexts/
│   │   │   └── KeypairContext.tsx 🔑 Shared keypair state
│   │   │
│   │   └── utils/
│   │       └── crypto.ts         🔒 Encryption utilities
│   │
│   ├── extension/                📦 Browser Extension (Manifest v3)
│   │   ├── manifest.json         Extension configuration
│   │   ├── popup.html            Popup UI
│   │   ├── popup.ts              Popup logic
│   │   ├── wallet.html           Full wallet page
│   │   ├── background.ts         Service worker
│   │   └── content.ts            Content script
│   │
│   ├── server/                   🖥️ P2P Infrastructure
│   │   └── signaling.js          WebSocket signaling server
│   │
│   └── scripts/                  🛠️ Helper Scripts
│       └── start.js              Quick start script
│
├── ⚙️ CONFIGURATION
│   ├── index.html                Web app entry point
│   ├── package.json              Dependencies & scripts
│   ├── tsconfig.json             TypeScript configuration
│   ├── vite.config.ts            Vite config (web app)
│   └── vite.extension.config.ts  Vite config (extension)
│
└── 📁 BUILD OUTPUT (created after npm run build:extension)
    └── dist-extension/           Extension build output
        ├── manifest.json
        ├── popup.html
        ├── popup.js
        ├── wallet.html
        ├── background.js
        └── content.js
```

---

## 📊 FILE COUNT BY CATEGORY

| Category | Count | Files |
|----------|-------|-------|
| Documentation | 10 | .md files |
| React Components | 3 | Wallet, Send, P2P |
| Context/State | 1 | KeypairContext |
| Utilities | 1 | crypto.ts |
| Extension | 6 | manifest, scripts, pages |
| Server | 1 | signaling.js |
| Config | 5 | package.json, tsconfig, vite |
| Scripts | 1 | start.js |
| **TOTAL** | **~40+** | Source + config |

---

## 🗂️ QUICK FILE REFERENCE

### Must-Read Documentation
- `00_START_HERE.md` - Overview & quick links
- `QUICKSTART.md` - Get running in 5 minutes
- `CHECKLIST.md` - Step-by-step testing

### Detailed Documentation
- `README.md` - All features explained
- `SUMMARY.md` - Technical architecture
- `EXTENSION.md` - Extension building
- `REFERENCE.md` - Quick reference card

### Navigation Aids
- `INDEX.md` - File navigation
- `DOCS_MAP.md` - Doc roadmap
- `DELIVERABLES.md` - What's included

### Core Source Code
- `src/components/Wallet.tsx` - Main wallet UI
- `src/components/Send.tsx` - Transaction UI
- `src/components/P2P.tsx` - P2P messaging
- `src/utils/crypto.ts` - Encryption logic
- `src/contexts/KeypairContext.tsx` - State management

### Extension Files
- `extension/manifest.json` - Manifest v3 config
- `extension/popup.ts` - Extension popup
- `extension/background.ts` - Service worker
- `extension/content.ts` - Content script

### Build Configuration
- `package.json` - Dependencies & scripts
- `vite.config.ts` - Web build config
- `vite.extension.config.ts` - Extension build config
- `tsconfig.json` - TypeScript config
- `index.html` - Web app entry

---

## 🚀 HOW TO USE THIS DIRECTORY

### First Time?
1. Read: `00_START_HERE.md`
2. Then: `QUICKSTART.md`
3. Run: `npm run start`

### Want Full Details?
1. Start: `00_START_HERE.md`
2. Flow: `README.md` → `SUMMARY.md`
3. Reference: `REFERENCE.md`

### Building Extension?
1. Read: `EXTENSION.md`
2. Run: `npm run build:extension`
3. Check: `extension/` folder

### Troubleshooting?
1. Check: `CHECKLIST.md`
2. Try: Command in "Available Commands" section
3. Re-read: Relevant documentation

---

## 📝 DOCUMENT DESCRIPTIONS

| File | What It Contains |
|------|------------------|
| `00_START_HERE.md` | Project overview, quick links, how to run |
| `QUICKSTART.md` | Step-by-step guide to get running + troubleshooting |
| `CHECKLIST.md` | Testing checklist with all features, common issues |
| `DOCS_MAP.md` | Visual documentation roadmap |
| `INDEX.md` | Full file and content navigation |
| `README.md` | Complete feature documentation |
| `SUMMARY.md` | Technical architecture, deep-dive reference |
| `EXTENSION.md` | How to build and load extension |
| `DELIVERABLES.md` | Inventory of everything created |
| `REFERENCE.md` | Quick reference card (commands, features) |
| `TREE.md` | This file (directory structure) |

---

## 💡 KEY DIRECTORIES EXPLAINED

### `src/components/`
Contains 3 React components:
- **Wallet.tsx** - Account generation, import, balance display, encrypted storage
- **Send.tsx** - Transaction signing and sending
- **P2P.tsx** - WebRTC messaging and transaction relay

### `src/contexts/`
React Context for sharing state across components:
- **KeypairContext.tsx** - Stores active keypair (public/secret key)

### `src/utils/`
Utility functions:
- **crypto.ts** - Encryption/decryption with TweetNaCl

### `extension/`
Manifest v3 extension files:
- **manifest.json** - Extension permissions & config
- **popup.ts / popup.html** - Icon click popup
- **wallet.html** - Full wallet interface
- **background.ts** - Service worker (storage, messaging)
- **content.ts** - Content script (dapp communication)

### `server/`
Backend/infrastructure:
- **signaling.js** - WebSocket server for WebRTC peer discovery

---

## 🎯 FILE WORKFLOW

```
User runs npm run start
        ↓
scripts/start.js (installs deps, starts vite)
        ↓
Vite compiles index.html + src/main.tsx
        ↓
src/App.tsx wraps components with KeypairProvider
        ↓
Components rendered:
  - Wallet.tsx (gen/import/balance)
  - Send.tsx (transactions)
  - P2P.tsx (WebRTC)
        ↓
On interaction, components use:
  - KeypairContext for shared state
  - crypto.ts for encryption
  - @solana/web3.js for blockchain
  - SimplePeer for P2P
        ↓
Output: http://localhost:5173
```

---

## 🔧 BUILD PROCESS

### Web App Build
```
npm run build
    ↓
vite.config.ts
    ↓
Compiles src/ → dist/
    ↓
Output: dist/ folder
```

### Extension Build
```
npm run build:extension
    ↓
vite.extension.config.ts
    ↓
Compiles extension/ + src/ → dist-extension/
    ↓
Copies manifest.json
    ↓
Output: dist-extension/ folder
    ↓
Load in chrome://extensions (unpacked)
```

---

## 📦 DEPENDENCIES

Located in: `package.json`

### Main Dependencies
- `react` - UI framework
- `@solana/web3.js` - Blockchain
- `bip39`, `ed25519-hd-key`, `bs58` - Key generation
- `tweetnacl`, `tweetnacl-util` - Encryption
- `simple-peer` - WebRTC
- `ws` - WebSocket (signaling server)

### Dev Dependencies
- `vite` - Build tool
- `typescript` - Type checking
- `@types/react` - React types
- `@vitejs/plugin-react` - React plugin

---

## 🏗️ PROJECT ARCHITECTURE

```
┌─────────────────────────────────────┐
│      Browser (http://localhost:5173) │
├─────────────────────────────────────┤
│  React App (src/)                   │
│  ├─ App.tsx                         │
│  ├─ components/                     │
│  │  ├─ Wallet.tsx                   │
│  │  ├─ Send.tsx                     │
│  │  └─ P2P.tsx                      │
│  ├─ contexts/KeypairContext.tsx     │
│  └─ utils/crypto.ts                │
├─────────────────────────────────────┤
│  Local Storage (encrypted)          │
│  @solana/web3.js                    │
│  TweetNaCl crypto                   │
├─────────────────────────────────────┤
│  External Services                  │
│  - Solana Devnet RPC                │
│  - WebRTC (peer-to-peer)            │
│  - WebSocket (signaling server)     │
└─────────────────────────────────────┘
```

---

## ✨ YOU NOW HAVE

✅ 40+ project files
✅ 10 documentation files
✅ 3 React components
✅ 1 encryption utility
✅ 1 signaling server
✅ 1 browser extension
✅ 2 build configurations
✅ Full Solana wallet capabilities
✅ WebRTC P2P support
✅ Local key management

---

## 🚀 NEXT: RUN IT!

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run start
```

Then read: `00_START_HERE.md`

---

**🕷️ Spider Web Wallet - Complete Directory Structure**

Last updated: December 5, 2025
