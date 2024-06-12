import { CollectionConfig } from "payload/types";

const Students: CollectionConfig = {
  slug: "students",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    { name: "name", type: "text" },
    { name: "age", type: "number" },
  ],
};

export default Students;
