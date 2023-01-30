replacee(str,sreach,rep){
    let i=0;
    while (i !== -1){
       i=str.indexof(search);
       if(i!== -1){
        str =str.sub(0,i)+ rep + str.substr(i +search.length)
       }
    } return str
}

let text = "Hello From Zeinab !";
let newtext = replacee(text,"Zeinab","John")
