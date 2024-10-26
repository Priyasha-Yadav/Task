
// 48.Given a string, return a new string with all vowels removed.
// Input: "hello"
// Output: "hll"


function vowel_remover(str){
    let new_str = ''
    for(i=0;i<str.length;i++){
        if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
            continue
        }
        else{
            new_str+=str[i]
        }
    }
    console.log(new_str)

}
vowel_remover("hello")