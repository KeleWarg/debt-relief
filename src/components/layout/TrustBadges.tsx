import * as React from 'react'
import { Percent, Shield, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadgesProps {
  className?: string
}

/**
 * TrustBadges Component
 * 
 * Bottom trust indicators that appear on all screens
 * Shows "Reduce your loan by 50%", "No impact on credit score", "Your data is safe with us"
 * 
 * @example
 * <TrustBadges />
 */
export function TrustBadges({ className }: TrustBadgesProps) {
  const badges = [
    {
      icon: Percent,
      text: 'Reduce your loan by 50%',
    },
    {
      icon: Shield,
      text: 'No impact on credit score',
    },
    {
      icon: Lock,
      text: 'Your data is safe with us',
    },
  ]
  
  return (
    <div 
      className={cn(
        'w-full border-t border-neutral-200 bg-white py-4',
        className
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="flex items-center gap-2"
            >
              <badge.icon className="w-4 h-4 text-primary-700" />
              <span className="text-body-sm text-neutral-800">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustBadges
