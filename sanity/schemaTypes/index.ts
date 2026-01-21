import { type SchemaTypeDefinition } from "sanity";
import { customerType } from "./customerType";
import { categoryTypes } from "./categoryType";
import { productType } from "./productType";
import { orderType } from "./orderType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryTypes, customerType, productType, orderType],
};
