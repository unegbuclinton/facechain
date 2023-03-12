import OrderForm from "./orderform";
const MarketOrder = ({data}) => {
    return (
        <div>
            {data && data.map((pair, index) => <OrderForm item={pair} type='Market Order' key={index}/>)}
        </div>
    );
    
}
 
export default MarketOrder;