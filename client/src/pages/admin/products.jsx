import ImageUpload from "@/components/admin-view/image-upload";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config";
import { toast } from "@/hooks/use-toast";

import React, { useState } from "react";

import ProductTile from "./product-tile";

import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "@/config/firebase";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  gender: "",
  salePrice: "",
  totalStock: null,
};

const initialProductList = [
  {
    id: "66de99571dfe3023af0af5a9",
    image:
      "http://res.cloudinary.com/dzx2so8ba/image/upload/v1725864257/lz72j4qla2so2qoa0zv9.png",
    title: "Nike Dunk Low By You",
    description: "This product is excluded from site promotions and discounts.",
    category: "running",
    brand: "nike",
    gender: "men",
    price: 200,
    salePrice: 0,
    totalStock: 1,
  },
  {
    id: "66de9a5b1dfe3023af0af5ba",
    image:
      "http://res.cloudinary.com/dzx2so8ba/image/upload/v1725864501/c02holgfgvfxllwqcggt.png",
    title: "Reebok Court Advance",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    category: "running",
    brand: "reebok",
    gender: "men",
    price: 150,
    salePrice: 0,
    totalStock: 1,
  },
  {
    id: "66debb0ece63b40a874d5276",
    image:
      "http://res.cloudinary.com/dzx2so8ba/image/upload/v1725872894/pouyclfqwvm0f8qqfqqx.png",
    title: "Nike Air Force 1 '07",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    category: "running",
    brand: "nike",
    gender: "women",
    price: 150,
    salePrice: 0,
    totalStock: 1,
  },
];

function Products() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : initialProductList;
  });
  const [isUploading, setIsUploading] = useState(false);

  const handleUploadFile = async (file) => {
    return new Promise((resolve, reject) => {
      setIsUploading(true);
      const storage = getStorage(app);

      const fileName = new Date().getTime() + file.name;

      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",

        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },

        (error) => {
          reject(error);
        },

        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setIsUploading(false);
            resolve(downloadURL); // Resolve the promise with the downloadURL
          });
        }
      );
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      toast({
        title: "Please upload an image",
        variant: "destructive",
      });
      return;
    }

    if (
      !imageFile ||
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.brand ||
      !formData.price ||
      !formData.gender ||
      !formData.totalStock ||
      formData.title.trim() === "" ||
      formData.description.trim() === ""
    ) {
      toast({
        title: "Please fill all the fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.price <= 0) {
      toast({
        title: "Price should be greater than 0",
        variant: "destructive",
      });
      return;
    }
    if (formData.totalStock < 0) {
      toast({
        title: "Total Stock should be greater than or equal to 0",
        variant: "destructive",
      });
      return;
    }
    if (formData.salePrice < 0) {
      toast({
        title: "Sale Price should be greater than or equal to 0",
        variant: "destructive",
      });
      return;
    }

    if (formData.price <= formData.salePrice) {
      toast({
        title: "Sale Price should be less than Price",
        variant: "destructive",
      });
      return;
    }

    //check if existed product'name
    const existedProduct = products.find(
      (product) => product.title === formData.title
    );
    if (existedProduct) {
      toast({
        title: "Product already exists",
        variant: "destructive",
      });
      return;
    }
    const newProduct = {
      ...formData,
      image: await handleUploadFile(imageFile),
      id: new Date().getTime().toString(),
    };
    const updatedProduct = [...products, newProduct];
    setProducts(updatedProduct);
    localStorage.setItem("products", JSON.stringify(updatedProduct));
    setImageFile(null);
    setFormData(initialFormData);
    toast({
      title: "Product added successfully",
    });
    setOpenCreateProductsDialog(false);
  };

  return (
    <>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products && products.length > 0
          ? products.map((product) => (
              <ProductTile
                product={product}
                setFormData={setFormData}
                setOpenCreateProductsDialog={setOpenCreateProductsDialog}
              />
            ))
          : null}
      </div>

      <Sheet
        open={openCreateProductsDialog}
        onOpenChange={() => {
          setOpenCreateProductsDialog(false);
          setFormData(initialFormData);
          setCurrentEditedId(null);
          setImageFile(null);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ImageUpload
            file={imageFile}
            setFile={setImageFile}
            uploadedImage={imageFile}
            imageLoadingState={imageLoadingState}
            setImageLoadingState={setImageLoadingState}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              isUploading={isUploading}
              buttonText={"Add"}
              formControls={addProductFormElements}
            />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Products;
