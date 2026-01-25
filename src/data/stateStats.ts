/**
 * State Statistics Data
 * 
 * Average debt and savings data by state for the debt relief funnel
 * Values are varied realistically between $4,000-$7,000 debt and $3,500-$5,500 savings
 */

export interface StateStats {
  avgDebt: number
  avgSavings: number
}

export const stateStats: Record<string, StateStats> = {
  'Alabama': { avgDebt: 5200, avgSavings: 4100 },
  'Alaska': { avgDebt: 4800, avgSavings: 3900 },
  'Arizona': { avgDebt: 5500, avgSavings: 4300 },
  'Arkansas': { avgDebt: 4900, avgSavings: 3800 },
  'California': { avgDebt: 6800, avgSavings: 5300 },
  'Colorado': { avgDebt: 5600, avgSavings: 4400 },
  'Connecticut': { avgDebt: 6200, avgSavings: 4900 },
  'Delaware': { avgDebt: 5100, avgSavings: 4000 },
  'Florida': { avgDebt: 5900, avgSavings: 4600 },
  'Georgia': { avgDebt: 5400, avgSavings: 4200 },
  'Hawaii': { avgDebt: 6500, avgSavings: 5100 },
  'Idaho': { avgDebt: 4600, avgSavings: 3600 },
  'Illinois': { avgDebt: 5700, avgSavings: 4500 },
  'Indiana': { avgDebt: 5000, avgSavings: 3900 },
  'Iowa': { avgDebt: 4700, avgSavings: 3700 },
  'Kansas': { avgDebt: 4800, avgSavings: 3800 },
  'Kentucky': { avgDebt: 5100, avgSavings: 4000 },
  'Louisiana': { avgDebt: 5300, avgSavings: 4100 },
  'Maine': { avgDebt: 4900, avgSavings: 3900 },
  'Maryland': { avgDebt: 6100, avgSavings: 4800 },
  'Massachusetts': { avgDebt: 6400, avgSavings: 5000 },
  'Michigan': { avgDebt: 5200, avgSavings: 4100 },
  'Minnesota': { avgDebt: 5300, avgSavings: 4200 },
  'Mississippi': { avgDebt: 4500, avgSavings: 3500 },
  'Missouri': { avgDebt: 5000, avgSavings: 3900 },
  'Montana': { avgDebt: 4700, avgSavings: 3700 },
  'Nebraska': { avgDebt: 4600, avgSavings: 3600 },
  'Nevada': { avgDebt: 5800, avgSavings: 4500 },
  'New Hampshire': { avgDebt: 5500, avgSavings: 4300 },
  'New Jersey': { avgDebt: 6600, avgSavings: 5200 },
  'New Mexico': { avgDebt: 4800, avgSavings: 3800 },
  'New York': { avgDebt: 6900, avgSavings: 5400 },
  'North Carolina': { avgDebt: 5400, avgSavings: 4200 },
  'North Dakota': { avgDebt: 4400, avgSavings: 3500 },
  'Ohio': { avgDebt: 5100, avgSavings: 4000 },
  'Oklahoma': { avgDebt: 4900, avgSavings: 3800 },
  'Oregon': { avgDebt: 5400, avgSavings: 4200 },
  'Pennsylvania': { avgDebt: 5600, avgSavings: 4400 },
  'Rhode Island': { avgDebt: 5700, avgSavings: 4500 },
  'South Carolina': { avgDebt: 5200, avgSavings: 4100 },
  'South Dakota': { avgDebt: 4500, avgSavings: 3500 },
  'Tennessee': { avgDebt: 5300, avgSavings: 4100 },
  'Texas': { avgDebt: 5800, avgSavings: 4600 },
  'Utah': { avgDebt: 5100, avgSavings: 4000 },
  'Vermont': { avgDebt: 4700, avgSavings: 3700 },
  'Virginia': { avgDebt: 5900, avgSavings: 4700 },
  'Washington': { avgDebt: 5700, avgSavings: 4500 },
  'West Virginia': { avgDebt: 4600, avgSavings: 3600 },
  'Wisconsin': { avgDebt: 5000, avgSavings: 3900 },
  'Wyoming': { avgDebt: 4500, avgSavings: 3500 },
}

export const defaultStats: StateStats = { avgDebt: 5000, avgSavings: 4000 }

/**
 * Get state stats by state name
 * Falls back to default stats if state not found
 */
export function getStateStats(stateName: string | null): StateStats {
  if (!stateName) return defaultStats
  return stateStats[stateName] ?? defaultStats
}

/**
 * Map state abbreviation to full name for lookup
 */
export const stateAbbreviationToName: Record<string, string> = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
}

/**
 * Map full state name to abbreviation
 */
export const stateNameToAbbreviation: Record<string, string> = Object.fromEntries(
  Object.entries(stateAbbreviationToName).map(([abbr, name]) => [name, abbr])
)
