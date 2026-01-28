'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface StickyButtonContainerProps {
  children: React.ReactNode
  className?: string
}

/**
 * StickyButtonContainer Component
 * 
 * Wraps a button (typically the form submit button) and makes it sticky/fixed 
 * at the bottom of the screen on mobile devices. On tablet and desktop, 
 * the button renders inline as normal.
 * 
 * Features:
 * - Fixed position on mobile (< 640px)
 * - White background with subtle top shadow
 * - Safe area padding for iOS devices with home indicator
 * - Normal inline flow on tablet/desktop
 * 
 * @example
 * <StickyButtonContainer>
 *   <Button type="submit" fullWidth>Continue</Button>
 * </StickyButtonContainer>
 */
export function StickyButtonContainer({ 
  children, 
  className 
}: StickyButtonContainerProps) {
  return (
    <>
      {/* Button container - sticky on mobile, normal on desktop */}
      <div
        className={cn(
          // Mobile: fixed at bottom with styling
          'fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 px-4 pt-4 pb-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]',
          // Tablet/Desktop: normal positioning
          'sm:relative sm:bottom-auto sm:left-auto sm:right-auto sm:bg-transparent sm:border-0 sm:p-0 sm:shadow-none',
          className
        )}
      >
        <div className="max-w-[410px] mx-auto sm:max-w-none">
          {children}
        </div>
      </div>
    </>
  )
}

export default StickyButtonContainer
