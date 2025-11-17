export default function TourCard(props){
    return (
        <div>
            <img src={props.image} width={500} height={300} alt="" />
            <h2 className="text-3xl font-bold text-orange-300">{props.title}</h2>
        </div>
    )
}