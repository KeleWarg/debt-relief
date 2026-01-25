'use client'

import * as React from 'react'
import { CreditCard, Banknote, Layers, ChevronDown, ChevronUp } from 'lucide-react'
import { FormLayout } from '@/components/layout/FormLayout'
import { RadioGroup, RadioCard } from '@/components/ui/RadioCard'
import type { DebtType } from '@/types/funnel'

interface DebtTypeScreenProps {
  initialValue?: DebtType
  onBack?: () => void
  onSubmit?: (debtType: DebtType) => void
}

/**
 * DebtTypeScreen
 * 
 * Step 2 of the funnel - "Tell us which kinds of these debts you have"
 * Shows RadioCards for debt type selection with auto-advance
 */
export function DebtTypeScreen({ 
  initialValue, 
  onBack, 
  onSubmit 
}: DebtTypeScreenProps) {
  const [debtType, setDebtType] = React.useState<DebtType | undefined>(initialValue)
  const [showHowItWorks, setShowHowItWorks] = React.useState(false)
  
  const handleValueChange = (value: string) => {
    const selectedType = value as DebtType
    setDebtType(selectedType)
    // Auto-advance after a brief delay for visual feedback
    setTimeout(() => {
      onSubmit?.(selectedType)
    }, 300)
  }
  
  return (
    <FormLayout currentStep={1} onBack={onBack}>
      <div className="animate-slide-up space-y-6">
        {/* Headline */}
        <div className="space-y-2 text-center">
          <h1 className="font-display text-display sm:text-display-md lg:text-display-lg text-neutral-900 text-center">
            Tell us which kinds of these debts you have
          </h1>
          <p className="text-body text-neutral-500 text-center">
            Select the type of debt you&apos;re looking to reduce
          </p>
        </div>
        
        {/* Debt Type Options */}
        <RadioGroup value={debtType} onValueChange={handleValueChange}>
          <RadioCard 
            value="credit-card" 
            icon={<CreditCard className="w-6 h-6" />}
            description="Visa, Mastercard, store cards, etc."
          >
            Credit card
          </RadioCard>
          
          <RadioCard 
            value="loan" 
            icon={<Banknote className="w-6 h-6" />}
            description="Personal loans, medical bills, etc."
          >
            Loan
          </RadioCard>
          
          <RadioCard 
            value="both" 
            icon={<Layers className="w-6 h-6" />}
            description="Combination of credit cards and loans"
          >
            Both
          </RadioCard>
        </RadioGroup>
        
        {/* Info Section */}
        <div className="p-4 bg-neutral-100 rounded-lg">
          <p className="text-body-sm text-neutral-800">
            Got mortgage, auto or student loan debts?
          </p>
          <p className="text-body-sm text-neutral-500 mt-1">
            These types of debt are not eligible for debt relief programs, but we may 
            still be able to help with your other debts.
          </p>
          
          {/* Expandable "How it works" section */}
          <button
            type="button"
            onClick={() => setShowHowItWorks(!showHowItWorks)}
            className="flex items-center gap-2 mt-4 text-primary-700 text-body-sm font-medium hover:underline"
          >
            How it works
            {showHowItWorks ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          
          {showHowItWorks && (
            <div className="mt-4 pt-4 border-t border-neutral-200 space-y-3 animate-slide-up">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-700 text-white text-body-sm font-semibold flex items-center justify-center">
                  1
                </div>
                <div>
                  <p className="text-body-sm font-medium text-neutral-800">Tell us about your debt</p>
                  <p className="text-caption text-neutral-500">Share how much you owe and your income</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-700 text-white text-body-sm font-semibold flex items-center justify-center">
                  2
                </div>
                <div>
                  <p className="text-body-sm font-medium text-neutral-800">Get matched with partners</p>
                  <p className="text-caption text-neutral-500">We&apos;ll find the best debt relief options for you</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-700 text-white text-body-sm font-semibold flex items-center justify-center">
                  3
                </div>
                <div>
                  <p className="text-body-sm font-medium text-neutral-800">Reduce your debt</p>
                  <p className="text-caption text-neutral-500">Work with your matched partner to lower what you owe</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </FormLayout>
  )
}

export default DebtTypeScreen
