import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
  <div className="hero bg-base-200 min-h-screen flex p-10 ">
        <h1 className="text-5xl font-bold">API Libros</h1>
  </div>
  )
}
