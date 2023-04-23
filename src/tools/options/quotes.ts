export const quotes : ConfigurationOption = {
  id: 'quotes',
  name: 'Quotes',
  type: 'button_group',
  public: true,
  value: 'single',
  options: [
    {
      label: 'Single',
      value: 'single',
    },
    {
      label: 'Double',
      value: 'double',
    },
  ]
};