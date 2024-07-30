# Quick-Position-Marker
Quick Position Marker is a simple Chrome extension that allows you to mark a scroll position on a web page with a click and return to it with another click. It's a handy tool for navigating long web pages without losing your place.

## Features

- **Mark Position:** Click the extension icon to mark the current scroll position on a web page.
- **Return to Position:** Click the extension icon again to return to the previously marked position.
- **Automatic Clearing:** Automatically clears the marked position when the tab is closed.
- **Error Handling:** Provides user-friendly error messages for unsupported pages (e.g., `chrome://` URLs).

## Installation

1. Clone this repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click the extension icon to mark the current scroll position on the web page.
2. Click the extension icon again to return to the marked position.
3. The extension icon will update its title to reflect the current action.

> You can also set shortcut for convenience

## Files

- **manifest.json:** Configuration file for the Chrome extension.
- **background.js:** Script that handles background tasks, such as executing the content script and managing marked positions.
- **content_script.js:** Script that runs in the context of web pages to mark and return to scroll positions.

## Development

To contribute to the development of this extension, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please open an issue or contact us directly.

