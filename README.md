# Zwerm3 Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## The manual

The user manual of KweenB lives in this site and is also made into a PDF.

| What | Where |
| --- | --- |
| The chapters in English | `docs/manual/` |
| The chapters in Dutch | `i18n/nl/docusaurus-plugin-content-docs/current/manual/` (same file names) |
| The pictures | `static/img/manual/` |
| The PDFs | `static/pdf/kweenb-manual-en.pdf` and `kweenb-manual-nl.pdf` |

The chapters are plain Markdown. A numbered list directly under a picture is its legend: on the site and in the PDF its numbers get the same yellow circle as the markers in the picture. Names of buttons and menus stay in English in the Dutch text, because KweenB is in English.

### After changing a text

```
$ npm run manual:pdf     # makes both PDFs again (needs Google Chrome)
$ npm run build          # the site, in both languages
```

Change the Dutch chapter together with the English one.

### After KweenB changed: new pictures

The pictures are taken by a script from a running KweenB and from the page of the satellite, so they can be made again in a few minutes. Nothing in the scripts plays a sound, flashes, updates or deletes.

1. Start KweenB for development with its two debugging ports (in the `kweenb` folder):
   `KWEENB_DEBUG_PORT=9333 KWEENB_INSPECT_PORT=9334 npm run watch`
2. Open the satellite's page in a Chrome with a debugging port:
   `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --remote-debugging-port=9340 --user-data-dir=/tmp/chrome-satellite http://satellite.local/`
3. `npm run manual:shots`, or one picture: `node tools/shots-kweenb.mjs routing`
4. `npm run manual:pdf`

The pictures of the battery (`battery-*.png`) are not taken from real speakers but from a pretend swarm on this computer, so they need no speaker with a battery meter:

1. `FAKE_VOLTS_ONLY=5 node tools/fake-swarm.mjs` (leave it running)
2. Start KweenB as in step 1 above, then `node tools/fake-swarm.mjs attach`
3. `node tools/shots-battery.mjs`
4. Close KweenB: that ends the pretending. Do not press Connect while it lasts.

To show a streaming swarm in the pictures, connect first (`node tools/shots-kweenb.mjs connect` streams silence to the bees in use). Which markers go where is written per picture in `tools/shots-kweenb.mjs` and `tools/shots-satellite.mjs`.
