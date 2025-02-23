
export type LinkPageData = {
    favicon?: string | {
      dark: string,
      light: string
    },
    title?: string,
    links: ({ href: string, title: string, faviconUrl?: string } | "br")[]
}

const db: Record<string, LinkPageData> = {
  music: {
    title: "Music Links",
    // favicon : "https://s2.googleusercontent.com/s2/favicons?fdomain=https://soundcloud.com",
    // favicon: `
    //     data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbZQTFRFAAAA+FAA+VIA91IA+VMA+VMA+VMA+VMA+VMA+VMA+VMA+FIA+FIA/1EA+VMA+lQA+FEA+VMA+lQA+lMA+lMA+moi+4xV/KN2/KuD/KBy+4dN+mIW+mYc+4tT/KJ1/K2F/KV6+5hm+4NH+VwN+4hP/cqx/tXA/tXB/byc+m8q/Jxs/cuy/ujd//bx//38//////79//Lr/t7O/b2d+4ZL/cqw/ufb//Xw//z7//7+/u7m/dG7/J9w/u3k+41W/unf/uPW/KqB+m0m/LSQ/uvi//Ls/cCi+nc1/KN3+5pq/uPV/uLU+5Fc/LOP/LeU//z6/bmX+ns7//r3/u/o/Kd9/une/c+4+nUy/c62/K6H+4JF/c63+nIu/dC5/KuC/J1t/urg/cSn/cSo/KV5/t3N//n2/LGL/tzL+nk4//Tv/KFz/ufc/tfE/byb/cmv/trI//j1/tjF//fz/tbC/KmA/uDR+4RJ/uba/cGj//by/u/n+5Nf/Kl//J1u//Hq/KR4/ces//j0/Kh+/KyE/LaT//v5/K+I/J9x/K+J/K6I/KqC/KmB/K2G+5Vi+VgI+VkJ+VYE+VcFDiUe7gAAAJJ0Uk5TACNRgLjx/6h7+dO9Thb2myZZjL/y//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+wXbJaAAADZUlEQVR4nO3b3UsUURQA8Htm1212dXf9XIjSLNcsSNCHNhGJTIhCKIj+hV6jlyL6kKLAr7eeI4roJaKMSMK+XhIiyCiQwPTBtB4ya82PNnV3mpmdXXdn9866XZ1DdM6DO6Pnzv1xHe917u4BZgTowewIRY9Ev8aLS+Hmr0/AopICkCFqc/+MOZRIEuBZtr17LZwLBqBwCaV/xgrmdUDRIlL/jLnmVIAXImgAWZkF5v+F1j9j7hkoXkDsX73/oWQeFVAIpXOogCIom0UFeKH8JyrABy7U/rVViAAEIAABCEAAAhCAAAQgQJ4N/PHNpCluQiCeABNCgKrkhpUiwVj8qMK/so+lH703NarwF6rfNR62PQCf52f+GhBaSm4a+OCVfnVnddjUtBhGUgaiJXNY1MF4IQ6IbXqufm2DH5nP8Z5SGDAO/U3hbM94AffQV1FANfSz9pG6sax5wTdftJfKRhjJfn13FdwXBHi2vGsY524iyNteT7Bj41HuNotSD3fEAGxz6UeLXZxY42ALvLXowb3zidVvYRWAHOGrHbbOlXfdWldA7tg9/QgXEIIbuADWBNdxAc1wbW0ANRthQZ1th7/x9vZDrqwJbt8Yd2VYPaAVpidf6keV+0bDGS20yRKGOAn7p7hzwWoBnpYPAytnJ4cnzS2UvY8/cRMOTtwVBLTKD9Lm4sO1/ekN2m8vT/ETgjt6xQCBPT2m/oIDaecHboatEprLu4UAR6DT9POK430p95niDZinmvSEo3BFBNBWcjkjoSN1iQltvWid0FqWeYU8ANmuf8J7TzDBGnCpLxVQ05GRUBKQBBMEAeIJBCAAAQhAAALYCwheQAb4rxIAGVB7HhmAPgIEGB1EBqCPADpg+zlkwMPvyICqfB9O1xpQdxYZgL4cr/3j+b/2H1HegJw7JOIJ1gD0EUAHdD5rWDl5esi8S5d3Qj33PQub3jntOvO/A/hBAAIQwCZAN5zGBXQ5TuECWC8BsAE9yDchPwhAAAJAgT1lnrxQwCnlzlrHiIHDgQqIguREBSwDFKACloBtsLvgNzXgNzCQ7S/5TYQjoqh/hHIMDSBF9LJfpLLjeOGxPg0hFR5rZcdG6XeRZH/prxzTi02Nidgr2V38647Fa02TK0Gx9llpe8o/fVr1f+KjX38AilUqbFQeifUAAAAASUVORK5CYII=
    // `,
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
        data:image/png;base64,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
      `,
      light: `
        data:image/png;base64,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
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
        href: "https://chat.mistral.ai/chat"
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
        href: "https://huggingface.co/chat/"
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
      {
        title: "Google",
        href: "https://google.com"
      },
      {
        title: "Grok",
        href: "https://grok.com/"
      },
      
      {
        // title: "Microsoft Copilot",
        title: "Copilot",
        href: "https://bing.com/chat",
      },
      
      {
        // title: "Pi",
        title: "Pi AI",
        href: "https://pi.ai/threads"
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
        title: "Mistral",
        href: "https://chat.mistral.ai/chat"
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
        title: "T3 chat",
        href: "https://t3.chat",
        // made by theo who is not me
      },
      {
        title: "Poe",
        href: "https://poe.com/"
      },

      {
        title: "Duck AI",
        href: "https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1"
      },
      {
        title: "Hugging Chat",
        href: "https://huggingface.co/chat/"
      },
      // {
      //   title: "OpenRouter",
      //   href: "https://openrouter.ai/chat"
      // }
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
  "title": "test",
  "links": []
}

// const x = encodeURIComponent(JSON.stringify(db.ai2))
// console.log(x)


export function getPageData(slug: string) {

    const data = db[slug] || undefined 

    if (!data) return


    return {
        slug,
        ...data
    }
}


