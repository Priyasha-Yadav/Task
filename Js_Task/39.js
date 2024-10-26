
// 39. Given a string, check if all brackets are closed properly. 
// Example:Input: "{[()]}" Output: true

function check_brackets(str){
    if(str.length%2!=0){
        console.log("False")
    }
    else{
        let count_curly_open=0;
        let count_square_open =0;
        let count_paren_open=0;
        if(str[i]=='{'){
            count_curly_open++
        }
        else if(str[i]=='['){
            count_square_open++
        }
        else if(str[i]=='('){
            count_paren_open++
        }
        else if(str[i]=='}'){

        }

    }
}