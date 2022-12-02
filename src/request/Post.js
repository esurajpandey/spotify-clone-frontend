export const postRequest = async(url,data)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const resp = await fetch(`http://localhost:3000/${url}`, requestOptions);
    const result = await resp.json();
    return result;
}