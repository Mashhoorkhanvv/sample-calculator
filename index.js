function clickme(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearscreen()
{
    document.getElementById("screen").value="";
}
function clickm()
    {
        var text=document.getElementById("screen").value
        var result=eval(text)
        document.getElementById("screen").value=result
    }
