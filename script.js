//your JS code here. If required.
let name=document.getElementById("name");
let age = document.getElementById("age");
const mypromise = new Promise((resolve,reject)=>{
	
	setTimeout(()=>{
		if(age>=18)
		resolve(`Welcome ${name}. You can vote.`)
	else
		reject(`Oh sorry ${name}. You aren't old enough.`)
	},4000)
})

mypromise.then((response)=>{
	alert(response);
}).catch((err)=>{
	alert(err);
})