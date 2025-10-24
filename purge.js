const { PurgeCSS } = require('purgecss')
const postcss = require('postcss')
const discardEmpty = require('postcss-discard-empty')
const cssnano = require('cssnano')     // optional: for minifying
const fs = require('fs')

async function purgeAndClean() {
  // Step 1: PurgeCSS removes unused selectors, keyframes, and variables
  const purgeResult = await new PurgeCSS().purge({
    content: ['index.html', './**/*.js'], // files to scan for used selectors
    css: ['css/styles.css'],
    keyframes: true,
    variables: true,
  })

  // Step 2: Get the purified CSS
  const css = purgeResult[0].css

  // Step 3: PostCSS removes empty definitions and optionally minifies
  const result = await postcss([
    discardEmpty(),
    cssnano({ preset: 'default' }) // optional, remove if you don't want minification
  ]).process(css, { from: undefined })

  // Step 4: Write final cleaned file
  fs.writeFileSync('css/styles.min.css', result.css)
  console.log('✅ Cleaned CSS written to styles.cleaned.css')
}

purgeAndClean().catch(err => console.error(err))

