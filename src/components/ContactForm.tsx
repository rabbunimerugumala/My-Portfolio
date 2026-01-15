import { useState, FormEvent } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "919014451955"; // <-- Your WhatsApp number, no + sign
    const message = `Hi Rabbuni! 👋

You've got a new message from your portfolio contact form:

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");

    // Optional: reset form and show feedback
    setFormData({ name: "", email: "", message: "" });
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg bg-black/20 border ${errors.name
              ? "border-red-500"
              : "border-white/10"
            } focus:outline-none focus:border-blue-500 text-white transition-all placeholder-gray-500`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-lg bg-black/20 border ${errors.email
              ? "border-red-500"
              : "border-white/10"
            } focus:outline-none focus:border-blue-500 text-white transition-all placeholder-gray-500`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 rounded-lg bg-black/20 border ${errors.message
              ? "border-red-500"
              : "border-white/10"
            } focus:outline-none focus:border-blue-500 text-white transition-all resize-none placeholder-gray-500`}
          placeholder="Your message..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-habit w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
        ) : (
          <Send size={18} className="mr-2" />
        )}
        {isSubmitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </button>

      {submitStatus === "success" && (
        <div className="p-3 rounded-md bg-green-100 text-green-700 dark:bg-green-800/20 dark:text-green-400">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-3 rounded-md bg-red-100 text-red-700 dark:bg-red-800/20 dark:text-red-400">
          Failed to send message. Please try again later.
        </div>
      )}
    </form>
  );
};

export default ContactForm;
