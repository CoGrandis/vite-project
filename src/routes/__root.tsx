import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-4 flex gap-10">
        <Link to="/" >
          Inicio
        </Link>{' '}
        <Link to="/app" >
          Listado
        </Link>
        <Link to="/form" >
          Agregar Libro
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})