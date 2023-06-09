export const Animation = (knowledge,experience) =>
{
    let kValue;
    let eValue;
  if(knowledge === 100 && experience === 100)
   {
     kValue = -140;
     eValue = -140;
}
 else
 {
    const value1 = 100-knowledge;
    const value2 = 100-experience;

    kValue = -1*(140-value1);
    eValue = -1*(140-value2);
 }
 console.log("animation "+kValue);
 console.log("animation "+eValue);
  return{kValue,eValue}
}