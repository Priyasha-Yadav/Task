
// 24. Write a program to remove whitespace from both ends of 
// a string.Example: Input: " hello ", Output: "hello".

function noSpace(str){
    let final=""
    for(i=0;i<str.length;i++){
        if(str[i]==" "){

        }
        else{
            final+=str[i]
        }
    }
    console.log(final)

}
noSpace("      hello ")