import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders a card with header, title, description, content, and footer', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
          <CardAction>
            <button type="button">Action</button>
          </CardAction>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText(/test title/i)).toBeInTheDocument()
    expect(screen.getByText(/test description/i)).toBeInTheDocument()
    expect(screen.getByText(/card content/i)).toBeInTheDocument()
    expect(screen.getByText(/footer/i)).toBeInTheDocument()
  })

  it('renders a card with only content', () => {
    render(
      <Card>
        <CardContent>Just Content</CardContent>
      </Card>
    )

    expect(screen.getByText(/just content/i)).toBeInTheDocument()
    expect(
      screen.getByText(/just content/i).closest('[data-slot="card"]')
    ).toBeTruthy()
  })

  it('renders title and description slots separately', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Title</CardTitle>
        </CardHeader>
        <CardHeader>
          <CardDescription>My Description</CardDescription>
        </CardHeader>
      </Card>
    )

    expect(screen.getByText(/my title/i)).toBeInTheDocument()
    expect(screen.getByText(/my description/i)).toBeInTheDocument()
  })

  it('forwards custom className to the card container', () => {
    render(<Card className="custom-card">Card Container</Card>)
    const card = screen
      .getByText(/card container/i)
      .closest('[data-slot="card"]')
    expect(card).toHaveClass('custom-card')
  })
})
