import Draggable from "react-draggable";
import { useState } from "react";

const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  
  return (
    <Draggable>
      {editMode ? (
        <input
          onDoubleClick={() => setEditMode(false)}
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={()=> setEditMode(true)}>{val}</h1>
      )}
    </Draggable>
  );
};

export default Text;
