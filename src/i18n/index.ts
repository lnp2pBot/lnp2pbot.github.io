import en from './en.json';
import es from './es.json';
import fr from './fr.json';
import pt from './pt.json';
import fa from './fa.json';

export const languages = {
  en: { label: 'EN', flag: '🇬🇧' },
  es: { label: 'ES', flag: '🇪🇸' },
  fr: { label: 'FR', flag: '🇫🇷' },
  pt: { label: 'PT', flag: '🇵🇹' },
  fa: { label: 'FA', flag: '🇮🇷' },
} as const;

export type Lang = keyof typeof languages;

const translations: Record<Lang, typeof en> = { en, es, fr, pt, fa };

export function t(lang: Lang) {
  return translations[lang] || translations.en;
}

export const defaultLang: Lang = 'en';

// Per-language links
export function getLinks(lang: Lang) {
  const learnUrls: Record<Lang, string> = {
    en: 'https://lnp2pbot.com/learn',
    es: 'https://lnp2pbot.com/aprende',
    fr: 'https://lnp2pbot.com/apprendre',
    pt: 'https://lnp2pbot.com/aprenda',
    fa: 'https://lnp2pbot.com/farsi-doc/',
  };

  const chatUrls: Record<Lang, string> = {
    en: 'https://t.me/lnp2pbotHelpEn',
    es: 'https://t.me/lnp2pbotHelp',
    fr: 'https://t.me/lnp2pbotHelpEn',
    pt: 'https://t.me/lnp2pbotHelpEn',
    fa: 'https://t.me/lnp2pbotHelpEn',
  };

  const orderUrls: Record<Lang, string> = {
    en: 'https://p2p.band',
    es: 'https://p2p.band',
    fr: 'https://p2p.band',
    pt: 'https://p2p.band',
    fa: 'https://p2p.band',
  };

  return {
    learn: learnUrls[lang],
    chat: chatUrls[lang],
    orders: orderUrls[lang],
    bot: 'https://t.me/lnp2pbot',
    github: 'https://github.com/lnp2pbot/bot',
    twitter: 'https://twitter.com/lnp2pBot',
    nostr: 'https://primal.net/p/nprofile1qqs0es4qhk84sqlkmk9jqxsamdn6fdhzdqm3lee484qa9dngftm6v8slxah8m',
    health: 'https://health.lnp2pbot.com',
  };
}
