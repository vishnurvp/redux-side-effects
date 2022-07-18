import { uiActions } from "./uiReducer";
import { cartActions } from "./cartReducer";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-http-f04a8-default-rtdb.firebaseio.com/cart.json`
      );
      if (!response.ok) {
        throw new Error("could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalItems: cartData.totalItems,
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://react-http-f04a8-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            items: cart.items,
            totalItems: cart.totalItems,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
