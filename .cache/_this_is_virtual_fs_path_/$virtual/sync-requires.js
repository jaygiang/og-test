
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/johnathangiang/WebMocha/learning/og-test/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johnathangiang/WebMocha/learning/og-test/src/pages/index.js"))
}

