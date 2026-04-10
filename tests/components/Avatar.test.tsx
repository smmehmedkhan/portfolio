import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'

describe('Avatar', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the avatar root and image slot', () => {
    render(
      <Avatar>
        <AvatarImage src="/avatar.png" alt="User avatar" />
      </Avatar>
    )

    const avatar = screen.getByRole('img', { name: /user avatar/i })
    expect(avatar).toBeInTheDocument()
    expect(avatar.parentElement).toHaveAttribute('data-slot', 'avatar')
  })

  it('renders a fallback element when image is missing', () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    )

    expect(screen.getByText(/jd/i)).toBeInTheDocument()
    expect(screen.getByText(/jd/i).parentElement).toHaveAttribute(
      'data-slot',
      'avatar'
    )
  })

  it('renders an avatar badge and group count', () => {
    render(
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="/avatar.png" alt="User" />
          <AvatarBadge>1</AvatarBadge>
        </Avatar>
        <AvatarGroupCount>+2</AvatarGroupCount>
      </AvatarGroup>
    )

    expect(screen.getByText(/user/i)).toBeInTheDocument()
    expect(screen.getByText(/\+2/i)).toHaveAttribute(
      'data-slot',
      'avatar-group-count'
    )
  })
})
