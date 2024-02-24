import { FC } from "react";
import { Container } from "./styles";
import NewTagProps from "./NewTagProps";
import { FiPlus, FiX } from "react-icons/fi";

export const NewTag: FC<NewTagProps> = ({ $isNew, value, onClick, ...props }) => {
  return (
    <Container $isNew={$isNew}>
      <input
        type="text"
        value={value}
        readOnly={!$isNew}
        {...props}
      />
      <button
        type="button"
        onClick={onClick}
        aria-label={$isNew ? "Adicionar marcador" : "Remover marcador"}
      >
        {$isNew ? <FiPlus {...props} /> : <FiX {...props} />}
      </button>
    </Container>
  );
};

NewTag.defaultProps = {
  $isNew: false,
};

export default NewTag;