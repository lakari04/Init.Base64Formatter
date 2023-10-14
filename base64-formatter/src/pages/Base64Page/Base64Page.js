import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Base64 } from "js-base64";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Base64Page() {
  const [isChecked, setisChecked] = useState(false);

  const [radioValue, setRadioValue] = useState("1");
  const [radioText, setRadioText] = useState("Decode");
  let decodeInput = (text) => {};

  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const radios = [
    { name: "Decode", value: "1" },
    { name: "Encode", value: "2" },
  ];

  const [state, setState] = useState(false);
// useEffect(() => {
//   if({radioText.name} === "Decode"){
//     console.log("Decode" + {radioText.name})
//   }
//   if({radioText.name} === "Encode"){
//     console.log("Encode" + {radioText.name})
//   }

//   return () => {
//   }
// }, [radioValue])

  const handleInputChange = (e) => {

    console.log("length:" + e.currentTarget.value.length);
    console.log("length Exceeded:" + e.currentTarget.value.length === 0);

    console.log("isChecked: " + {isChecked} );
    console.log("radioValue: " + {radioValue} );
    console.log("radioText: " + {radioText} );
    setResultValue(Base64.encode(e.currentTarget.value));
  };

  const handleRadioChange= (e) => {
    
    setRadioValue(e.currentTarget.value);
    setRadioText(e.currentTarget.name);
  };

  return (
    <>
      <Form.Group>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-success"}
              name={radio.name}
              value={radio.value}
              isChecked={radioValue === radio.value}
              onChange={handleRadioChange}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>{radioText}</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          placeholder="Type or paste here..."
          onChange={handleInputChange}
        />
        <Form.Label>{radioText}d result</Form.Label>
        <Form.Control as="textarea" rows={8} value={resultValue}>
          {" "}
        </Form.Control>
      </Form.Group>
      <div style={{ padding: 20 }}>
        <CopyToClipboard
          text={resultValue}
          onCopy={() => setState(true)}
        >
          <Button>
            Copy to clipboard
          </Button>
        </CopyToClipboard>
      </div>
    </>
  );
}
export default Base64Page;
