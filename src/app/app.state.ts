import { Idea } from "./models/idea";

export interface AppState {
  readonly ideas: Idea[];
}
