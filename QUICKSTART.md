# 🕷️ Spider Web Wallet - Quick Start Guide

## Prerequisites

- **Node.js** (LTS v18+ recommended) — Download from https://nodejs.org/
- **npm** (comes with Node.js)

## 1️⃣ Install & Run (Web App)

**Simplest way** — one command:

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run start
```

This will:
- Install dependencies (if needed)
- Start the dev server
- Open http://localhost:5173 automatically

**Or manually:**

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## 2️⃣ Using the Wallet

### Wallet Panel
- **Generate New Wallet** — creates a random mnemonic (12 words)
- **Import Mnemonic** — paste an existing mnemonic
- **Airdrop** — request 1 SOL on devnet (for testing)
- **Save Encrypted** — password-protect your mnemonic (stored in browser)
- **Load Encrypted** — restore saved mnemonic with password

### Send Panel
- Paste your secret key (base58) or mnemonic
- Enter recipient address
- Enter amount in SOL
- Click **Send** to sign and submit the transaction

### P2P Panel (WebRTC)
See "Running with P2P (Signaling Server)" below.

## 3️⃣ Running with P2P (Signaling Server)

The P2P features require a signaling server to establish WebRTC connections.

**Terminal 1 — Start signaling server:**
```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run signaling
# Output: "Signaling server running on ws://localhost:8888"
```

**Terminal 2 — Start web app:**
```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run dev
# Output: "Local: http://localhost:5173"
```

**Testing P2P:**
1. Open http://localhost:5173 in **two browser windows** (or different devices on the same network)
2. In **Window 1**: 
   - Enter a room ID (e.g., `test-room`)
   - Click **Create (initiator)**
3. In **Window 2**:
   - Enter the same room ID
   - Click **Join**
4. Once connected, send chat messages or relay transactions

## 4️⃣ Building Browser Extension

```powershell
npm run build:extension
```

Output: `dist-extension/` folder

**Loading in Chrome/Edge:**
1. Open `chrome://extensions/` (or `edge://extensions/`)
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `dist-extension/` folder
5. Click the extension icon in your toolbar

See [EXTENSION.md](EXTENSION.md) for detailed instructions.

## 5️⃣ Troubleshooting

### Port 5173 already in use
```powershell
npm run dev -- --port 5174
```

### Port 8888 (signaling server) already in use
Edit `server/signaling.js` and change `PORT`:
```javascript
const PORT = process.env.PORT || 9999; // change 8888 to 9999
```

### Module not found errors
```powershell
rm -r node_modules package-lock.json
npm install
```

### TypeScript errors in editor
After `npm install`, the `src/global.d.ts` shims are no longer needed. You can delete them for cleaner types:
```powershell
rm src/global.d.ts
```

## 6️⃣ Project Structure

```
spider-web-wallet/
├── src/
│   ├── components/          (React components)
│   │   ├── Wallet.tsx       (account generation, import, balance)
│   │   ├── Send.tsx         (transaction signing)
│   │   └── P2P.tsx          (WebRTC messaging & relay)
│   ├── contexts/
│   │   └── KeypairContext.tsx  (shared keypair state)
│   ├── utils/
│   │   └── crypto.ts        (encryption utilities)
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── server/
│   └── signaling.js         (WebSocket signaling server)
├── extension/               (Manifest v3 extension files)
│   ├── manifest.json
│   ├── popup.html / popup.ts
│   ├── wallet.html
│   ├── background.ts
│   └── content.ts
├── scripts/
│   └── start.js             (quick start helper)
├── index.html               (web app entry point)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md / EXTENSION.md
```

## 7️⃣ Available Commands

```powershell
npm run start           # Quick start (installs deps + runs dev)
npm run dev            # Start dev server (http://localhost:5173)
npm run build          # Build for production (web app)
npm run preview        # Preview production build
npm run build:extension # Build Manifest v3 extension
npm run signaling      # Start WebSocket signaling server
```

## 8️⃣ Security & Notes

⚠️ **This is a demo/experimental wallet**
- Do **not use with real mainnet funds** until you:
  - Audit the code
  - Add hardware wallet support
  - Implement additional security measures (rate limiting, request confirmation modals, etc.)

✅ **Safe for devnet testing:**
- Use only on Solana devnet
- Mnemonics are stored in memory or encrypted via browser storage
- Private keys never leave your computer (they're signed locally)

## 9️⃣ What's Next?

After running the wallet:

1. **Explore the UI** — try generating a wallet, requesting an airdrop, sending a test transaction
2. **Test P2P** — connect two instances and send messages
3. **Try the extension** — build and load it as a Chrome extension
4. **Read the docs** — see `README.md` and `EXTENSION.md` for detailed info

## 🆘 Need Help?

- Check `README.md` for feature details
- Check `EXTENSION.md` for extension building
- Review source code in `src/components/` and `src/utils/`
- Common issues in troubleshooting section above

---

**Happy hacking! 🕷️**
