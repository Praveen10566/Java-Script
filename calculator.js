// var display=function(num1,num2,caltype){
//            if (caltype="+"){
//                return num1+num2;
//                document.write()
//            }
// }



function c(val)
{
    document.getElementById("dis").value=val;
}
function v(val)
{
    document.getElementById("dis").value+=val;
}
function e()
{
    try
    {
        c(eval(document.getElementById("dis").value))
    }
    catch(e)
    {
        c('Error') }
}