import { useEffect, useState } from 'react';
import { getLeaderboard } from '../../services/leaderboard.service';
import { TableHead, TableRow, TableBody } from '@mui/material';
import {
  LeaderboardWrapper,
  StyledTableContainer,
  StyledTable,
  HeaderCell,
  BodyRow,
  BodyCell,
  CrownWrapper,
} from './LeaderboardPage.styled';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import crownIcon from '../../assets/icons/crown.svg';
import PageTitle from '../../components/ui/PageTitle';

interface LeaderboardEntry {
    userId: string
    username: string
    score: number
}

const LeaderboardPage = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        async function loadData() {
            const data = await getLeaderboard()
            setLeaderboard(data.sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score))
        }
        loadData()
    }, [])

    const getOrdinal = (n: number) => {
        const s = ['th', 'st', 'nd', 'rd']
        const v = n % 100
        return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`
    }

    return (
        <LeaderboardWrapper>
          <PageTitle>HIGHSCORES TABLE</PageTitle>
    
          <StyledTableContainer>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <HeaderCell>POS</HeaderCell>
                  <HeaderCell>Player Name</HeaderCell>
                  <HeaderCell>Score</HeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboard.map((player, index) => (
                  <BodyRow key={player.userId} isTop={index === 0} isLast={index === leaderboard.length - 1}>
                    <BodyCell>
                      <CrownWrapper>
                        {index === 0 && <img src={crownIcon} alt="crown" width={28} height={28} />}
                        {getOrdinal(index + 1)}
                      </CrownWrapper>
                    </BodyCell>
                    <BodyCell>{player.username}</BodyCell>
                    <BodyCell>{player.score}</BodyCell>
                  </BodyRow>
                ))}
              </TableBody>
            </StyledTable>
          </StyledTableContainer>

            <PrimaryButton onClick={() => navigate('/game')}>Restart game</PrimaryButton>
        </LeaderboardWrapper>
      );
    };
    
    export default LeaderboardPage;
