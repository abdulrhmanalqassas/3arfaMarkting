"use client";

import { contactEmail } from "./contact-details";

export default function ContactMessageForm({ children }) {
  const recipient = "mailto:" + contactEmail;

  function openEmailDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const subject = fields.get("subject").trim() || "Arafa Agency inquiry";
    const body = [
      fields.get("comments").trim(),
      "",
      "Name: " + fields.get("name").trim(),
      "Email: " + fields.get("email").trim(),
    ].join("\r\n");

    window.location.href = recipient
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);
  }

  return (
    <form action={recipient} method="post" encType="text/plain" onSubmit={openEmailDraft}>
      {children}
    </form>
  );
}
