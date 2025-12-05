# 🕷️ Spider Web Wallet - Getting Started Checklist

## ✅ Pre-Flight Checks

- [ ] Node.js LTS installed (https://nodejs.org/)
- [ ] npm available in PowerShell: run `npm --version`
- [ ] Project folder exists: `d:\Spider Web\spider-web-wallet`

## 🚀 Quick Start (5 minutes)

- [ ] Open PowerShell
- [ ] Run: `cd "d:\Spider Web\spider-web-wallet"`
- [ ] Run: `npm run start`
- [ ] Wait for dev server to start (shows "Local: http://localhost:5173")
- [ ] Open http://localhost:5173 in your browser

## 🧪 Basic Testing (10 minutes)

### Wallet Panel
- [ ] Click "Generate New Wallet" → see 12-word mnemonic
- [ ] Click "Airdrop 1 SOL (devnet)" → balance becomes 1.0 SOL
- [ ] Try "Import Mnemonic" with an existing mnemonic

### Send Panel
- [ ] Generate a second wallet (new browser tab)
- [ ] Copy the second wallet's public key
- [ ] In first wallet, go to Send panel
- [ ] Paste first wallet's secret key (from Wallet panel)
- [ ] Paste second wallet's address in "Recipient Address"
- [ ] Enter 0.1 in "Amount (SOL)"
- [ ] Click "Send" → see transaction signature

### Encrypted Storage
- [ ] In Wallet panel, set a password (e.g., "test123")
- [ ] Click "Save Encrypted" → you should see "✓ Mnemonic saved (encrypted)"
- [ ] Refresh browser (F5)
- [ ] Keypair should be gone (shows "-" for public/secret key)
- [ ] Set same password and click "Load Encrypted" → wallet restored

## 🌐 P2P Testing (Optional, requires 2 terminals)

**Terminal 1 — Start signaling server:**
- [ ] Run: `npm run signaling`
- [ ] You should see: "Signaling server running on ws://localhost:8888"

**Terminal 2 — Start dev server (use existing one or new):**
- [ ] Run: `npm run dev`
- [ ] Open http://localhost:5173

**Testing P2P Connection:**
- [ ] Open wallet in two browser windows (or tabs)
- [ ] Window 1: Enter "test-room" in room ID → Click "Create (initiator)"
- [ ] Window 2: Enter "test-room" in room ID → Click "Join"
- [ ] Wait for "Peer connected" in logs
- [ ] Send a test message from one window
- [ ] See it appear in the other window's logs

## 🔧 Browser Extension (Optional)

- [ ] Run: `npm run build:extension`
- [ ] Check for `dist-extension/` folder
- [ ] Open `chrome://extensions/` (or `edge://extensions/`)
- [ ] Enable "Developer mode" (top-right toggle)
- [ ] Click "Load unpacked"
- [ ] Select the `dist-extension/` folder
- [ ] Icon should appear in your toolbar
- [ ] Click icon → should see "Spider Web Wallet" popup

## 📖 Documentation

After the quick start, read these in order:

1. **QUICKSTART.md** — Detailed quick start guide (you're reading commands from here)
2. **README.md** — Full feature overview and architecture
3. **EXTENSION.md** — If you want to build/distribute the extension
4. **SUMMARY.md** — Complete project reference

## 🆘 Troubleshooting

### npm install fails
```powershell
# Try clearing npm cache
npm cache clean --force
npm install
```

### Port 5173 already in use
```powershell
npm run dev -- --port 5174
```

### Port 8888 (signaling) already in use
Edit `server/signaling.js`, change line:
```javascript
const PORT = process.env.PORT || 9999;  // Change to 9999
```

### "Cannot find module 'react'" errors
This is normal if you haven't run `npm install` yet. The shims in `src/global.d.ts` are temporary.

### WebRTC connection fails
- Check both terminals are running (dev server + signaling server)
- Make sure both browser windows use http://localhost:5173
- Try different room IDs
- Check browser console for errors (F12)

## ✨ You're Done!

You now have a fully functional Solana wallet with:
- ✅ Web app on http://localhost:5173
- ✅ WebRTC P2P (if signaling server running)
- ✅ Browser extension (if you built it)

### Next: Experiment & Learn
- Try different mnemonics
- Send real devnet transactions
- Connect with peers over P2P
- Read the source code (`src/components/`, `src/utils/`)
- Build your own features on top

---

**Questions?** Check the docs or review the source code. Happy hacking! 🕷️
