"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contact.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  socialMedia: string;
  tellYourStory: string;
  place: string;
};
type ToastType = "success" | "error";

export default function App() {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSending(true);

    setToast({ type: "success", message: "⏳ Sending..." });

    emailjs
      .send("service_vgq0rxd", "template_mu4ipfc", data, "-pjwwg69P-_xRTnRR")
      .then(
        () => {
          setToast({
            type: "success",
            message: "✅ Message sent successfully!",
          });
          reset();
        },
        (error) => {
          setToast({
            type: "error",
            message: "❌ Failed to send message. Try again.",
          }); // error toast
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={styles.containerWrapper}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[\p{L}\p{M}0-9\s,.'-]+$/u,
                    message: "Only letters and spaces allowed",
                  },
                })}
                className={styles.input}
                autoFocus
              />
              {errors.name && (
                <p className={styles.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <input
                id="email"
                autoComplete="email"
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className={styles.input}
              />

              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone Number
              </label>
              <input
                id="phoneNumber"
                autoComplete="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?[0-9\s()-]{7,20}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className={styles.input}
              />
              {errors.phoneNumber && (
                <p className={styles.error}>{errors.phoneNumber.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="place" className={styles.label}>
                City & Country
              </label>
              <input
                id="place"
                autoComplete="off"
                {...register("place", {
                  required: "Place is required",
                  pattern: {
                    value: /^[A-Za-z0-9\s,]+$/,
                    message:
                      "Only letters, numbers, spaces, and commas allowed",
                  },
                })}
                className={styles.input}
              />
              {errors.place && (
                <p className={styles.error}>{errors.place.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="socialMedia" className={styles.label}>
                Social Media Handles
              </label>
              <input
                id="socialMedia"
                autoComplete="off"
                {...register("socialMedia", {
                  required: "Social media handle is required",
                  pattern: {
                    value: /^/,
                    message:
                      "Enter a valid social media link (e.g. https://facebook.com/username)",
                  },
                })}
                className={styles.input}
              />
              {errors.socialMedia && (
                <p className={styles.error}>{errors.socialMedia.message}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="tellYourStory" className={styles.label}>
                Tell Your Story
              </label>
              <input
                id="tellYourStory"
                autoComplete="off"
                {...register("tellYourStory", {
                  required: "Tell Your Story is required",
                  pattern: {
                    value: /^[A-Za-z0-9\s.,!?'"()-]+$/,
                    message:
                      "Story can only contain letters, numbers, spaces, and punctuation",
                  },
                  minLength: {
                    value: 4,
                    message: "Story must be at least 40 characters",
                  },
                })}
                className={styles.input}
              />
              {errors.tellYourStory && (
                <p className={styles.error}>{errors.tellYourStory.message}</p>
              )}
            </div>
            <button type="submit" className={styles.button} disabled={sending}>
              {sending ? "Sending..." : "SUBMIT"}
            </button>
          </form>
          {toast && (
            <div
              className={`${styles.toast} ${
                toast.type === "error" ? styles.alertError : styles.alertSuccess
              }`}
            >
              {toast.message}
            </div>
          )}
        </div>

        <div className={styles.rightSection}>
          <div className={styles.podcastWrapper}>
            <Image
              src="/logoImage.png"
              alt="logo"
              width={100}
              height={100}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              className={styles.podcastImage}
            />
          </div>
          <h2 className={styles.title}>🎙️ Join Our Podcast</h2>
        </div>
      </div>
    </div>
  );
}
