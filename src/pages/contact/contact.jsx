import React from 'react'
import email  from '@/pics/icons-mail.svg'
import phone  from '@/pics/icons-phone.svg'
const Contact = () => {
  return (
	 <>
		  <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50">
      <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full ">
            <img src={phone} alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Call To Us</h3>
            <p className="text-gray-600 text-sm">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-800 font-medium">Phone: +8801611112222</p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full ">
            <img src={email} alt="" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Write To Us</h3>
            <p className="text-gray-600 text-sm">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-gray-800 font-medium">
              Emails: customer@exclusive.com
            </p>
            <p className="text-gray-800 font-medium">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 bg-white shadow-md rounded-lg p-6">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className="self-end bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
	 </>
  )
}

export default Contact
