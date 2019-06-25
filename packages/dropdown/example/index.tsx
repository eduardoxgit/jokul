import React from "react";
import ReactDOM from "react-dom";
import Downshift from "downshift";
import "../dropdown.scss";

// Eslint do not understand how Downshift sets keys and label controls as its packed into the render props
/* eslint-disable jsx-a11y/label-has-associated-control, react/jsx-key */
const App = () => {
    const items = ["Frem", "Tind", "Fremtind", "Jøkkkul"];

    return (
        <Downshift>
            {({
                getInputProps,
                getToggleButtonProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                highlightedIndex,
                inputValue,
                getItemProps,
            }) => (
                <div className={`jkl-dropdown ${isOpen ? "jkl-dropdown--open" : ""}`} {...getInputProps()}>
                    <button className="jkl-dropdown__toggler" {...getToggleButtonProps()}>
                        {isOpen ? "Lukk" : "Åpne"}
                    </button>
                    <label
                        className={`jkl-dropdown__label ${inputValue ? "jkl-dropdown__label--raised" : ""}`}
                        {...getLabelProps()}
                    >
                        Velg
                    </label>
                    <span className={`jkl-dropdown__value ${inputValue ? "jkl-dropdown__value--show" : ""}`}>
                        {inputValue}
                    </span>

                    <ul className="jkl-dropdown__option" {...getMenuProps()}>
                        {isOpen
                            ? items.map((item, index) => (
                                  <li
                                      className={`jkl-dropdown__option--item ${
                                          highlightedIndex === index ? "jkl-dropdown__option--item--highlighted" : ""
                                      } ${inputValue === item ? "jkl-dropdown__option--item--selected" : ""}`}
                                      {...getItemProps({
                                          key: item,
                                          index,
                                          item,
                                      })}
                                  >
                                      {item}
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            )}
        </Downshift>
    );
};
/* eslint-enable jsx-a11y/label-has-associated-control, react/jsx-key */

ReactDOM.render(<App />, document.getElementById("app"));
