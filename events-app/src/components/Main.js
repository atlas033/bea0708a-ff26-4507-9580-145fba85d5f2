

export default function Main({data, shoppingCartData, showShoppingCart}) {
    return (
        <div className="App-main">
            <h1>Public Events</h1>
        {showShoppingCart ? <p>Shopping Cart true</p>: <p>Shopping Cart false</p>}
        <p>{JSON.stringify(data)}</p>
      
        </div>
    );
}