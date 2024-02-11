export default {
    components: './src/components.js',
    componentManifest: {
      path: './node_modules/@shoelace-style/shoelace/dist/custom-elements.json',
      classNameFilter: '^Sl',
      globalAttrs: false
    },
    customHints: './src/hints.js',
    snippets: './src/snippets.js',
    outputPath: './dist',
    publicAssetsRoots: [
      {
        src: './node_modules/@shoelace-style/shoelace/dist/assets/icons/*',
        dest: 'shoelace/assets/icons'
      }
    ],
    initialMode: 'dark',
    darkModeCallback: (newMode) => {
      document.documentElement.classList.remove(`sl-theme-dark`);
      document.documentElement.classList.remove(`sl-theme-light`);

      if(newMode !== 'system') {
        document.documentElement.classList.add(`sl-theme-${newMode}`);
      } else {
        const darkMode = matchMedia('(prefers-color-scheme: dark)');
        document.documentElement.classList.add(`sl-theme-${darkMode.matches ? 'dark' : 'light'}`);
      }
    },
    port: 9000,
    openBrowser: true,
    paramType: 'search',
    favicon: './src/images/favicon.svg',
    widths: [320, 600, 960, 1028, 1200],
    exampleCode: `<p>this is an example</p>`,
    iframeSandbox: 'allow-scripts',
}
