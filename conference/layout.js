import styles from "./layout.module.css";

export default function ConferenceLayout({ children }) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}
