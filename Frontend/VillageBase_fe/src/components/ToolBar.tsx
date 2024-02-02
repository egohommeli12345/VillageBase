import "./ToolBar.css";
import axios from "axios";


export default function ToolBar() {
    // CRUD-toiminnot
    const createItem = async () => {
      try {
        const response = await axios.post('/api/items', { /* item data */ });
        console.log(response.data);
      } catch (error) {
        console.error("Error creating item", error);
      }
    };
  
    const readItems = async () => {
      try {
        const response = await axios.get('/api/items');
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching items", error);
      }
    };
  
    const updateItem = async (itemId) => {
      try {
        const response = await axios.put(`/api/items/${itemId}`, { /* updated data */ });
        console.log(response.data);
      } catch (error) {
        console.error("Error updating item", error);
      }
    };
  
    const deleteItem = async (itemId) => {
      try {
        const response = await axios.delete(`/api/items/${itemId}`);
        console.log(response.data);
      } catch (error) {
        console.error("Error deleting item", error);
      }
    };

  return (
    <div className="toolBarBG">
      <div className="toolBar">
        <div className="tool" onClick={createItem}>Lisää</div>
        <div className="tool" onClick={readItems}>Hae</div>
        <div className="tool" onClick={() => updateItem(/* item id */)}>Muokkaa</div>
        <div className="tool" onClick={() => deleteItem(/* item id */)}>Poista</div>
      </div>
    </div>
  );
}
