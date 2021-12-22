
displayEnters = () =>{
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let age = document.getElementById("age").value;
    let select = document.getElementById("select").value;
    let p1 = document.getElementById('p1');
    let display = document.getElementById("display").getElementsByTagName('tbody')[0];

    if (!first || !last || !age ) {
        p1.innerHTML = 'Please fill each section correctly';
       
    }
    else if (select == 0) {
    
            p1.innerHTML = 'Please select a game';
            
    }
    else if (age <= 0 || isNaN(age)) {
        p1.innerHTML = 'Error: Invalid age';
        
    }
    else {
        p1.innerHTML = ' ';
        let newRow = display.insertRow(display.length);
        
        let cell =  newRow.insertCell(0);
        let cell1 = newRow.insertCell(1);
        let cell2 = newRow.insertCell(2);
        let cell3 = newRow.insertCell(3);
        let cell4 = newRow.insertCell(4);

        
            cell.innerHTML = " ";
            cell1.innerHTML = "<p id='cap'>" + first + ' ' + last + "</p>";
            cell2.innerHTML = age;
            cell3.innerHTML = formId.selectID[formId.selectID.selectedIndex].text;
            cell4.innerHTML = '<button id="recall" onClick="recall(this)">Recall</button>';
        }
        
         
       
        
    }

recall = (td) =>{
    
   if (confirm("Do you want to delete row?")) {
    row = td.parentElement.parentElement;
    document.getElementById('display').deleteRow(row.rowIndex);
   }
   
    
}
