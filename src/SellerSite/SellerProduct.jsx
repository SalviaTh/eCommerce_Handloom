import React, { useState } from "react";
import SellerSidebarLayout from "./SellerSidebar";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  ScrollArea,
  Box,
  NativeSelect,
  Input,
  Select,
  Textarea,
} from "@mantine/core";

import FormItem from "./form/Form";
import SellerProductDisplay from "./SellerProductDisplay";

const SellerProduct = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isPending, setIsPending] = useState();
  return (
    <>
      <SellerSidebarLayout pageTitle="Products">
        <div className="sm:p-4 bg-blue-50  min-h-screen">
          <div className="flex sm:justify-between space-x-32  ">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Products</h1>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white mr-16 "
              onClick={open}
            >
              Add Product
            </Button>
          </div>

          <Modal
            opened={opened}
            onClose={close}
            size="auto"
            title="Add Product"
          >
            <ScrollArea type="never">
              <Box>
                <form
                  className="shadow-xl rounded-lg m-2 p-4 w-full border border-gray-400"
                  // onSubmit={addProduct}
                >
                  <div className="grid gap-2">
                    <FormItem>
                      <label className="text-gray-700" htmlFor="productImage">
                        Upload Product Image
                      </label>
                      <Input
                        id="productImage"
                        name="productImage"
                        type="file"
                        multiple
                        //   onChange={handleFileChange}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="productName">
                        Product Name
                      </label>
                      <Input
                        id="productName"
                        type="text"
                        name="productName"
                        placeholder="Enter product name"
                        //   value={name}
                        //   onChange={(e) => setName(e.target.value)}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="price">
                        Price
                      </label>
                      <Input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="price"
                        //   value={price}
                        //   onChange={(e) => setPrice(e.target.value)}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="discount">
                        Discount (%)
                      </label>
                      <Input
                        type="number"
                        id="discount"
                        name="discount"
                        placeholder="discount"
                        //   value={discount}
                        //   onChange={(e) => setDiscount(e.target.value)}
                      />
                    </FormItem>
                    <FormItem>
                      <label
                        className="text-gray-700"
                        htmlFor="discountedPrice"
                      >
                        Discounted Price
                      </label>
                      <Input
                        type="number"
                        id="discountedPrice"
                        name="discountedPrice"
                        //   value={discountedPrice}
                        readOnly
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="quantity">
                        Quantity
                      </label>
                      <Input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="quantity"
                        //   value={quantity}
                        //   min={1}
                        //   onChange={(e) => setQuantity(e.target.value)}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="sizeLength">
                        Size Length
                      </label>
                      <Input
                        id="sizeLength"
                        name="sizeLength"
                        type="text"
                        placeholder="sizelength"
                        //   value={sizelength}
                        //   onChange={(e) => setSizelength(e.target.value)}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="sizeWidth">
                        Size Width
                      </label>
                      <Input
                        id="sizeWidth"
                        name="sizeWidth"
                        type="text"
                        placeholder="sizewidth"
                        //   value={sizewidth}
                        //   onChange={(e) => setSizewidth(e.target.value)}
                      />
                    </FormItem>

                    <FormItem>
                      <label className="text-gray-700" htmlFor="category">
                        Category
                      </label>
                      <Select
                        placeholder={"Please select a category"}
                        //   data={categorylist?.categories?.map((category) => ({
                        //     label: category.name,
                        //     value: category._id,
                        //   }))}
                        //   value={category}
                        //   onChange={handleChangeCategory}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="subcategory">
                        Sub Categories
                      </label>

                      <Select
                        placeholder="Please select a subcategory"
                        //   data={subList?.subCategory?.map((subcategory) => ({
                        //     label: subcategory.subCategoryName,
                        //     value: subcategory._id,
                        //   }))}
                        //   value={subCategory}
                        //   disabled={!category || subList?.length === 0}
                        //   onChange={handleChangeSubCategory}
                      />
                    </FormItem>
                    <FormItem>
                      <label className="text-gray-700" htmlFor="category">
                        Collection
                      </label>
                      <Select
                        placeholder={"Please select a collection"}
                        //   data={collectionlist?.collection?.map((collection) => ({
                        //     label: collection.name,
                        //     value: collection._id,
                        //     // setCollection: collection,
                        //   }))}
                        //   value={collection}
                        //   onChange={handleChangeCollection}
                      />
                    </FormItem>
                    <FormItem>
                      <label
                        className="text-gray-700"
                        htmlFor="isProductForKids"
                      >
                        Is Product For Kids
                      </label>
                      <NativeSelect
                      //   value={isProductForKids ? "true" : "false"}
                      //   onChange={(e) =>
                      //     setIsProductForKids(e.target.value === "true")
                      //   }
                      //   data={[
                      //     { value: "false", label: "No" },
                      //     { value: "true", label: "Yes" },
                      //   ]}
                      />
                    </FormItem>

                    <FormItem>
                      <label className="text-gray-700" htmlFor="sex">
                        Gender
                      </label>
                      <NativeSelect
                        type="text"
                        //   value={gender}
                        //   onChange={(e) => setGender(e.target.value)}
                        //   data={["", "Male", "Female", "Neutral"]}
                        placeholder="Select Gender"
                      />
                    </FormItem>

                    <FormItem>
                      <label className="text-gray-700" htmlFor="description">
                        Description
                      </label>
                      <Textarea
                        name="description"
                        id="description"
                        cols={50}
                        rows={4}
                        placeholder="About Product"
                        //   value={description}
                        //   onChange={(e) => setDescription(e.target.value)}
                      />
                    </FormItem>
                    <Button
                      disabled={isPending}
                      type="submit"
                      className="my-10 bg-green-500"
                    >
                      {/* {isPending ? "Please wait..." : "Add Product"} */}
                      Add Product
                    </Button>
                  </div>
                </form>
              </Box>
            </ScrollArea>
          </Modal>

          <SellerProductDisplay />
        </div>
      </SellerSidebarLayout>
    </>
  );
};

export default SellerProduct;
