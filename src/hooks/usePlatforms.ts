import { use } from "react";
import userData from "./useData";

interface Platform{
    id: number;
    name: string;
    slug: string;
}
const usePlateforms = ()=> userData<Platform>('/platforms/lists/parents')

export default usePlateforms;
