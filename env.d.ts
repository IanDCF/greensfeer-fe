// I am not sure if we need this
// Delete if not
declare module NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    VITE_REACT_APP_FIREBASE_API_KEY: string;
    VITE_REACT_APP_FIREBASE_AUTH_DOMAIN: string;
    VITE_REACT_APP_FIREBASE_PROJECT_ID: string;
    VITE_REACT_APP_FIREBASE_STORAGE_BUCKET: string;
    VITE_REACT_APP_FIREBASE_MASSAGING_SENDER_ID: string;
    VITE_REACT_APP_FIREBASE_APP_ID: string;
    VITE_REACT_APP_FIREBASE_MEASUREMENT_ID: string;
    VITE_REACT_APP_FIREBASE_DATABASE_URL: string;
  }
}