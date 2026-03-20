import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import type { ReactElement } from 'react'

import { env } from '@/lib/env/env'

const queryClient = new QueryClient()

const Page = (): ReactElement => (
  <QueryClientProvider client={queryClient}>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <p className="fixed text-muted-foreground right-4">v{env.APP_VERSION}</p>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)

const Route = createRootRoute({
  component: Page,
})

export { Route }
