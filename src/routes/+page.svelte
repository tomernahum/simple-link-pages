<script>
    import CreateYourOwn from "./CreateYourOwn.svelte";

    export let data;

</script>


<main>
    
    <h1> Simple link pages </h1>

    <p> I made this so i can favorite groups of urls in arc/zen browser in one tab.</p>
    <p>Feel free to use however you like!</p>
    <br>
    <p> Links on pages should open within the same tab in zen essentials.</p>
    <br>
    <!-- <p> 
        Custom page data is fully encoded into the url using queryParams. <br>
    </p> -->


    <p></p>

    <h2>Premade Links:</h2>
    <ul style="">
        <li><a href="/ai">ai chat</a>, <a href="/ai2">2</a></li>

        <li><a href="/music">music</a></li>

        <li><a href="/messaging">messaging</a></li>
    </ul>

    {#if data}
        <CreateYourOwn defaultData={data}/>
    {:else}
        <CreateYourOwn />
    {/if}
    <br>
    <p>(remove the word "custom" from a url to edit the links of that page)</p>
    <p>(or look in the browser console)</p>

    <br>
    <p style="margin-top: 7rem">More random tools at <a href="https://www.ttools.io">ttools.io</a></p>
</main>

<svelte:head>
    <title>Simple Link Pages - create your own</title>
    <meta name="description" content="Create your own webpage of links. Great for pinned tabs or bookmarks! Can also use for sharing. In zen browser, links open inside the same tab when pinned to essentials.">
    
    <link rel="canonical" href="https://links.ttools.io">
    
</svelte:head>

<style>
    main {
        margin-inline: auto;
        max-width: 70ch;

        /* padding-inline: 2rem; */

        font-size: 1.2rem;
        font-family: sans-serif;
        
    }

    p {
        margin: .2rem 0
    }
    h2 {
        margin-bottom: .3rem;
    }
    ul {
        margin-top: 0
    }

    :global(html) {
        color-scheme: light dark;
    }

    @media (prefers-color-scheme: dark) {
        main {
            color: hsl(0, 0%, 90%);
        }
    }
</style>
