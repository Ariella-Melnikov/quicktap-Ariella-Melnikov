
import { Button, ButtonProps, styled } from '@mui/material'

const SecondaryButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: '#FFFFFF',
  color: '#212121',
  border: '1px solid #BCBDBB',
  borderRadius: '8px',
  padding: '12px 24px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '22px',
  '&:hover': {
    backgroundColor: '#F5F5F5',
  },
}))

export default SecondaryButton