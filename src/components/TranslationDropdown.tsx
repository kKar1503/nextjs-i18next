// ** React Imports
import { SyntheticEvent, useState } from 'react';

// ** MUI Imports
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// ** Third Party Import
import { useTranslation } from 'react-i18next';
import Translations from './Translations';

const LanguageDropdown = () => {
  // ** State
  const [anchorEl, setAnchorEl] = useState<any>(null);

  // ** Hook
  const { i18n } = useTranslation();

  const handleLangDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleLangItemClick = (lang: 'en' | 'cn') => {
    i18n.changeLanguage(lang);
    handleLangDropdownClose();
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={handleLangDropdownOpen}
      >
        <p>Translator</p>
      </IconButton>
      <Menu
        id="language-dropdown"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleLangDropdownClose}
        sx={{ '& .MuiMenu-paper': { mt: 4, minWidth: 130 } }}
      >
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'en'}
          onClick={() => {
            handleLangItemClick('en');
          }}
        >
          <Translations text="English" />
        </MenuItem>
        <MenuItem
          sx={{ py: 2 }}
          selected={i18n.language === 'cn'}
          onClick={() => {
            handleLangItemClick('cn');
          }}
        >
          <Translations text="Chinese" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageDropdown;
