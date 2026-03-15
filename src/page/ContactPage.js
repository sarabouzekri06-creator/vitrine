import { useForm } from "react-hook-form";
import { Mail, Phone, User, MessageSquare, Send, MapPin } from "lucide-react";
import { toast } from "sonner";




const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate
    console.log("Form data:", data);
    toast.success("Message sent!");
    reset();
  };

  return (
    <section id="Contact" className=" from-slate-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-1 text-[#053F5C]" >Contact Us</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Questions? Suggestions? Drop us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-4 bg-white rounded-xl shadow-md flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-600 mt-1"/>
              <div>
                <h3 className="text-sm text-gray-500">Email</h3>
                <p className="text-gray-900">centre@gmail.com</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-md flex items-start gap-3">
              <Phone className="w-5 h-5 text-green-600 mt-1"/>
              <div>
                <h3 className="text-sm text-gray-500">Phone</h3>
                <p className="text-gray-900">+212 00-123-4567</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-md flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-600 mt-1"/>
              <div>
                <h3 className="text-sm text-gray-500">Office</h3>
                <p className="text-gray-900">123 Business Street, Casablanca</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-2xl shadow-xl">
              {/* Name */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <User className="w-4 h-4"/>
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name", { required: "Name required" })}
                  placeholder="John Doe"
                  className={`w-full h-10 border rounded-lg px-3 focus:ring-1 focus:ring-blue-500 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-4 h-4"/>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email required" })}
                  placeholder="john@example.com"
                  className={`w-full h-10 border rounded-lg px-3 focus:ring-1 focus:ring-blue-500 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-gray-700">
                  <MessageSquare className="w-4 h-4"/>
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("subject", { required: "Subject required" })}
                  placeholder="How can we help you?"
                  className={`w-full h-10 border rounded-lg px-3 focus:ring-1 focus:ring-blue-500 ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message", { required: "Message required", minLength: { value: 10, message: "At least 10 chars" } })}
                  placeholder="Your message"
                  rows={3}
                  className={`w-full border rounded-lg px-3 py-2 focus:ring-1 focus:ring-blue-500 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#053F5C] hover:bg-sky-950 text-white py-2 rounded-lg flex items-center justify-center gap-1"
              >
                {isSubmitting ? "Sending..." : <><Send className="w-4 h-4"/>Send</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
