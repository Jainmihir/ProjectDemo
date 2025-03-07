import React, { useState } from "react";
import './Nre.css';

const Nre: React.FC = () => {
  const [availableNames, setAvailableNames] = useState<string[]>([
    "John Doe",
    "Jane Smith",
    "Michael Brown",
    "Sarah White",
    "Chris Green",
  ]);
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [selectedRadio, setSelectedRadio] = useState<string>("sendWith");

  const moveRight = () => {
    const selectedOptions = document.querySelectorAll<HTMLSelectElement>(
      "#availableNames option:checked"
    );
    const newSelected = Array.from(selectedOptions).map((opt) => (opt as unknown as HTMLOptionElement).value);
  
    setSelectedNames([...selectedNames, ...newSelected]);
    setAvailableNames(availableNames.filter((name) => !newSelected.includes(name)));
  };
  
  const moveLeft = () => {
    const selectedOptions = document.querySelectorAll<HTMLSelectElement>(
      "#selectedNames option:checked"
    );
    const newAvailable = Array.from(selectedOptions).map((opt) => (opt as unknown as HTMLOptionElement).value);
  
    setAvailableNames([...availableNames, ...newAvailable]);
    setSelectedNames(selectedNames.filter((name) => !newAvailable.includes(name)));
  };
  

  return (
    <div className="container">
      {/* Select Options */}
      <div className="selection-group">
        <label>Select:</label>
        <label>
          <input
            type="radio"
            name="send_option"
            value="sendWithout"
            checked={selectedRadio === "sendWithout"}
            onChange={() => setSelectedRadio("sendWithout")}
          />
          Send without
        </label>
        <label>
          <input
            type="radio"
            name="send_option"
            value="sendWith"
            checked={selectedRadio === "sendWith"}
            onChange={() => setSelectedRadio("sendWith")}
          />
          Send with
        </label>
      </div>

      {/* Name Selection */}
      <div className="selection-container">
        <label>Select media :</label>
        <div className="list-box">
          <label>Available Names:</label>
          <select id="availableNames" multiple>
            {availableNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="buttons">
          <button onClick={moveRight}>→</button>
          <button onClick={moveLeft}>←</button>
        </div>

        <div className="list-box">
          <label>Selected Names:</label>
          <select id="selectedNames" multiple>
            {selectedNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Select List */}
      <div className="selection-group">
        <label>Select List:</label>
        <label>
          <input type="radio" name="list_option" />
          Option 1
        </label>
        <label>
          <input type="radio" name="list_option" />
          Option 2
        </label>
      </div>

      {/* Template Section */}
      <div className="selection-group">
        <label>Template:</label>
        <label>
          <input type="radio" name="template_option" />
          Template 1
        </label>
        <label>
          <input type="radio" name="template_option" />
          Template 2
        </label>
        <label>
          <input type="radio" name="template_option" />
          Template 3
        </label>
      </div>
    </div>
  );
};

export default Nre;
