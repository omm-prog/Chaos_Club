import { Prompt, ZoneId } from '../../../types/game'
import { afterDark18Prompts } from './after-dark-18'
import { unhinged18Prompts } from './unhinged-18'
import { bestieWars18Prompts } from './bestie-wars-18'
import { confessionRoom18Prompts } from './confession-room-18'
import { savageMode18Prompts } from './savage-mode-18'
import { coupleChemistry18Prompts } from './couple-chemistry-18'

export const ALL_18_PLUS_PROMPTS_BY_ZONE: Record<ZoneId, Prompt[]> = {
  'after-dark': afterDark18Prompts,
  'unhinged': unhinged18Prompts,
  'bestie-wars': bestieWars18Prompts,
  'confession-room': confessionRoom18Prompts,
  'savage-mode': savageMode18Prompts,
  'couple-chemistry': coupleChemistry18Prompts
}

export function get18PlusPromptsForZone(zoneId: ZoneId): Prompt[] {
  return ALL_18_PLUS_PROMPTS_BY_ZONE[zoneId] || []
}
