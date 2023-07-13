

        //Validation code for February and leap year
        if(b_month === 2){
            if( (0 == b_year % 4) && (0 != b_year % 100) || (0 == b_year % 400) ){
                if(b_day > 29){
                    alert("It's a leap year! Please select day between 1 to 29");
                    return false;
                }
            }
            else if(b_day > 28){
                alert("It's February (Not a leap year!) Please select a day between 1 to 28");
                return false;
            }
        }



    //Validation for other months
    if(b_month === 4 || b_month === 6 || b_month === 9 || b_month === 11){
        if(b_day === 31 || b_day > 31){
            alert("Invalid Date");
            return false;
        }
    }
