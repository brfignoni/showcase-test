import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <script
        src="https://unpkg.com/@genexus/chameleon-controls-library@latest/dist/chameleon/chameleon.esm.js"
        type="module"
        async
      ></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
