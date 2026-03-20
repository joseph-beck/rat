import { createLazyFileRoute } from '@tanstack/react-router'
import { type ReactElement, useState } from 'react'

import { Button } from '@/ui/button'

const content = `# clone rat
git clone https://github.com/joseph-beck/rat.git

# install with pnpm
pnpm install

# run the app
pnpm dev
`

const Page = (): ReactElement => {
  const [count, setCount] = useState(0)

  return (
    <div className="p-2 text-center">
      <h3>Welcome Home!</h3>
      <div className="mt-12">
        <p>Use rat</p>
        <pre className="mt-4 inline-block w-fit rounded-md border p-3 text-left text-muted-foreground">
          <code>{content}</code>
        </pre>
      </div>
      <div className="mt-12">
        <Button
          onClick={() => {
            setCount((c) => c + 1)
          }}
        >
          Button
        </Button>
        <p className="mt-4 text-muted-foreground">Count: {count}</p>
      </div>
    </div>
  )
}

const Route = createLazyFileRoute('/')({
  component: Page,
})

export { Route }
