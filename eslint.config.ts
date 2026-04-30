import { jblibConfig } from '@jblib/eslint'
import { jblibReactConfig } from '@jblib/eslint-react'

export default [
  ...jblibConfig,
  ...jblibReactConfig,
  {
    settings: {
      react: {
        version: '19.0',
      },
    },
  },
]
