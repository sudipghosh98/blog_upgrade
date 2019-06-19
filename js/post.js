var a1=0;
var e=0;
document.getElementById('comment1').hide;
function edit() {

    var a=document.getElementById('blogBody');
      var b=document.getElementById('blogTitleNew');
    console.log(a.contentEditable);
    console.log(b.contentEditable);
    if(a.contentEditable=="true" && b.contentEditable=="true"){
        console.log("true");
        a.contentEditable="false";
        b.contentEditable="false";
        document.getElementById('blogBody').style.border="";
         document.getElementById('blogTitleNew').style.border="";
        document.getElementById('edit').innerHTML="Edit";
    }else{
          console.log("false");
             a.contentEditable="true";
        b.contentEditable="true";
         document.getElementById('blogBody').style.border="1px solid black";
         document.getElementById('blogTitleNew').style.border="1px solid black";
         document.getElementById('edit').innerHTML="Save";
    }
    
}
function like(){
    a1=a1+1;
    if(a1==1){
         document.getElementById('li').innerHTML=a1+"  person likes this!";
    }
    else{
    document.getElementById('li').innerHTML=a1+"  person have likes this!";
    }
    document.getElementById('bt').innerHTML="Liked!";
}
var a=[];
function comment(){
    var b=document.getElementById('text').value;
    a.unshift(b);
    document.getElementById('comment1').innerHTML="";
     document.getElementById('comment1').style.padding="10px";
    for(var i=0;i<a.length;i++){
        document.getElementById('comment1').innerHTML+="<p>"+a[i]+"</p>";
    }
   
}



