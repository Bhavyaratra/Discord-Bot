module.exports=function(msg, s){
var n=s[0];
n=Number(n)+1;  
  console.log(n);
  async function clear(){
  
  await msg.channel.bulkDelete(n)  
  }   
clear()     
}