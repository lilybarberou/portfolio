'use client';

import { t } from '@/lib/utils';
import { useLang } from '@/components/Providers';

export const MusicCursor = () => {
  const { lang } = useLang();
  const text = t('clickonmusic', lang);

  return <span id="musique-cursor">{text}</span>;
};
