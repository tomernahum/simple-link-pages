
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
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAZ5QTFRFAAAA+FAA+VIA91IA+VMA+VMA+VMA+VMA+VMA+VMA+VMA+FIA+FIA/1EA+VMA+lQA+FEA+VMA+lQA+lMA+lMA+moi+4xV/KN2/KuD/KBy+4dN+mIW+mYc+4tT/KJ1/K2F/KV6+5hm+4NH+VwN+4hP/cqx/tXA/tXB/byc+m8q/Jxs/cuy/ujd//bx//38//////79//Lr/t7O/b2d+4ZL/cqw/ufb//Xw//z7//7+/u7m/dG7/J9w/u3k+41W/unf/uPW/KqB+m0m/LSQ/uvi//Ls/cCi+nc1/KN3+5pq/uPV/uLU+5Fc/LOP/LeU//z6/bmX+ns7//r3/u/o/Kd9/une/c+4+nUy/c62/K6H+4JF/c63+nIu/dC5/KuC/J1t/urg/cSn/cSo/KV5/t3N//n2/LGL/tzL+nk4//Tv/KFz/ufc/tfE/byb/cmv/trI//j1/tjF//fz/tbC/KmA/uDR+4RJ/uba/cGj//by/u/n+5Nf/Kl//J1u//Hq/KR4/ces//j0/Kh+/KyE/LaT//v5/K+I/J9x/K+J+5Viz+EesgAAAIp0Uk5TACNRgLjx/6h7+dO9Thb2myZZjL/y////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7GSIZAAAAxpJREFUeJzt291r01AUAPB70g/T74+tBdHN6TpUUNgerGMUcQ5EGSiI/4Kv4l8wlAmi/gsiivgiovPBIVUUQUEEJwpDqPZhbvrgHHbuq25rYpKmbZr0pqt3y/XhnIc2ac/N/ZG2N+TQA0QP0II4EbIWlXn1J69Mzd+agFXZABCh5PD8hLjkYhXgX3d8ejXcyzogsMZlfkI8SxoguMppfkK8iwogBEVuAFFeABJZ4TY/Ib55iC5znF/5/kNsiSsgAPFFroAgtC1wBYSg/TdXQBi8XOdXr0IIQAACEIAABCAAAQhAAAJaHhIpl5NmqQnJcgJMMwE6qyUrWYB8eSsRqVWytK2PpkGJSEB5Vb/d9gN8W5r/Z0B6rVo2CMMb7ejuroJpcBRyhhORsZ4W5WS8YAdIO54rj0Pwy3on749DVt+M9Bca3eUlfRM/WAFdME6Gc3vzDfNS776rTx19kGt8IF8nPGQE+Hd96J2ilhHEPW+nydmpErXQIh+Ee2wAsjP+2aaOI/W9zsB7+vvEt/8p/VPYEKBJhHsm7XPFA3e2FNA8Ds095gtIwy2+ANIPN/kCBuDG5gC6t8OystpO/qRV99Pehgm+cJ5yZWgFMAhzM6+0rY6jXwqWEepiCROUhGOzlLVg4wB/5lO2tndhcsY8Qj7y5Cs14cT0fUbAoPiobi0+1TNeP2D47vosPSG17zobIHn4mmm+VLZu//jtgl3CQPtVJsBpuGJ6P3FuzPA9k0NJ81JTn3AGLrMAhmKjloQR4yUmvfuifcJgm/UILQAaHf986AFjgj3g0pgR0D1iSYglBcYERgB7AgIQgAAEIAABCEAAAhCAAAQgAAEI+M8BTSsk7An2AO5ngDtg9GVvbefZSXOVbjMS7AFOBQIQgAAEIAABCEAAAhDAH+Bxps2TFjK4heZZWxgSuFxcASUQ3FwB6wAeroA1INucbvg1BvwBAqLzLb+VcBVl5UcoStwAQlFr++XUdlxuPNaWIU6Nx2rbsd76HRScb/0VJa3ZVF+IQ4LTzb8+qdxrWr0SRNV/SjvT/hlWu/8rf/z6C5VRIGwPNB0XAAAAAElFTkSuQmCC
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
        title: "Google Gemini",
        href: "https://gemini.google.com/app",
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
        title: "Google Search",
        href: "https://google.com",
      },
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


