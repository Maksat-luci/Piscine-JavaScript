const getJSON = async (path = '', params = '') => {

    let url = `${path}?${new URLSearchParams(Object.entries(params))}`

    const resp = await fetch(url)
    if (!resp.ok) throw new Error(resp.statusText)

    const obj = await resp.json()
    if (obj.error) throw new Error(obj.error)

    return obj.data
}
