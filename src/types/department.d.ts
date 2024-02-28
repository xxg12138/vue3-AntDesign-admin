export type DepartmentItem = {
    id: number;
    name: string;
    parentId: number | null;
    leader: string;
    foundedYear: string;
};

export type DepartmentData = DepartmentItem[];

export type DepartmentList = (DepartmentItem & {
    children?:DepartmentItem[]
})[]