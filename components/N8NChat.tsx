"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";

export default function N8NChat() {
  useEffect(() => {
    import("@n8n/chat").then(({ createChat }) => {
      createChat({
        webhookUrl:
          "https://sem5115.app.n8n.cloud/webhook/07295e22-9127-4ea7-a06c-7eaba50505f1/chat",
      });
    });
  }, []);

  return null;
}