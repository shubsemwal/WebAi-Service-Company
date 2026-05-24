"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function N8NChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://sem5115.app.n8n.cloud/webhook/d97ceda9-5bf5-4036-95c0-3c11e1b4fc9e/chat",
      });
    });
  }, []);

  return null;
}