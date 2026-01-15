import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import { Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-violet-500 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact Form */}
          <AnimatedSection delay={100}>
            <div className="glass-habit rounded-xl p-6 border border-white/5 h-full flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Right side - Connect With Me (combined contact info & social links) */}
          <AnimatedSection delay={200}>
            <div className="glass-habit rounded-xl p-6 border border-white/5 h-full flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                Connect With Me
              </h2>

              {/* Contact Information */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                      <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                        Email
                      </p>
                      <a
                        href="mailto:rabbuni144@gmail.com"
                        className="text-sm text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                      >
                        rabbuni144@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 mr-3">
                      <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                        Location
                      </p>
                      <p className="text-sm text-gray-800 dark:text-gray-200 font-medium">
                        Marriwada, Vuyyuru, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

              {/* Social Links */}
              <div className="flex-1">
                <h3 className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                  Social Links
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 mb-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current text-white"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-blue-500/10 transition-all duration-300 mb-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current text-[#0077b5]"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://wa.me/9014451955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-green-500/10 transition-all duration-300 mb-2">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 fill-current text-[#25D366]"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                      WhatsApp
                    </span>
                  </a>

                  <a
                    href="https://www.instagram.com/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-3 rounded-lg bg-black/40 hover:bg-black/60 border border-white/5 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-pink-500/10 transition-all duration-300 mb-2">
                      <div className="w-5 h-5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="url(#contact-instagram-gradient)"
                        >
                          <defs>
                            <linearGradient
                              id="contact-instagram-gradient"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="100%"
                            >
                              <stop offset="0%" stopColor="#833AB4" />
                              <stop offset="50%" stopColor="#E1306C" />
                              <stop offset="100%" stopColor="#FD1D1D" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
