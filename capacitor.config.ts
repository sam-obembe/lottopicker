import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.samobembe.lottopicker',
  appName: 'lottopicker',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
