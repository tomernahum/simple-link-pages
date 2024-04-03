<script lang="ts">
    export let data;


    function getFavicon(url: string) {
        return `https://s2.googleusercontent.com/s2/favicons?sz=32&domain=${url}`
    }

</script>




<div>
    {#each data.links as link}
        {#if link === "br"}
            <span style = "margin-top: .75rem;" />
        {:else}
            <li>
                <img src="{getFavicon(link.href)}" alt="favicon">  
                <a href={link.href}>{link.title}</a>
            </li>  
        {/if}        
    {/each}
</div>

<svelte:head>
    <link rel="icon" type="image/png" href="{data.favicon}" />
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
</style>
