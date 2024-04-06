<script lang="ts">
    import type { LinkPageData } from "./data";

    export let data: LinkPageData;


    function getFavicon(link: Exclude<LinkPageData["links"][number], "br">){
        const API_URL = "https://s2.googleusercontent.com/s2/favicons?sz=64&domain="

        const href = link?.href
        const faviconUrl = link?.faviconUrl

        if (!href) // return same as would a page with no favicon
            return `${API_URL}""`

        if (faviconUrl === "None"){
            return ""
        }

        if (faviconUrl === "Auto" || faviconUrl === "" || !faviconUrl) {
            
            return `${API_URL}${href}`
        }
        else {
            return link.faviconUrl
        }
    }

</script>

<main>
    <div>
        {#each data.links as link}
            {#if link === "br"}
                <span style = "margin-top: .75rem;" />
            {:else}
                <li>
                    <img src="{getFavicon(link)}" alt="icon" style="width: 32px; height: 32px">  
                    <a href={link.href}>{link.title}</a>
                </li>  
            {/if}        
        {/each}
    </div>

    <!-- <p>{data.favicon}</p> -->
</main>

<svelte:head>
    <link rel="icon" type="image/png" href="{data.favicon}" />
    <title>{data.title || "Link Page"}</title>
</svelte:head>

<style>
    div {
        /* Center it */
        position: fixed;
        inset: 0;
        width: fit-content;
        height: fit-content;
        margin: auto;

        display: flex;
        flex-direction: column;
        gap: .75rem;
    }

    div li {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        
        gap: 0.5rem
    }

    
    @media (prefers-color-scheme: dark) {
        a:visited {
            /* color: #7bbdff; */
            color: rgb(100, 150, 255)

        }
    }

    
    main {
        margin-inline: auto;
        max-width: 60rem;

        /* padding-inline: 2rem; */

        font-size: 2rem;
        font-family: sans-serif;
    }



    :global(html) {
        color-scheme: light dark;
    }
</style>
