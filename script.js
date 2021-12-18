const functions={
 add:function(){
    document.write("Addition of a and b is "+(this.a + this.b)+"<br>" );
},
sub:function(){
    document.write("Substraction of a and b is "+(this.a - this.b) +"<br>" );
},

}
const values ={
a:parseInt(prompt("(Addition)What is a")),
b:parseInt(prompt("What is b?"))
}
document.write("a is equal to "+values.a +"<br>"+"b is equal to "+values.b +"<br>");
functions.add.call(values); 
const svalues ={
    a:parseInt(prompt("(Substraction)What is a")),
    b:parseInt(prompt("What is b?"))
    }

document.write("a is equal to "+svalues.a +"<br>"+"b is equal to "+svalues.b +"<br>");
functions.sub.apply(svalues); 
const mvalues ={
    a:parseInt(prompt("(Multiplication)What is a")),
    b:parseInt(prompt("What is b?")),mul:function(){
        document.write("Multiplication of a and b is "+(this.a * this.b) +"<br>" );
    }
    }

document.write("a is equal to "+mvalues.a +"<br>"+"b is equal to "+mvalues.b +"<br>");

let m = mvalues.mul.bind(mvalues);
setTimeout(m,1000);