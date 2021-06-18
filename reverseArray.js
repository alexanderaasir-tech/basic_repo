function reverseArray(){
    let arr = [1,2,3,4,5];

    if(arr.length() == 0) {
        console.log(arr);
    } 

    var len = arr.length();

    for(var i=0;i<len/2;i++) {
        var temp = arr[len-i-1];
        arr[len-i-1] = arr[i];
        arr[i] = temp; 
    }

    console.log(arr);

}

