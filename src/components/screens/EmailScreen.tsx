'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Lightbulb } from 'lucide-react'
import { FormLayout } from '@/components/layout/FormLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { formatCurrency } from '@/lib/utils'

// Validation schema
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
})

type EmailFormData = z.infer<typeof emailSchema>

interface EmailScreenProps {
  initialValue?: string
  firstName?: string
  debtAmount?: number
  onBack?: () => void
  onSubmit?: (email: string) => void
}

/**
 * Capitalize the first letter of a string
 */
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * EmailScreen
 * 
 * Celebratory gate screen - asks for email before showing debt profile
 */
export function EmailScreen({ 
  initialValue = '', 
  firstName,
  debtAmount = 20000,
  onBack, 
  onSubmit 
}: EmailScreenProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: initialValue,
    },
  })
  
  const onFormSubmit = (data: EmailFormData) => {
    onSubmit?.(data.email)
  }

  // Calculate potential savings (40% of debt)
  const potentialSavings = Math.round(debtAmount * 0.4)
  
  return (
    <FormLayout currentStep={10} onBack={onBack}>
      <form onSubmit={handleSubmit(onFormSubmit)} className="animate-slide-up space-y-6">
        {/* Headline */}
        <h1 className="font-display text-display sm:text-display-md lg:text-display-lg text-neutral-900 text-center">
          {firstName 
            ? `Congrats, ${capitalizeFirstLetter(firstName)}! Your debt profile is ready.`
            : 'Congrats! Your debt profile is ready.'
          }
        </h1>
        
        {/* Subheading */}
        <p className="text-body text-neutral-500 text-center">
          Please share your email so we know where to send your debt relief plan
        </p>
        
        {/* Email Input */}
        <div className="pt-2 max-w-[410px] mx-auto w-full">
          <Input
            label="Email address"
            type="email"
            placeholder="you@example.com"
            error={errors.email?.message}
            {...register('email')}
          />
        </div>
        
        {/* Submit Button */}
        <Button type="submit" fullWidth showTrailingIcon>
          Continue to Debt Profile
        </Button>
        
        {/* Fun Fact Callout */}
        <div className="bg-primary-300 rounded-xl p-4 flex items-start gap-3 max-w-[410px] mx-auto w-full">
          <Lightbulb className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
          <p className="text-body-sm text-neutral-800">
            People with your debt profile typically save {formatCurrency(potentialSavings)}+ through a personalized debt relief plan.
          </p>
        </div>
        
        {/* Privacy note */}
        <p className="text-caption text-neutral-500 text-center max-w-[410px] mx-auto">
          We respect your privacy. Your email will only be used to send you 
          information about your debt relief options.
        </p>
      </form>
    </FormLayout>
  )
}

export default EmailScreen
