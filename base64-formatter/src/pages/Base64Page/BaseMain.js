import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DecodeBase64 from "../../components/DecodeBase64";
import EncodeBase64 from "../../components/EncodeBase64";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";

function BaseMain() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("0");
  const [radioText, setRadioText] = useState("Decode");
  const [isDecode, setIsDecode] = useState(true);

  const [resultValue, setResultValue] = useState("");
  const [state, setState] = useState(false);

  const radios = [
    { name: "Decode", value: "0" },
    { name: "Encode", value: "1" },
  ];

  //callback function
let getResult = (result) => {
  setResultValue(result);
}

  const handleRadioChange = (e) => {
    setRadioValue(e.currentTarget.value);
    setRadioText(e.currentTarget.name);
    if (radioText === "Decode") {
      console.log("RadioText1:" + radioText);
      setIsDecode(true);
    } else if (radioText === "Encode") {
      console.log("RadioText2:" + { radioText });
      setIsDecode(false);
    }
  };

  return (
    <>
      <Form.Group style={{ top: 0 }}>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-success" : "outline-success"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={handleRadioChange}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Form.Group>
      <div>
        {radioValue === "0" ? (
          <DecodeBase64 someValue={{radioText}} getResult={getResult} />
        ) : (
          <EncodeBase64 someValue={{radioText}} getResult={getResult} />
        )}
      </div>
      <div style={{ padding: 20 }}>
        <CopyToClipboard text={resultValue} onCopy={() => setState(true)}>
          <Button>Copy to clipboard</Button>
        </CopyToClipboard>
      </div>
    </>
  );
}

export default BaseMain;
