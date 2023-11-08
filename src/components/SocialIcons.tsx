import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import {FaMedium} from "react-icons/fa6"
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/olamilekan-obisesan-5287441b9/",
    },
    {
      name: "Medium",
      icon: <FaMedium />,
      link: "https://medium.com/@olamilekan.obisesan1",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/sesan_kelvin",
    },
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://www.github.com/kelvin-oo",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/sesan_kelvin",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
