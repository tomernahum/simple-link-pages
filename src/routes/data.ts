
export type LinkPageData = {
    favicon?: string,
    title?: string,
    links: ({ href: string, title: string, faviconUrl?: string } | "br")[]
}

const db: Record<string, LinkPageData> = {
  music: {
    title: "Music Links",
    // favicon : "https://s2.googleusercontent.com/s2/favicons?fdomain=https://soundcloud.com",
    favicon: `
        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAbZQTFRFAAAA+FAA+VIA91IA+VMA+VMA+VMA+VMA+VMA+VMA+VMA+FIA+FIA/1EA+VMA+lQA+FEA+VMA+lQA+lMA+lMA+moi+4xV/KN2/KuD/KBy+4dN+mIW+mYc+4tT/KJ1/K2F/KV6+5hm+4NH+VwN+4hP/cqx/tXA/tXB/byc+m8q/Jxs/cuy/ujd//bx//38//////79//Lr/t7O/b2d+4ZL/cqw/ufb//Xw//z7//7+/u7m/dG7/J9w/u3k+41W/unf/uPW/KqB+m0m/LSQ/uvi//Ls/cCi+nc1/KN3+5pq/uPV/uLU+5Fc/LOP/LeU//z6/bmX+ns7//r3/u/o/Kd9/une/c+4+nUy/c62/K6H+4JF/c63+nIu/dC5/KuC/J1t/urg/cSn/cSo/KV5/t3N//n2/LGL/tzL+nk4//Tv/KFz/ufc/tfE/byb/cmv/trI//j1/tjF//fz/tbC/KmA/uDR+4RJ/uba/cGj//by/u/n+5Nf/Kl//J1u//Hq/KR4/ces//j0/Kh+/KyE/LaT//v5/K+I/J9x/K+J/K6I/KqC/KmB/K2G+5Vi+VgI+VkJ+VYE+VcFDiUe7gAAAJJ0Uk5TACNRgLjx/6h7+dO9Thb2myZZjL/y//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+wXbJaAAADZUlEQVR4nO3b3UsUURQA8Htm1212dXf9XIjSLNcsSNCHNhGJTIhCKIj+hV6jlyL6kKLAr7eeI4roJaKMSMK+XhIiyCiQwPTBtB4ya82PNnV3mpmdXXdn9866XZ1DdM6DO6Pnzv1xHe917u4BZgTowewIRY9Ev8aLS+Hmr0/AopICkCFqc/+MOZRIEuBZtr17LZwLBqBwCaV/xgrmdUDRIlL/jLnmVIAXImgAWZkF5v+F1j9j7hkoXkDsX73/oWQeFVAIpXOogCIom0UFeKH8JyrABy7U/rVViAAEIAABCEAAAhCAAAQgQJ4N/PHNpCluQiCeABNCgKrkhpUiwVj8qMK/so+lH703NarwF6rfNR62PQCf52f+GhBaSm4a+OCVfnVnddjUtBhGUgaiJXNY1MF4IQ6IbXqufm2DH5nP8Z5SGDAO/U3hbM94AffQV1FANfSz9pG6sax5wTdftJfKRhjJfn13FdwXBHi2vGsY524iyNteT7Bj41HuNotSD3fEAGxz6UeLXZxY42ALvLXowb3zidVvYRWAHOGrHbbOlXfdWldA7tg9/QgXEIIbuADWBNdxAc1wbW0ANRthQZ1th7/x9vZDrqwJbt8Yd2VYPaAVpidf6keV+0bDGS20yRKGOAn7p7hzwWoBnpYPAytnJ4cnzS2UvY8/cRMOTtwVBLTKD9Lm4sO1/ekN2m8vT/ETgjt6xQCBPT2m/oIDaecHboatEprLu4UAR6DT9POK430p95niDZinmvSEo3BFBNBWcjkjoSN1iQltvWid0FqWeYU8ANmuf8J7TzDBGnCpLxVQ05GRUBKQBBMEAeIJBCAAAQhAAALYCwheQAb4rxIAGVB7HhmAPgIEGB1EBqCPADpg+zlkwMPvyICqfB9O1xpQdxYZgL4cr/3j+b/2H1HegJw7JOIJ1gD0EUAHdD5rWDl5esi8S5d3Qj33PQub3jntOvO/A/hBAAIQwCZAN5zGBXQ5TuECWC8BsAE9yDchPwhAAAJAgT1lnrxQwCnlzlrHiIHDgQqIguREBSwDFKACloBtsLvgNzXgNzCQ7S/5TYQjoqh/hHIMDSBF9LJfpLLjeOGxPg0hFR5rZcdG6XeRZH/prxzTi02Nidgr2V38647Fa02TK0Gx9llpe8o/fVr1f+KjX38AilUqbFQeifUAAAAASUVORK5CYII=
    `,
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
    favicon:
      "https://s2.googleusercontent.com/s2/favicons?domain=chat.openai.com",
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
        title: "Perplexity.ai",
        href: "https://perplexity.ai",
      },
      "br",
      {
        title: "Bing Chat",
        href: "https://bing.com/chat",
      },
      
      {
        title: "Google Gemini",
        href: "https://gemini.google.com/app",
      },
      // {
      //   title: "Google Search",
      //   href: "https://google.com",
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

export function getPageData(slug: string) {

    const data = db[slug] || undefined 

    if (!data) return


    return {
        slug,
        ...data
    }
}


