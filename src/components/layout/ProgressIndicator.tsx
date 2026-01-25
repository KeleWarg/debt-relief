import * as React from 'react'
import { cn } from '@/lib/utils'

interface ProgressIndicatorProps {
  currentStep: number
  className?: string
}

const steps = [
  { id: 1, label: 'Your debt profile' },
  { id: 2, label: 'Your details' },
  { id: 3, label: 'Reduce your debt' },
]

/**
 * ProgressIndicator Component
 * 
 * 3-step progress bar showing user's journey position
 * Steps: "Your debt profile" → "Your details" → "Reduce your debt"
 * 
 * @example
 * <ProgressIndicator currentStep={1} />
 */
export function ProgressIndicator({ currentStep, className }: ProgressIndicatorProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Desktop Progress */}
      <div className="hidden sm:flex items-center justify-center gap-8">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep
          const isCompleted = step.id < currentStep
          
          return (
            <div 
              key={step.id}
              className="flex items-center gap-2"
            >
              {/* Step indicator */}
              <div 
                className={cn(
                  'flex items-center justify-center w-6 h-6 rounded-full text-body-sm font-medium transition-colors',
                  isActive && 'bg-primary-700 text-white',
                  isCompleted && 'bg-primary-700 text-white',
                  !isActive && !isCompleted && 'bg-neutral-200 text-neutral-500'
                )}
              >
                {isCompleted ? (
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              
              {/* Step label */}
              <span 
                className={cn(
                  'text-body-sm transition-colors',
                  isActive && 'text-primary-700 font-semibold',
                  isCompleted && 'text-neutral-800',
                  !isActive && !isCompleted && 'text-neutral-500'
                )}
              >
                {step.label}
              </span>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div 
                  className={cn(
                    'hidden lg:block w-16 h-0.5 ml-2',
                    isCompleted ? 'bg-primary-700' : 'bg-neutral-200'
                  )}
                />
              )}
            </div>
          )
        })}
      </div>
      
      {/* Mobile Progress Bar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-body-sm text-neutral-800 font-medium">
            {steps.find(s => s.id === currentStep)?.label}
          </span>
          <span className="text-body-sm text-neutral-500">
            Step {currentStep} of {steps.length}
          </span>
        </div>
        <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-700 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProgressIndicator
