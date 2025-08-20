import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postBook } from "../api/bookApi";
export function useBook(){

    const fetchData = useQuery({
        queryKey : ["books"],
        queryFn : async ({signal}) => {
            const response = await fetch('http://localhost:3000/api/libro/', {signal});
            if (!response.ok) {
                throw new Error('Error');
            }
            const books = await response.json()
            return books
            }
    })

    const queryClient = useQueryClient()
    
    const cancelRequest =  () =>{
        queryClient.cancelQueries({ queryKey: ['books'] })
    }
 
    const addBook = useMutation({
        mutationFn: postBook,
        onSuccess: (data) => {
            console.log('Success:', data);
            queryClient.invalidateQueries({ queryKey: ['books'] });
        },
    })

   

    return {fetchData, cancelRequest, addBook}
}