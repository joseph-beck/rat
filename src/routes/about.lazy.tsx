import { createLazyFileRoute } from '@tanstack/react-router'

const Page = () => {
  return <div className="p-2">Hello from About!</div>
}

const Route = createLazyFileRoute('/about')({
  component: Page,
})

export { Route }
