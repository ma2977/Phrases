import Button from "../Button/Button";
import "./ChangePhraseButton.css";

function ChangePhraseButton(props) {
  const { changePhrase } = props;

  return (
    <div className="btn_container">
      <Button handlerClick={changePhrase} />
    </div>
  );
}

export default ChangePhraseButton;
