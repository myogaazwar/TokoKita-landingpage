export default function cutStringOverLength(text: string) {
   return  text.length > 14 ? `${text.substring(0, 14)}...` : text 
}