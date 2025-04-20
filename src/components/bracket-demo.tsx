import { BracketContainer } from './bracket/bracket-container';

export function BracketDemo() {
    const mockData = [
        {
            id: 'cm8lv8gjb00006nbdmj71bij3',
            type: 'MATCH',
            isCompleted: true,
            round: 1,
            order: 1,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A32',
                        p2Id: 'A2',
                        status: 'COMPLETED',
                        p1Score: 2,
                        p2Score: 1,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: [
                {
                    won: 1,
                    lost: 0,
                    drawn: 0,
                    played: 1,
                    points: 3,
                    goalsFor: 2,
                    rankPoints: 3012,
                    goalsAgainst: 1,
                    participantId: 'A32',
                    goalDifference: 1
                },
                {
                    won: 0,
                    lost: 1,
                    drawn: 0,
                    played: 1,
                    points: 0,
                    goalsFor: 1,
                    rankPoints: -9,
                    goalsAgainst: 2,
                    participantId: 'A2',
                    goalDifference: -1
                }
            ]
        },
        {
            id: 'cm8lv8gjc00016nbdxcmsnmmt',
            type: 'MATCH',
            isCompleted: true,
            round: 1,
            order: 2,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A3',
                        p2Id: 'A20',
                        status: 'COMPLETED',
                        p1Score: 0,
                        p2Score: 1,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: [
                {
                    won: 1,
                    lost: 0,
                    drawn: 0,
                    played: 1,
                    points: 3,
                    goalsFor: 1,
                    rankPoints: 3011,
                    goalsAgainst: 0,
                    participantId: 'A20',
                    goalDifference: 1
                },
                {
                    won: 0,
                    lost: 1,
                    drawn: 0,
                    played: 1,
                    points: 0,
                    goalsFor: 0,
                    rankPoints: -10,
                    goalsAgainst: 1,
                    participantId: 'A3',
                    goalDifference: -1
                }
            ]
        },
        {
            id: 'cm8lv8gjc00026nbdq4pynq5c',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 3,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A5',
                        p2Id: 'A6',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00036nbdaq006b3i',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 4,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A7',
                        p2Id: 'A8',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00046nbdims4g7g0',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 5,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A9',
                        p2Id: 'A10',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00056nbdxbbm6nzn',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 6,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A11',
                        p2Id: 'A12',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00066nbdioo2i0na',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 7,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A13',
                        p2Id: 'A14',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00076nbdkwwt4wd2',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 8,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A15',
                        p2Id: 'A16',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00086nbdhxggcd6v',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 9,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A17',
                        p2Id: 'A18',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc00096nbdnuq5k4te',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 10,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A19',
                        p2Id: 'A20',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000a6nbd11ukiwtf',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 11,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A21',
                        p2Id: 'A22',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000b6nbd4fnr5oro',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 12,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A23',
                        p2Id: 'A24',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000c6nbd1scycayh',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 13,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A25',
                        p2Id: 'A26',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000d6nbd02b694k0',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 14,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A27',
                        p2Id: 'A28',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000e6nbdtbgh43vn',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 15,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A29',
                        p2Id: 'A30',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gjc000f6nbdej8xwwsz',
            type: 'MATCH',
            isCompleted: false,
            round: 1,
            order: 16,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A31',
                        p2Id: 'A32',
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8gp5000g6nbd0amb0g0i',
            type: 'MATCH',
            isCompleted: true,
            round: 2,
            order: 1,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A32',
                        p2Id: 'A24',
                        status: 'COMPLETED',
                        p1Score: 1,
                        p2Score: 2,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: [
                {
                    won: 1,
                    lost: 0,
                    drawn: 0,
                    played: 1,
                    points: 3,
                    goalsFor: 2,
                    rankPoints: 3012,
                    goalsAgainst: 1,
                    participantId: 'A24',
                    goalDifference: 1
                },
                {
                    won: 0,
                    lost: 1,
                    drawn: 0,
                    played: 1,
                    points: 0,
                    goalsFor: 1,
                    rankPoints: -9,
                    goalsAgainst: 2,
                    participantId: 'A5',
                    goalDifference: -1
                }
            ]
        },
        {
            id: 'cm8lv8grw000h6nbdxp6ta4p0',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 2,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8gt8000i6nbdz9h2zjks',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 3,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8guj000j6nbd6cxngl0m',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 4,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8gvw000k6nbduwqmvm66',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 5,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8gx5000l6nbdnvon3rzp',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 6,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8gyg000m6nbdq07s8m2c',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 7,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8gzr000n6nbd4ya9wmoh',
            type: 'MATCH',
            isCompleted: false,
            round: 2,
            order: 8,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h12000o6nbdvrnzedfw',
            type: 'MATCH',
            isCompleted: false,
            round: 3,
            order: 1,
            stageId: '333333',
            rule: {},
            detail: {
                matches: [
                    {
                        p1Id: 'A24',
                        p2Id: null,
                        status: 'SCHEDULED',
                        p1Score: 0,
                        p2Score: 0,
                        description: 'Please fill match description'
                    }
                ]
            },
            standing: {}
        },
        {
            id: 'cm8lv8h2e000p6nbdt5fpi1ov',
            type: 'MATCH',
            isCompleted: false,
            round: 3,
            order: 2,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h3u000q6nbd32ap6wsw',
            type: 'MATCH',
            isCompleted: false,
            round: 3,
            order: 3,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h58000r6nbdxcka9dew',
            type: 'MATCH',
            isCompleted: false,
            round: 3,
            order: 4,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h6p000s6nbdsia01zep',
            type: 'MATCH',
            isCompleted: false,
            round: 4,
            order: 1,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h82000t6nbdb9yeqyi0',
            type: 'MATCH',
            isCompleted: false,
            round: 4,
            order: 2,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        },
        {
            id: 'cm8lv8h9b000u6nbdf6ryqfa8',
            type: 'MATCH',
            isCompleted: false,
            round: 5,
            order: 1,
            stageId: '333333',
            rule: {},
            detail: {},
            standing: {}
        }
    ];

    return <BracketContainer roundData={mockData} />;
}
