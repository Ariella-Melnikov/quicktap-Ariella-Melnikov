import { Button, ButtonProps, styled } from '@mui/material'

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#212121',
  color: '#FFFFFF',
  borderRadius: '8px',
  padding: '12px 24px',
  textTransform: 'none',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '22px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  '&:hover': {
    backgroundColor: '#000000',
  },
}))

export default function PrimaryButton({ children, ...props }: ButtonProps) {
    return <StyledButton {...props}>{children}</StyledButton>
  }