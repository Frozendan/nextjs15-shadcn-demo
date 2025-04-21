'use client';

import React, { JSX, useState } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    const firstRound = rounds[0];
    const containerHeight = firstRound.matches.length * (cardHeight + gapY) + gapY * 2;
    const [startColumnIndex, setStartColumnIndex] = useState(0);

    const columnsToShow = 2; // Number of columns to show at once
    const maxStartIndex = Math.max(0, rounds.length - columnsToShow);

    const handleNext = () => {
        setStartColumnIndex((prev) => Math.min(prev + 1, maxStartIndex));
    };

    const handlePrevious = () => {
        setStartColumnIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className='relative w-full'>
            <div className='mt-4 flex justify-between'>
                <Button
                    variant='outline'
                    onClick={handlePrevious}
                    disabled={startColumnIndex === 0}
                    className='flex items-center'>
                    <ChevronLeft className='mr-1 h-4 w-4' /> Previous
                </Button>
                <Button
                    variant='outline'
                    onClick={handleNext}
                    disabled={startColumnIndex >= maxStartIndex}
                    className='flex items-center'>
                    Next <ChevronRight className='ml-1 h-4 w-4' />
                </Button>
            </div>
            <div
                className='relative flex w-full snap-x snap-mandatory py-8'
                style={{
                    height: containerHeight,
                    transform: `translateX(-${startColumnIndex * (100 / columnsToShow)}%)`,
                    transition: 'transform 0.3s ease'
                }}>
                {rounds.map((round, roundIndex) => {
                    return (
                        <div
                            key={`round-${round.round}`}
                            className={cn('relative flex-none', 'w-1/2 md:w-1/3 lg:w-1/5')}>
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
                                                roundIndex === 0 || roundIndex === rounds.length - 1
                                                    ? cardWidth
                                                    : '100%',
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
        </div>
    );
}
