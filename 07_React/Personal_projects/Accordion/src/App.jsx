import { useState } from 'react';
import './App.css';
import data from './data';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
    else cpyMutiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMutiple);
  }

  function toggleMultiSelection() {
    const newValue = !enableMultiSelection;
    setEnableMultiSelection(newValue);
    newValue ? toast.success("MultiSelection: Enabled") : toast.error("MultiSelection: Disabled");
  }

  return (
    <>
      <div className="wrapper">
        <button 
          className={enableMultiSelection ? 'active' : ''} 
          onClick={toggleMultiSelection}
        >
          {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
        </button>
        <div className="accordion">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="acc-content">{dataItem.answer}</div>
                    )}
              </div>
            ))
          ) : (
            <div>No data found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
