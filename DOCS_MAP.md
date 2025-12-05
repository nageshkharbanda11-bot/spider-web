# 🕷️ Spider Web Wallet - Documentation Map

## 📍 You Are Here

```
 START HERE
     ↓
 00_START_HERE.md (this overview)
     ↓
```

## 📚 Reading Path (Recommended Order)

### Path 1: Just Want to Run It? (5-10 minutes)
```
1. 00_START_HERE.md          ← You are here
   ↓
2. QUICKSTART.md             ← Do this next (one command to run)
   ↓
3. CHECKLIST.md              ← Follow the testing steps
   ↓
4. Open http://localhost:5173 in your browser
```

### Path 2: Want to Understand It All? (30-60 minutes)
```
1. 00_START_HERE.md          ← Overview
   ↓
2. INDEX.md                  ← Navigation hub
   ↓
3. QUICKSTART.md             ← Get it running
   ↓
4. README.md                 ← Full documentation
   ↓
5. SUMMARY.md                ← Technical details
   ↓
6. EXTENSION.md              ← (Optional) Browser extension
```

### Path 3: Want to Build on It? (60+ minutes)
```
1. 00_START_HERE.md
2. QUICKSTART.md
3. README.md
4. SUMMARY.md
5. src/ folder               ← Read the source code
6. EXTENSION.md              ← Browser extension
7. Modify and extend!
```

---

## 🗂️ File Guide

| File | Purpose | Read When |
|------|---------|-----------|
| **00_START_HERE.md** | Project overview & quick links | First! (you're here) |
| **QUICKSTART.md** | 5-min quick start guide | After this file |
| **CHECKLIST.md** | Step-by-step testing & troubleshooting | When running for first time |
| **INDEX.md** | Full navigation hub | Need quick reference |
| **README.md** | Complete feature documentation | Want full details |
| **SUMMARY.md** | Technical deep-dive & reference | Need technical info |
| **EXTENSION.md** | Browser extension building & distribution | Want to build extension |

---

## ⚡ TL;DR (Ultra Quick Start)

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run start
```

Then open http://localhost:5173

---

## 🎯 What Each Panel Does

### Wallet Panel
- Generate new wallet (mnemonic)
- Import existing mnemonic
- Check balance (Solana Devnet)
- Request 1 SOL airdrop (for testing)
- Save/load encrypted mnemonic with password

### Send Panel
- Sign transactions locally
- Send SOL to any address
- Display transaction signature

### P2P Panel
- Connect with other peers via WebRTC
- Send peer-to-peer messages
- Relay unsigned transactions (for co-signing)

---

## 🔧 Running with P2P (Optional)

If you want to test P2P features:

```powershell
# Terminal 1
cd "d:\Spider Web\spider-web-wallet"
npm run signaling           # Start WebSocket server

# Terminal 2
cd "d:\Spider Web\spider-web-wallet"
npm run dev                 # Start web app
```

Then open in 2 browser windows and join a "room".

---

## 🔨 Building the Extension

```powershell
npm run build:extension
# Load dist-extension/ in chrome://extensions (Developer mode)
```

See EXTENSION.md for details.

---

## ✅ Pre-Flight Checklist

Before running, make sure you have:
- [ ] Node.js LTS installed (https://nodejs.org/)
- [ ] PowerShell open
- [ ] Project folder: `d:\Spider Web\spider-web-wallet`

---

## 🚀 Quick Commands Reference

```powershell
npm run start              # One-command quick start
npm run dev               # Start dev server
npm run build             # Build for production
npm run build:extension   # Build browser extension
npm run signaling         # Start P2P signaling server
```

---

## 📖 Full Documentation Index

```
d:\Spider Web\spider-web-wallet/

Documentation Files:
├── 00_START_HERE.md         ← You are here
├── QUICKSTART.md            ← Do this next
├── CHECKLIST.md             ← Step-by-step testing
├── INDEX.md                 ← Navigation hub
├── README.md                ← Full docs
├── SUMMARY.md               ← Technical reference
└── EXTENSION.md             ← Extension guide

Source Code:
├── src/                     ← React app
│   ├── components/          ← UI components
│   ├── contexts/            ← React contexts
│   ├── utils/               ← Utilities
│   └── App.tsx              ← Main app
├── extension/               ← Extension files
├── server/                  ← Signaling server
└── scripts/                 ← Helper scripts

Config Files:
├── package.json             ← Dependencies
├── tsconfig.json            ← TypeScript config
├── vite.config.ts           ← Build config
└── vite.extension.config.ts ← Extension build config
```

---

## 💡 Pro Tips

1. **First time?** → Open [QUICKSTART.md](QUICKSTART.md)
2. **Lost?** → Check [INDEX.md](INDEX.md) for navigation
3. **Stuck?** → [CHECKLIST.md](CHECKLIST.md) has troubleshooting
4. **Need tech details?** → Read [SUMMARY.md](SUMMARY.md)
5. **Want source?** → Explore `src/` folder

---

## 🆘 Getting Help

1. **Documentation**: Read the relevant .md file above
2. **Troubleshooting**: [CHECKLIST.md](CHECKLIST.md) has common issues
3. **Code**: Check `src/components/` and `src/utils/`
4. **Browser Console**: Press F12 for error messages

---

## 🎓 What You'll Learn

By exploring this project, you'll understand:
- ✅ Solana wallet development
- ✅ BIP39/BIP44 key derivation
- ✅ Local transaction signing
- ✅ Encryption & secure storage
- ✅ WebRTC peer-to-peer networking
- ✅ Browser extension development (Manifest v3)
- ✅ React + TypeScript + Vite development

---

## ✨ Features Summary

| Feature | Status | Location |
|---------|--------|----------|
| Wallet generation | ✅ | `src/components/Wallet.tsx` |
| Transaction signing | ✅ | `src/components/Send.tsx` |
| P2P messaging | ✅ | `src/components/P2P.tsx` |
| Encrypted storage | ✅ | `src/utils/crypto.ts` |
| Browser extension | ✅ | `extension/` folder |

---

## 🚦 Next Steps

**Ready to go?**

→ Open **[QUICKSTART.md](QUICKSTART.md)** and run:

```powershell
npm run start
```

**Not ready yet?**

→ Read more in **[INDEX.md](INDEX.md)**

---

## 📞 Quick Reference

| Need | File | Command |
|------|------|---------|
| Quick start | QUICKSTART.md | `npm run start` |
| Testing | CHECKLIST.md | Follow steps |
| Full docs | README.md | Read all sections |
| Extension | EXTENSION.md | `npm run build:extension` |
| Tech details | SUMMARY.md | Reference |

---

**🕷️ You're ready to go! Next: [QUICKSTART.md](QUICKSTART.md)**

---

Built with ❤️ for learning about Solana, Web3, and WebRTC.
