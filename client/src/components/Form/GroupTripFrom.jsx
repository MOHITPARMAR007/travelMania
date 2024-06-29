import React from 'react';
import {
  Box,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

const GroupTripForm = () => {
  const validationSchema = Yup.object().shape({
    tripPostBy: Yup.string().required('Trip post by is required'),
    description: Yup.string().required('Description is required'),
    destination: Yup.string().required('Destination is required'),
    ContactNumber: Yup.string().required('Contact number is required'),
    startDate: Yup.date().required('Start date is required'),
    endDate: Yup.date().required('End date is required'),
    groupMembers: Yup.array().of(
      Yup.object().shape({
        userId: Yup.string().required('User ID is required'),
        details: Yup.object().shape({
          numberOfMembers: Yup.number().required('Number of members is required'),
          NumberOfMales: Yup.number().required('Number of males is required'),
          NumberOfFemales: Yup.number().required('Number of females is required'),
        }),
        personalId: Yup.string().required('Personal ID is required'),
      })
    ).required('Group members are required'),
    createdBy: Yup.string().required('Created by user ID is required'),
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
    // Format data according to your API requirements
    const formattedData = {
      tripPostBy: data.tripPostBy,
      description: data.description,
      destination: data.destination,
      contactNumber: data.ContactNumber,
      startDate: data.startDate,
      endDate: data.endDate,
      groupMembers: data.groupMembers,
      createdBy: data.createdBy,
    };

    // Send data to API using axios
    axios
      .post("http://localhost:5000/api/grouptrips", formattedData)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box 
      sx={{
        width: '100%',
        maxWidth: '1000px',
        m: 'auto',
        p: '2rem',
        marginTop: '50px',
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
        <h1 style={{textAlign:'center', fontWeight: 'bold'}}>POST~A~TRIP</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              name="tripPostBy"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Trip post by"
                  type="string"
                  fullWidth
                  error={!!errors.tripPostBy}
                  helperText={errors.tripPostBy?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  type="string"
                  fullWidth
                  error={!!errors.description}
                  helperText={errors.description?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="ContactNumber"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Contact Number"
                  type="string"
                  fullWidth
                  error={!!errors.ContactNumber}
                  helperText={errors.ContactNumber?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="NumberOfMales"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Number Of Males in the trip"
                  type="number"
                  fullWidth
                  error={!!errors.NumberOfMales}
                  helperText={errors.NumberOfMales?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="NumberOfFemales"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Number Of Females in the trip"
                  type="number"
                  fullWidth
                  error={!!errors.NumberOfFemales}
                  helperText={errors.NumberOfFemales?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="destination"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Destination"
                  type="string"
                  fullWidth
                  error={!!errors.destination}
                  helperText={errors.destination?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Start Date"
                  type="date"
                  fullWidth
                  error={!!errors.startDate}
                  helperText={errors.startDate?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="End Date"
                  type="date"
                  fullWidth
                  error={!!errors.endDate}
                  helperText={errors.endDate?.message}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="createdBy"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Created By"
                  type="string"
                  fullWidth
                  error={!!errors.createdBy}
                  helperText={errors.createdBy?.message}
                />
              )}
            />
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
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

export default GroupTripForm;
