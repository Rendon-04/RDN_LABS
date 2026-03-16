import { useEffect } from "react";
import { motion } from "motion/react";

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white pt-32">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Terms governing the use of this website.
            </p>
            <p className="text-sm text-gray-500">Last Updated: March 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl space-y-14">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              aria-labelledby="terms-acceptance"
            >
              <h2 id="terms-acceptance" className="text-3xl tracking-tight text-black mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using this website, you agree to these Terms of Service.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              aria-labelledby="terms-use"
            >
              <h2 id="terms-use" className="text-3xl tracking-tight text-black mb-4">
                Website Use
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Users agree not to misuse the website or attempt to disrupt its functionality.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              aria-labelledby="terms-ip"
            >
              <h2 id="terms-ip" className="text-3xl tracking-tight text-black mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website, including text, design, graphics, and code, is the
                property of RDN Labs unless otherwise stated.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Unauthorized reproduction or distribution is prohibited.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              aria-labelledby="terms-info"
            >
              <h2 id="terms-info" className="text-3xl tracking-tight text-black mb-4">
                Informational Purpose
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Information presented on this website is provided for general informational purposes
                and does not constitute a binding agreement or professional contract.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-labelledby="terms-liability"
            >
              <h2 id="terms-liability" className="text-3xl tracking-tight text-black mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                RDN Labs is not responsible for damages resulting from the use or inability to use
                the website.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              aria-labelledby="terms-changes"
            >
              <h2 id="terms-changes" className="text-3xl tracking-tight text-black mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These terms may be updated periodically. Continued use of the website constitutes
                acceptance of any changes.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              aria-labelledby="terms-contact"
            >
              <h2 id="terms-contact" className="text-3xl tracking-tight text-black mb-4">
                Contact
              </h2>
              <a
                href="mailto:hello@rdnlabs.io"
                className="inline-flex text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                hello@rdnlabs.io
              </a>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}
