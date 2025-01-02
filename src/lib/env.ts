import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    EMAIL_FROM: z.string(),
    EMAIL_TO: z.string(),
    RESEND_API_KEY: z.string(),
  },

  client: {
    NEXT_PUBLIC_CV_FR_LINK: z.string().url(),
    NEXT_PUBLIC_GOOGLE_ANALYTICS: z.string(),
    NEXT_PUBLIC_SCREENSHOT_LINK: z.string().url(),
    NEXT_PUBLIC_UMAMI_ID: z.string(),
  },
  experimental__runtimeEnv: {
    ...process.env,
    NEXT_PUBLIC_CV_FR_LINK: process.env.NEXT_PUBLIC_CV_FR_LINK,
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    NEXT_PUBLIC_SCREENSHOT_LINK: process.env.NEXT_PUBLIC_SCREENSHOT_LINK,
    NEXT_PUBLIC_UMAMI_ID: process.env.NEXT_PUBLIC_UMAMI_ID,
  },
});

export type Env = typeof env;
