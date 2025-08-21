import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postBook } from "../api/bookApi";
import type { BookInterface } from "../model/bookModel";
export function useBook(search?: string){
    const fetchData  = useQuery({
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

    const filteredBooks = fetchData.data?.filter((book:BookInterface) => {
        if (!search) return true;
        const lowerSearch = search.toLowerCase();
        return (
            book.titulo?.toLowerCase().includes(lowerSearch)
        );
    }) || [];

    const queryClient = useQueryClient()
    
    const cancelRequest =  () =>{
        queryClient.cancelQueries({ queryKey: ['books'] })
    }
 
    const addBook = useMutation({
        mutationFn: postBook,
        onSuccess: (data) => {
            console.log('Success:', data);
            queryClient.invalidateQueries({ queryKey: ['books', 'search'] });
        },
    })


   

    return {fetchData: { ...fetchData, data: filteredBooks }, cancelRequest, addBook }
}