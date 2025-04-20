'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Bracket, IRenderSeedProps, IRoundProps, Seed, SeedItem, SeedTeam } from 'react-brackets';

export interface MatchData {
    id: string;
    type: string;
    isCompleted: boolean;
    round: number;
    order: number;
    stageId: string;
    rule: Record<string, any>;
    detail:
        | {
              matches: Array<{
                  p1Id: string;
                  p2Id: string | null;
                  status: string;
                  p1Score: number;
                  p2Score: number;
                  description: string;
              }>;
          }
        | {};
    standing: Record<string, any>;
}

function transformToRounds(matches: MatchData[]): IRoundProps[] {
    const matchesByRound = matches.reduce(
        (acc, match) => {
            if (!acc[match.round]) {
                acc[match.round] = [];
            }
            acc[match.round].push(match);

            return acc;
        },
        {} as Record<number, MatchData[]>
    );

    return Object.entries(matchesByRound)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([round, roundMatches]) => {
            const seeds = roundMatches
                .sort((a, b) => a.order - b.order)
                .map((match) => {
                    const matchDetail = 'matches' in match.detail ? match.detail.matches?.[0] : null;

                    return {
                        id: match.id,
                        teams: [
                            {
                                name: matchDetail?.p1Id || 'TBD',
                                score: matchDetail?.p1Score,
                                status: matchDetail?.status
                            },
                            {
                                name: matchDetail?.p2Id || 'TBD',
                                score: matchDetail?.p2Score,
                                status: matchDetail?.status
                            }
                        ]
                    };
                });

            return {
                title: `Round ${round}`,
                seeds
            };
        });
}

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }: IRenderSeedProps) => {
    const getTeamColor = (team: any) => {
        if (team?.score !== undefined && team?.score !== null) {
            const otherTeam = seed.teams.find((t) => t !== team);
            if (otherTeam?.score !== undefined && otherTeam?.score !== null) {
                return team.score > otherTeam.score ? 'text-white' : 'text-gray-400';
            }
        }

        return 'text-white';
    };

    const isWinner = (team: any) => {
        if (team?.score !== undefined && team?.score !== null) {
            const otherTeam = seed.teams.find((t) => t !== team);
            if (otherTeam?.score !== undefined && otherTeam?.score !== null) {
                return team.score > otherTeam.score;
            }
        }

        return false;
    };
    const SEED_STYLE = 'flex justify-between !p-3';

    return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
            <SeedItem className='!rounded-lg shadow'>
                <SeedTeam className={cn(getTeamColor(seed.teams[0]), SEED_STYLE)}>
                    <span className={cn(getTeamColor(seed.teams[0]), 'font-bold')}>{seed.teams[0]?.name || 'TBD'}</span>
                    <div className='flex items-center gap-2'>
                        <span className={cn(getTeamColor(seed.teams[0]), 'font-bold')}>
                            {seed.teams[0]?.score ?? '-'}
                        </span>
                        {isWinner(seed.teams[0]) && <span className='text-white'>◀</span>}
                    </div>
                </SeedTeam>
                <SeedTeam className={cn(getTeamColor(seed.teams[1]), SEED_STYLE)}>
                    <span className={cn(getTeamColor(seed.teams[1]), 'font-bold')}>{seed.teams[1]?.name || 'TBD'}</span>
                    <div className='flex items-center gap-2'>
                        <span className={cn(getTeamColor(seed.teams[1]))}>{seed.teams[1]?.score ?? '-'}</span>
                        {isWinner(seed.teams[1]) && <span className='text-white'>◀</span>}
                    </div>
                </SeedTeam>
            </SeedItem>
        </Seed>
    );
};

interface BracketContainerProps {
    roundData: MatchData[];
}

export function BracketContainer({ roundData }: BracketContainerProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const rounds = transformToRounds(roundData);

    if (!isMounted) {
        return <div className='flex min-h-[500px] items-center justify-center'>Loading...</div>;
    }

    return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
}
