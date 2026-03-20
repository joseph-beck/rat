import { envSchema } from './types'

const env = envSchema.parse({
  ...import.meta.env,
  APP_VERSION: __APP_VERSION__,
})

export { env }
