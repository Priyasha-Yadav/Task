// 41. Given a valid IP address, you are asked to return a defanged version of that IP address. A defanged IP address replaces every period "." with "[.]".
// Example1:Input: address = "1.1.1.1" Output: "1[.]1[.]1[.]1"
// Example2:Input: address = "255.100.50.0" output: "255[.]100[.]50[.]0"

function defanged(address){
    defanged_address=''
    for(i=0;i<address.length;i++){
        if(address[i]=='.'){
            defanged_address+='[.]'
        }
        else{
            defanged_address+=address[i]
        }

    }
    console.log(defanged_address)
}
defanged("1.1.1.1")