import { useEffect, useState } from 'react'
import { getLeaderboard } from '../../services/leaderboard.service'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom'
import crownIcon from '../../assets/icons/crown.svg'
import SendIcon from '@mui/icons-material/Send'
import './LeaderboardPage.scss'

interface LeaderboardEntry {
    userId: string
    username: string
    score: number
}

export function LeaderboardPage() {
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
        const s = ['th', 'st', 'nd', 'rd'],
            v = n % 100
        return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`
    }

    return (
        <Box className='score-page'>
            <Typography variant='h3' className='score-title'>
                HIGHSCORES TABLE
            </Typography>

            <TableContainer component={Paper} className='score-table-container'>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>POS</TableCell>
                            <TableCell>Player Name</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leaderboard.map((player, index) => (
                            <TableRow key={player.userId}>
                                <TableCell>
                                    {index === 0 ? (
                                        <span className='first-place'>
                                            <img src={crownIcon} alt='crown' className='crown-icon' />
                                            {getOrdinal(index + 1)}
                                        </span>
                                    ) : (
                                        getOrdinal(index + 1)
                                    )}
                                </TableCell>
                                <TableCell className={index === 0 ? 'first-place' : ''}>{player.username}</TableCell>
                                <TableCell>{player.score}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className='restart-button'>
                <PrimaryButton startIcon={<SendIcon />} onClick={() => navigate('/game')}>
                    Restart Game
                </PrimaryButton>
            </div>
        </Box>
    )
}
