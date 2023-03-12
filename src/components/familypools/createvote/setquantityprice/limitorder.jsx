import OrderForm from "./orderform";

const LimitOrder = ({data}) => {
    return (
        <div>
            {data && data.map((pair, index) => <OrderForm item={pair} type='Limit Order' key={index}/>)}
        </div>
    );
}
 
export default LimitOrder;