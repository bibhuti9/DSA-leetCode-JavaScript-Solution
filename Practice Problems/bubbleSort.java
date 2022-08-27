boolean swapped = false;
for(int j=arr.length-1; j>=0 && swapped; j--)
{
swapped = true;
for(int k=0; k < j; k++)
{
if(arr[k] > arr[k+1])
{
int temp = arr[k];
arr[k] = arr[k+1];
arr[k+1] = temp;
swapped = false;
}
}
}