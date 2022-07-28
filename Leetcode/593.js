/**
 * 593. 有效的正方形
 * link：https://leetcode.cn/problems/valid-square/
 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    const edgeLenghSquare = function (p1, p2) {
        return Math.abs(p1[0] - p2[0]) ** 2 + Math.abs(p1[1] - p2[1]) ** 2;
    }

    const edgeLengthArray = Array(6).fill(0);
    edgeLengthArray[0] = edgeLenghSquare(p1, p2);
    edgeLengthArray[1] = edgeLenghSquare(p1, p3);
    edgeLengthArray[2] = edgeLenghSquare(p1, p4);
    edgeLengthArray[3] = edgeLenghSquare(p2, p3);
    edgeLengthArray[4] = edgeLenghSquare(p2, p4);
    edgeLengthArray[5] = edgeLenghSquare(p3, p4);

    edgeLengthArray.sort((a, b) => (a - b));
    return edgeLengthArray[0] === edgeLengthArray[3] && edgeLengthArray[4] === edgeLengthArray[5] && edgeLengthArray[3] < edgeLengthArray[4];
};