// components/ui/ToastMessage.tsx
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';

interface Props {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

const SUCCESS_MESSAGES = [
  'Good job!',
  'Success!',
  'Woohoo!',
  'Well done!',
  'Nice reflexes!',
];

const ToastMessage = ({ type, message, onClose }: Props) => {
  const successMsg =
    type === 'success'
      ? SUCCESS_MESSAGES[Math.floor(Math.random() * SUCCESS_MESSAGES.length)]
      : message;

  return (
    <StyledToast $type={type} onAnimationEnd={onClose}>
      <LeftIconBox>
        {type === 'success' && <CheckCircleIcon fontSize="small" />}
      </LeftIconBox>

      <MessageText>{successMsg}</MessageText>

      <StyledCloseButton onClick={onClose}>
        <CloseIcon fontSize="small" />
      </StyledCloseButton>
    </StyledToast>
  );
};

export default ToastMessage;

const StyledToast = styled.div<{ $type: 'success' | 'error' }>`
  width: 533px;
  min-height: 44px;
  padding: 12px;
  border-radius: ${({ theme }) => theme.baseTheme.borderRadius.lg};
  background-color: ${({ theme }) => theme.baseTheme.colors.white};
  border: 1px solid #BCBDBB;
  box-shadow: ${({ theme }) => theme.baseTheme.shadows.droplight};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${({ theme }) => theme.baseTheme.spacingValues.sm};

  position: absolute;
  bottom: ${({ theme }) => theme.baseTheme.spacingValues.sm2};
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  color: ${({ $type, theme }) =>
    $type === 'success'
      ? theme.baseTheme.colors.info.green
      : theme.baseTheme.colors.gray};

  font-family: ${({ theme }) => theme.baseTheme.fonts.primary};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.baseTheme.fontWeights.semiBold};
  line-height: 18px;
  text-align: left;

  svg {
    color: inherit;
  }
`;

const LeftIconBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const MessageText = styled.div`
  flex: 1;
`;

const StyledCloseButton = styled(IconButton)`
  padding: 0;
  font-weight: ${({ theme }) => theme.baseTheme.fontWeights.regular};
  font-size: 14px;
  min-width: 20px;
  min-height: 20px;

  svg {
    color: inherit;
    font-size: 16px;
  }
`
