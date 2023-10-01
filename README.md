# How to use

```ts
import { slugify } from "transliteration";

slugify("..ALİ VELİ.\n      foo_bar\r\t\n\t\\", {
  allowedChars: `'a-zA-Z0-9-`,
});
```
