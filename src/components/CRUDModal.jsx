// FullScreenModal.js
import { useState } from "react";
import { useSnackbar } from "notistack";
import { FaPlus } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import Tooltip from "./Tooltip";

const CRUDModal = ({
  isOpen,
  items,
  stores,
  which,
  closeModal,
  updateStores,
  updateItems,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [ingredient, setIngredient] = useState("");
  const [store, setStore] = useState("");

  const handleChange = (dataItem) => {
    which == "Ingredients" ? setIngredient(dataItem) : setStore(dataItem);
    console.log(dataItem);
  };

  const validateAddAndSend = (dataItem) => {
    console.log(typeof dataItem, dataItem);
    if (dataItem != "") {
      let newArr = [];
      {
        which == "Ingredients"
          ? (newArr = [
              ...items,
              {
                ingredient: dataItem,
              },
            ])
          : (newArr = [
              ...stores,
              {
                store: dataItem,
              },
            ]);
      }
      updateStorage(newArr);
    } else {
      enqueueSnackbar("The field is empty", { variant: "error" });
    }
  };

  const removeAndSend = (dataItem) => {
    console.log(typeof dataItem, dataItem);
    if (dataItem != "") {
      let arr = [];
      let newArr = [];
      if (which == "Ingredients") {
        arr = [...items];
        newArr = arr.filter((item) => item.ingredient != ingredient);
      } else {
        arr = [...stores];
        newArr = arr.filter((item) => item.store != store);
      }

      console.log(newArr);
      updateStorage(newArr);
    } else {
      enqueueSnackbar("The field is empty", { variant: "error" });
    }
  };

  async function updateStorage(newArr) {
    //    let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    if (which == "Ingredients") {
      url += "/writeItems";
    } else {
      url += "/writeStores";
    }
    console.log("-----> ", url);
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    await fetch(`${url}`, {
      method: "POST",
      headers: headersList,
      body: JSON.stringify({ data: JSON.stringify(newArr) }),
    })
      .then((response) => response.json())
      .then((r) => {
        which == "Ingredients" ? updateItems() : updateStores();
        //        enqueueSnackbar("Updated successfully", { variant: "success" });
        console.log(r.data);
        closeModal();
      })
      .catch((error) => {
        //        enqueueSnackbar("Error updating", { variant: "error" });
        console.log("error - ", error);
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-10 z-50 rounded-lg shadow-lg flex items-center justify-center bg-tron-grey/80 dark:bg-tron-dark-grey/80">
      <div className="relative w-full h-full text-tron-black dark:text-tron-cyan rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 mt-5 mr-5">
          <button
            onClick={closeModal}
            className="text-tron-black dark:text-tron-cyan text-4xl"
          >
            &times;
          </button>
        </div>
        <div className="m-5">
          {which == "Ingredients" ? (
            <div>Modify Ingredients List</div>
          ) : (
            <div>Modify Stores List</div>
          )}
        </div>

        <div className="text-tron-black">
          <div className="grid grid-cols-4 justify-center text-center m-1">
            <div className="col-span-3">
              {which == "Ingredients" ? (
                <div>
                  <select
                    className="bg-tron-cyan text-xs "
                    name="ingredient"
                    value={ingredient}
                    onChange={(event) => {
                      console.log("this- ", event.target.value);
                      handleChange(event.target.value);
                    }}
                  >
                    <option value="">Ingredients</option>
                    {items.map((item, index) => (
                      <option key={index} value={item.ingredient}>
                        {item.ingredient}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <select
                    className="bg-tron-cyan text-xs "
                    name="store"
                    value={store}
                    onChange={(event) => {
                      console.log("this- ", event.target.value);
                      handleChange(event.target.value);
                    }}
                  >
                    <option value="">Store</option>
                    {stores.map((item, index) => (
                      <option key={index} value={item.store}>
                        {item.store}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="col-span-1">
              <Tooltip message={"Delete Item"} posit={"above"}>
                <button
                  className="mx-3 relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                  onClick={() => {
                    which == "Ingredients"
                      ? removeAndSend(ingredient)
                      : removeAndSend(store);
                  }}
                >
                  <FaTrash className="text-tron-black dark:text-tron-cyan" />
                </button>
              </Tooltip>
            </div>
          </div>

          <div className="grid grid-cols-4 justify-center text-center m-1">
            <div className="col-span-3">
              <div className="mt-3">
                <input
                  type="text"
                  name="newItem"
                  id="newItem"
                  autoComplete="newItem"
                  className="bg-tron-cyan text-xs px-2 py-1 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  onChange={(event) => {
                    console.log("this- ", event.target.value);
                    handleChange(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="col-span-1">
              <Tooltip message={"Add Item"} posit={"below"}>
                <button
                  className="mt-3 mx-3 relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                  onClick={() => {
                    which == "Ingredients"
                      ? validateAddAndSend(ingredient)
                      : validateAddAndSend(store);
                  }}
                >
                  <FaPlus className="text-tron-black dark:text-tron-cyan" />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRUDModal;
