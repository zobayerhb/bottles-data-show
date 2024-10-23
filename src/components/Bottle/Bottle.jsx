import './Bottle.css'

const Bottle = ({bottle, handleShoppingCart}) => {
    // console.log(bottle)
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleShoppingCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;