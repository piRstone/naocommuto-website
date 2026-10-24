import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = fileURLToPath(new URL('../', import.meta.url))

await build({ root })

// Keep the temporary server bundle inside the project so Node can resolve React.
const serverDir = await mkdtemp(join(root, '.prerender-'))

try {
  await build({
    root,
    publicDir: false,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: serverDir,
      ssrEmitAssets: true,
    },
  })

  const { render } = await import(pathToFileURL(join(serverDir, 'entry-server.js')).href)
  const htmlPath = join(root, 'dist/index.html')
  const template = await readFile(htmlPath, 'utf8')
  const placeholder = '<!--prerender-->'

  if (!template.includes(placeholder)) {
    throw new Error('Missing prerender placeholder in dist/index.html')
  }

  await writeFile(htmlPath, template.replace(placeholder, () => render()))
} finally {
  await rm(serverDir, { recursive: true, force: true })
}
