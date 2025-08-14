export interface CategoriaInterface{
    id:number;
    categoria?:string;
}
export interface BookInterface{
    id:number;  
    titulo:string;
    categoria:CategoriaInterface;
    autor:string;
}
export interface NewBookInterface {
    titulo:string;
    categoriaId:number;
    autor:string;
}