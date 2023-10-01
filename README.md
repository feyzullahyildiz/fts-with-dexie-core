# How to use

```js
import { parseData, RecommendedSlugifyAllowedCharacters} from "fts-with-dexie-core";
import { slugify } from "transliteration";

const mySlugify = (str) => {
  return slugify(str, {
    allowedChars: RecommendedSlugifyAllowedCharacters,
  });
};
const movies = [
  {
    id: 1,
    title: "The Godfather",
    desc: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
  },
  {
    id: 2,
    title: "WALL·E",
    desc: "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
  },
  {
    id: 3,
    title: "Finding Nemo",
    desc: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
  },
];
const moviesForFTS = movies.map((m) => ({
  id: m.id,
  fts_title: mySlugify(m.title),
  fts_desc: mySlugify(m.desc),
}));
const config = {
  idPropertyName: "id",
  ftsFieldNames: ["title", "desc"],
  ftsFieldWeights: [1.2, 1],
};

const results = [];
for (const ftsData of moviesForFTS) {
  const res = parseData(config, ftsData);
  results.push(...res);
}
// THEN, use this results array in "fts-with-dexie". But it is not published yet :D
```
