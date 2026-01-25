import * as React from 'react'
import { ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Header } from './Header'
import { Footer } from './Footer'
import { TrustBadges } from './TrustBadges'
import { ProgressIndicator } from './ProgressIndicator'

interface FormLayoutProps {
  children: React.ReactNode
  currentStep?: number
  onBack?: () => void
  showProgress?: boolean
  sideContent?: React.ReactNode
  className?: string
}

/**
 * FormLayout Component
 * 
 * Standard layout wrapper for all form screens
 * Includes Header, Progress Indicator, Back button, and Trust Badges
 * 
 * @example
 * <FormLayout 
 *   currentStep={1} 
 *   onBack={handleBack}
 *   sideContent={<SavingsCalculator />}
 * >
 *   <form>...</form>
 * </FormLayout>
 */
export function FormLayout({ 
  children, 
  currentStep = 1, 
  onBack, 
  showProgress = true,
  sideContent,
  className 
}: FormLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="w-full max-w-content mx-auto px-4 sm:px-6 py-8 flex-1">
          {/* Back Button */}
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-neutral-800 hover:text-primary-700 transition-colors mb-4"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-body-sm">Back</span>
            </button>
          )}
          
          {/* Progress Indicator */}
          {showProgress && (
            <div className="mb-8">
              <ProgressIndicator currentStep={currentStep} />
            </div>
          )}
          
          {/* Content Area */}
          <div
            className={cn(
              'flex flex-col gap-6',
              className
            )}
          >
            {/* Main Form Content */}
            <div className="w-full">
              {children}
            </div>
            
            {/* Side Content (Calculator, Preview, etc.) */}
            {sideContent && (
              <div className="w-full">
                {sideContent}
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Trust Badges */}
      <TrustBadges />
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default FormLayout
