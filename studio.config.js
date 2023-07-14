module.exports = {
    components: './src/components.js',
    customHints: './src/hints.js',
    snippets: './src/snippets.js',
    outputPath: './dist',
    publicAssetsRoots: [
        { 
            src: './node_modules/@shoelace-style/shoelace/dist/assets/icons/*',
            dest: 'shoelace/assets/icons'
        }
    ],
    port: 9000,
    openBrowser: true,
    paramType: 'search',
    favicon: './src/images/favicon.svg',
    widths: [320, 600, 960, 1028, 1200],
    exampleCode: `<p>this is an example</p>`,
    iframeSandbox: 'allow-scripts',
}