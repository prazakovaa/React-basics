import View from './components/PercentView'


export const  App = () => {
  let cislo: number = 34;
  cislo -= 1;

  return (
    <>
      <View value={cislo} max={100} makeColor={(p) => "red"}/>
      <View value={cislo} max={50} makeColor={(p) => "orange"}/>
      <View value={cislo} max={1} makeColor={(p) => "green"}/>
    </>
  )
  
};