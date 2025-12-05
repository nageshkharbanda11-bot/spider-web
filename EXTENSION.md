# Building Spider Web as a Browser Extension

Spider Web Wallet can be packaged as a **Manifest v3** browser extension for Chrome, Edge, and other Chromium-based browsers.

## Quick Start

```powershell
cd "d:\Spider Web\spider-web-wallet"
npm install
npm run build:extension
```

This generates an `dist-extension/` folder containing all extension files.

## Loading in Chrome/Edge

### Chrome

1. Open `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right)
3. Click **Load unpacked**
4. Select the `dist-extension/` folder
5. The Spider Web Wallet icon should appear in your toolbar

### Edge

1. Open `edge://extensions/`
2. Enable **Developer mode** (toggle in left sidebar)
3. Click **Load unpacked**
4. Select the `dist-extension/` folder

## Project Structure (Extension)

```
extension/
├── manifest.json       (Manifest v3 config)
├── popup.html          (Icon popup UI)
├── popup.ts            (Popup script)
├── wallet.html         (Full wallet page)
├── background.ts       (Service worker; long-running tasks)
└── content.ts          (Content script; dapp communication)
```

## How It Works

- **Popup**: Click the extension icon → small popup with "Open Wallet" button.
- **Full Wallet**: Opens a full-page interface with all wallet features.
- **Background Worker**: Handles storage, message passing, and background tasks.
- **Content Script**: Injects `window.spiderWebWallet` API into dapp pages (optional, minimal).

## Encryption & Storage

- Mnemonics are stored via `chrome.storage.local` (encrypted by Chrome browser).
- The popup checks if a wallet exists and shows status.

## Permissions

The extension requires:
- `storage` — for encrypted mnemonic/settings storage
- `webRequest` — for blockchain RPC calls
- Host permissions for Solana RPC endpoints (devnet, mainnet) and WebSocket signaling server

## Testing

1. Generate a wallet in the popup
2. Check that encrypted mnemonic is saved
3. Close and re-open popup — status should show "✓ Wallet initialized"
4. Click "Open Wallet" → opens full interface in a tab

## Packaging for Distribution

To distribute on the Chrome Web Store:

1. Create a developer account at https://developer.chrome.com/
2. Build the extension: `npm run build:extension`
3. Zip the `dist-extension/` folder
4. Upload to the Chrome Web Store dashboard
5. Set icon, description, privacy policy, and publish

For more details: https://developer.chrome.com/docs/webstore/

## Security Considerations

- **Private keys in memory only** by default. Use `chrome.storage.local` for encrypted persistence.
- **Content script security**: The dapp API (`window.spiderWebWallet`) is minimal to reduce attack surface. In production, add proper permission prompts and origin validation.
- **No mainnet funds** until you audit and add additional security measures (e.g., request confirmation modals, hardware wallet support).

## Next Steps

- Add hardware wallet support (Ledger, Trezor) via WebUSB or HID.
- Implement dapp connection with origin validation and user permission prompts.
- Add transaction history and multiple account management.
- Create custom branding and UI polish.
