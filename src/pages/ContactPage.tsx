import AnimatedSection from "../components/AnimatedSection";
import ContactForm from "../components/ContactForm";
import {
  Github,
  Linkedin,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Instagram ,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-400 rounded mb-12 mx-auto"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left side - Contact Form */}
          <AnimatedSection delay={100}>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Right side - Contact Info & Social Links */}
          <AnimatedSection delay={200}>
            <div className="space-y-10">
              {/* Contact Details */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <a
                        href="mailto:contact@example.com"
                        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        rabbuni144@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Phone
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +91 9014451955
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 text-blue-500 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Location
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        Marriwada, Vuyyuru, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                  Connect With Me
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://github.com/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="ml-3 font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      GitHub
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="ml-3 font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </span>
                  </a>

                  <a
                    href="https://wa.me/9014451955"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                      <MessageCircle className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="ml-3 font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      WhatsApp
                    </span>
                  </a>

                  <a
                    href="https://www.instagram.com/rabbunimerugumala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors">
                      <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="ml-3 font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
