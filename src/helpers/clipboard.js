export default async function copyToClipBoard(text, type){
    if(type === 'post'){
        const baseUrl = window.location.origin + '/post/' + text;
        if(navigator.clipboard){
            return await navigator.clipboard.writeText(baseUrl);
        }else{
            return document.execCommand('copy', true, baseUrl);
        }
    } else if(type === 'prediction'){
        const baseUrl = window.location.origin + '/prediction/' + text;
        if(navigator.clipboard){
            return await navigator.clipboard.writeText(baseUrl);
        }else{
            return document.execCommand('copy', true, baseUrl);
        }
    }
}