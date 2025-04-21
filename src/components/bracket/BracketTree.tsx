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

const cardHeight = 90;
const cardWidth = 160;
const gapX = 64;
const gapY = 30;

function getTopOffset(round: number, index: number) {
    const spacing = cardHeight + gapY;
    const offset = ((2 ** (round - 1) - 1) * spacing) / 2;

    return index * spacing * 2 ** (round - 1) + offset;
}

export function BracketTree({ rounds }: BracketTreeProps) {
    const svgLines: JSX.Element[] = [];

    const firstRound = rounds[0];
    const containerHeight = firstRound.matches.length * (cardHeight + gapY) + gapY * 2;

    for (let r = 0; r < rounds.length - 1; r++) {
        const currentRound = rounds[r];
        const nextRound = rounds[r + 1];

        const x1 = r * (cardWidth + gapX) + cardWidth;
        const x2 = (r + 1) * (cardWidth + gapX);
        const verticalOffset = 30;

        for (let i = 0; i < nextRound.matches.length; i++) {
            const sourceY1 = getTopOffset(currentRound.round, i * 2) + cardHeight / 2 + verticalOffset;
            const sourceY2 = getTopOffset(currentRound.round, i * 2 + 1) + cardHeight / 2 + verticalOffset;
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
        <div className='relative flex w-full overflow-auto py-8' style={{ height: containerHeight }}>
            {rounds.map((round, roundIndex) => {
                return (
                    <div key={`round-${round.round}`} className='relative flex-1'>
                        <div key={`title-${round.round}`} className='mb-4 text-center font-bold'>
                            Round {round.round}
                        </div>
                        {round.matches.map((match, matchIndex) => (
                            <div key={`match-${match.id}`} className='relative'>
                                <div
                                    style={{
                                        height: '1px',
                                        border: '1px solid #999',
                                        width:
                                            roundIndex === 0 || roundIndex === rounds.length - 1 ? cardWidth : '100%',
                                        position: 'absolute',
                                        right: roundIndex === rounds.length - 1 ? 'auto' : '0',
                                        left: roundIndex === rounds.length - 1 ? '0' : 'auto',
                                        top: getTopOffset(round.round, matchIndex) + cardHeight / 2
                                    }}></div>
                                {matchIndex % 2 === 1 && (
                                    <div
                                        style={{
                                            width: '1px',
                                            border: '1px solid #999',
                                            height:
                                                getTopOffset(round.round, matchIndex) -
                                                getTopOffset(round.round, matchIndex - 1),
                                            position: 'absolute',
                                            top: getTopOffset(round.round, matchIndex - 1) + cardHeight / 2,
                                            right: '0'
                                        }}></div>
                                )}
                                <Card
                                    key={match.id}
                                    className={cn(
                                        'absolute left-1/2 w-[80%] -translate-x-1/2',
                                        match.winner?.id === match.team1.id && 'border-green-500',
                                        match.winner?.id === match.team2.id && 'border-green-500'
                                    )}
                                    style={{
                                        top: getTopOffset(round.round, matchIndex)
                                    }}>
                                    <CardContent className='p-3'>
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
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
