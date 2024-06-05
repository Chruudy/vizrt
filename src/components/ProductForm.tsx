import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

interface Product {
  name: string;
  category: string;
  price: number;
  image?: string;
}

interface ProductFormProps {
  productId?: string | null;
}

const ProductForm: React.FC<ProductFormProps> = ({ productId }) => {
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:5065/api/Product/${productId}`)
        .then((response) => {
          const productData: Product = response.data;
          setName(productData.name);
          setCategory(productData.category);
          setPrice(productData.price);
          setProduct(productData);
          if (productData.image) {
            setImagePreview(`http://localhost:5065${productData.image}`); // Updated to correctly set image preview
          }
        });
    }
  }, [productId]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price.toString());

    if (image) {
      formData.append("file", image);
    }

    try {
      let response;
      if (productId) {
        response = await axios.put(
          `http://localhost:5065/api/Product/${productId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:5065/api/Product",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      const productData: Product = response.data;
      setProduct(productData);
      if (productData.image) {
        setImagePreview(`http://localhost:5065${productData.image}`); // Updated to correctly set image preview
      }
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onDelete = async () => {
    try {
      await axios.delete(`http://localhost:5065/api/Product/${productId}`);
      router.push("/products");
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-5">
          {productId ? "Edit Product" : "Add Product"}
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category:
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={onImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {productId ? "Update" : "Add"}
          </button>
          {productId && (
            <button
              type="button"
              onClick={onDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          )}
        </div>
      </form>
      {imagePreview && (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-5">Image Preview:</h2>
          <Image
            src={imagePreview}
            alt="Image Preview"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>
      )}
      {product && (
        <div className="mt-5">
          <h2 className="text-2xl font-bold mb-5">Product Details:</h2>
          <p className="mb-2">
            <strong>Name:</strong> {product.name}
          </p>
          <p className="mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="mb-2">
            <strong>Price:</strong> {product.price}
          </p>
          {product.image && (
            <Image
              src={`http://localhost:5065${product.image}`} // Updated to correctly display the image
              alt={product.name}
              width={500}
              height={300}
              layout="responsive"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductForm;
