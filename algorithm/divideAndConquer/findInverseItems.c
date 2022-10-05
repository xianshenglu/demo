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

void merge(int *array, int start, int middle, int end)
{
  int leftIndex = start;
  int rightIndex = middle + 1;
  int length = end - start + 1;
  int result[length];
  int resultIndex = 0;

  while (leftIndex <= middle && rightIndex <= end)
  {
    if (array[leftIndex] < array[rightIndex])
    {
      result[resultIndex] = array[leftIndex];
      leftIndex++;
    }
    else
    {
      result[resultIndex] = array[rightIndex];
      printf("%d > %d, %d-%d\n", array[leftIndex], array[rightIndex]);
      rightIndex++;
    }
    resultIndex++;
  }

  if (leftIndex > middle)
  {
    for (; rightIndex <= end; rightIndex++)
    {
      result[resultIndex] = array[rightIndex];
      resultIndex++;
    }
  }
  if (rightIndex > end)
  {
    for (; leftIndex <= middle; leftIndex++)
    {
      result[resultIndex] = array[leftIndex];
      resultIndex++;
    }
  }
  for (int newIndex = 0; newIndex < length; newIndex++)
  {
    array[start + newIndex] = result[newIndex];
  }
}

void insertionSort(int *array, int start, int end)
{
  int gap = end - start;
  if (gap == 0)
  {
    return;
  }
  int middle = (start + end) / 2;
  insertionSort(array, start, middle);
  insertionSort(array, middle + 1, end);
  merge(array, start, middle, end);
}

int main()
{

  int values[5] = {1, 3, 2, 5, 4};
  int result = 0;
  int len = sizeof(values) / sizeof(values[0]);
  insertionSort(values, 0, len - 1);
  printArr(values, 0, len - 1);

  return 0;
}