import type { DepartmentData, DepartmentList } from '@/types/department';

// 部门树算法
export const buildTree = (departments: DepartmentData, parentId: number | null = null) => {
    const tree: DepartmentList = [];
    departments.forEach(department => {
        if (department.parentId === parentId) {
            const children = buildTree(departments, department.id);
            if (children.length > 0) {
                (department as any).children = children;
            }
            tree.push(department as any);
        }
    });

    return tree;
};
