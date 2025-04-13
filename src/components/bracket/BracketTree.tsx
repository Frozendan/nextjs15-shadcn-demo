import React, { JSX } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Team = {
    id: string;
    name: string;
    score?: number;
};

type Match = {
    id: string;
    team1: Team;
    team2: Team;
    winner?: Team;
};

type Round = {
    round: number;
    matches: Match[];
};

type BracketTreeProps = {
    rounds: Round[];
};

const cardHeight = 120; // Tăng chiều cao card để phù hợp với shadcn card
const cardWidth = 160; // Tăng chiều rộng card
const gapX = 64;
const gapY = 20;

function getTopOffset(round: number, index: number) {
    const spacing = cardHeight + gapY;
    const offset = ((2 ** (round - 1) - 1) * spacing) / 2;

    return index * spacing * 2 ** (round - 1) + offset;
}

export function BracketTree({ rounds }: BracketTreeProps) {
    const svgLines: JSX.Element[] = [];

    // Calculate container height based on the first round (which has the most matches)
    const firstRound = rounds[0];
    const containerHeight = firstRound.matches.length * (cardHeight + gapY) + gapY * 2;

    for (let r = 0; r < rounds.length - 1; r++) {
        const currentRound = rounds[r];
        const nextRound = rounds[r + 1];

        const x1 = r * (cardWidth + gapX) + cardWidth;
        const x2 = (r + 1) * (cardWidth + gapX);

        for (let i = 0; i < nextRound.matches.length; i++) {
            const sourceY1 = getTopOffset(currentRound.round, i * 2) + cardHeight / 2;
            const sourceY2 = getTopOffset(currentRound.round, i * 2 + 1) + cardHeight / 2;
            const midY = (sourceY1 + sourceY2) / 2;
            const midX = x1 + gapX / 2;

            svgLines.push(
                <line
                    key={`ha-${r}-${i}`}
                    x1={x1}
                    y1={sourceY1}
                    x2={midX}
                    y2={sourceY1}
                    stroke='#999'
                    strokeWidth='2'
                />,
                <line
                    key={`hb-${r}-${i}`}
                    x1={x1}
                    y1={sourceY2}
                    x2={midX}
                    y2={sourceY2}
                    stroke='#999'
                    strokeWidth='2'
                />,
                <line
                    key={`v-${r}-${i}`}
                    x1={midX}
                    y1={sourceY1}
                    x2={midX}
                    y2={sourceY2}
                    stroke='#999'
                    strokeWidth='2'
                />,
                <line key={`hc-${r}-${i}`} x1={midX} y1={midY} x2={x2} y2={midY} stroke='#999' strokeWidth='2' />
            );
        }
    }

    return (
        <div className='relative overflow-auto bg-gray-100' style={{ height: containerHeight }}>
            {/* SVG lines */}
            <svg className='pointer-events-none absolute top-0 left-0 h-full w-full'>{svgLines}</svg>

            {/* Match cards */}
            <div className='flex gap-x-16 px-8 py-8'>
                {rounds.map((round, roundIndex) => (
                    <div key={round.round} className='flex min-w-[180px] flex-col items-center'>
                        <div className='mb-4 font-bold'>Round {round.round}</div>
                        {round.matches.map((match, matchIndex) => (
                            <Card
                                key={match.id}
                                className={cn(
                                    'absolute w-[160px]',
                                    match.winner?.id === match.team1.id && 'border-green-500',
                                    match.winner?.id === match.team2.id && 'border-green-500'
                                )}
                                style={{
                                    left: roundIndex * (cardWidth + gapX),
                                    top: getTopOffset(round.round, matchIndex)
                                }}>
                                <CardHeader className='p-3'>
                                    <CardTitle className='text-center text-sm'>Match {match.id}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-3 pt-0'>
                                    <div className='space-y-2'>
                                        <div
                                            className={cn(
                                                'flex items-center justify-between rounded p-1 text-sm',
                                                match.winner?.id === match.team1.id && 'bg-green-50'
                                            )}>
                                            <span>{match.team1.name}</span>
                                            {match.team1.score !== undefined && (
                                                <span className='font-medium'>{match.team1.score}</span>
                                            )}
                                        </div>
                                        <div
                                            className={cn(
                                                'flex items-center justify-between rounded p-1 text-sm',
                                                match.winner?.id === match.team2.id && 'bg-green-50'
                                            )}>
                                            <span>{match.team2.name}</span>
                                            {match.team2.score !== undefined && (
                                                <span className='font-medium'>{match.team2.score}</span>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
