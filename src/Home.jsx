import React, { useContext } from "react";
import { StateContext } from "./Context";
import Details from "./details";

function Home() {
  const { array, setArray } = useContext(StateContext);

  const handleDelete = (id) => {
    const updatedArray = array.filter((item, index) => index !== id);
    setArray(updatedArray);
  };

  return (
    <div>
      <div className="homecard">
        <table className="trs">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {array.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                  <button className="addbutton" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Details />
    </div>
  );
}

export default Home;
