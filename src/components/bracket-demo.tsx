import { BracketTree } from './bracket/BracketTree';

export function BracketDemo() {
    const rounds = [
        {
            round: 1,
            matches: [
                {
                    id: 'cm8lv8gjb00006nbdmj71bij3',
                    team1: { id: 'A32', name: 'Team A32', score: 2 },
                    team2: { id: 'A2', name: 'Team A2', score: 1 },
                    winner: { id: 'A32', name: 'Team A32' }
                },
                {
                    id: 'cm8lv8gjc00016nbdxcmsnmmt',
                    team1: { id: 'A3', name: 'Team A3', score: 0 },
                    team2: { id: 'A20', name: 'Team A20', score: 1 },
                    winner: { id: 'A20', name: 'Team A20' }
                },
                {
                    id: 'cm8lv8gjc00026nbdq4pynq5c',
                    team1: { id: 'A5', name: 'Team A5', score: 0 },
                    team2: { id: 'A6', name: 'Team A6', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00036nbdaq006b3i',
                    team1: { id: 'A7', name: 'Team A7', score: 0 },
                    team2: { id: 'A8', name: 'Team A8', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00046nbdims4g7g0',
                    team1: { id: 'A9', name: 'Team A9', score: 0 },
                    team2: { id: 'A10', name: 'Team A10', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00056nbdxbbm6nzn',
                    team1: { id: 'A11', name: 'Team A11', score: 0 },
                    team2: { id: 'A12', name: 'Team A12', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00066nbdioo2i0na',
                    team1: { id: 'A13', name: 'Team A13', score: 0 },
                    team2: { id: 'A14', name: 'Team A14', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00076nbdkwwt4wd2',
                    team1: { id: 'A15', name: 'Team A15', score: 0 },
                    team2: { id: 'A16', name: 'Team A16', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00086nbdhxggcd6v',
                    team1: { id: 'A17', name: 'Team A17', score: 0 },
                    team2: { id: 'A18', name: 'Team A18', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc00096nbdnuq5k4te',
                    team1: { id: 'A19', name: 'Team A19', score: 0 },
                    team2: { id: 'A20', name: 'Team A20', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000a6nbd11ukiwtf',
                    team1: { id: 'A21', name: 'Team A21', score: 0 },
                    team2: { id: 'A22', name: 'Team A22', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000b6nbd4fnr5oro',
                    team1: { id: 'A23', name: 'Team A23', score: 0 },
                    team2: { id: 'A24', name: 'Team A24', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000c6nbd1scycayh',
                    team1: { id: 'A25', name: 'Team A25', score: 0 },
                    team2: { id: 'A26', name: 'Team A26', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000d6nbd02b694k0',
                    team1: { id: 'A27', name: 'Team A27', score: 0 },
                    team2: { id: 'A28', name: 'Team A28', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000e6nbdtbgh43vn',
                    team1: { id: 'A29', name: 'Team A29', score: 0 },
                    team2: { id: 'A30', name: 'Team A30', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gjc000f6nbdej8xwwsz',
                    team1: { id: 'A31', name: 'Team A31', score: 0 },
                    team2: { id: 'A32', name: 'Team A32', score: 0 },
                    winner: undefined
                }
            ]
        },
        {
            round: 2,
            matches: [
                {
                    id: 'cm8lv8gp5000g6nbd0amb0g0i',
                    team1: { id: 'A32', name: 'Team A32', score: 1 },
                    team2: { id: 'A24', name: 'Team A24', score: 2 },
                    winner: { id: 'A24', name: 'Team A24' }
                },
                {
                    id: 'cm8lv8grw000h6nbdxp6ta4p0',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gt8000i6nbdz9h2zjks',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8guj000j6nbd6cxngl0m',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gvw000k6nbduwqmvm66',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gx5000l6nbdnvon3rzp',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gyg000m6nbdq07s8m2c',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8gzr000n6nbd4ya9wmoh',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                }
            ]
        },
        {
            round: 3,
            matches: [
                {
                    id: 'cm8lv8h12000o6nbdvrnzedfw',
                    team1: { id: 'A24', name: 'Team A24', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8h2e000p6nbdt5fpi1ov',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8h3u000q6nbd32ap6wsw',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8h58000r6nbdxcka9dew',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                }
            ]
        },
        {
            round: 4,
            matches: [
                {
                    id: 'cm8lv8h6p000s6nbdsia01zep',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                },
                {
                    id: 'cm8lv8h82000t6nbdb9yeqyi0',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                }
            ]
        },
        {
            round: 5,
            matches: [
                {
                    id: 'cm8lv8h9b000u6nbdf6ryqfa8',
                    team1: { id: '', name: 'TBD', score: 0 },
                    team2: { id: '', name: 'TBD', score: 0 },
                    winner: undefined
                }
            ]
        }
    ];

    return <BracketTree rounds={rounds} />;
}
