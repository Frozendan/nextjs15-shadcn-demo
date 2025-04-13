import { BracketTree } from './bracket/BracketTree';

export function BracketDemo() {
    const rounds = [
        {
            round: 1,
            matches: [
                {
                    id: 'm1-1',
                    team1: { id: 't1', name: 'Team 1', score: 2 },
                    team2: { id: 't2', name: 'Team 2', score: 1 },
                    winner: { id: 't1', name: 'Team 1' }
                },
                {
                    id: 'm1-2',
                    team1: { id: 't3', name: 'Team 3', score: 3 },
                    team2: { id: 't4', name: 'Team 4', score: 0 },
                    winner: { id: 't3', name: 'Team 3' }
                },
                {
                    id: 'm1-3',
                    team1: { id: 't5', name: 'Team 5', score: 1 },
                    team2: { id: 't6', name: 'Team 6', score: 2 },
                    winner: { id: 't6', name: 'Team 6' }
                },
                {
                    id: 'm1-4',
                    team1: { id: 't7', name: 'Team 7', score: 0 },
                    team2: { id: 't8', name: 'Team 8', score: 3 },
                    winner: { id: 't8', name: 'Team 8' }
                }
            ]
        },
        {
            round: 2,
            matches: [
                {
                    id: 'm2-1',
                    team1: { id: 't1', name: 'Team 1', score: 2 },
                    team2: { id: 't3', name: 'Team 3', score: 1 },
                    winner: { id: 't1', name: 'Team 1' }
                },
                {
                    id: 'm2-2',
                    team1: { id: 't6', name: 'Team 6', score: 0 },
                    team2: { id: 't8', name: 'Team 8', score: 2 },
                    winner: { id: 't8', name: 'Team 8' }
                }
            ]
        },
        {
            round: 3,
            matches: [
                {
                    id: 'm3-1',
                    team1: { id: 't1', name: 'Team 1', score: 1 },
                    team2: { id: 't8', name: 'Team 8', score: 3 },
                    winner: { id: 't8', name: 'Team 8' }
                }
            ]
        }
    ];

    return <BracketTree rounds={rounds} />;
}
