import { S_defaultInput } from "../../../styles/input";
import { HeadlineText } from "../../../styles/typography";
import { S_inputForm } from "./style";

interface iInputAccessProps {
  register: () => void | object;
  label?: string;
  placeholder?: string | undefined;
  helperText?: any;
  type: string;
  value?: string | undefined;
  disabled?: boolean | undefined;
}

const InputAccess = ({
  register,
  label,
  placeholder,
  helperText,
  type,
  value,
  disabled,
}: iInputAccessProps) => {
  return (
    <S_inputForm>
      <HeadlineText tag="label">
        {label}
        <S_defaultInput
          {...register()}
          type={type}
          placeholder={placeholder && placeholder}
          value={value ? value : undefined}
          disabled={disabled && disabled}
        />
      </HeadlineText>

      <HeadlineText tag="span">{helperText}</HeadlineText>
    </S_inputForm>
  );
};

export default InputAccess;
