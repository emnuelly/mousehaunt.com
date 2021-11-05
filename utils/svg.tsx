import Twitter from "../assets/svg/twitter.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Artstation from "../assets/svg/artstation.svg";
import Discord from "../assets/svg/discord.svg";
import Telegram from "../assets/svg/telegram.svg";
import Medium from "../assets/svg/medium.svg";

export function svg(network: string): any {
  return network === "twitter" ? (
    <Twitter />
  ) : network === "linkedin" ? (
    <LinkedIn />
  ) : network === "discord" ? (
    <Discord />
  ) : network === "telegram" ? (
    <Telegram />
  ) : network === "medium" ? (
    <Medium />
  ) : network === "artstation" ? (
    <Artstation />
  ) : null;
}
