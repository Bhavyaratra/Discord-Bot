module.exports=function(msg, s){
var n=1;
n=s[0];
if(n==null)
{
  n=1;
}
n=Number(n)+1;  
  console.log(n);
  async function clear(){
  console.log('cleared');
  await msg.channel.bulkDelete(n)  
  }   
clear()     
}