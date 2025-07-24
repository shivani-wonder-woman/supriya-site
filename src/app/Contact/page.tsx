import React, { FC } from "react";
import styles from "./Contact.module.css";
const VideoPage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.splitContainer}>
        <div className={styles.leftSection}>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
              <p className="text-sm text-gray-400"></p>
            </div>

            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
              <p className="text-sm text-gray-400"></p>
            </div>

            <div>
              <label className="block mb-1">Phone Number (Optional)</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
              <p className="text-sm text-gray-400"></p>
            </div>

            <div>
              <label className="block mb-1">City & Country</label>
              <input
                type="text"
                placeholder="Enter your location"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
              <p className="text-sm text-gray-400">
                Helps with time zone coordination.
              </p>
            </div>

            <div>
              <label className="block mb-1">
                Social Media Handles / Website (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Instagram, LinkedIn, or your website"
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
              <p className="text-sm text-gray-400"></p>
            </div>

            <div>
              <label className="block mb-1">
                Why do you want to be on the podcast?
              </label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                rows="3"
              />
            </div>

            <div>
              <label className="block mb-1">
                What topic(s) would you like to speak about?
              </label>
              <textarea
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                rows="3"
              />
            </div>

            <div>
              <label className="block mb-1">
                Have you ever been a guest on a podcast or done any public
                speaking?
              </label>
              <div className="flex items-center space-x-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value="yes"
                    className="form-radio text-pink-500"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value="no"
                    className="form-radio text-pink-500"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg mt-4">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className={styles.rightSection}>
          <h1 className="text-3xl font-bold mb-6 text-center text-pink-400">
            🎙️ Join the Podcast
          </h1>
        </div>
      </div>
    </div>
  );
};
export default VideoPage;
