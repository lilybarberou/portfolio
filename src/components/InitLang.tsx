'use client';

import { useEffect, PropsWithChildren } from 'react';
import { useLang } from '@/components/Providers';

export const InitLang = ({ children }: PropsWithChildren) => {
  const { setLang } = useLang();

  useEffect(() => {
    const userLang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
    setLang(userLang);
  }, [setLang]);

  return children;
};
