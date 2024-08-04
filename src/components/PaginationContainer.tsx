import { useLoaderData } from "react-router-dom"
import type { CharacterResponse } from "../types";

const PaginationContainer = () => {

const pagination = (useLoaderData() as CharacterResponse).info;

  return (
    <div>Pages: {pagination.pages}</div>
  )
}
export default PaginationContainer