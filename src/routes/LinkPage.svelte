<script lang="ts">
  import { beforeUpdate, onMount } from "svelte";
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

    // our pages favicon light/dark
    onMount(()=>{
        if (typeof window == "undefined") return
        if (typeof data.favicon == "string" ) return
        function updateFavicon() {
            const favicon = document.querySelector('head > link[rel="icon"]')! as HTMLLinkElement;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            // console.log("Updating favicon", prefersDark, favicon, data.favicon.light, data.favicon.dark)
            if (prefersDark) {
                favicon.href = data.favicon.dark;
            } else {
                favicon.href = data.favicon.light;
            }
        }

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
        updateFavicon();
        setTimeout(updateFavicon); // idk why but this is needed to make it work on firefox, don't feel like spending time to figure out why. 
        setTimeout(updateFavicon, 700); // just in case
    })

    // 
    onMount(() => {
        if (typeof window == "undefined") return
        function getCustomUrl() {
            return `localhost:5173/?data=${encodeURIComponent(JSON.stringify(data))}`
        }
        // @ts-ignore
        // window.getCustomUrl = getCustomUrl;

        console.log("FORK THIS PAGE AT:")
        console.log(getCustomUrl())
    })


</script>

<main>
    <div>
        {#each data.links as link}
            {#if link === "br"}
                <span style = "margin-top: .75rem;" />
            {:else}
                <li>
                    <img src="{getFavicon(link)}" alt="icon" style="width: 32px; height: 32px">  
                    
                    <a 
                        href={link.href}
                        target="_parent"
                    >
                        <!-- setting target _parent currently makes zen open link in same tab instead of in preview -->
                        {link.title}
                    </a>
                </li>  
            {/if}        
        {/each}
    </div>

    <!-- <p>{data.favicon}</p> -->
</main>

<svelte:head>
    <!-- TODO add full favicon support so it works in safari -->
    {#if typeof data.favicon === "string"}
        <link rel="icon" type="image/png" href="{data.favicon}" />
    {:else if typeof data.favicon === "object"}
        <link rel="icon" type="image/png" href="{data.favicon.dark}" />
        
        <link rel="icon" type="image/png" href="{data.favicon.dark}" media="(prefers-color-scheme: dark)" />
        <link rel="icon" type="image/png" href="{data.favicon.light}" media="(prefers-color-scheme: light)" />
    {/if}
    
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
