import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startGame } from '../../services/user.service';
import PageTitle from '../../components/ui/PageTitle';
import { StyledContainer, SigninBox, FormRow, StyledTextField } from './HomePage.styled';
import PrimaryButton from '../../components/ui/PrimaryButton';
import TextLabel from '../../components/ui/TextLabel';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleStart = async () => {
    try {
      await startGame(username);
      navigate('/game');
    } catch (err) {
      console.error('Failed to start game:', err);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <PageTitle>Welcome to mavens Game</PageTitle>

      <SigninBox>
      <TextLabel>Enter player name</TextLabel>

        <FormRow>
          <StyledTextField
            id="player-name"
            variant="outlined"
            fullWidth
            placeholder="Input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PrimaryButton onClick={handleStart}>Start game</PrimaryButton>
        </FormRow>
      </SigninBox>
    </StyledContainer>
  );
};

export default HomePage;