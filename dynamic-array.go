// Hackerrank: https://www.hackerrank.com/challenges/2d-array/problem
// Easy

package main

import (
    "bufio"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
)

// Assumption: We always have 6 x 6
const x = 6
const y = 6

// Complete the hourglassSum function below.
func hourglassSum(arr [][]int32) int32 {
    // Rule: An hour glass figure needs 3 x 3
    var res int32
    res = -999 // This a lazy easy way but it’s not accurate
    
    // Iterating over rows
    for i := 0; i <= 3; i++ {
        for j := 0; j <= 3; j++ {
            fmt.Printf("Now on (%v,%v) %v\n",i,j,arr[i][j])
            sum := arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            
            fmt.Println(sum)
            
            if res < sum {
                res = sum
            }
        }
    }
    
    return res
}

func main() {
    reader := bufio.NewReaderSize(os.Stdin, 1024 * 1024)

    stdout, err := os.Create(os.Getenv("OUTPUT_PATH"))
    checkError(err)

    defer stdout.Close()

    writer := bufio.NewWriterSize(stdout, 1024 * 1024)

    var arr [][]int32
    for i := 0; i < 6; i++ {
        arrRowTemp := strings.Split(readLine(reader), " ")

        var arrRow []int32
        for _, arrRowItem := range arrRowTemp {
            arrItemTemp, err := strconv.ParseInt(arrRowItem, 10, 64)
            checkError(err)
            arrItem := int32(arrItemTemp)
            arrRow = append(arrRow, arrItem)
        }

        if len(arrRow) != int(6) {
            panic("Bad input")
        }

        arr = append(arr, arrRow)
    }

    result := hourglassSum(arr)

    fmt.Fprintf(writer, "%d\n", result)

    writer.Flush()
}

func readLine(reader *bufio.Reader) string {
    str, _, err := reader.ReadLine()
    if err == io.EOF {
        return ""
    }

    return strings.TrimRight(string(str), "\r\n")
}

func checkError(err error) {
    if err != nil {
        panic(err)
    }
}
