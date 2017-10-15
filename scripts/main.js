

function initialize(){
	var column=3;
	var row=5;
	
	var str=new String("<table><tr>");
	
	for(var i=1;i<=column;i++){
		str+="<th>Column "+i+"</th>"
		
	}
	str+="</tr><tr>"
	for(var i=1;i<=row;i++){
		str+="<tr>"
		for(var j=1;j<=column;j++){
			str+="<td>Row "+i+" Column "+j+"</td>"
		}
		str+="</tr>"
	}
	
	
	str+="</table>"
	document.write(str);
}



initialize();

