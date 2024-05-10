
export async function GET_API ({path="products",options}){

    try{
       
        const RESPONSE = await fetch("https://fakestoreapi.com/"+path,options);
        
        return await RESPONSE.json();

    }catch{

    }

}