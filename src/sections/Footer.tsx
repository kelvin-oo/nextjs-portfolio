import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer>
      <Link href="#" target="_blank" className="footer-link">
        <span className="footer-info">
          Designed and Built by Olamilekan Kelvin.
        </span>
        {githubInfo && (
          <div className="footer-git footer-info">
            <h1>Efficient software only!</h1>
          </div>
        )}
      </Link>
    </footer>
  );
}

export default Footer;
