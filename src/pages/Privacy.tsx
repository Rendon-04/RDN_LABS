import { useEffect } from "react";
import { motion } from "motion/react";

export function Privacy() {
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
            <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              How RDN Labs collects, uses, and protects information.
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
              aria-labelledby="privacy-introduction"
            >
              <h2 id="privacy-introduction" className="text-3xl tracking-tight text-black mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed">
                RDN Labs respects your privacy and is committed to protecting any information shared
                through this website. This policy explains what data may be collected and how it is
                used.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              aria-labelledby="privacy-collect"
            >
              <h2 id="privacy-collect" className="text-3xl tracking-tight text-black mb-4">
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">Information may include:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                <li>name and email address submitted through contact forms</li>
                <li>information voluntarily provided through inquiries</li>
                <li>anonymous website usage data used for analytics</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              aria-labelledby="privacy-use"
            >
              <h2 id="privacy-use" className="text-3xl tracking-tight text-black mb-4">
                How Information Is Used
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Information submitted through the website may be used to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                <li>respond to inquiries</li>
                <li>communicate regarding services</li>
                <li>improve the website and user experience</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              aria-labelledby="privacy-analytics"
            >
              <h2 id="privacy-analytics" className="text-3xl tracking-tight text-black mb-4">
                Analytics and Tracking
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The website may use analytics tools to better understand how visitors interact with
                the site.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These tools collect anonymous usage data and do not identify individual users.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              aria-labelledby="privacy-third-party"
            >
              <h2 id="privacy-third-party" className="text-3xl tracking-tight text-black mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                The website may rely on third-party services such as hosting providers, analytics
                tools, or form processing services to operate properly.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              aria-labelledby="privacy-security"
            >
              <h2 id="privacy-security" className="text-3xl tracking-tight text-black mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Reasonable security measures are used to protect information submitted through the
                website.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              aria-labelledby="privacy-contact"
            >
              <h2 id="privacy-contact" className="text-3xl tracking-tight text-black mb-4">
                Contact
              </h2>
              <p className="text-gray-600 leading-relaxed">For privacy-related inquiries, contact:</p>
              <a
                href="mailto:hello@rdnlabs.io"
                className="inline-flex mt-3 text-black border-b border-black pb-1 hover:opacity-70 transition-opacity"
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
