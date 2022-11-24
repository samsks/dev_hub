import { iOptionsData } from "../../../data/optionsData";
import { HeadlineText } from "../../../styles/typography";
import { S_SelectStyled } from "./style";

interface iSelectModuleProps {
  label: string;
  register: () => void | object;
  optionList: iOptionsData[];
  defaultValue?: string | number | readonly string[] | undefined;
}

const SelectModule = ({
  register,
  optionList,
  label,
  defaultValue,
}: iSelectModuleProps) => {
  return (
    <S_SelectStyled>
      <HeadlineText tag="label">{label}</HeadlineText>
      <select {...register()} defaultValue={defaultValue && defaultValue}>
        {optionList.map(({ value, text }, i: number) => (
          <option key={i} value={value}>
            {text}
          </option>
        ))}
      </select>
    </S_SelectStyled>
  );
};

export default SelectModule;
