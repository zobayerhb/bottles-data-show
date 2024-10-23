import './Bottle.css'

const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
        </div>
    );
};

export default Bottle;