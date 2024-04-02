import { error } from '@sveltejs/kit';
import { getPageData } from '../data.js';



export function load({ params }) {
    const pageData = getPageData(params.slug);
    
    if (!pageData) throw error(404)

    return {...pageData}
}