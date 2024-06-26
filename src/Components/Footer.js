import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Stolen from someone by{" "}
        <a
          className="font-medium"
          href="https://github.com/IbrahimBu11"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ibrahim Butt
        </a>{" "}
        with
        <span className="text-gradient font-medium"> O</span> &
        <span className="text-gradient font-medium"> Yeah</span>
      </p>
    </footer>
  );
}
export default Footer;
