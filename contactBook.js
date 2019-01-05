// Contact book
class ContactBook{
    constructor(){
        this.contacts=[]
    }
    addContact(firstName, lastName, phoneNumber,wechatId) {
        let newContact={
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            wechatId: wechatId
        }
        newContact.phoneNumber=parseInt(newContact.phoneNumber)
        this.contacts.push(newContact)
    }
    findContact(id) {
        let i=0
        //this.contacts.forEach(obj => {
            while(i<this.contacts.length){
                if(this.contacts[i].wechatId===id){
                    
                    document.getElementById("firstName").textContent=this.contacts[i].firstName
                    document.getElementById("lastName").textContent=this.contacts[i].lastName
                    document.getElementById("phoneNumber").textContent=this.contacts[i].phoneNumber
                    document.getElementById("wechatId").textContent=this.contacts[i].wechatId
                    i=this.contacts.lenght
                    
                }
                else if(this.contacts[i].phoneNumber===parseInt(id)){
                    
                    document.getElementById("firstName").textContent=this.contacts[i].firstName
                    document.getElementById("lastName").textContent=this.contacts[i].lastName
                    document.getElementById("phoneNumber").textContent=this.contacts[i].phoneNumber
                    document.getElementById("wechatId").textContent=this.contacts[i].wechatId
                    i=this.contacts.length
                 }
                else if(i===this.contacts.length-1){
                    document.getElementById("contactNotFound").textContent="Contact does not exist in the Contactbook"      
                }
                i++
            }
      
    }
} 
book=new ContactBook()
book.addContact("Marco","Etcheverry",10,"diablo")
book.addContact("Carlos","Trucco",1,"loco")
book.addContact("Erwin","Sanchez",21,"platini")
book.addContact("William","Ramallo",11,"matador")

document.getElementById("addContact").addEventListener('click',
()=>{
    let firstName=prompt("First name of the new contact:")
    let lastName=prompt("Last name of the new contact:")
    let phoneNumber=prompt("Phone number of the new contact:")
    let wechatId=prompt("WechatId of the new contact:")
    book.addContact(firstName,lastName,phoneNumber,wechatId)
    alert("You've added a a new contact!")
})
document.getElementById("findContact").addEventListener('keypress',(event)=>{
    if(event.key==="Enter"){
        document.getElementById("contactNotFound").textContent=""
        document.getElementById("firstName").textContent=""
        document.getElementById("lastName").textContent=""
        document.getElementById("phoneNumber").textContent=""
        document.getElementById("wechatId").textContent=""
        let id=document.getElementById("findContact").value
        //if(typeof(parseInt(id))==="number"){
            
        //    book.findContact(parseInt(id))
        //}
        //else if(typeof(id.toString())==="string"){
        //    console.log("paso")
            book.findContact(id)
            
        //} 
        //console.log(typeof(id))
        document.getElementById("findContact").value=""
    }
    
})