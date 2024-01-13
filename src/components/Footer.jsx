const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer
      className="overflow-hidden rounded-b-2xl"
      style={{ background: "transparent" }}
    >
      <p className="text-center py-6 text-text-primary dark:text-main-text">
        © {year} All Rights Reserved by{" "}
        <a
          className="hover:text-btn-primary duration-300 transition"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
