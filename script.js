//your JS code here. If required.
const form =document.querySelector('form')
form.addEventListener('submit',(event)=>{
	event.preventDefault();


const agei = document.getElementById('age')
const namei = document.getElementById('name')
const age= agei.value
const name = namei.value

if(age.trim()===''|| name.trim()===''){
	alert('value has not beenadded')
	return
}

	const Promise = new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age>=18){
				alert('Welcome, ${name}. You can vote')
				res()
			}else{
				alert("Oh sorry ${name}. You aren't old enough.")
				rej()
			}
		},4000)
	})

 Promise.then(()=>{
	 agei.value=''
	 namei.value=''
 }).catch(()=>{
	 
 })
	
	
})