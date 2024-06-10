import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './SizeAvatars.css';

export default function SizeAvatars() {
  return (
    <section className='sizeAvatars'>
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src="/avatar.jpg"
        sx={{ width: 200, height: 200 }}
      />
    </Stack>
    </section>
  );
}
