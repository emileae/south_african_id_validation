function verify_sa_id(id, dob){
    var error = true;
    var id = id.toString();
    
    //console.log(id);
    //console.log(id[0]);
    
    var new_dob = "";
    if(dob){
        new_dob = dob.split("-");
    }else{
        error = false;
    };
    if( new_dob.length > 0 ){
        var yyyy = new_dob[0];
        if( yyyy.length  == 4 ){
            var yy = yyyy.slice(-2);

        }
        var mm = new_dob[1];

        if(mm.length == 1){
            mm = '0'+mm;
        };
        var dd = new_dob[2];
        if(dd.length == 1){
            dd = '0'+dd;
        };
        
        var id_dob = yy+mm+dd;
        
    }else{
        error = false;
    };
    
    //id_dob = yy+mm+dd;
    // sum odd digits
    if( id ){
        d1 = id.slice(0,1);//id[0];
        d2 = id.slice(1,2);//id[1];
        d3 = id.slice(2,3);//id[2];
        d4 = id.slice(3,4);//id[3];
        d5 = id.slice(4,5);//id[4];
        d6 = id.slice(5,6);//id[5];
        d7 = id.slice(6,7);//id[6];
        d8 = id.slice(7,8);//id[7];
        d9 = id.slice(8,9);//id[8];
        d10 = id.slice(9,10);//id[9];
        d11 = id.slice(10,11);//id[10];
        d12 = id.slice(11,12);//id[11];
        d13 = id.slice(12,13);//id[12];
        
        if(id_dob != d1+d2+d3+d4+d5+d6){
            alert("Date of Birth and ID do not match, please ensure that the first 6 digits match your ID (YYMMDD)");
            //$("#d_o_b").addClass("error");
            $("#uniform-year").addClass("error");
            $("#uniform-month").addClass("error");
            $("#uniform-day").addClass("error");
            error = false;
        };
        
        //Check title
        var title = $("#title").val();
        if( parseInt(d7) <5 ){
            var gender = "f"
        }else{
            var gender = "m"
        };
        

        
        if( gender == "m" && title == "Mrs" ){
            alert("Please select an appropriate title");
            $("#title").addClass("error");
            error = false;
        }else if(gender == "m" && title == "Ms"){
            alert("Please select an appropriate title");
            $("#title").addClass("error");
            error = false;
        }else if( gender == "f" && title == "Mr" ){
            alert("Please select an appropriate title");
            $("#title").addClass("error");
            error = false;
        };
        
        odd_sum = parseInt(d1)+parseInt(d3)+parseInt(d5)+parseInt(d7)+parseInt(d9)+parseInt(d11);

        even_large_number = parseInt(d2+d4+d6+d8+d10+d12)*2;
        
        //console.log(d2);
        //console.log(d4);
        //console.log(d6);
        //console.log(d8);
        //console.log(d10);
        //console.log(d12);
        //console.log("---");
        //console.log(even_large_number);
        
        sum_even_large_digits = [];
        var num = even_large_number.toString().split("");
        for ( var i=0; i<num.length; i++ ){ 
            //console.log(num[i]);
            //console.log(parseInt(num[i]));
            sum_even_large_digits.push(parseInt(num[i]));
        };
        
        //sum_even_large_digits = (even_large_number.toString()).split("").map(Number);
        
        //console.log(even_large_number);
        //console.log(sum_even_large_digits);
        
        total = 0;
        for (var i=0; i<sum_even_large_digits.length; i++){
            total += sum_even_large_digits[i]
        };

        var digit_2 = odd_sum + total;
        var digit_1 = digit_2.toString().slice(-1);

        var last_digit = 0;
        if(digit_1 == 0){
            last_digit = 0
        }else{
            last_digit = 10 - digit_1;
        }
        
        if( d13 != last_digit ){
            error = false;
        }
        
    }else{
        error = false;
    };
    
    return error

};