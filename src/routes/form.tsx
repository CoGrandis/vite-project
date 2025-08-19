import { createFileRoute } from '@tanstack/react-router'
import { BookForm } from '../components/BookForm'

export const Route = createFileRoute('/form')({
  component: BookForm,
})

