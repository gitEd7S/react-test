export const required = value => {
    if(!value) return 'Field is required'
    return undefined
}

export const maxLength = (max) => (value) => {
    if(value && value.length > max) return `Max length is ${max} symbols`
    return undefined
}