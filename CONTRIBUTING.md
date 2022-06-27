# CONTRIBUTING

Debug logging in browser extensions is available in the [Browser Console](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console). Note this is different from the Developer Console for an individual web page! The Browser Console is where any console.log() or related from extension code will end up.

You can open it with Ctrl + Shift + J, or by going to Tools -> Browser Tools -> Browser Console

## Building

You must install `web-ext` from npm and build the extension by running the `web-ext build` command from the root of this repository. This will create a new .zip file in the `web-ext-artifacts/` directory that can be used to upload to the Addons site.

## Resources

* ["Context Menu: Copy link with types" example extension](https://github.com/mdn/webextensions-examples/tree/master/context-menu-copy-link-with-types)
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/menus
* https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
* ["Extension Workshop: Temporary Installation in Firefox"](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
* ["Getting Started with web-ext"](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)
