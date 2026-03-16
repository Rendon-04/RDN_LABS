import { useEffect } from "react";
import { motion } from "motion/react";

export function Cookies() {
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
            <h1 className="text-5xl md:text-6xl tracking-tight text-black mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              How cookies and similar technologies are used.
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
              aria-labelledby="cookies-what"
            >
              <h2 id="cookies-what" className="text-3xl tracking-tight text-black mb-4">
                What Are Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files stored on a device that help websites operate
                efficiently and understand visitor behavior.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              aria-labelledby="cookies-use"
            >
              <h2 id="cookies-use" className="text-3xl tracking-tight text-black mb-4">
                How Cookies Are Used
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">Cookies may be used to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
                <li>improve website functionality</li>
                <li>understand how visitors interact with the site</li>
                <li>analyze performance and usage patterns</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              aria-labelledby="cookies-analytics"
            >
              <h2 id="cookies-analytics" className="text-3xl tracking-tight text-black mb-4">
                Analytics Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Analytics tools may use cookies to collect anonymous information about how users
                navigate the website.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              aria-labelledby="cookies-managing"
            >
              <h2 id="cookies-managing" className="text-3xl tracking-tight text-black mb-4">
                Managing Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most browsers allow users to manage or disable cookies through browser settings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Disabling cookies may affect certain features of the website.
              </p>
            </motion.section>
          </div>
        </div>
      </section>
    </main>
  );
}
