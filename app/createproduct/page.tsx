

export default function route() {
  return (
    <div>
      <h1>Create Product</h1>
      <form action="/createproduct" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" />
        <label htmlFor="category">Category</label>
        <input type="text" id="category" name="category" />
        <label htmlFor="rating">Rating</label>
        <input type="text" id="rating" name="rating" />
        <label htmlFor="countInStock">Stock</label>
        <input type="number" id="countInStock" name="countInStock" />
        <button type="submit">Create</button>
      </form> 
    </div>
  )
}
