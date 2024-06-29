import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const RenterForm = () => {
  const [selectedHours, setSelectedHours] = useState([]);
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    city: Yup.string().required('City is required'),
    email: Yup.string()
     .email('Invalid email address')
     .required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    description: Yup.string().required('Description is required'),
    hourlyRate: Yup.number().required('Hourly rate is required'),
    availableHours: Yup.array()
     .of(Yup.string())
     .min(1, 'At least one available hour is required')
     .required('Available hours are required'),
    imageUrl: Yup.string().required('Image URL is required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        m: 'auto',
        p: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        transition: 'box-shadow 0.3s',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
      }}
    >

      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{textAlign:'center',textDecoration : 'bold'}}>RENT-A-FRIEND</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="City"
                  fullWidth
                  error={!!errors.city}
                  helperText={errors.city?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Phone"
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={1}
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="hourlyRate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Hourly Rate"
                  type="number"
                  fullWidth
                  error={!!errors.hourlyRate}
                  helperText={errors.hourlyRate?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="availableHours"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="availableHours-label">Available Hours</InputLabel>
                  <Select
                    labelId="availableHours-label"
                    {...field}
                    multiple
                    label="Available Hours"
                    value={selectedHours}
                    onChange={(e) => setSelectedHours(e.target.value)}
                    error={!!errors.availableHours}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    <MenuItem value="9:00am-10:00am">9:00am-10:00am</MenuItem>
                    <MenuItem value="10:00am-11:00am">10:00am-11:00am</MenuItem>
                    <MenuItem value="11:00am-12:00pm">11:00am-12:00pm</MenuItem>
                    <MenuItem value="12:00pm-1:00pm">12:00pm-1:00pm</MenuItem>
                    <MenuItem value="1:00pm-2:00pm">1:00pm-2:00pm</MenuItem>
                    <MenuItem value="2:00pm-3:00pm">2:00pm-3:00pm</MenuItem>
                    <MenuItem value="3:00pm-4:00pm">3:00pm-4:00pm</MenuItem>
                    <MenuItem value="4:00pm-5:00pm">4:00pm-5:00pm</MenuItem>
                    <MenuItem value="5:00pm-6:00pm">5:00pm-6:00pm</MenuItem>
                  </Select>
                  <FormHelperText error>{errors.availableHours?.message}</FormHelperText>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="imageUrl"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Image URL"
                  fullWidth
                  error={!!errors.imageUrl}
                  helperText={errors.imageUrl?.message}
                />
              )}
            />
          </Grid>
          {/* Add more fields here */}
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12} sm={6}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: '#4168b5',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#568ed1',
                },
                width: '100%',
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RenterForm;
