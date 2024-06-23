declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    EMAIL_FROM: string;
    EMAIL_TO: string;
    NEXT_PUBLIC_CV_FR_LINK: string;
    NEXT_PUBLIC_GOOGLE_ANALYTICS: string;
    NEXT_PUBLIC_SCREENSHOT_LINK: string;
    RESEND_API_KEY: string;
  }
}
