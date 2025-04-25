'use client';

import React, { JSX, useState, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/registry/new-york-v4/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

import { ChevronLeft, ChevronRight } from 'lucide-react';

// Animation configuration
const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30
};

type Team = {
    id: string;
    name: string;
    score?: number;
};

type Match = {
    id: string;
    name?: string;
    team1: Team;
    team2: Team;
    winner?: Team;
};

type Round = {
    round: number;
    roundName?: string;
    matches: Match[];
};

type BracketTreeProps = {
    rounds: Round[];
    columnsToShow?: number;
    accentColor?: string;
    textColor?: string;
};

const cardHeight = 120;
const gapY = 30;

function getTopOffset(round: number, index: number) {
    const spacing = cardHeight + gapY;
    const offset = ((2 ** (round - 1) - 1) * spacing) / 2;

    return index * spacing * 2 ** (round - 1) + offset;
}

const MotionCard = motion.create(Card);

const getTeamBackgroundStyle = (isWinner: boolean, accentColor?: string) => {
    if (!isWinner) return undefined;

    return accentColor ? { backgroundColor: `${accentColor}20` } : undefined;
};

const getTeamTextStyle = (isWinner: boolean, textColor?: string) => {
    if (!isWinner) return undefined;

    return textColor ? { color: textColor } : undefined;
};

const getScoreTextStyle = (isWinner: boolean, textColor?: string) => {
    if (!isWinner && !textColor) return undefined;

    return { color: textColor };
};

const getCardBorderStyle = (match: Match, accentColor?: string) => {
    if (!match.winner) return undefined;

    return accentColor ? { borderColor: accentColor } : undefined;
};

export function BracketTree({ rounds, columnsToShow = 2, accentColor, textColor }: BracketTreeProps) {
    const firstRound = rounds[0];
    const containerHeight = firstRound.matches.length * (cardHeight + gapY) + gapY * 2;
    const [startColumnIndex, setStartColumnIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkIfDesktop = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkIfDesktop();

        window.addEventListener('resize', checkIfDesktop);

        return () => window.removeEventListener('resize', checkIfDesktop);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setStartColumnIndex(0);
        }
    }, [isDesktop]);

    const actualColumnsToShow = isDesktop ? rounds.length : Math.max(1, Math.min(2, columnsToShow));
    const maxStartIndex = Math.max(0, rounds.length - Math.floor(actualColumnsToShow));

    const handleNext = () => {
        setStartColumnIndex((prev) => Math.min(prev + 1, maxStartIndex));
    };

    const handlePrevious = () => {
        setStartColumnIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className='relative w-full'>
            <div className='w-full absolute top-[20px] left-0 z-10 right-0 flex justify-center md:hidden'>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={handlePrevious}
                    disabled={startColumnIndex === 0}
                    className='flex items-center md:hidden absolute left-0 top-0'>
                    <ChevronLeft className='h-4 w-4' />
                </Button>
                <Button
                    variant='outline'
                    size='sm'
                    onClick={handleNext}
                    disabled={startColumnIndex >= maxStartIndex}
                    className='flex items-center md:hidden absolute right-0 top-0'>
                    <ChevronRight className='h-4 w-4' />
                </Button>
            </div>
            <div className="overflow-hidden">
                <motion.div
                    className='relative flex w-full snap-x snap-mandatory py-7'
                    style={{ height: containerHeight }}
                    animate={{
                        x: `-${startColumnIndex * (100 / actualColumnsToShow)}%`
                    }}
                    transition={springTransition}
                    onPanEnd={(e, { offset }) => {
                        // Only handle swipe on mobile devices
                        if (window.innerWidth >= 768) return;

                        const swipe = offset.x;
                        const swipeThreshold = 50;

                        if (swipe < -swipeThreshold && startColumnIndex < maxStartIndex) {
                            handleNext();
                        } else if (swipe > swipeThreshold && startColumnIndex > 0) {
                            handlePrevious();
                        }
                    }}>

                    {rounds.map((round, roundIndex) => {
                        return (
                            <div
                                key={`round-${round.round}`}
                                className='relative flex-none'
                                style={{ width: `${100 / actualColumnsToShow}%` }}>

                                <div className='font-bold text-center text-sm truncate px-6 mb-6'>{round.roundName || `Round ${round.round}`}</div>
                                <div className="relative">
                                    {round.matches.map((match, matchIndex) => (
                                        <div key={`match-${match.id}`}>
                                            {/*Horizontal Line*/}
                                            <motion.div
                                                style={{
                                                    height: '1px',
                                                    border: '1px solid #999',
                                                    width:
                                                        roundIndex === 0 || roundIndex === rounds.length - 1
                                                            ? '100px'
                                                            : '100%',
                                                    position: 'absolute',
                                                    right: roundIndex === rounds.length - 1 ? 'auto' : '0',
                                                    left: roundIndex === rounds.length - 1 ? '0' : 'auto',
                                                }}
                                                animate={{
                                                    top: getTopOffset(round.round - startColumnIndex, matchIndex) + cardHeight / 2
                                                }}
                                                transition={springTransition}
                                            ></motion.div>

                                            {/*Vertical Line*/}
                                            {matchIndex % 2 === 1 && (
                                                <motion.div
                                                    style={{
                                                        width: '1px',
                                                        border: '1px solid #999',
                                                        position: 'absolute',
                                                        right: '0'
                                                    }}
                                                    animate={{
                                                        height: getTopOffset(round.round - startColumnIndex, matchIndex) -
                                                            getTopOffset(round.round - startColumnIndex, matchIndex - 1),
                                                        top: getTopOffset(round.round - startColumnIndex, matchIndex - 1) + cardHeight / 2
                                                    }}
                                                    transition={springTransition}
                                                ></motion.div>
                                            )}

                                            {/*Match Card*/}
                                            <MotionCard
                                                key={match.id}
                                                className='absolute left-1/2 w-[80%] -translate-x-1/2'
                                                style={getCardBorderStyle(match, accentColor)}
                                                animate={{
                                                    top: getTopOffset(round.round - startColumnIndex, matchIndex)
                                                }}
                                                transition={springTransition}
                                            >
                                                <CardContent className='p-3'>
                                                    <div className='space-y-2'>
                                                        {match.name && (
                                                            <div className='text-sm font-medium text-center border-b pb-1 mb-1 truncate'>{match.name}</div>
                                                        )}
                                                        <div
                                                            className='flex items-center justify-between rounded p-1 text-sm'
                                                            style={getTeamBackgroundStyle(match.winner?.id === match.team1.id, accentColor)}>
                                                            <span style={getTeamTextStyle(match.winner?.id === match.team1.id, textColor)}>{match.team1.name}</span>
                                                            {match.team1.score !== undefined && (
                                                                <span className='font-medium' style={getScoreTextStyle(match.winner?.id === match.team1.id, textColor)}>{match.team1.score}</span>
                                                            )}
                                                        </div>
                                                        <div
                                                            className='flex items-center justify-between rounded p-1 text-sm'
                                                            style={getTeamBackgroundStyle(match.winner?.id === match.team2.id, accentColor)}>
                                                            <span style={getTeamTextStyle(match.winner?.id === match.team2.id, textColor)}>{match.team2.name}</span>
                                                            {match.team2.score !== undefined && (
                                                                <span className='font-medium' style={getScoreTextStyle(match.winner?.id === match.team2.id, textColor)}>{match.team2.score}</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </MotionCard>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
}
