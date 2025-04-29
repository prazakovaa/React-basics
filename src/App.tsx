import View from './components/PercentView'


export const  App = () => {
    const makeColor = (value: number) => `hsl(${(value / 100) * 360}, 100%, 50%)`;

  return (
    <>
      <View value={100} max={100} makeColor={(p) => makeColor(p)}/>
      <View value={50} max={100} makeColor={(p) => makeColor(p)}/>
      <View value={10} max={100} makeColor={(p) => makeColor(p)} />
    </>
  )
  
};