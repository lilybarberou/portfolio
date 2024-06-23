'use client';

import { Lang } from '@/lib/utils';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { InitLang } from './InitLang';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';
import { ToastContainer } from 'react-toastify';
import StyledComponentsRegistry from '@/lib/registry';

export const Context = createContext<{ lang: Lang; setLang: React.Dispatch<React.SetStateAction<Lang>> }>({ lang: 'fr-FR', setLang: () => {} });

export const useLang = () => React.useContext(Context);

const aboreto = localFont({ src: '../../public/static/fonts/Aboreto-Regular.ttf', variable: '--aboreto' });
const poppins = Poppins({ weight: '400', variable: '--poppins', subsets: ['latin'] });

export const Providers = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Lang>('fr-FR');

  useEffect(() => {
    document.documentElement.lang = ['fr-FR', 'fr'].includes(navigator.language) ? 'fr-FR' : 'en-US';
  }, []);

  return (
    <Context.Provider value={{ lang, setLang }}>
      <InitLang>
        <StyledComponentsRegistry>
          <div className={`${aboreto.variable} ${poppins.variable}`}>
            <ToastContainer
              position="top-right"
              autoClose={3500}
              hideProgressBar={false}
              closeOnClick={true}
              pauseOnHover={true}
              draggable={false}
              theme="dark"
            />
            {children}
          </div>
        </StyledComponentsRegistry>
      </InitLang>
    </Context.Provider>
  );
};
