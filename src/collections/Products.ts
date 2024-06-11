import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true,
  },
  fields: [
    { name: "name", type: "text" },
    { name: "desciption", type: "richText" },
    { name: "price", type: "number" },
    { name: "quantity", type: "number" },
  ],
};

export default Products;
