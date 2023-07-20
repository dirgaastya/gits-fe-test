const getRank = (players, currRank, newPlayer, score) => {
    let scoreList = currRank.concat(score).sort((a, b) => b - a);
    let rank = [];

    for (let i = 0; i < players + newPlayer; i++) {
        if (i === 0) {
            rank.push(i + 1);
        } else if (scoreList[i - 1] !== scoreList[i]) {
            rank.push(rank[i - 1] + 1);
        } else {
            rank.push(rank[i - 1]);
        }
    }
    let rankNewPlayer = getPlayerPositionRank(rank, scoreList, score);
    return rankNewPlayer;
};

const getPlayerPositionRank = (rank, scoreList, score) => {
    let pos = [];
    let result = [];
    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < scoreList.length; j++) {
            if (scoreList[j] === score[i]) {
                pos.push(j);
            }
        }
    }
    pos.map((pos) => {
        result.push(rank[pos]);
    });
    return result
        .filter((data, index) => {
            return result.indexOf(data) === index;
        })
        .join(" ");
};

const players = 7;
const currRank = [100, 100, 50, 40, 40, 20, 10];
const gits = 4;
const score = [5, 25, 50, 120];

console.log(getRank(players, currRank, gits, score));
const players2 = 8;
const currRank2 = [120, 100, 50, 50, 40, 30, 30, 20];
const gits2 = 2;
const score2 = [50, 110];

console.log(getRank(players2, currRank2, gits2, score2));
const players3 = 6;
const currRank3 = [50, 50, 60, 30, 30, 20];
const gits3 = 1;
const score3 = [100];

console.log(getRank(players3, currRank3, gits3, score3));
