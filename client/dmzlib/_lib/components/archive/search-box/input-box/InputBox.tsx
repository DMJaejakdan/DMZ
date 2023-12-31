import Input from '#/components/common/input/Input';
import Spacing from '#/components/common/spacing/Spacing';
import Txt from '#/components/common/txt/Txt';

import { box_base } from '../SearchBox.css';

interface Props {
  title: string;
  placeholder: string;
  value?: string;
  inputId: string;
  inputName: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputBox({
  title,
  inputId,
  inputName,
  placeholder,
  value,
  onInput,
}: Props) {
  return (
    <div className={box_base}>
      <Txt weight="bold" content={title} />
      <Spacing />
      <Input
        inputId={inputId}
        inputName={inputName}
        placeholder={placeholder}
        value={value}
        onInput={onInput}
      />
    </div>
  );
}
export default InputBox;
