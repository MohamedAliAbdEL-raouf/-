function validationID() {
    var str = document.getElementById("nationalId").value;
   var res = str.split('');
   var Array = res;
   var year = Array[1]  + Array[2];
   var month = Array[3] + Array[4];
   var day = Array[5] + Array[6];
   console.log(res);
   console.log(Array);
    var length = str.length;
       if (length !== 14)
       {
           document.getElementById("idError").style.display = "block";
       document.getElementById("idError").style.color = "red";
            document.getElementById("submitB").style.display = "none";
       }

       // Check the left most digit
       if (Array[0] != 2 && Array[0] != 3)
       {
           document.getElementById("idError").style.display = "block";
       document.getElementById("idError").style.color = "red";
            document.getElementById("submit").style.display ="none";
       }
           
       if(month < 01 && month > 12){
           console.log("MonthError");
          document.getElementById("idError").style.display = "block";
       document.getElementById("idError").style.color = "red";
            document.getElementById("submit").style.display ="none";
       }
    if(day < 01 || day > 31){
         console.log("DayError" + day);
        document.getElementById("errror").innerHTML = "خطأ فى الرقم القومى *";
               console.log("month is " + month);
               document.getElementById("submitB").style.display = "none";
          document.getElementById("uname").readOnly = true;
       document.getElementById("age").readOnly = true;
       document.getElementById("phone").readOnly = true;
       document.getElementById("address").readOnly = true;
       document.getElementById("marriageAddress").readOnly = true;
       }
           if(month < 01 || month > 12){
               document.getElementById("errror").innerHTML = "خطأ فى الرقم القومى *";
               console.log("month is " + month);
               document.getElementById("submitB").style.display = "none";
                 document.getElementById("uname").readOnly = true;
       document.getElementById("age").readOnly = true;
       document.getElementById("phone").readOnly = true;
       document.getElementById("address").readOnly = true;
       document.getElementById("marriageAddress").readOnly = true;
               
           }
         else{
             document.getElementById("errror").innerHTML = " ";
             document.getElementById("submitB").style.display = "block";
               document.getElementById("uname").readOnly = false;
       document.getElementById("age").readOnly = false;
       document.getElementById("phone").readOnly = false;
       document.getElementById("address").readOnly = false;
       document.getElementById("marriageAddress").readOnly = false;
       
   var res1 = Array[0] * 2;
   var res2 = Array[1] * 7;
   var res3 = Array[2] * 6;
   var res4 = Array[3] * 5;
   var res5 = Array[4] * 4;
   var res6 = Array[5] * 3;
   var res7 = Array[6] * 2;
   var res8 = Array[7] * 7;
   var res9 = Array[8] * 6;
   var res10 = Array[9] * 5;
   var res11 = Array[10] * 4;
   var res12 = Array[11] * 3;
   var res13 = Array[12] * 2;
   var res14 = Array[13];
   console.log(res1);
   var totalres = (res1 + res2 + res3 + res4 + res5 + res6 + res7 + res8 + res9 + res10 + res11 + res12 + res13);
   console.log(totalres);
   var x = totalres / 11;
   var out = parseInt(x) * 11;
   var ot = totalres - out;
   console.log(ot);
   var y = 11 - ot;
   console.log(y);
          if(y == 11){
       y = 1;
              console.log("y =" + y); 
   }
   else if(y == 10){
       y = 0
       console.log("y =" + y); 
   }     
             
   if (res14 == y) {
       document.getElementById("idError").style.display = "none";
   } else {
       console.log("y =" + y); 
       document.getElementById("idError").style.display = "block";
       document.getElementById("idError").style.color = "red";
        document.getElementById("submitB").style.display = "none";
       return false;
   }
   if (Array[12] % 2 == 0) {
       document.getElementById("female").checked = true;
       console.log("female");

   } else {
       document.getElementById("male").checked = true;
       console.log("male");
   }
   if (Array[0] == 2) {
       var today = new Date();
       var currentYear = today.getFullYear();
       console.log (currentYear);
       var yearArray = 19 + Array[1] + Array[2];
       var month = Array[3] + Array[4];
       var day = Array[5] + Array[6];
       var birthday = month + '/' + day + '/' + yearArray;
       var age = currentYear - yearArray;
       console.log(age);
       document.getElementById("age").value = age;
       console.log(birthday);
       console.log(yearArray);
   }

   if (Array[0] == 3) {
      var today = new Date();
       var currentYear = today.getFullYear();
       console.log (currentYear);
       var yearArray = 20 + Array[1] + Array[2];
       var month = Array[3] + Array[4];
       var day = Array[5] + Array[6];
       var birthday = month + '/' + day + '/' + yearArray;
       var age = currentYear - yearArray;
       console.log(age);
       document.getElementById("age").value = age;
       console.log(birthday);
       console.log(yearArray);
   }
 }
}