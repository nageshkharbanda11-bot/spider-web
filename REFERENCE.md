# 🕷️ Spider Web Wallet - Quick Reference Card

## 🚀 ONE-COMMAND START
```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run start
```
→ Opens http://localhost:5173 automatically

---

## 📚 DOCUMENTATION MAP

| Document | Purpose | Time | Read When |
|----------|---------|------|-----------|
| **00_START_HERE.md** | Overview & quick links | 3 min | First |
| **QUICKSTART.md** | Get running guide | 10 min | Second |
| **CHECKLIST.md** | Testing guide & troubleshooting | 15 min | Testing |
| **DOCS_MAP.md** | Doc navigation | 5 min | Lost? |
| **README.md** | Full features & details | 30 min | Want depth |
| **SUMMARY.md** | Technical deep-dive | 30 min | Tech details |
| **EXTENSION.md** | Extension building | 15 min | Extension |
| **DELIVERABLES.md** | What's included | 10 min | Reference |

---

## ⚡ CORE COMMANDS

```powershell
npm run start              # One-command start
npm run dev               # Dev server (http://localhost:5173)
npm run build             # Production build
npm run build:extension   # Build Manifest v3 extension
npm run signaling         # WebSocket signaling server
```

---

## 🎯 WHAT TO TRY FIRST

### 1. Generate a Wallet
```
Wallet Panel → "Generate New Wallet" → Copy 12-word mnemonic
```

### 2. Get Test SOL
```
Wallet Panel → "Airdrop 1 SOL (devnet)" → Balance = 1.0 SOL
```

### 3. Send a Transaction
```
Send Panel → Paste secret key → Enter recipient & amount → "Send"
```

### 4. Try P2P (Optional)
```
Terminal 1: npm run signaling
Terminal 2: npm run dev
→ Open in 2 browser windows, join same room
```

---

## 📁 PROJECT STRUCTURE

```
spider-web-wallet/
├── src/                    # React source code
│   ├── components/         # UI (Wallet, Send, P2P)
│   ├── contexts/           # State management
│   └── utils/              # Encryption utilities
├── extension/              # Manifest v3 extension
├── server/                 # WebSocket signaling
├── scripts/                # Helper scripts
├── [Documentation Files]   # 9 guides
├── package.json            # Dependencies
└── vite.config.ts          # Build config
```

---

## 🔐 FEATURES AT A GLANCE

| Feature | Ready? | How to Use |
|---------|--------|-----------|
| Generate wallet | ✅ | Wallet → Generate |
| Import wallet | ✅ | Wallet → Paste mnemonic |
| Check balance | ✅ | Wallet shows SOL |
| Airdrop (devnet) | ✅ | Wallet → Airdrop |
| Send transaction | ✅ | Send → Fill form |
| Save encrypted | ✅ | Wallet → Save Encrypted |
| Load encrypted | ✅ | Wallet → Load Encrypted |
| P2P messaging | ✅ | P2P → Create room |
| Transaction relay | ✅ | P2P → Send TX JSON |
| Browser extension | ✅ | npm run build:extension |

---

## 🔒 SECURITY NOTES

✅ **Safe for devnet testing**
⚠️ **NOT for real funds** (mainnet)
❌ **Do NOT use production** yet (not audited)

---

## 🆘 QUICK TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Port 5173 in use | `npm run dev -- --port 5174` |
| Port 8888 in use | Edit `server/signaling.js` PORT |
| npm install fails | `npm cache clean --force` |
| TypeScript errors | Run `npm install` to get real types |
| WebRTC won't connect | Start both servers (dev + signaling) |
| Lost? | Read `QUICKSTART.md` |

---

## 📞 WHERE TO GET HELP

1. **Getting started** → `QUICKSTART.md`
2. **Testing** → `CHECKLIST.md`
3. **Full docs** → `README.md`
4. **Tech details** → `SUMMARY.md`
5. **Navigation** → `INDEX.md` or `DOCS_MAP.md`
6. **Troubleshooting** → `CHECKLIST.md`
7. **Extension** → `EXTENSION.md`

---

## 🎓 WHAT YOU'LL LEARN

- Solana wallet development
- BIP39/BIP44 key derivation
- Transaction signing & sending
- Encryption & secure storage
- WebRTC P2P networking
- Browser extension development
- React + TypeScript + Vite
- Web3 architecture patterns

---

## 💡 AFTER RUNNING

- Explore the UI (3 panels)
- Try different scenarios
- Read source code (`src/`)
- Build the extension
- Customize for your needs
- Deploy somewhere

---

## 📊 PROJECT STATS

- **Files**: 40+
- **Components**: 3
- **Documentation**: 9 guides (~2,500 lines)
- **Features**: 20+
- **Tech Stack**: React, Solana, WebRTC, Extension
- **Time to run**: 5 minutes
- **Time to understand**: 30 minutes

---

## ✨ KEY FILES TO KNOW

| File | Purpose |
|------|---------|
| `src/components/Wallet.tsx` | Main wallet UI |
| `src/components/Send.tsx` | Transaction UI |
| `src/components/P2P.tsx` | P2P messaging |
| `src/utils/crypto.ts` | Encryption logic |
| `server/signaling.js` | P2P signaling |
| `extension/manifest.json` | Extension config |

---

## 🚀 YOUR JOURNEY

```
NOW
 ↓
npm run start
 ↓
Open http://localhost:5173
 ↓
Try features (Wallet, Send, P2P)
 ↓
Read documentation
 ↓
Explore source code
 ↓
Build extension
 ↓
Customize & extend
 ↓
Deploy!
```

---

## 🎯 REMEMBER

- **One command**: `npm run start`
- **Everything is local**: Keys never leave your computer
- **Open source**: Fully transparent, fully editable
- **Devnet only**: Safe for learning & testing
- **Well documented**: 9 guides included
- **Ready to extend**: Great foundation for custom features

---

## 📍 RIGHT NOW, DO THIS:

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm run start
```

Then read **`00_START_HERE.md`** or **`QUICKSTART.md`**

---

🕷️ **Happy hacking!** Let's build some Web3! 🚀

---

**Questions?** Everything's in the docs. Have fun! 🎉
