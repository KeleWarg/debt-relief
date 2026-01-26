'use client'

import * as React from 'react'
import { 
  CreditCard, 
  TrendingUp, 
  TrendingDown,
  ShieldCheck,
  FileText,
  Wallet,
  type LucideIcon
} from 'lucide-react'
import { FormLayout } from '@/components/layout/FormLayout'
import { Button } from '@/components/ui/Button'
import { LottieIcon } from '@/components/ui/LottieIcon'
import { type DebtTypeOption } from '@/types/funnel'

// Import Lottie animation data
import interstitialAnimation from '../../../public/lottie/interstitial-1.json'

interface StatItem {
  icon: LucideIcon
  text: string
}

// Stats content map based on debt type (headline is now universal)
const DEBT_TYPE_STATS: Record<DebtTypeOption | 'default', StatItem[]> = {
  'credit-card': [
    { icon: CreditCard, text: 'Average credit card debt per household: $7,951' },
    { icon: TrendingUp, text: 'Average credit card APR: 24.7%' },
    { icon: TrendingDown, text: 'Debt relief typically reduces balances 30-50%' },
    { icon: ShieldCheck, text: "Checking your options won't affect your credit score" },
  ],
  'personal-loan': [
    { icon: FileText, text: 'Average personal loan balance: $8,400' },
    { icon: TrendingUp, text: 'Average personal loan APR: 12.2%' },
    { icon: TrendingDown, text: 'Debt relief typically reduces balances 30-50%' },
    { icon: ShieldCheck, text: "Checking your options won't affect your credit score" },
  ],
  'both': [
    { icon: Wallet, text: "You're not alone — millions carry multiple debt types" },
    { icon: TrendingUp, text: 'Combined balances often mean higher interest paid' },
    { icon: TrendingDown, text: 'Debt relief typically reduces balances 30-50%' },
    { icon: ShieldCheck, text: "Checking your options won't affect your credit score" },
  ],
  // Fall back to 'both' variant for unrecognized debt types
  'default': [
    { icon: Wallet, text: "You're not alone — millions carry multiple debt types" },
    { icon: TrendingUp, text: 'Combined balances often mean higher interest paid' },
    { icon: TrendingDown, text: 'Debt relief typically reduces balances 30-50%' },
    { icon: ShieldCheck, text: "Checking your options won't affect your credit score" },
  ],
}

interface DidYouKnowScreenProps {
  debtType?: DebtTypeOption
  onBack?: () => void
  onNext?: () => void
}

/**
 * DidYouKnowScreen
 * 
 * Interstitial screen between DebtTypeScreen and IncomeScreen
 * A reassurance/social proof "breather" moment with debt-type specific stats
 */
export function DidYouKnowScreen({ 
  debtType,
  onBack, 
  onNext 
}: DidYouKnowScreenProps) {
  // Get stats based on debt type
  const stats = debtType 
    ? DEBT_TYPE_STATS[debtType] 
    : DEBT_TYPE_STATS['default']

  return (
    <FormLayout currentStep={2} onBack={onBack}>
      <div className="animate-slide-up flex flex-col items-center text-center py-8 space-y-8">
        {/* Lottie Animation */}
        <div className="flex items-center justify-center">
          <div className="w-32 h-32">
            <LottieIcon 
              animationData={interstitialAnimation}
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Universal Two-Part Headline */}
        <div>
          {/* Empathy Line */}
          <p className="font-display text-xl md:text-2xl text-neutral-800 text-center font-medium">
            <span className="block">Over 100 million Americans are working</span>
            <span className="block">to pay down debt just like you.</span>
          </p>
          {/* Hope Line */}
          <p className="text-lg text-primary-700 text-center font-semibold mt-2">
            The good news? Thousands have found relief.
          </p>
        </div>
        
        {/* Stats Card */}
        <div className="w-full max-w-md bg-primary-300 rounded-xl p-6">
          <div className="space-y-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="flex items-center gap-3">
                  <IconComponent className="w-5 h-5 text-primary-700 flex-shrink-0" />
                  <span className="text-neutral-800 text-left">{stat.text}</span>
                </div>
              )
            })}
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="w-full max-w-md">
          <Button type="button" fullWidth onClick={onNext}>
            Continue
          </Button>
        </div>
        
        {/* Reassurance Line */}
        <p className="text-sm text-neutral-500 text-center italic">
          You&apos;re taking the right step — help is available.
        </p>
      </div>
    </FormLayout>
  )
}

export default DidYouKnowScreen
