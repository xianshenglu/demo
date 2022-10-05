
#include <stdio.h>
int min(int a, int b)
{
    return a < b ? a : b;
}
int findMin(int *arr, int start, int end)
{
    int result = arr[start];
    for (int i = start; i <= end; i++)
    {
        if (arr[i] < result)
        {
            result = arr[i];
        }
    }
    return result;
}
/*!
 * complexity is about O(n^2)?
 * @todo Can we replace with Divide And Conquer? which would be O(n log n)?
 */
int calcMinPaintNum(int *arr, int start, int end, int minNum)
{

    int result = minNum;

    for (int index = start; index <= end; index++)
    {
        if (arr[index] == minNum)
        {
            continue;
        }
        int newContinuedStartIndex = index;
        int newContinuedEndIndex = index;
        int newGroupMin = arr[newContinuedStartIndex] - minNum;
        for (; newContinuedEndIndex <= end; newContinuedEndIndex++)
        {
            if (arr[newContinuedEndIndex] == minNum)
            {
                break;
            }
            arr[newContinuedEndIndex] -= minNum;
            if (arr[newContinuedEndIndex] < newGroupMin)
            {
                newGroupMin = arr[newContinuedEndIndex];
            }
        }
        newContinuedEndIndex--;
        result += calcMinPaintNum(arr, newContinuedStartIndex, newContinuedEndIndex, newGroupMin);
        index = newContinuedEndIndex;
    }

    return min(result, end - start + 1);
}
int main()
{
    int heightList[5] = {2, 2, 1, 2, 1};
    int len = sizeof(heightList) / sizeof(heightList[0]);
    int minNum = findMin(heightList, 0, len - 1);

    int result = calcMinPaintNum(heightList, 0, len - 1, minNum);

    printf("%d should be 3\n", result);

    int heightList1[5] = {2, 2, 5, 3, 1};
    int len1 = sizeof(heightList1) / sizeof(heightList1[0]);
    int minNum1 = findMin(heightList1, 0, len1 - 1);

    int result1 = calcMinPaintNum(heightList1, 2, 3, minNum1);
    printf("%d should be 2\n", result1);
    return 0;
}
