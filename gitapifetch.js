// To send request to get users 

fetch('https://api.github.com/users')   {  
		.then(response => response.json())
		
		.then( data => Gdata(data))  
		
		
		.catch(error => console.log(error))
}
    	
		/*to get particular user info
		
		fetch('https://api.github.com/users/tgeeta') {    
		.then(response => response.json())
		
		.then( data => Gdata(data))  
    .catch(error => console.log(error))
}
		function Gdata(data0{
		var root = document.getElementById("profile");
		var div = document.createElement("div");
		div.innerHTML = 'Name:'+data.name+'<br>Location:'+data.location+'<br>profile<br>'+'<img src="'data.avatar_url'"/>;
			root.appendChild(div);
		}			*/
