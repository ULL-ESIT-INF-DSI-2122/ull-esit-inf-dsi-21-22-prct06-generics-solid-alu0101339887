import { StreamableCol } from "./StreamableCol";
import { StreamableSearch } from "./StreamableSearch";

export interface Streamable <T> extends StreamableCol <T>, StreamableSearch <T> {}
