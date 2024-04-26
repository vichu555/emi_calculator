 const calculate = () =>{
const p=document.getElementById('amount').value;
const r=document.getElementById('rate').value;
const n=document.getElementById('year').value;
const mon_int_rate=r/12/100;
const tenureMonth=n*12;
//emi and total interest
const emi=[p*mon_int_rate*Math.pow((1+mon_int_rate),tenureMonth)]/[(Math.pow((1+mon_int_rate),tenureMonth))-1]
const total_interest=(emi * tenureMonth)-p;
const emi_fixed=emi.toFixed(2);
const total_interest_fixed=total_interest.toFixed(2)

//to store result
const result=document.getElementById('result');
result.style.display='block';
document.getElementById('emiresult').innerHTML=`EMI : ${emi_fixed}`;
document.getElementById('interest').innerHTML=`Total Interest : ${total_interest_fixed}`;
}
   
