

import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);

//GET ALL PRODUCTS 
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

//HANDLE INPUT 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//ADD / UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      // UPDATE
      const res = await fetch(
        `http://localhost:3000/products/${editingId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const updatedProduct = await res.json();

      setProducts((prev) =>
        prev.map((p) => (p.id === editingId ? updatedProduct : p))
      );

      setEditingId(null);
    } else {
      // ADD
      const res = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

     
      setProducts((prev) => [...prev, data.result]);
    }

    setForm({ name: "", description: "", price: "" });
  };

  // DELETE 
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  //EDIT 
  const handleEdit = (product) => {
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
    });
    setEditingId(product.id);
  };

  return (
    <div className="min-h-screen bg-black p-10">
      <h1 className="text-4xl font-bold text-center text-amber-400 mb-10">
        Products
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 max-w-6xl mx-auto">
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-zinc-900/90 backdrop-blur p-6 rounded-2xl shadow-xl"
        >
          <h2 className="text-2xl font-semibold text-amber-400 mb-6 text-center">
            {editingId ? "Update Product" : "Add New Product"}
          </h2>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-black text-white border border-zinc-700 focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-400 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 rounded-xl bg-black text-white border border-zinc-700 focus:border-amber-400 focus:outline-none resize-none"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-xl bg-black text-white border border-zinc-700 focus:border-amber-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-black font-semibold py-2.5 rounded-xl hover:bg-amber-400 transition"
          >
            {editingId ? "Save Changes" : "Add Product"}
          </button>
        </form>

       {/* PRODUCTS LIST  */}
        <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl p-4 border border-zinc-700 hover:border-amber-400 transition shadow-lg"
            >
              <h2 className="text-xl font-semibold text-amber-400 mb-2">
                {product.name}
              </h2>

              <p className="text-gray-400 mb-3">
                {product.description}
              </p>

              <p className="text-white font-bold mb-5">
                ${product.price}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(product)}
                  className="flex-1 bg-amber-500 text-black py-2 rounded-xl hover:bg-amber-400 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="
                    flex-1 
                    bg-black 
                    border border-zinc-700 
                    text-white 
                    py-2 
                    rounded-xl
                    hover:border-black/20
                    hover:text-white
                    transition
                  "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
