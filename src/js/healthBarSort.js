export default function sortHeroes(arg){
  return arg.sort((a,b)=> b.health - a.health)
}
