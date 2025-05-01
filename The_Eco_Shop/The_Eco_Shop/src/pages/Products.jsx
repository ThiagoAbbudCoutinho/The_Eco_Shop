import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Card, CardContent, Typography } from '@mui/material';

const Products = () => {
    return (
        <>
        <Navbar onMenuClick={() => setOpen(true)} />
            <Box>
                <Card sx={{ mb: .5 }}>
                     <CardContent>
                       <Typography variant="h5">Welcome to The Eco Shop </Typography>
                       <Typography variant="body1">Free deliveries over €100</Typography>
                     <Typography variant="body2">Becoming more eco-conscious is simple when you choose the right products.</Typography>
                     </CardContent>
                </Card>
             </Box>
        <div>
            <h1>Products</h1>
            <p>Welcome to the Products page. Browse our selection of items below.</p>
        </div>
        <Box sx={{textAlign: 'center'}}>
        <Card sx={{ backgroundColor:'rgb(230, 243, 239)' }}>
          <CardContent>
              <Typography variant="body1">🚀 The Eco Revolution is Here</Typography>
              <Typography variant="body2">We believe sustainability should feel exciting, not overwhelming. That’s why we partner with brands leading the way in clean technology, ethical fashion, and waste-free living. Whether it’s clothes made from organic fibers or homeware built to last decades, each choice you make helps shape a future where innovation and nature work together — beautifully.</Typography><br/>
          </CardContent>
        </Card>
      </Box>
        <Footer />
        </>
    );
};

export default Products;