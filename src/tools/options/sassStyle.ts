export const sassStyle : ConfigurationOption = {
  id: 'style',
  name: 'Style',
  type: 'select',
  public: true,
  value: 'expanded',
  options: [
    {
      label: 'Nested',
      value: 'nested',
    },
    {
      label: 'Expanded',
      value: 'expanded',
    },
    {
      label: 'Compact',
      value: 'compact',
    },
    {
      label: 'Compress',
      value: 'compress',
    }
  ]
};