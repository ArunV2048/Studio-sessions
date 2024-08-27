
import {show,beside,stack, heart, sail, ribbon, square,
circle, blank, stack_frac, beside_frac} from "rune";


function mooney_1(botton_right){
    return beside(stack(circle, square), 
                stack(blank, botton_right));
}


show(mooney_1(ribbon));


function mooney_2(n){
    return n === 1 
    ? circle 
    : beside(stack(circle, square), 
        stack(blank, mooney_2(n-1)));
    

}

show(mooney_2(5));

function mooney(n){
    return n===1
    ? circle 
    : beside_frac
        (1/n, (stack_frac(1/n, circle, square)), 
            stack_frac(1/n, blank, mooney(n - 1)));
    
    
}

show(mooney(5));



function square(x){
    return x*x;
}

function is_even(n){
    return n % 2 === 0;
}

function fast_exp(b,n){
    return n===0
    ? 1
    : is_even(n)
    ? square(fast_exp(b, n/2))
    : b * fast_exp(b, n-1);
}

fast_exp(3,16);