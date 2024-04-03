import { error } from '@sveltejs/kit';
import { getPageData } from '../data.js';



export function load({ params, url }) {
    
    let urlData = url.searchParams.get('data');

    if (!urlData) throw error(404)

    console.log("urlData", urlData)

    let parsedData = JSON.parse(urlData);

    // check that its the right format (not comprehensive)
    if (!parsedData?.links) throw error(400, 'Invalid data in url')

    return {...parsedData}
}