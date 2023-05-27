import './App.css';
import {useState} from 'react'

function ShoppingList({ items, setItems }) {
  

  function handleClick(item) {
    function deleteItem(a) {
      return a !== item
    }

    setItems(items.filter(deleteItem))
  }

  const itemsList = []
  items.map(item => {
    itemsList.push(
      <div className='item'>
        <li className='item' key={item}>{item}</li> <i className="fa-solid fa-circle-xmark" onClick={() => handleClick(item)}></i>
      </div>
    )
    return
  })

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const input = form.name
    setItems([...items, input.value])
  }

  return (
    <div className="shopping-list">
      <h1 className="project-name">Project 4: Shopping List</h1>
      <div className="shopping-box">
        <h2 className="box-title">Items To Buy</h2>
        <div className='box-body'>
          <form className="add-item-form" onSubmit={handleSubmit}>
            <input type="text" name='name' required placeholder="Add a new item" />
            <button className="add-item-btn">Add</button>
          </form>
          <ul className="item-list">{itemsList}</ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [items, setItems] = useState([])

  return (
    <div className="App">
      <ShoppingList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
