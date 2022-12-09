const name = document.getElementById('name');
const phone = document.getElementById('phone');
const nationalId = document.getElementById('nationalId');
const code = document.getElementById('code');
const q1 = document.getElementById('questionOne');
const q2 = document.getElementById('questionTwo');
const form = document.getElementById('form');
const age = document.getElementById('age');
const error = document.getElementById('error');
const errorElement = document.getElementById('error')
const deletePosition = document.getElementById('deletePosition')

let user = []

function getDataFromApi() {
  fetch('http://localhost:3000/alluser')
    .then(response => response.json())
    .then(json => {
      user = json.user;
      console.log(json);
    })
}
getDataFromApi()

function valid(){
  validateformName()
  validateformPhone()
  validateformnationalId()
  validateformCode()
  validAge()
}

function inputData() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var code = document.getElementById("code").value;
  var nationalId = document.getElementById("nationalId").value;
  var q1 = document.getElementById("questionOne").value;
  var q2 = document.getElementById("questionTwo").value;
  var age = document.getElementById("age").value;
if(name.length != 0 && phone.length != 0 && code.length != 0 && nationalId.length != 0 && q1 != "none" && q2 != "none" && age.length !=0){
  var data = {
    name: name,
    phone: phone,
    nationalId:nationalId,
    code:code,
    age:age,
    q1:q1,
    q2:q2

  
  }
  alert("تم حفظ بياناتك بنجاح")
  clearForm()
  users('signIn', 'POST', data)
}
else{
  console.log("not");

  alert("ادخل جميع البيانات");
}
    
  }    
  
  
  
  function users( endpoint,method, data) {

    fetch(`http://localhost:3000/${endpoint}`, {
  
      // Adding method type
      method: method,
  
      // Adding body or contents to send
      body: JSON.stringify(data),
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  
      // Converting to JSON
      .then(response => response.json())
  
      // Displaying results to console
      .then(obj => {
        if (obj) {
          getDataFromApi()

        }
      });
  
  }

  function answerOne() {
  questionOne = document.getElementById('questionOne').value
}

function answerTwo() {
  questionTwo = document.getElementById('questionTwo').value
}

function clearForm(){
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('nationalId').value = '';
  document.getElementById('code').value = '';
  var questionOne = document.getElementById("questionOne");
  questionOne.selectedIndex = 0;
  var questionTwo = document.getElementById("questionTwo");
  questionTwo.selectedIndex = 0;
  removedone()
}
function exsit(){
  // alert("delete")
  clearForm()
}
function removedone(){
  document.getElementById('namesuccess').innerHTML = '';
  document.getElementById('phonesuccess').innerHTML = '';
  document.getElementById('nationalsuccess').innerHTML = '';
  document.getElementById('codesuccess').innerHTML = '';
}
  function validateformName(){  
    var name=document.myform.name.value;    
    if (name==null || name==""){   
      document.getElementById('nameError').innerHTML = 'من فضلك ادخل الاسم'; 
      return false;  
    }else if(name.length >15 || name.length <2){
      document.getElementById('nameError').innerHTML = 'من فضلك اسمك لا يكون اقل من 2 حروف اواعلي من 15 حرف'; 
      return false;
    }
    else if(name.value =3){
      document.getElementById('namesuccess').innerHTML = 'تم'; 
      document.getElementById('nameError').innerHTML = '';
      return true;
    }
    } 

    function validateformPhone(){  
      var phone=document.myform.phone.value;   
      if (phone==null || phone==""){ 
        document.getElementById('phoneError').innerHTML = 'من فضلك ادخل رقم موبيلك'; 
        return false;  
      } 
       else if(phone.length > 11 || phone.length < 11){
        
        document.getElementById('phoneError').innerHTML = 'من فضلك ادخل 11 رقم';
        return false
      } 
       else if(phone.length == 11) {
        document.getElementById('phonesuccess').innerHTML = 'تم';
        document.getElementById('phoneError').innerHTML = '';
        return true
      }
      } 
      function validateformnationalId(){  
        var nationalId=document.myform.nationalId.value;  
        if (nationalId==null || nationalId==""){   
          document.getElementById('nationalIdError').innerHTML = 'من فضلك ادخل رقم القومي'; 
          return false;  
        }else if(nationalId.length > 14 || nationalId.length < 14){
          document.getElementById('nationalIdError').innerHTML = 'من فضلك ادخل 14 رقم فقط'; 
          return false;
        }

        else if(nationalId.length =14){
          var res = nationalId.split('');
   var Array = res;
   var year = Array[1]  + Array[2];
   var month = Array[3] + Array[4];
   var day = Array[5] + Array[6];
  //  console.log(res);
  //  console.log(Array);
  //  console.log(year);
  //  console.log(month);
  //  console.log(day);
   if (Array[0] != 2 && Array[0] != 3){
    document.getElementById('nationalIdError').innerHTML = 'من فضلك ادخل الرقم القومى بطريقة صحيحة'; 
    document.getElementById('nationalsuccess').innerHTML = '';
          return false;
   } 
    if(month < 01 || month > 12){
    document.getElementById('nationalIdError').innerHTML = 'من فضلك ادخل الرقم القومى بطريقة صحيحة'; 
    document.getElementById('nationalsuccess').innerHTML = '';
    console.log("month is " + month);
   }
    if(day < 01 || day > 31){
    document.getElementById('nationalIdError').innerHTML = 'خطأ فى الرقم القومي'; 
    document.getElementById('nationalsuccess').innerHTML = '';
   }
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
    document.getElementById('nationalIdError').innerHTML = ''; 
    document.getElementById('nationalsuccess').innerHTML = 'تم';
   } else {
       console.log("y =" + y); 
       document.getElementById('nationalIdError').innerHTML = 'من فضلك ادخل الرقم القومى بطريقة صحيحة'; 
       document.getElementById('nationalsuccess').innerHTML = '';
       return false;
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
        function validateformCode(){  
          var code=document.myform.code.value;  
          // var msg = document.getElementById("msg").value; 
          if (code==null || code==""){   
            document.getElementById('codeError').innerHTML = 'من فضلك ادخل الكود الخاص بك'; 
            return false;  
          }if (code.length < 6 || code.length > 6){
            document.getElementById('codeError').innerHTML = 'من فضلك ادخل 6 ارقام فقط'; 
            return false;
          }
          // if(msg == 'اختر كود اخر'){
          //   json.stringify(msg) 
          //    document.getElementById('codeError').innerHTML = 'من فضلك ادخل 6 ارقام اخرى هذا الكود مسجل بالفعل';
          //   return false;
          // }
          if(code.length = 6){
            document.getElementById('codesuccess').innerHTML = 'تم'; 
            document.getElementById('codeError').innerHTML = ''; 
            return true;
          }
          } 

          function onkeyupvalidName(){
            validateformName()
          }

          function onkeyupvalidphone(){
            validateformPhone()
          }
          function onkeyupvalidnationalid(){
            validateformnationalId()
          }
         function onkeyupvalidcode(){
          validateformCode()
         }
         function validAge(){
          document.getElementById('agesuccess').innerHTML = 'تم'; 
         }
        
  