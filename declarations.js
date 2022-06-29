const escapeStr = '`\\/"\''

const arr = [4,"2"]

const obj = {
    str: "ass",
    num: 12,
    bool: true,
    undef: undefined,


}

const nested = {
    arr: [4,undefined,"2"],
    obj: {
        str: "monstr power",
        num: 8,
        bool : true
    }
}
Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
