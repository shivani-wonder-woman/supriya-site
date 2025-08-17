"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contact.module.css";
import Image from "next/image"; // ✅ import

type Inputs = {
  name: string;
  email: string;
  phoneNumber: string;
  socialMedia: string;
  podcastTopic: string;
  place: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className={styles.input}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address</label>
          <input
            {...register("email", { required: "Email Address is required" })}
            className={styles.input}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Phone Number</label>
          <input
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className={styles.input}
          />
          {errors.phoneNumber && (
            <p className={styles.error}>{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* City & Country */}
        <div className={styles.formGroup}>
          <label className={styles.label}>City & Country</label>
          <input
            {...register("place", { required: "Place is required" })}
            className={styles.input}
          />
          {errors.place && <p className={styles.error}>{errors.place.message}</p>}
        </div>

        {/* Social Media */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Social Media Handles</label>
          <input
            {...register("socialMedia", {
              required: "Social media handle is required",
            })}
            className={styles.input}
          />
          {errors.socialMedia && (
            <p className={styles.error}>{errors.socialMedia.message}</p>
          )}
        </div>

        {/* Podcast Topic */}
        <div className={styles.formGroup}>
          <label className={styles.label}>Podcast Topic</label>
          <input
            {...register("podcastTopic", {
              required: "Podcast topic is required",
            })}
            className={styles.input}
          />
          {errors.podcastTopic && (
            <p className={styles.error}>{errors.podcastTopic.message}</p>
          )}
        </div>

        {/* Submit */}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      </div>

      <div className={styles.rightSection }>
        <h2 className={styles.title}>🎙️ Join Our Podcast</h2>
      </div>
    </div>
  );
}
