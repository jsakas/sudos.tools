import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { languageNameMap } from '@src/languages';
import React, { useState } from 'react';
import { MonacoDiffEditor } from 'react-monaco-editor';

type DiffPageProps = {
  language: monacoLanguages;
}

const DiffPage : React.FC<DiffPageProps> = (props: DiffPageProps) => {
  const { language } = props;
  const theme = useTheme();
  const [error] = useState<Error>();

  const seo = {
    title: `${languageNameMap[language]} Diff Tool`,
    description: `Use this tool to check the difference in your ${languageNameMap[language]}`,
  };

  return (
    <>
      <Typography variant="h3" component="h1">
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
      <Divider style={{ margin: theme.spacing(2, 0) }} />

      {error && (
        <Alert severity="error" style={{ margin: theme.spacing(2, 0) }}>{error.message}</Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <MonacoDiffEditor
            theme="vs-light"
            options={{
              minimap: {
                enabled: false,
              },
              originalEditable: true,
            }}
            original=''
            defaultValue=''
            width="100%"
            height={500}
            language={language}
          />
        </Grid>
      </Grid>
    </>
  );
};

DiffPage.defaultProps = {
  language: 'json'
};

export default DiffPage;