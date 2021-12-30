
import Instagram from "../assets/svg/instagram.svg";
import Artstation from "../assets/svg/artstation.svg";
import Discord from "../assets/svg/discord.svg";
import Telegram from "../assets/svg/telegram.svg";

export function svg(network: string): any {
  return network === "instagram" ? (
    <Instagram />
  ) : network === "discord" ? (
    <Discord />
  ) : network === "telegram" ? (
    <Telegram />
  )  : network === "artstation" ? (
    <Artstation />
  ) : null;
}
