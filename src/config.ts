import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from '@/lib/logger';

export interface Config {
  site: { name: string; description: string; themeColor: string; url: string };
  logLevel: keyof typeof LogLevel;
}

export const config: Config = {
  site: { name: 'Hangouts', description: '3D chat for real hangouts. Step into private rooms with friends, talk live, explore together.', themeColor: '#1d1d1f', url: getSiteURL() },
  logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
};

export const PrimaryColor = '#FF791B';
export const SecondaryColor = '#22D3EE';
