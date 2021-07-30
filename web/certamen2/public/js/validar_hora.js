const validarHoras = async(x)=>{
    if(x.length == 5){
        if (int(x[0])<=9 && int(x[0])>=0){
            if (int(x[1]) && int(x[1])>=0){
                if (x[2] == ":"){
                    if (int(x[3]) && int(x[3])>=0){
                        if (int(x[4]) && int(x[4])>=0){
                            return 1;
                        }else{
                            return 0;
                        }
                    }else{
                        return 0;
                    }
                }else{
                    return 0;
                }
            }else{
                return 0;
            }
        }else{
            return 0;
        }
    }else{
        return 0;
    }
    
    
};