type Props={
    imgUrl: string
};

const Card = ({imgUrl}: Props) =>{
    return<>
   <div className="card">
    <img className="card__img" src={imgUrl} alt="Random Animal" />
   </div>
    </>
}
export default Card;