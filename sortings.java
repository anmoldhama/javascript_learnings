class Sortings{

public static void swap(int left,int right,int []arr){
     int temp = arr[left];
     arr[left] = arr[right];
     arr[right] = temp;

}    
// selection sort   i and minimum value swap
// public static int[] selection_sort(int []arr){
//     int min;
    
//     for(int i = 0; i<arr.length; i++){
//         min = i;
//         for(int j = i + 1; j<arr.length; j++){
//            if(arr[j] < arr[min]){
//               min = j;
//            }
//         }

//         if(min != i){
//             swap(i,min,arr);
//         }
//     }

//     return arr;
// }

// bubble sort ->  adjacent swap

// public static int[] bubble_sort(int arr[]){
//      for(int i = arr.length-2; i>=1; i--){
//         for(int j = 0; j<=i; j++){
//             if(arr[j]>arr[j+1]){
//                 swap(j,j+1,arr);
//             }
//         }
//      }
//      return arr;
// }

// insertion sort -> takes an element and places it in its correct order
             // compare the element with all its lefts

// public static int[] insertion_sort(int []arr){
//          for(int i = 1; i<arr.length; i++){
//           //  int j = i;
//           int key = arr[i];
//            int j = i - 1;
//            while(j>=0 && arr[j]> key){
//             // swap(j-1,j,arr);
//                arr[j + 1] = arr[j];
//                j = j - 1;
//            }
//            arr[j + 1] = key;
//          }

//          return arr;
// }


// public static int[] selection(int []arr){
//   int min;
//   for(int i =0; i<arr.length; i++){
//        min = i;
//     for(int j = i+1; j<arr.length; j++){
//           if(arr[j] < arr[min]){
//             min = j;
//           }
//     }

//     if(min != i){
//         swap(i,min,arr);
//     }
//   }

//   return arr;
// }

  // public static int[] insertion(int []arr){
  //   for(int i = 0; i<arr.length; )
  // }

  // public static int[] bubble(int []arr){
  //   for(int i = arr.length-2; i>=1; i--){
  //      for(int j = 0; j<=i; j++){
  //          if(arr[j]> arr[j+1]){
  //             swap(j,j+1,arr);
  //          }
  //      }
  //   }
  //   return arr;
  // }

  public static merge_sort(int arr[]){
      int left = 0;
      int right = arr.length - 1;

      while(left <= right){
         int mid = left 
      }
  }



public static void main(String args[]){
    int arr[] = {5,6,7,8,1,3,2};
    int result[] = insertion_sort(arr);
    for(int item : result){                                                                                                                                                                                                                                                                                              
        System.out.println(item);
    }
}
}