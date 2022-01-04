import Artstation from '../assets/svg/artstation.svg'
import Discord from '../assets/svg/discord.svg'
import LinkedIn from '../assets/svg/linkedin.svg'
import Medium from '../assets/svg/medium.svg'
import Telegram from '../assets/svg/telegram.svg'
import Twitter from '../assets/svg/twitter.svg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function svg(network: string): any {
  return network === 'twitter' ? (
    <Twitter />
  ) : network === 'linkedin' ? (
    <LinkedIn />
  ) : network === 'discord' ? (
    <Discord />
  ) : network === 'telegram' ? (
    <Telegram />
  ) : network === 'medium' ? (
    <Medium />
  ) : network === 'artstation' ? (
    <Artstation />
  ) : null
}
