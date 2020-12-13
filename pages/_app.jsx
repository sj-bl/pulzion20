import "../styles/style.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header
        style={{
          padding: "0.5rem 0",
          backgroundColor: "#111",
          textAlign: "center",
        }}
      >
        <p>Developed By Swapnil J</p>
      </header>
      <Component {...pageProps} />
    </>
  );
}
