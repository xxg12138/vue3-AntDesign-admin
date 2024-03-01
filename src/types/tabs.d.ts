export type meta = {
    title?:string
    icon?: string
    hidden?:boolean
}
export type item = {
    key?:string,
    path: string
    name?:string
    meta?
}

export type menu=item&{
    children?:item[]
}

export type menuList=menu[]