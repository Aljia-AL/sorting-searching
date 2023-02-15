function InsertionSort(arr)
{
    let i,j,key ;
    for ( i=1; i< arr.lenght; i++)
    {
        key = arr[i];
        j = i -1;
        while (j >=0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j -1;
        }
    }
    return arr
}

let arr = [9,15,22,4,1];

console.log(InsertionSort(arr));
