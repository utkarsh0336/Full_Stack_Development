#include<bits/stdc++.h>
using namespace std;
void reverse(vector<int> &arr,int start,int end){
    while(start <= end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
}
int main(){
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> arr(n);
        for(int i = 0;i<n;i++) cin >> arr[i];

        int idx_maxi = max_element(begin(arr),end(arr)) - begin(arr);
        reverse(arr,0,idx_maxi);
        reverse(arr,idx_maxi+1,n-1);

        for(int i = 0;i<n;i++) cout<<arr[i]<<" ";

    }
return 0;
}