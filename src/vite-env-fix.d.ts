
/// <reference types="vite/client" />

interface ImportMeta {
  url: string;
  env: {
    MODE: string;
    BASE_URL: string;
    PROD: boolean;
    DEV: boolean;
  };
}

declare module '*.glsl' {
  const value: string;
  export default value;
}

declare module '*.vert' {
  const value: string;
  export default value;
}

declare module '*.frag' {
  const value: string;
  export default value;
}

