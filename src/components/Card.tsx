import '../styles/card.css'
interface CardProps {
    children: React.ReactNode
}

export const Card = ({children}:CardProps) =>{
    return (<div className="card flex gap-4 ">
        {children}
    </div>);
}