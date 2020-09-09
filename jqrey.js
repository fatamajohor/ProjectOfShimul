 $("#btnId").mouseover(function(){
  $("#object").animate({
      fontSize:"30px",
      padding:"30px",
  },1000).fadeOut(1000).fadeIn(1000)
 })
     
 
var resultField=$("#result");
function insertNum(number){
    var existNumber = resultField.val();
    resultField.val(existNumber + number);
     
}
function clearNumber(){
    resultField.val('');
}
function equalval(){
    resultField.val(eval(resultField.val()));
}

function deleteNum(){
    var presentNumber = resultField.val();
    if(presentNumber!=0){
        resultField.val(presentNumber.slice(0,-1));
    }
}
 $("#imgId").mouseover(function(){
     $("#showHide").toggle(1000);
 })
 $("#imgId2").mouseover(function(){
    $("#ppshow").toggle(1000);
})
$("#abtid").click(function(){
    $("#ul2nd").slideToggle(1000);
})
 

$("document").ready(function(){
    $("#submit").click(function(e){
        var ABC= true;
        $("input[type='text']#required").each(function(){
        if(($(this).val())==''){
          ABC=false;
            $(this).css({
                "border":"1px solid yellow",
                "background":"#d47566"
            })
        }else{

        }
        })
        $("input[type='email']#required").each(function(){
            if(($(this).val())==''){
              ABC=false;
                $(this).css({
                    "border":"1px solid yellow",
                    "background":"#d47566"
                })
            }else{
    
            }
            })
        if(ABC==false){
            e.preventDefault();
        }else{
            clear();
            $("#myDiv").text("Thanks for Suubmitting........")
            return false;
        }
    })
})
 function clear(){
     $("#formId :input").each(function(){
         $(this).val("");
     })
 }
 