export type LinkPageData = {
  // favicon?: string | {
  //   dark: string,
  //   light: string
  // },
  title?: string;
  links: ({ href: string; title: string; faviconUrl?: string } | "br")[];
} & (
  | {
      favicon: string;
    }
  // | {
  //     favicon?: string;
  //     faviconDark: string;
  //     faviconLight: string;
  //   }
  | {
    favicon: {
      dark: string;
      light: string;
    };
  }
);

const db: Record<string, LinkPageData> = {
  music: {
    title: "Music Links",
    // favicon : "https://s2.googleusercontent.com/s2/favicons?fdomain=https://soundcloud.com",

    favicon: {
      dark: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
      light: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
    },
    
    links: [
      { href: "https://open.spotify.com", title: "Spotify" },
      { href: "https://soundcloud.com", title: "SoundCloud" },
      { href: "https://www.youtube.com/playlist?list=LL", title: "YouTube" },
      "br",
      { href: "https://google.com", title: "Google" },
      {
        href: "https://www.youtube.ttools.io/watch?v=jfKfPfyJRdk/",
        title: "LoFi Girl Stream",
      },
    ],
  },

  ai: {
    title: "AI Links",
    // favicon:
    //   "https://s2.googleusercontent.com/s2/favicons?domain=chat.openai.com",
    favicon: {
      dark: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
      light: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
    },
    links: [
      {
        title: "ChatGPT",
        href: "https://chat.openai.com",
      },
      {
        title: "Perplexity",
        href: "https://perplexity.ai",
      },
      {
        title: "Claude",
        href: "https://www.claude.ai",
      },
      // "br",
      {
        // title: "Google Gemini",
        title: "Gemini",
        href: "https://gemini.google.com/app",
      },

      // {
      //   // title: "Microsoft Copilot",
      //   title: "Copilot Chat",
      //   href: "https://bing.com/chat",
      //   // Keep?
      // },
      // {
      //   title: "Meta AI",
      //   href: "https://www.meta.ai/"
      // },

      // {
      //   title: "Grok",
      //   href: "https://grok.com/"
      // },
      "br",
      {
        title: "DeepSeek",
        href: "https://chat.deepseek.com/",
      },
      // {
      //   title: "Qwen",
      //   href: "https://chat.qwenlm.ai/",
      // },
      {
        title: "Mistral",
        href: "https://chat.mistral.ai/chat",
      },

      "br",

      // {
      //   title: "Duck AI",
      //   href: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1"
      // },
      {
        title: "T3 chat",
        href: "https://t3.chat",
        // made by theo who is not me
      },
      {
        title: "Hugging Chat",
        href: "https://huggingface.co/chat/",
      },
      // {
      //   title: "OpenRouter",
      //   href: "https://openrouter.ai/chat"
      // }
    ],
  },
  ai2: {
    title: "AI Links",
    favicon: {
      dark: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
      light: `
        data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAyMS4yNWE5LjI1IDkuMjUgMCAxIDAtOC4zMDctNS4xNzdjLjEwOC4yMi4xNDQuNDY4LjA4OS43MDZsLS44MTYgMy41MzZhLjYuNiAwIDAgMCAuNzIuNzJsMy41MzUtLjgxN2ExLjA2IDEuMDYgMCAwIDEgLjcwNi4wOUE5LjIgOS4yIDAgMCAwIDEyIDIxLjI1TTcuOTcgOS44ODZoOC4wNm0tOC4wNiA0LjIyOGg1Ljc0OCIvPjwvc3ZnPg==
      `,
    },
    links: [
      {
        title: "ChatGPT",
        href: "https://chat.openai.com",
      },
      {
        title: "Claude",
        href: "https://www.claude.ai",
      },

      {
        title: "Perplexity",
        href: "https://perplexity.ai",
      },
      {
        title: "Phind",
        href: "https://phind.com",
      },
      // "br",
      {
        // title: "Google Gemini",
        title: "Gemini",
        href: "https://gemini.google.com/app",
      },
      // {
      //   title: "Google",
      //   href: "https://google.com",
      // },
      {
        title: "Grok",
        href: "https://grok.com/",
      },
      {
        title: "Mercury",
        href: "https://chat.inceptionlabs.ai/",
        faviconUrl:
          "https://icons.duckduckgo.com/ip3/chat.inceptionlabs.ai.ico",
      },
      {
        // title: "Pi",
        title: "Pi AI",
        href: "https://pi.ai/threads",
      },

      {
        // title: "Microsoft Copilot",
        title: "Copilot",
        href: "https://bing.com/chat",
      },

      {
        title: "AI Studio",
        href: "https://aistudio.google.com",
      },

      // "br",

      // {
      //   title: "Grok",
      //   href: "https://grok.com/"
      // },
      // {
      //   title: "Reddit",
      //   href: "https://www.reddit.com/answers/"
      // },
      // "br",
      {
        title: "DeepSeek",
        href: "https://chat.deepseek.com/",
      },
      {
        title: "Qwen",
        href: "https://chat.qwenlm.ai/",
      },
      {
        title: "Kimi",
        href: "https://kimi.ai/",
      },
      // "br",
      {
        title: "Mistral",
        href: "https://chat.mistral.ai/chat",
      },

      // "br",
      // {
      //   // title: "Microsoft Copilot",
      //   title: "Copilot",
      //   href: "https://bing.com/chat",
      // },
      // {
      //   title: "Meta",
      //   href: "https://www.meta.ai/",
      // },

      "br",

      {
        title: "Duck AI",
        href: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1",
      },
      {
        title: "T3 Chat",
        href: "https://t3.chat",
        // made by theo who is not me
      },

      {
        title: "Hugging Chat",
        href: "https://huggingface.co/chat/",
      },
      {
        title: "OpenRouter",
        href: "https://openrouter.ai/chat",
      },
      {
        title: "Poe",
        href: "https://poe.com/",
      },

      // {
      //   title: "Blackbox AI",
      //   href: "https://blackbox.ai/",
      // },
    ],
  },

  messaging: {
    title: "Messaging",
    favicon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
    links: [
      {
        href: "https://mail.google.com/mail/u/0/#inbox",
        title: "Gmail",
        faviconUrl: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico",
      },
      {
        href: "https://outlook.office365.com/mail/",
        title: "Outlook",
        faviconUrl: "https://outlook.office.com/mail/favicon.ico",
      },
      "br",
      {
        href: "https://slack.com/",
        title: "Slack",
        faviconUrl: "Auto",
      },
      {
        href: "https://discord.com/channels/@me",
        title: "Discord",
        faviconUrl: "Auto",
      },
      {
        href: "https://web.whatsapp.com/",
        title: "WhatsApp",
        faviconUrl:
          "https://static.whatsapp.net/rsrc.php/v3/yP/r/rYZqPCBaG70.png",
      },
    ],
  },
};

db.ai3 = {
  title: "test",
  links: [],
};

// const x = encodeURIComponent(JSON.stringify(db.ai2))
// console.log(x)

export function getPageData(slug: string) {
  const data = db[slug] || undefined;

  if (!data) return;

  return {
    slug,
    ...data,
  };
}
