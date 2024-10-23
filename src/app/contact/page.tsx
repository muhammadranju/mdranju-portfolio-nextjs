"use client";
/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react/no-unescaped-entities */
import { URL } from "@/api/cron/route";
import Image from "next/image";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

function contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const buttonRef = useRef(null);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(`${URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.massage);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.lastName ||
      !formData.message
    ) {
      return toast.error("Please fill all the fields!");
    }
  };

  // };

  return (
    <>
      <title>Contact - MDR</title>
      <div>
        <div className="mx-auto max-w-7xl px-4">
          {/* Hero Map */}
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="mx-auto max-w-max rounded-full border p-1 px-3">
              <p className="text-center text-xs font-semibold leading-normal md:text-sm ">
                Share your thoughts
              </p>
            </div>
            <p className="text-center text-3xl font-bold  md:text-5xl md:leading-10  text-cyan-500">
              Love to hear from you
            </p>
            <p className="mx-auto max-w-4xl text-center text-base  md:text-xl columns-1">
              I think it's great that you're open to hearing from others!
              Sharing thoughts fosters connection and creativity. Whether it's a
              deep insight, casual chat, or random idea, communication builds
              understanding.
            </p>
          </div>
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
              {/* contact from */}
              <div className="flex items-center justify-center">
                <div className="px-2 md:px-12">
                  <p className="text-2xl font-bold md:text-4xl md:leading-10  text-indigo-500">
                    Get in touch
                  </p>
                  <p className="mt-4 text-lg ">
                    Our friendly team would love to hear from you.
                  </p>
                  <form
                    action=""
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-4 rounded-xl  border p-6 pb-10 dark:bg-slate-900 bg-slate-100"
                  >
                    <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="first_name"
                        >
                          First Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="first_name"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="last_name"
                        >
                          Last Name
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="last_name"
                          placeholder="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone_number"
                      >
                        Phone number <small>(Optional)</small>
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="number"
                        id="phone_number"
                        name="phone"
                        onChange={handleInputChange}
                        value={formData.phone}
                        placeholder="Phone number"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        id="message"
                        placeholder="Leave us a message"
                        cols={20}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      type="submit"
                      ref={buttonRef}
                      className=" btn w-full rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              <Image
                alt="Contact us"
                width={500}
                height={500}
                className="hidden h-3/5 w-full rounded-lg object-cover lg:block"
                src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact;
