import { useState } from 'react';

export default function App() {
  const [clothingItems, setClothingItems] = useState([
    { id: 1, image_url: "https://via.placeholder.com/150", type: "Top", color: "Black", season: "All", cost: 45 },
    { id: 2, image_url: "https://via.placeholder.com/150", type: "Bottoms", color: "Navy", season: "Winter", cost: 60 }
  ]); 
  
  const [savedOutfits, setSavedOutfits] = useState([
    { id: 1, name: "Casual Friday", item_ids: [1, 2], occasion: "Work" }
  ]);
  
  const [wearLogs, setWearLogs] = useState([]);

  const handleAddItem = () => {
    const newItem = { 
      id: Date.now(), 
      image_url: "https://via.placeholder.com/150",
      type: "Shoes", 
      color: "Burgundy", 
      season: "Fall",
      cost: 120
    };
    setClothingItems([...clothingItems, newItem]);
  };

  const handleLogOutfit = (outfitId) => {
    const newLog = {
      id: Date.now(),
      outfit_id: outfitId,
      date_worn: new Date().toISOString().split('T')[0]
    };
    setWearLogs([...wearLogs, newLog]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>paradu'l</h1>

      <section>
        <h2>1. Clothing Items</h2>
        <button onClick={handleAddItem}>+ Add Item</button>
        <ul>
          {clothingItems.map(item => (
            <li key={item.id}>
              [{item.type}] {item.color} - {item.season}
              <br /> Image: {item.image_url} (ID: {item.id})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>2. Saved Outfits</h2>
        <ul>
          {savedOutfits.map(outfit => (
            <li key={outfit.id}>
              <strong>{outfit.name}</strong> ({outfit.occasion}) 
              <br /> Items included: {outfit.item_ids.join(", ")}
              <br />
              <button onClick={() => handleLogOutfit(outfit.id)}>
                Log as Worn Today
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>3. Wear Logs</h2>
        {wearLogs.length === 0 ? <p>No outfits logged yet.</p> : (
          <ul>
            {wearLogs.map(log => (
              <li key={log.id}>
                Outfit ID: {log.outfit_id} worn on {log.date_worn}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}