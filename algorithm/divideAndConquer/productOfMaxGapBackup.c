
#include <stdio.h>
/***
 *
 * O(n^2)
 * @todo using device and conquer for better performance
 */
int productOfMaxGap(int *arr, int len)
{

    int result = 1;
    int count = 0;
    for (int index = 0; index < len; index++)
    {
        int min = arr[index];
        int max = arr[index];
        for (int innerIndex = index + 1; innerIndex < len; innerIndex++)
        {
            count++;
            if (arr[innerIndex] > arr[index])
            {
                max = arr[innerIndex];
            }
            else if (arr[innerIndex] < arr[index])
            {
                min = arr[innerIndex];
            }
            else
            {
                return 0;
            }
            result = result * (max - min);
        }
    }
    printf("%d \n", count);
    return result;
}
int main()
{
    int arr[3] = {1, 2, 4};
    int len = sizeof(arr) / sizeof(arr[0]);
    int result = productOfMaxGap(arr, len);
    printf("%d should be 6", result);
    return 0;
}