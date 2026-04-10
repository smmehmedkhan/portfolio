import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

describe('Drawer', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders drawer components with the correct slots', () => {
    render(
      <Drawer defaultOpen>
        <DrawerPortal>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer title</DrawerTitle>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose>Close</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPortal>
        <DrawerTrigger>Open</DrawerTrigger>
      </Drawer>
    )

    expect(screen.getByText(/drawer title/i)).toBeInTheDocument()
    expect(screen.getByText(/close/i)).toBeInTheDocument()
    expect(screen.getByText(/open/i)).toBeInTheDocument()
  })
})
