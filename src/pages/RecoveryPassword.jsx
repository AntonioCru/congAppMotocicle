import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import '../components/pageSections/recoveryPassword/recoveryPassword.css'

import imgRecoveryPass from '../images/recoveryPassword.png'
import {
	FormControl,
	IconButton,
	Input,
	InputAdornment,
	InputLabel,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Button from '@mui/material/Button'

import { styled } from '@mui/material/styles'
import { teal } from '@mui/material/colors'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { PostServiceGeneric } from '../services/postGenericService'

export default function RecoveryPassword() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	// eslint-disable-next-line no-undef
	const EXPO_PUBLIC_URL_ALLSERVICES = process.env.EXPO_PUBLIC_URL_ALLSERVICES

	const [showPassword, setShowPassword] = useState(false)
	const [tokeFromUrl, setTokeFromUrl] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [open, setOpen] = useState({
		isOpen: false,
		message: '',
		isError: false,
	})

	useEffect(() => {
		// eslint-disable-next-line no-undef
		const urlParams = new URLSearchParams(window.location.search)
		const fetchTokenFromUrl = urlParams.get('token')
		setTokeFromUrl(fetchTokenFromUrl)
	}, [])

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = event => {
		event.preventDefault()
	}

	const handleMouseUpPassword = event => {
		event.preventDefault()
	}

	const handleClose = () => {
		setOpen({ isOpen: false, message: '', isError: false })
	}

	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText(teal[400]),
		backgroundColor: teal[400],
		width: '100%',
		maxWidth: '501px',
		borderRadius: '10px',
		'&:hover': {
			backgroundColor: teal[600],
		},
	}))

	const validatePasswords = (value, context) => {
		if (value !== context.firstPass) {
			return 'Las contraseñas no coinciden'
		}
		return true
	}
	const onSubmit = data => {
		setIsLoading(true)
		const payload = {
			url: EXPO_PUBLIC_URL_ALLSERVICES,
			methodUrl: 'auth/change-password',
			data: {
				token: tokeFromUrl,
				newPassword: data.secondPass,
			},
		}
		PostServiceGeneric(payload)
			.then(res => {
				if (res.status === 200) {
					setIsLoading(false)
					setOpen({
						isOpen: true,
						message: 'La contraseña se actualizó',
						isError: false,
					})
				}
			})
			.catch(e => {
				if (e.status === 401) {
					setIsLoading(false)
					setOpen({
						isOpen: true,
						message: 'Reintente enviar el correo',
						isError: true,
					})
				}
			})
	}

	return (
		<div className='containerAll'>
			<div className='containerImg'>
				<img src={imgRecoveryPass} alt='recoveryPass' />
			</div>
			<h1 className='containerTitle'>Actualizar Contraseña</h1>

			<form onSubmit={handleSubmit(onSubmit)} className='formContainer'>
				<FormControl
					sx={{
						width: '100%',
						maxWidth: '500px',
					}}
					variant='standard'>
					<InputLabel htmlFor='standard-adornment-password'>
						Contraseña
					</InputLabel>
					<Input
						{...register('firstPass', { required: 'Escribe una contraseña' })}
						id='standard-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label={
										showPassword ? 'hide the password' : 'display the password'
									}
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{errors.firstPass && (
						<span className='messageError'>{errors.firstPass.message}</span>
					)}
				</FormControl>
				<FormControl
					sx={{ width: '100%', maxWidth: '500px', marginTop: '1.5rem' }}
					variant='standard'>
					<InputLabel htmlFor='standard-adornment-password'>
						Confirma la Contraseña
					</InputLabel>
					<Input
						{...register('secondPass', {
							required: 'Escribe una contraseña',
							validate: value => validatePasswords(value, watch()),
						})}
						id='standard-adornment-password'
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label={
										showPassword ? 'hide the password' : 'display the password'
									}
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									onMouseUp={handleMouseUpPassword}>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					{errors.secondPass && (
						<span className='messageError'>{errors.secondPass.message}</span>
					)}
				</FormControl>
				<div className='containerButtonSend'>
					<ColorButton variant='contained' type='submit' loading={isLoading}>
						Actualizar
					</ColorButton>
				</div>
			</form>

			{open.isOpen && (
				<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity={open.isError ? 'error' : 'success'}
						variant='filled'
						sx={{ width: '100%' }}>
						{open.message}
					</Alert>
				</Snackbar>
			)}
		</div>
	)
}
