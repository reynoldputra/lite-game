import randomNumber from "./randomNumber"

const generateClue = (clues, square) => {
    let data = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ]
    // let row = []
    // for(let x = 0; x < square*square; x++){
    //     for(let y = 0; y < square*square; y++){
    //         row.push(0)
    //     }
    //     data.push(row)
    //     row = []
    // }

    for(let rowIdx = 0; rowIdx < square*square; rowIdx++){
        for(let colIdx = 0; colIdx <= rowIdx; colIdx++){
            const cell = generateCell(data, rowIdx, colIdx, square) 
            data[rowIdx][colIdx] = cell
            
            if(rowIdx != colIdx) {
                const cell = generateCell(data, colIdx, rowIdx, square) 
                data[colIdx][rowIdx] = cell
            }
        }
    }
    // if(i == square*square)
    return []
}

const generateCell = (data, rowIdx, colIdx, square)=> {
    const cols = data.map((row) => row[colIdx])
    let cell = null
    let err = 0
    let test = []
    while(true){
        cell = randomNumber(0, 10)
        if(cekRow(cell, data[rowIdx]) && cekCol(cell, cols) && cekSquare(cell, data, rowIdx, colIdx, square)) break; 
        err++;
        test.push(cell)
        if(err > 100) throw new Error("Error generate cell " + rowIdx + " " + colIdx + " => " + test)
    }
    return cell
}

const cekRow = (cell, row) => {
    if(row.includes(cell)) return false
    else return true
}

const cekCol = (cell, cols) => {
    if(cols.includes(cell)) return false
    else return true
}

const cekSquare = (cell, data, row, col, square) => {
    const squareValue = getSquareValue(data, row, col, square)
    console.log(data)
    console.log( row, col)
    console.log(squareValue)
    if(squareValue.includes(cell)) return false
    else return true
}


// square index
// example ( 3 x 3 )
// | 1 | 2 | 3 |
// | 4 | 5 | 6 |
// | 7 | 8 | 9 |

const getSquareIndex = (index, square) => {
    if(index > square*square) throw new Error("Index should lower than square")

    const div = (index - (index%square)) / square
    const row = index % square == 0 ? div - 1 : div // small cell
    const rowIdx = row * square // big cell square * square

    const mod = index % square
    const colIdx = mod 
                        ? ( mod == 1 
                            ? 0 
                            : square * (mod - 1))
                        : square * (square - 1)
    console.log(rowIdx, colIdx)
    return {rowIdx, colIdx}
}

const getSquareByPosition = (row, col, square) => {
    const rowVal = Math.floor(row/square)
    const colVal = Math.floor(col/square) + 1
    const squareIdx = rowVal * square + colVal
    console.log(squareIdx)
    return squareIdx
}


const getSquareValue = (data, row, col, square) => {
    const squareIdx = getSquareByPosition(row, col, square)
    const {rowIdx, colIdx} = getSquareIndex(squareIdx, square)
    const maxRowIdx = rowIdx + square - 1
    const maxColIdx = colIdx + square - 1
    const squareValue = []
    for (let r = rowIdx; r <= maxRowIdx; r++) {
        for (let c = colIdx; c <= maxColIdx; c++) {
            squareValue.push(data[r][c])
        }
    }

    return squareValue
}

export default generateClue