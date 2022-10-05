// Program to take 5 values from the user and store them in an array
// Print the elements stored in the array

#include <stdio.h>

void printArr(int *arr, int start, int end)
{
    printf("array: ");
    for (int i = start; i <= end; i++)
    {
        printf("%d,", arr[i]);
    }
    printf("\n");
}

void insertionSort(int *array, int len)
{
    for (int index = 1; index < len; index++)
    {
        int curElement = array[index];
        int theEarliestSmallerItemIndex = index - 1;
        for (; theEarliestSmallerItemIndex >= 0; theEarliestSmallerItemIndex--)
        {
            if (curElement < array[theEarliestSmallerItemIndex])
            {
                array[theEarliestSmallerItemIndex + 1] = array[theEarliestSmallerItemIndex];
            }
            else
            {
                break;
            }
        }
        array[theEarliestSmallerItemIndex + 1] = curElement;
    }
}

int main()
{

    int values[5] = {1, 3, 2, 5, 4};
    int result = 0;
    int len = sizeof(values) / sizeof(values[0]);
    insertionSort(values, len);
    printArr(values, 0, len - 1);

    return 0;
}