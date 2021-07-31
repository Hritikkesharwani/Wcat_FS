let fs = require("fs");
let sobj = require("./command/s");
let nobj = require("./command/n");
let bobj = require("./command/b");

let inputArr = process.argv.slice(2);
let path=[];
let optionArr=[];
for(let i=0;i<inputArr.length;i++){
    let firstChar=inputArr[i].charAt(0);
    if(firstChar=="-"){
        optionArr.push(inputArr[i]);
    }else{
        path.push(inputArr[i]);
    }
}
for(let i=0;i<path.length;i++){
    let ans= fs.existsSync(path[i]);
      if(ans==false){
          console.log("File dosent exists");
          return;
      }    
  } 
  let  Allcontent = "";
    let content = [];
    for(let i=0; i<path.length;i++){
         
          Allcontent += fs.readFileSync(path[i])+"\r\n";
      }    
      content = Allcontent.split("\r\n");

 if(inputArr.includes("-n")&&inputArr.includes("-b")&&inputArr.includes("-s") ){
    
     if(inputArr.indexOf("-n")<inputArr.indexOf("-b")){
        let sbarr =[];
        sbarr =sobj.fxn(path,content);
        let count=1;
        for(let i=0; i<sbarr.length;i++){
           
               sbarr[i]=(count +  " " + sbarr[i] );
               count++;
               console.log(sbarr[i]);
               
           
       }
     }
     else {
        let sbarr =[];
        sbarr =sobj.fxn(path,content);
        let count=1;
        for(let i=0; i<sbarr.length;i++){
           if(sbarr[i] != ""){
               sbarr[i]=(count +  " " + sbarr[i] );
               count++;
               console.log(sbarr[i]);
               
           }
           else{
               sbarr[i]= (sbarr[i]);
               console.log(sbarr[i]);
           } 
       }
     }
    
}
else if(inputArr.includes("-s")&&inputArr.includes("-b") ){
    
     let sbarr =[];
     sbarr =sobj.fxn(path,content);
     let count=1;
     for(let i=0; i<sbarr.length;i++){
        if(sbarr[i] != ""){
            sbarr[i]=(count +  " " + sbarr[i] );
            count++;
            console.log(sbarr[i]);
            
        }
        else{
            sbarr[i]= (sbarr[i]);
            console.log(sbarr[i]);
        } 
    }
    
     
} 
else if(inputArr.includes("-s")&&inputArr.includes("-n") ){
    
     let sbarr =[];
     sbarr =sobj.fxn(path,content);
     let count=1;
     for(let i=0; i<sbarr.length;i++){
        
            sbarr[i]=(count +  " " + sbarr[i] );
            count++;
            console.log(sbarr[i]);
            
        
    }
    
     
}
else if(inputArr.includes("-n")&&inputArr.includes("-b") ){
    
     if(inputArr.indexOf("-n")>inputArr.indexOf("-b")){
        nobj.fxn(path,content);
     }
     else {
        bobj.fxn(path,content);
     }
    
}
else if(inputArr[0]== "-s"){
    
    console.log(sobj.fxn(path,content).join("\n"));
    
}
else if(inputArr[0]== "-n"){
    
    nobj.fxn(path,content);
    
}
else if(inputArr[0] == "-b"){
    console.log(bobj.fxn(path,content));
 }
else {
     for(let i=0; i<path.length;i++){

    let content = fs.readFileSync(path[i]);
    console.log("content :" + content);
 }
}




 



