import {
  getPeopleAsync
} from "./swapiSlice";

import { store } from "../../app/store";

import { peopleMock, setupMocks } from "../../test/mocks";

describe("swapi reducer", () => {
  afterAll(() => {
    fetchMock.resetMocks();
  });
  it("return people", () => {
    
    store.dispatch(getPeopleAsync(1)).then(() => {
      const state = store.getState();
      expect(state.swapi.people).toBeDefined;
    });
  });

});
