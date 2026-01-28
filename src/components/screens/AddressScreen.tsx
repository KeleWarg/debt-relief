'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, ShieldCheck } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TrustBadges } from '@/components/layout/TrustBadges'
import { ProgressIndicator } from '@/components/layout/ProgressIndicator'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { formatCurrency } from '@/lib/utils'

// Validation schema
const addressSchema = z.object({
  line1: z.string().min(5, 'Please enter your street address'),
  line2: z.string().optional(),
  zipCode: z.string().regex(/^\d{5}$/, 'Please enter a valid 5-digit zip code'),
})

type AddressFormData = z.infer<typeof addressSchema>

interface AddressScreenProps {
  firstName?: string
  debtAmount?: number
  initialValue?: {
    line1: string
    line2?: string
    zipCode: string
  }
  onBack?: () => void
  onSubmit?: (address: { line1: string; line2?: string; zipCode: string }) => void
}

/**
 * AddressScreen
 * 
 * Step 10 of the funnel - "Your Address"
 * Two-column layout with context card and address form
 */
export function AddressScreen({ 
  firstName,
  debtAmount = 25000,
  initialValue, 
  onBack, 
  onSubmit 
}: AddressScreenProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      line1: initialValue?.line1 || '',
      line2: initialValue?.line2 || '',
      zipCode: initialValue?.zipCode || '',
    },
  })
  
  // Calculate savings (40% reduction estimate)
  const savings = Math.round(debtAmount * 0.4)
  
  const onFormSubmit = (data: AddressFormData) => {
    onSubmit?.(data)
  }
  
  // "Why we ask" reasons
  const whyWeAskReasons = [
    "Find state-specific debt relief programs",
    "Verify your identity securely",
    "Connect you with local partners"
  ]
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />
      
      {/* Progress Indicator */}
      <ProgressIndicator currentStep={11} onBack={onBack} />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 flex-1">
          {/* Page Headline */}
          <h1 className="font-display text-display sm:text-display-md lg:text-display-lg text-neutral-900 text-center mb-8">
            {firstName ? `Almost there, ${firstName}.` : 'Almost there.'}
          </h1>
          
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Column - Context Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 order-1 lg:order-none">
              {/* Section Label */}
              <p className="text-xs uppercase tracking-wide text-neutral-500 mb-4">
                Almost there
              </p>
              
              {/* Savings Reminder */}
              <div className="bg-secondary-300 rounded-xl p-4 mb-5">
                <p className="text-sm text-neutral-500">Potential Savings</p>
                <p className="text-2xl font-bold text-feedback-success mt-1">
                  {formatCurrency(savings)}*
                </p>
                <p className="text-sm text-neutral-500 mt-1">
                  Timeline: 24-36 months
                </p>
              </div>
              
              {/* Why We Ask */}
              <p className="text-sm font-semibold text-neutral-900 mb-3">
                Why we need your address:
              </p>
              
              <div className="space-y-2">
                {whyWeAskReasons.map((reason, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-feedback-success flex-shrink-0" />
                    <p className="text-sm text-neutral-800">{reason}</p>
                  </div>
                ))}
              </div>
              
              {/* Privacy Assurance */}
              <div className="flex items-start gap-2 mt-4 pt-4 border-t border-gray-100">
                <ShieldCheck className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-500">
                  Your address is never shared without your consent.
                </p>
              </div>
              
              {/* Disclaimer */}
              <p className="text-xs text-neutral-500 mt-4">
                *Estimated savings. Results vary.
              </p>
            </div>
            
            {/* Right Column - Address Form */}
            <div className="order-2 lg:order-none">
              <form onSubmit={handleSubmit(onFormSubmit)} className="animate-slide-up">
                {/* Subheading */}
                <p className="text-neutral-500 text-sm mb-6">
                  Your address helps us find the best debt relief options where you 
                  live, including protections and benefits.
                </p>
                
                {/* Address Fields */}
                <div className="space-y-4 mb-6">
                  <Input
                    label="Street Address"
                    placeholder="123 Main Street"
                    error={errors.line1?.message}
                    {...register('line1')}
                  />
                  
                  <Input
                    label="Apt, suite, etc. (optional)"
                    placeholder="Apartment 4B"
                    error={errors.line2?.message}
                    {...register('line2')}
                  />
                  
                  <div className="w-full sm:w-1/2">
                    <Input
                      label="ZIP Code"
                      placeholder="12345"
                      maxLength={5}
                      error={errors.zipCode?.message}
                      {...register('zipCode')}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button type="submit" fullWidth>
                  See Your Options
                </Button>
                
                {/* Privacy Note */}
                <p className="text-xs text-neutral-500 mt-4 text-center">
                  Your address is used to verify your identity and find location-specific 
                  debt relief options. We never share your address with third parties 
                  without your consent.
                </p>
              </form>
            </div>
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

export default AddressScreen
