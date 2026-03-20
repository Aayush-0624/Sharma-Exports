export default function Contact() {

  const phoneNumber = "919173982267"; // 🔁 your number
  const email = "info@sharmaglobalexport.com"; // 🔁 your email

  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello, I want to inquire about your products`;

  return (
    <section className="min-h-screen bg-black text-white py-20">

      <div className="max-w-4xl mx-auto px-10 text-center">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-12">
          Get in touch with us for business inquiries and export deals.
        </p>

        {/* Contact Card */}
        <div className="bg-gray-900 p-10 rounded-lg shadow-lg space-y-6">

          {/* Email */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300">
              📧 Email
            </h2>
            <a
              href={`mailto:${email}`}
              className="text-green-400 text-lg hover:underline"
            >
              {email}
            </a>
          </div>

          {/* Phone */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300">
              📞 Phone
            </h2>
            <a
              href={`tel:${phoneNumber}`}
              className="text-green-400 text-lg hover:underline"
            >
              +{phoneNumber}
            </a>
          </div>

          {/* WhatsApp */}
          <div>
            <h2 className="text-xl font-semibold text-gray-300">
              💬 WhatsApp
            </h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white mt-2"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}