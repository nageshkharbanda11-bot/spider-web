🕷️ **Spider Web Wallet** - Solana Web3 DApp with WebRTC P2P

---

## 📚 Start Here

1. **[QUICKSTART.md](QUICKSTART.md)** ← Begin here! (5-10 min read)
2. **[CHECKLIST.md](CHECKLIST.md)** ← Follow this step-by-step
3. **[README.md](README.md)** ← Full feature reference
4. **[EXTENSION.md](EXTENSION.md)** ← Browser extension guide (optional)
5. **[SUMMARY.md](SUMMARY.md)** ← Project deep-dive & reference

---

## ⚡ Quick Start

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm install
npm run start
```

Opens http://localhost:5173 automatically.

---

## ✨ What's Included

| Feature | Status | Docs |
|---------|--------|------|
| **Wallet Gen/Import** | ✅ Ready | README.md |
| **Solana Transactions** | ✅ Ready | README.md |
| **Encrypted Storage** | ✅ Ready | README.md |
| **WebRTC P2P Messaging** | ✅ Ready | README.md |
| **Transaction Relay** | ✅ Ready | README.md |
| **Browser Extension** | ✅ Ready | EXTENSION.md |

---

## 📦 Commands

```powershell
npm run start              # Quick start
npm run dev               # Dev server
npm run build             # Production web build
npm run build:extension   # Build extension
npm run signaling         # Start P2P signaling server
```

---

## 🗂️ File Structure

```
spider-web-wallet/
├── src/                  # React app source
├── extension/            # Manifest v3 extension files
├── server/               # WebSocket signaling server
├── scripts/              # Helper scripts
├── QUICKSTART.md         # ← Start here!
├── CHECKLIST.md          # Step-by-step testing
├── README.md             # Full docs
├── EXTENSION.md          # Extension guide
├── SUMMARY.md            # Project reference
└── package.json
```

---

## 🔐 Key Features

- 🔑 **Wallet**: Generate/import via BIP39 mnemonic (BIP44 derivation path)
- 💰 **Balance**: Fetch from Solana Devnet RPC in real-time
- 📤 **Send**: Create and sign transactions locally
- 🔒 **Encryption**: TweetNaCl-based encrypted storage (password-protected)
- 🌐 **P2P**: WebRTC peer-to-peer messaging with transaction relay
- 🔌 **Extension**: Manifest v3 Chrome/Edge extension (popup + full wallet page)

---

## 🚀 Recommended Reading Order

1. **QUICKSTART.md** (this will get you running in 5 minutes)
2. **CHECKLIST.md** (follow for hands-on testing)
3. **README.md** (understand what everything does)
4. **EXTENSION.md** (if you want to build/use as an extension)
5. **SUMMARY.md** (deep technical reference)

---

## ⚠️ Important Notes

- **Devnet Only** — Do not use with real mainnet funds
- **Demo Code** — Not audited; for learning/testing purposes
- **No Mainnet Support Yet** — Network selection coming soon
- **Keys In Memory** — Use encrypted storage option for persistence

---

## 🎯 What to Try First

```powershell
# Terminal 1
cd "d:\Spider Web\spider-web-wallet"
npm run start              # This installs deps + starts dev server

# Browser
# 1. Generate a wallet (mnemonic appears)
# 2. Request an airdrop (balance becomes 1 SOL)
# 3. Create a second wallet (to test sending)
# 4. Try sending 0.1 SOL from wallet 1 to wallet 2
```

---

## 🆘 Need Help?

- **Setup issues?** → See QUICKSTART.md "Troubleshooting"
- **Don't know what to do?** → Follow CHECKLIST.md
- **Want all the details?** → Read README.md
- **Building extension?** → See EXTENSION.md
- **Technical deep-dive?** → Check SUMMARY.md

---

## 📖 Project Files

| File | Purpose |
|------|---------|
| QUICKSTART.md | Fastest way to get running |
| CHECKLIST.md | Step-by-step testing guide |
| README.md | Complete feature documentation |
| EXTENSION.md | Browser extension guide |
| SUMMARY.md | Technical reference & architecture |
| INDEX.md | This file (navigation) |

---

## 🚀 Next Steps After Testing

- [ ] Explore the source code (`src/components/`, `src/utils/`)
- [ ] Build the browser extension (`npm run build:extension`)
- [ ] Try the P2P features (requires signaling server)
- [ ] Modify and extend the wallet for your use case
- [ ] Deploy as a dapp or extension

---

**Ready to start? Open [QUICKSTART.md](QUICKSTART.md) 👉**

---

🕷️ **Spider Web Wallet** | Solana Devnet | WebRTC P2P | Manifest v3 Extension
