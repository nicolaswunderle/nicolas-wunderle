const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer
      className="overflow-hidden rounded-b-2xl px-4"
      style={{ background: "transparent" }}
    >
      <p className="text-center py-6 text-text-primary dark:text-main-text">
        © {year} Tous droits réservés par Nicolas Wunderle.
      </p>
    </footer>
  );
};

export default Footer;
