# ToolMixo Open Utilities



Small, client-side utility examples from [ToolMixo](https://www.toolmixo.com/), a free browser-based toolkit for text, privacy, and everyday digital tasks.



## Included example



`scam-message-analyzer.js` is a dependency-free JavaScript helper that looks for common signals in a suspicious message, such as pressure language, requests for a code, unusual payment requests, and links. It operates on the supplied text only; it does not visit a URL, inspect a sender, or determine that a message is safe.



```js

import { assessScamMessage } from "./scam-message-analyzer.js";



const result = assessScamMessage("Urgent: verify your account at https://example.test");

console.log(result.level); // "medium" or "high", depending on matched signals

```



If a message appears suspicious, do not click its links or share codes. Instead, use a verified website or contact channel that you open independently. The complete browser tool is available at [ToolMixo](https://www.toolmixo.com/2026/08/scam-phishing-message-checker.html).



## License



MIT License. See `LICENSE`.

