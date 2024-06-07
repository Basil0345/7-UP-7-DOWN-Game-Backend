const rollDice = (_, res) => {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const result = {
        dice1: dice1,
        dice2: dice2,
        sum: dice1 + dice2
    };
    return res.status(201).json(result)
};

const checkWinController = (req, res) => {
    const { dice1, dice2, selectedOption, sum } = req.body;

    let win = false;
    let payoutMultiplier = 0;


    if (selectedOption === '7up') {
        win = (dice1 + dice2 > 7);
        payoutMultiplier = 2;
    } else if (selectedOption === '7down') {
        win = (dice1 + dice2 < 7);
        payoutMultiplier = 2;
    } else if (selectedOption === 'lucky7') {
        win = (dice1 + dice2 === 7);
        payoutMultiplier = 5;
    }

    const result = {
        win: win,
        dice1: dice1,
        dice2: dice2,
        sum: sum,
        payoutMultiplier: payoutMultiplier
    };

    return res.status(201).json(result)
};

const updateAmountController = (req, res) => {
    const { currentAmount, betAmount, win, payoutMultiplier } = req.body;
    let newAmount = currentAmount;

    if (win) {
        newAmount += betAmount * payoutMultiplier;
    } else {
        newAmount -= betAmount;
    }


    res.json({ newAmount: newAmount });
};




export { rollDice, checkWinController, updateAmountController }