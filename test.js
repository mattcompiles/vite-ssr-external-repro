import { createServer } from 'vite'

const entry = '/src/main.jsx'

const server = await createServer()
server.pluginContainer.buildStart({})

await server.ssrLoadModule(entry)

await server.close()
