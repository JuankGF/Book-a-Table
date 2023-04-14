import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";

import Footer from "./components/utils/Footer";
import Header from "./components/utils/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";
import { UserContext } from "./context/UserContext";
import { CartContext } from "./context/CartContext";
import { useOrder } from "./hooks/useOrder";

function App() {
  const location = useLocation();
  const { orders, addOrder, deleteOrder } = useOrder();
  const navigate = useNavigate();
  return (
    <>
      <UserContext.Provider value={{ userId: "1xjsjjcnlslkslkyyw738493" }}>
        <CartContext.Provider
          value={{
            cartItems: orders,
            addToCart: addOrder,
            deleteFromCart: deleteOrder,
          }}
        >
          <Header>
            {(location.pathname.includes("/menu") ||
              location.pathname.includes("/cart")) && (
              <div
                className="position-relative"
                onClick={() => navigate("/cart")}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="text-primary"
                  size="lg"
                />
                {!!orders.length && (
                  <Badge bg="secondary" pill className="text-xs cart-badge">
                    {orders.length}
                  </Badge>
                )}
              </div>
            )}
          </Header>
          <main>
            <Outlet />
          </main>
        </CartContext.Provider>
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
