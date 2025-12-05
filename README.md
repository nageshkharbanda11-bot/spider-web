# Spider Web Wallet (Solana)

> 🕷️ A minimal Solana wallet web dapp with WebRTC P2P support and browser extension packaging.

**📖 Quick Navigation:**
- 🚀 **[QUICKSTART.md](QUICKSTART.md)** — Get running in 5 minutes
- ✅ **[CHECKLIST.md](CHECKLIST.md)** — Step-by-step testing guide  
- 🔧 **[EXTENSION.md](EXTENSION.md)** — Browser extension building
- 📚 **[SUMMARY.md](SUMMARY.md)** — Technical reference
- 🗺️ **[INDEX.md](INDEX.md)** — Full navigation

This is a minimal Solana wallet web dapp (devnet) — a starting point for a Phantom-like wallet called "Spider Web".

## Features

- **Wallet Management**: Generate/import accounts via mnemonic (BIP44 derivation path m/44'/501'/0'/0').
- **Balance & Airdrop**: Fetch balance from Solana Devnet and request 1 SOL airdrop (devnet testing).
- **Send Transactions**: Create and sign transactions to send SOL to any address.
- **Encrypted Local Storage**: Save/load mnemonics with password-based encryption (TweetNaCl + KDF). Stored in `localStorage` under `spider_web_mnemonic_encrypted`.
- **WebRTC P2P Messaging**: Connect with peers via WebRTC data channels using a simple WebSocket signaling server.
- **Transaction Relay**: Relay unsigned transactions over P2P for co-signing or multi-sig flows.

## Security Notes

- Keys are **stored only in memory by default**. Use encrypted storage (buttons in Wallet panel) to persist mnemonics.
- The KDF in `src/utils/crypto.ts` is a **simple demo**. For production, use **Argon2** or **scrypt** for key derivation.
- **Do not use mainnet funds** until you audit and harden the code.
- Always validate peer identities in production (this demo trusts all connected peers).

## Setup & Run

**Requirements**: Node.js (LTS recommended) + npm

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm install
npm run dev
```

Open http://localhost:5173

## Running with P2P

The P2P demo requires a signaling server to exchange WebRTC offers/answers.

```powershell
# terminal 1: start signaling server (requires ws package; installed with `npm install`)
node server/signaling.js

# terminal 2: start dev server
npm run dev
```

Then:
1. Open http://localhost:5173 in two browser windows (or separate devices on same network).
2. Use the **P2P** panel: enter a room id (e.g., `room123`), click **Create (initiator)** in one window and **Join** in the other.
3. Once connected, send messages or relay transactions.

## Project Structure

```
spider-web-wallet/
├── src/
│   ├── components/
│   │   ├── Wallet.tsx       (generate, import, balance, encrypted storage)
│   │   ├── Send.tsx         (transaction signing and sending)
│   │   ├── P2P.tsx          (WebRTC messaging and TX relay)
│   ├── contexts/
│   │   └── KeypairContext.tsx  (shared keypair state)
│   ├── utils/
│   │   └── crypto.ts        (encryption/decryption, KDF)
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── global.d.ts          (temporary type shims; remove after npm install)
├── server/
│   └── signaling.js         (WebSocket signaling server for WebRTC)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Next Steps

- **Browser Extension**: Package as a Manifest v3 extension for Chrome/Edge. See [EXTENSION.md](EXTENSION.md) for build and load instructions.
- **Advanced P2P**: Implement multi-sig or threshold schemes (e.g., 2-of-3 signing over P2P).
- **UI Polish**: Add account management (multiple accounts), transaction history, theme switching.
- **Mainnet Support**: Add network selector, SPL token transfers, program interactions.
- **Mobile**: Adapt for mobile browsers or build native mobile apps (React Native).

## Notes

- The `src/global.d.ts` file contains temporary TypeScript shims to silence editor errors until `npm install` is run. After installing dependencies, you can remove it.
- The signaling server (`server/signaling.js`) uses `ws` (already in dependencies) and is intentionally minimal for demo purposes.



