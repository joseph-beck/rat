import * as z from 'zod'

const envSchema = z.object({
  APP_VERSION: z.string(),
})

type EnvSchema = z.infer<typeof envSchema>

export type { EnvSchema }

export { envSchema }
