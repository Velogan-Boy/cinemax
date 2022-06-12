import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MobileSearchBar from './MobileSearchBar';

const style = {
   width: '90%',
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   bgcolor: 'background.paper',
   borderRadius: '1rem',
   border: '3px solid #333',
   boxShadow: 24,
   p: 3,
};

export default function SearchModal(props) {
   return (
      <>
         <Modal open={props.isModal} onClose={props.toggleModal}>
            <Box sx={style}>
               <Typography variant="h6" sx={{ mb: 2 }}>
                  Search for Movies 
               </Typography>
               <MobileSearchBar />
            </Box>
         </Modal>
      </>
   );
}
