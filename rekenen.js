   function calc() {
   var n1 = parseInt (document.getElementById('n1').value);
    var n2 = parseInt (document.getElementById('n2').value);
    var opr = document.getElementById('operators').value;

    if(opr === '+')
    {
        document.getElementById('output').value = n1+n2;
    }

    if(opr === '-')
    {
        document.getElementById('output').value = n1-n2;
    }

    if(opr === '/')
    {
        document.getElementById('output').value = n1/n2;
    }

    if(opr === '*')
    {
        document.getElementById('output').value = n1*n2;
    }
   }