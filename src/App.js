import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { buyItem, sellItem } from "./redux/moneySlice";

function App() {
  const items = useSelector((state) => state.money.items);
  console.log(items);
  const total = items.reduce((acc, obj) => acc + obj.price * obj.amount, 0);
  const billsMoney = 100000000000 - total;
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-3 offset-4 mt-5">Bills Money: {billsMoney}</div>
      </div>
      <div className="row mt-5">
        {items.map((item) => (
          <div key={item.id} className="col-4 mt-3">
            <div className="row">{item.name}</div>
            <div className="row">{item.price} $</div>
            {item.price < billsMoney && (
              <button
                onClick={() =>
                  dispatch(
                    buyItem({
                      id: item.id,
                      amount: 1,
                    })
                  )
                }
              >
                Buy
              </button>
            )}
            {item.amount > 0 && (
              <button
                onClick={() => dispatch(sellItem({ id: item.id, amount: 1 }))}
              >
                Sell
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-4 offset-4 mt-5">
          <h3>Your Receipt</h3>
          {items.map((item) => (
            <div key={item.id} className="row">
              {item.amount > 0 && (
                <p>
                  {item.name} x {item.amount} $ = {item.price * item.amount} $
                </p>
              )}
            </div>
          ))}
          <hr />
          <p>Total: {total} $</p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}
export default App;
