import "../styles/style.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <footer
        style={{
          padding: "1.6rem 0",
          backgroundColor: "#111",
          textAlign: "center",
        }}
      >
        <a href="https://github.com/developedBySJ">Developed By Swapnil J</a>
      </footer>
    </>
  );
}
