import { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const uploadRes = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const uploadData = await uploadRes.json();
    const imageUrl = uploadData.fileUrl;

    const productRes = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: Date.now().toString(), name, price, category, imageUrl }),
    });

    const productData = await productRes.json();
    console.log(productData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="border p-2"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
        required
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="border p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
