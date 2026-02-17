"use client";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { TextAnimate } from "@/components/ui/text-animate";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const buttonRef = useRef(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        toast.success(data.massage);
        setLoading(false);
      } else {
        toast.error(data.error);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[100%] skew-y-12",
        )}
      />
      <motion.div
        className="z-50 py-20 bg-slate-100 dark:bg-[#020617] antialiased overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <motion.div
            className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24"
            variants={itemVariants}
          >
            <motion.div
              className="mx-auto max-w-max rounded-full border p-1 px-3"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-center text-xs font-semibold leading-normal md:text-sm">
                Share your thoughts
              </p>
            </motion.div>
            <motion.p
              className="text-center text-3xl font-bold md:text-5xl md:leading-10 text-indigo-700"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <TextAnimate animation="blurIn" by="word">
                Love to hear from you
              </TextAnimate>
            </motion.p>
            <motion.p
              className="mx-auto max-w-4xl text-center text-base md:text-xl columns-1"
              variants={itemVariants}
            >
              <TextAnimate animation="slideUp" by="word">
                I think it&apos;s great that you&apos;re open to hearing from
                others! Sharing thoughts fosters connection and creativity.
                Whether it&apos;s a deep insight, casual chat, or random idea,
                communication builds understanding.
              </TextAnimate>
            </motion.p>
          </motion.div>
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <motion.div
                className="flex items-center justify-center order-2 lg:order-1"
                variants={itemVariants}
              >
                <motion.div
                  className="px-2 md:px-12 w-full"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <motion.p
                    className="text-2xl font-bold md:text-4xl md:leading-10 text-indigo-700"
                    variants={itemVariants}
                  >
                    <TextAnimate animation="blurIn" by="word">
                      Get in touch
                    </TextAnimate>
                  </motion.p>

                  <motion.p className="mt-4 text-lg" variants={itemVariants}>
                    <TextAnimate animation="slideUp" by="word">
                      Our friendly team would love to hear from you.
                    </TextAnimate>
                  </motion.p>
                  <motion.div
                    className="space-y-2 mt-3"
                    variants={itemVariants}
                  >
                    <motion.div
                      className="flex text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <MdEmail className="mr-2" /> Email: mdranju23@gmail.com
                    </motion.div>
                    <motion.div
                      className="flex text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaPhone className="mr-2" />
                      Number: +8801799301290
                    </motion.div>
                    <motion.div
                      className="flex text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaLocationDot className="mr-2" />
                      Location: Rajshahi, Bangladesh
                    </motion.div>
                  </motion.div>
                  <motion.form
                    action=""
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4 rounded-xl border p-6 pb-5 shadow-md"
                    variants={itemVariants}
                  >
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <motion.div
                        className="grid w-full items-center gap-1.5"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="first_name"
                        >
                          First Name
                          <span className="text-xs text-red-500">*</span>
                        </label>
                        <motion.input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.div>
                      <motion.div
                        className="grid w-full items-center gap-1.5"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="last_name"
                        >
                          Last Name
                          <span className="text-xs text-red-500">*</span>{" "}
                        </label>
                        <motion.input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      className="grid w-full items-center gap-1.5"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email<span className="text-xs text-red-500">*</span>
                      </label>
                      <motion.input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      className="grid w-full items-center gap-1.5"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone_number"
                      >
                        Phone number
                        <span className="text-xs text-red-500">*</span>
                      </label>
                      <motion.input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="phone_number"
                        name="phone"
                        onChange={handleInputChange}
                        value={formData.phone}
                        placeholder="Phone number"
                        whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      className="grid w-full items-center gap-1.5"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message<span className="text-xs text-red-500">*</span>
                      </label>
                      <motion.textarea
                        className="flex h-32 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button
                        className="w-full py-4 bg-primary text-primary-foreground hover:bg-primary/90"
                        ref={buttonRef}
                        disabled={
                          loading ||
                          !formData.firstName ||
                          !formData.lastName ||
                          !formData.email ||
                          !formData.phone ||
                          !formData.message
                        }
                      >
                        {loading ? (
                          <>
                            <Spinner className="mr-2 size-6" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </motion.div>
                  </motion.form>
                </motion.div>
              </motion.div>
              {/* Big Contact Image at Bottom */}
              <motion.div
                className="flex items-center justify-center order-1 lg:order-2 w-full"
                variants={itemVariants}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  alt="Contact us"
                  width={800}
                  height={600}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                  className="w-full max-w-4xl h-[400px] lg:h-[600px] rounded-lg object-cover drop-shadow-xl"
                  src="./Mention-bro.svg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
