
interface BaseField {
  id: string;
  name: string;
  defaultValue?: string;
  public: boolean;
}

interface OptionField {
  id?: string;
  label: string;
  value: string;
}

interface ButtonGroupField extends BaseField {
  type: 'button_group'
  value?: string
  options: OptionField[]
}

interface SelectField extends BaseField {
  type: 'select';
  value?: string;
  options: OptionField[];
}

interface BooleanField extends BaseField  {
  type: 'boolean';
  value?: boolean;
}

interface Heading {
  type: 'heading';
  value: string;
}

type Field = SelectField | BooleanField | ButtonGroupField;

type ConfigurationOption = Heading | Field;

type ConfigurationOptions = Record<string, ConfigurationOption>;

type Pipeable = (input: string, options: ConfigurationOptions) => Promise<string>;

type PipeCreator = () => Pipeable;

