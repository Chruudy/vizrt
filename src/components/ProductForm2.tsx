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
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
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
            setImagePreview(productData.image);
          }
        })
        .catch((error) => console.error("Error fetching product:", error));
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
          "http://localhost:5065/UploadImage",
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
        setImagePreview(productData.image);
      }
      setName("");
      setCategory("");
      setPrice(0);
      setImage(null);
      setImagePreview(null);
      setSuccessMessage("Product published successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
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
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const onChangeView = () => {
    router.push("/uploadtest");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-5">
          {productId ? "Edit Product" : "Delete Product"}
        </h2>
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        <div className="mb-4">
          <label className="block text-grey085 text-sm font-bold mb-2">
            Category:
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey085 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select a category</option>
            <option value="Sport">Sport</option>
            <option value="Graphics">Graphics</option>
            <option value="Virtual & XR">Virtual & XR</option>
            <option value="E-sport">E-sport</option>
            <option value="Live Production">Live Production</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-grey085 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey085 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-grey085 text-sm font-bold mb-2">
            Price:
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey085 leading-tight focus:outline-none focus:shadow-outline"
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
            className="block w-full text-sm text-grey090 border border-grey020 rounded-lg cursor-pointer bg-grey010 focus:outline-none"
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <Image
              src={imagePreview}
              alt="Image preview"
              width={200}
              height={200}
              className="rounded-md"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue01 hover:bg-blue03 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {productId ? "Update" : "Add"} Product
          </button>
          {productId && (
            <button
              type="button"
              onClick={onDelete}
              className="bg-red01 hover:bg-red03 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            >
              Delete Product
            </button>
          )}
          <button
            type="button"
            onClick={onChangeView}
            className="bg-red01 hover:bg-red03 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Change View
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
