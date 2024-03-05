import * as XLSX from 'xlsx';
const useExcelSheetArray = <T>(tableData: T[][], title: string, header: { prop: keyof T, name: string }[][], excelTitle: string, sheetTitle: string[]) => {
    let wb = XLSX.utils.book_new()
    sheetTitle.forEach((item, index) => {
        let data = [[title], header[index].map(item => item.name)]
        tableData[index].forEach(r => {
            let rowData: string[] = []
            header[index].forEach(item => {
                rowData.push(r[item.prop] + '')
            })
            data.push(rowData)
        })
        let ws = XLSX.utils.aoa_to_sheet(data)
        ws["!merges"] = [XLSX.utils.decode_range(`${String.fromCharCode(65)}1:${String.fromCharCode(65 + header[index].length - 1)}1`)]
        XLSX.utils.book_append_sheet(wb, ws, item)
    })
    XLSX.writeFile(wb, excelTitle + ".xlsx")
}