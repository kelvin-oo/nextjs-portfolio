import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        I'm always open to new opportunities, my inbox
        is always open. Have a proposal, a question or just want to say hi?, hit me up!
      </p>
      <div className="contact-cta">
        <Button link="mailto:olamilekan.obisesan1@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
