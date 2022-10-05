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
void swap(int *arr, int indexA, int indexB)
{
    int temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}
void bubbleSort(int *array, int len)
{
    for (int index = len - 1; index < len; index--)
    {
        int hasChanged = 0;
        for (int innerIndex = 0; innerIndex < index; innerIndex++)
        {
            if (array[innerIndex] > array[innerIndex + 1])
            {
                swap(array, innerIndex, innerIndex + 1);
                hasChanged = 1;
            }
        }
        if (!hasChanged)
        {
            return;
        }
    }
}

int main()
{

    int values[5] = {1, 3, 2, 5, 4};
    int result = 0;
    int len = sizeof(values) / sizeof(values[0]);
    bubbleSort(values, len);
    printArr(values, 0, len - 1);

    return 0;
}