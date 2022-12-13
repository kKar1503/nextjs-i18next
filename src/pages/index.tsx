// ** Next Import
import Link from 'next/link';

// ** MUI Components
import MuiLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

import Translations from '../components/Translations';
import TranslationDropdown from '../components/TranslationDropdown';
import { useTranslation } from 'react-i18next';

const Login = () => {
  return (
    <>
      <Box
        sx={{
          p: 7,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <form
          noValidate
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormControl fullWidth>
            <InputLabel htmlFor="username">
              <Translations text="Username" />
            </InputLabel>
            <OutlinedInput />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">
              <Translations text="Password" />
            </InputLabel>
            <OutlinedInput />
          </FormControl>
          <Box
            sx={{
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <Link passHref href="#">
              <Typography
                component={MuiLink}
                variant="body2"
                sx={{ color: 'primary.main' }}
              >
                <Translations text="Forgot Password?" />
              </Typography>
            </Link>
          </Box>
          <Button
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            sx={{ mb: 7 }}
          >
            <Translations text="Login" />
          </Button>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ mr: 2, color: 'text.secondary' }}>
              <Translations text="New on our platform?" />
            </Typography>
            <Typography>
              <Link passHref href="#">
                <Typography component={MuiLink} sx={{ color: 'primary.main' }}>
                  <Translations text="Register an account" />
                </Typography>
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
      <Box
        sx={{
          p: 7,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <TranslationDropdown />
      </Box>
    </>
  );
};

export default Login;
