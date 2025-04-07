import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

// Mercury
import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // This code will only run on the client side after the page mounts
    registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
    registerMercury();
  }, []);

  return <Component {...pageProps} />;
}
