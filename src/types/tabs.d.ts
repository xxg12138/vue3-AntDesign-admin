export type meta = {
    title:string
    icon:string
}
export type item = {
    key:string,
    // label: string
    path: string
    name?:string
    meta?
}

export type menu=item&{
    children?:item[]
}

export type menuList=menu[]