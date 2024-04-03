

export function load({ params, url }) {
    
    let urlData = url.searchParams.get('data');

    if (!urlData) return {}

    let parsedData = JSON.parse(urlData);

    // check that its the right format (not comprehensive)
    if (!parsedData?.links) return {}

    return {...parsedData}
}