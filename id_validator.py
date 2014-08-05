def validate_id(dob, id):
    #dob = date of birth
    #id = id number
    error = False
    
    now = datetime.datetime.now()
    if dob >= now:
        error = True
    if dob.year < 1900:
        error = True
        string_dob = "1900-01-01"
    else:
        string_dob = datetime.datetime.strftime(dob, "%Y-%m-%d")
    
    id_dob = id[0:6]
    yy = string_dob[2:4]
    mm = string_dob[5:7]
    dd = string_dob[8:10]
    
    dob_sm = yy+mm+dd
    
    if dob_sm != id_dob:
        error = True
        
    new_id = id[:-1]#remove check digit
        
    odd = new_id[0::2]
    odd_list = list(odd)
    odd_list = map(int, odd_list)
    odd_sum = sum(odd_list)
    
    even = new_id[1::2]
    even_number = int(even)
    even_number2 = even_number*2
    even_number_sum = sum(map(int, list(str(even_number2))))
    odd_even = even_number_sum + odd_sum
    odd_even_1 = str(odd_even)[-1]
    final_digit = 10 - int(odd_even_1)
    if final_digit == 10:
        final_digit = 0
    
    final_digit = '{0:0>1}'.format(str(final_digit))
    
    if id[-1] != final_digit:
        error = True
        
    return not error