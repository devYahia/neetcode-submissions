class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
    transpose(matrix: number[][]): number[][] {
    const m = matrix.length;       // عدد الصفوف الأصلية
    const n = matrix[0].length;    // عدد الأعمدة الأصلية
    
    // إنشاء مصفوفة جديدة فارغة بأبعاد معكوسة (n صف و m عمود)
    const result = Array.from({ length: n }, () => new Array(m));
    
    // تبديل المؤشرات (Indices)
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            result[c][r] = matrix[r][c];
        }
    }
    
    return result;
}
}
