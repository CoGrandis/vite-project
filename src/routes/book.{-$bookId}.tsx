import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/book/{-$bookId}')({
      component: BookComponent,
})

function BookComponent() {
  const { bookId } = Route.useParams()
  return (
      <div>Post ID: {bookId}</div>
  )
}