#include <stdio.h>
#include <math.h>

void printArr(int *arr, int start, int end)
{
    printf("array: ");
    for (int i = start; i <= end; i++)
    {
        printf("%d,", arr[i]);
    }
    printf("\n");
}

void insertionSort(int *array, int start, int end)
{
    for (int index = start + 1; index <= end; index++)
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

int findIndex(int *array, int value, int start, int end)
{
    for (int index = start; index <= end; index++)
    {
        if (array[index] == value)
        {
            return index;
        }
    }
    return -1;
}
void setMedianList(int *arr, int len, int groupSize, int *medianList)
{
    int medianListLen = (int)ceil((double)len / groupSize);
    // int medianList[medianListLen];

    for (int groupIndex = 0; groupIndex < medianListLen; groupIndex++)
    {
        int groupStartIndexInArr = groupIndex * groupSize;
        int isTheLastGroup = groupIndex + 1 == medianListLen;
        int groupEndIndexInArr = (groupIndex + 1) * groupSize - 1;
        if (isTheLastGroup)
        {
            groupEndIndexInArr = len - 1;
        }
        insertionSort(arr, groupStartIndexInArr, groupEndIndexInArr);
        int curGroupMedianIndex = (groupStartIndexInArr + groupEndIndexInArr) / 2;
        medianList[groupIndex] = arr[curGroupMedianIndex];
    }
}

void setSmallerAndBiggerList(int *arr, int len, int medianOfMedian, int *smallerList, int *biggerList)
{
    int smallerItemIndex = 0;
    int biggerItemIndex = 0;
    for (int index = 0; index < len; index++)
    {
        if (arr[index] == medianOfMedian)
        {
            continue;
        }
        if (arr[index] > medianOfMedian)
        {
            biggerList[biggerItemIndex] = arr[index];
            biggerItemIndex++;
        }
        else
        {
            smallerList[smallerItemIndex] = arr[index];
            smallerItemIndex++;
        }
    }
}
/***
 *
 *
 */
int findTheNSmallest(int *arr, int len, int theN)
{
    int theNIndex = theN - 1;
    int groupSize = 5;

    // return if no need to group
    int needToGroup = len > groupSize;
    if (!needToGroup)
    {
        insertionSort(arr, 0, len - 1);
        return arr[theNIndex];
    }

    int groupNum = (int)ceil((double)len / groupSize);
    int medianList[groupNum];
    setMedianList(arr, len, groupSize, medianList);

    // find median in median
    int medianOfMedian = findTheNSmallest(medianList, groupNum, groupNum / 2);

    // find medianOfMedian index
    int medianOfMedianIndex = findIndex(arr, medianOfMedian, 0, len - 1);

    //  and partition
    int smallerListLen = medianOfMedianIndex;
    int smallerList[smallerListLen];
    int biggerListLen = len - (smallerListLen)-1;
    int biggerList[biggerListLen];

    setSmallerAndBiggerList(arr, len, medianOfMedian, smallerList, biggerList);

    if (theNIndex == medianOfMedianIndex)
    {
        return arr[medianOfMedianIndex];
    }
    if (theNIndex > medianOfMedianIndex)
    {
        int theNInBiggerList = theN - 1 - medianOfMedianIndex;
        return findTheNSmallest(biggerList, biggerListLen, theNInBiggerList);
    }
    else
    {
        return findTheNSmallest(smallerList, smallerListLen, theN);
    }
}
int main()
{

    int values[] = {1, 3, 2, 5, 4, 6};
    int len = sizeof(values) / sizeof(values[0]);
    int theN = 6;
    printf(" %d should be %d \n", theN, findTheNSmallest(values, len, theN));

    int values1[] = {
        1,
        3,
        2,
    };
    int len1 = sizeof(values1) / sizeof(values1[0]);
    int theN1 = 2;
    printf(" %d should be %d", theN1, findTheNSmallest(values1, len1, theN1));
    return 0;
}