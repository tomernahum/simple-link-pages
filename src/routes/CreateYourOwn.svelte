<script lang="ts">
    import type { LinkPageData } from "./data";

    export let defaultData: any = null


    let links:LinkPageData["links"] = defaultData?.links || [{href: "", title: ""}]
    let favicon = defaultData?.favicon || ""
    let title = defaultData?.title || ""

    $: dataJson = { title, favicon, links }
    $: url = `/custom?data=${
        JSON.stringify(dataJson)
        .replace("#", "%23")
    }`
</script>


<br>
<div id="create-your-own"> 
    <h2>Create Your Own:</h2>

    <form on:submit|preventDefault>
        <div style="display: flex; justify-content: space-around">
            <h3>Link</h3> 
            <h3>Title</h3>
        </div>

        {#each links as link}
            {#if link === "br"}
                <div class="form-group">
                    <p style="margin:0"> </p>

                    {#if links.length > 1}
                        <button on:click={() => links = links.filter(l => l !== link)}>X</button>
                    {/if}
                </div>
            {:else}
                <div class="form-group">
                    <input type="url" id="link" name="link" bind:value={link.href}>
                    <input type="text" id="title" name="title" bind:value={link.title}>
                    {#if links.length > 1}
                        <button on:click={() => links = links.filter(l => l !== link)}>X</button>
                    {/if}
                </div>
            {/if}
        {/each}

        <button on:click={() => links = [...links, {href: "", title: ""}]}>Add Link</button>
        <button on:click={() => links = [...links, "br"]}>Add Gap</button>
        

        <br>
        <br>

        <div class="favicon-group">
            <h3>Page Title: </h3>
            <input type="text" id="title" name="title" bind:value={title}>
        </div>
        <div class="favicon-group">
            <h3>Favicon Url: </h3>
            <input type="url" id="favicon" name="favicon" bind:value={favicon}>
        </div>

    </form> 

    <div class="final-button-div">
        
        <a href="{url}">Go to page</a>
        <!-- <button class="final-button" on:click={}> Go To Page</button> -->
    </div>
</div>


<style>
    #create-your-own {
        
    }

    .favicon-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: .5rem; 
    }

    .favicon-group h3 {
        text-wrap: nowrap;
    }


    .form-group {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: .5rem;
        
        margin-bottom: .5rem;
    }
    .form-group button{
        margin-left: auto;
    }

    input {
        font-size: inherit;
        width: 100%;
    }
    form h3 {
        margin: .5rem 0
    }
    h2 {
        margin: .5rem 0
    }

    button {
        font-size: inherit;
        padding: 0rem 1rem; 
    }
    



    .final-button {
        font-weight: bold;
        padding: .2rem 1rem; 

    }

    .final-button-div {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 1rem;
    }

    .final-button-div a {
        font-size: 125%;
        font-weight: bold;
    }

</style>