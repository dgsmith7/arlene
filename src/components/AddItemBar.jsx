import { useState } from "react";
import Tooltip from "./Tooltip";
import { FaPlus } from "react-icons/fa";
import { useSnackbar } from "notistack";

function AddItemBar({ list, items, stores, updateStorage }) {
  const [ingredient, setIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [store, setStore] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleIngredientChange = (ingredient) => {
    setIngredient(ingredient);
    console.log(ingredient);
  };

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity);
    console.log(quantity);
  };

  const handleStoreChange = (store) => {
    setStore(store);
    console.log(store);
  };

  const validateAndSend = (ingredient, quantity, store) => {
    if (ingredient != "" && quantity != "" && store != "") {
      let newArr = [];
      newArr = [
        ...list,
        {
          ingredient: ingredient,
          quantity: quantity,
          store: store,
        },
      ];
      updateStorage(newArr);
      setIngredient("");
      setQuantity("");
      setStore("");
    } else {
      enqueueSnackbar("Please select all fields", { variant: "error" });
      // notistack
    }
  };

  return (
    <div className="text-tron-black">
      <div className="grid grid-cols-10 text-center m-1">
        <div className="col-span-3">
          <select
            className="bg-tron-cyan text-xs "
            name="ingredient"
            value={ingredient}
            onChange={(event) => {
              console.log("this- ", event.target.value);
              handleIngredientChange(event.target.value);
            }}
          >
            <option value="">Ingredient</option>
            {items.map((item, index) => (
              <option key={index} value={item.ingredient}>
                {item.ingredient}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-3">
          <select
            className="bg-tron-cyan text-xs "
            name="quantity"
            value={quantity}
            onChange={(event) => {
              console.log("this- ", event.target.value);
              handleQuantityChange(event.target.value);
            }}
          >
            <option value="">Qty</option>
            {[...Array(25)].map((x, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-3">
          <select
            className="bg-tron-cyan text-xs"
            name="store"
            value={store}
            onChange={(event) => handleStoreChange(event.target.value)}
          >
            <option value="">Store</option>
            {stores.map((item, index) => (
              <option key={index} value={item.store}>
                {item.store}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <Tooltip message={"Add Item"} posit={"above"}>
            <button
              className="mx-3 relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
              onClick={() => validateAndSend(ingredient, quantity, store)}
            >
              <FaPlus className="text-tron-black dark:text-tron-medium-grey" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default AddItemBar;
