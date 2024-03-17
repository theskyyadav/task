import { useEffect, useState } from "react";
import explorer from "./data/folderData";

export default function App() {
  useEffect(() => {
    console.log(explorer);
  }, []);

  return (
    <div className="App">
      {explorer.map((item) => {
        return (
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {item.name}
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  {item.child.map((item) => {
                    return (
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              {item.name}
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              {item.child.map((item) => {
                                return (
                                  <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                      <h2
                                        class="accordion-header"
                                        id="headingOne"
                                      >
                                        <button
                                          class="accordion-button"
                                          type="button"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#collapseOne"
                                          aria-expanded="true"
                                          aria-controls="collapseOne"
                                        >
                                          {item.name}
                                        </button>
                                      </h2>
                                      <div
                                        id="collapseOne"
                                        class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                      >
                                        <div class="accordion-body">
                                          {item.child.map((item) => {
                                            return (
                                              <div
                                                class="accordion"
                                                id="accordionExample"
                                              >
                                                <div class="accordion-item">
                                                  <h2
                                                    class="accordion-header"
                                                    id="headingOne"
                                                  >
                                                    <button
                                                      class="accordion-button"
                                                      type="button"
                                                      data-bs-toggle="collapse"
                                                      data-bs-target="#collapseOne"
                                                      aria-expanded="true"
                                                      aria-controls="collapseOne"
                                                    >
                                                      {item.name}
                                                    </button>
                                                  </h2>
                                                  <div
                                                    id="collapseOne"
                                                    class="accordion-collapse collapse show"
                                                    aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample"
                                                  >
                                                    <div class="accordion-body">
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// fix connect script in latest video
