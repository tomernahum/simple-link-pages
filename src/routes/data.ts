
export type LinkPageData = {
    favicon?: string,
    title?: string,
    links: ({ href: string, title: string } | "br")[]
}

const db: Record<string, LinkPageData> = {
    music: {
        // favicon : "https://s2.googleusercontent.com/s2/favicons?fdomain=https://soundcloud.com",
        favicon: `
            data:image/png;base64,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
        `,
        links: [
            { href: 'https://open.spotify.com', title: 'Spotify'},
            { href: 'https://soundcloud.com', title: 'SoundCloud' },
            { href: 'https://www.youtube.com/playlist?list=LL', title: 'YouTube' },
            "br",
            { href: 'https://google.com', title: 'Google' },
            { href: 'https://www.youtube.ttools.io/watch?v=jfKfPfyJRdk/', title: 'LoFi Girl Stream' },
        ]
    },

    ai: {
        favicon: "https://s2.googleusercontent.com/s2/favicons?domain=chat.openai.com",
        links: [
            {
                title: 'ChatGPT',
                href: 'https://chat.openai.com'
            },
            {
                title: "Google Gemini",
                href: 'https://gemini.google.com/app'
            },
            {
                title: "Perplexity.ai",
                href: 'https://perplexity.ai'
            },
            "br",
            {
                title: "Bing Chat",
                href: 'https://bing.com/chat'
            },
            {
                title: "Google Search",
                href: 'https://google.com'
            }
        ]
    }
}

export function getPageData(slug: string) {

    const data = db[slug] || undefined 

    if (!data) return


    return {
        slug,
        ...data
    }
}


