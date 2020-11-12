const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let board;
let turn = 'O';
let win;

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);

init();
    function render() {
        board.forEach(function(mark, index){
            squares[index].textContent = mark;
        });
        };
    function init() {
        board = [
        '', '', '',
        '', '', '',
        '', '', ''
        ];
        render();
        }; 
    function getWinner() {
        let winner = null;
        winningCombos.forEach(function(combo, index) {
            if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
          });
          return winner ? winner : board.includes('') ? null : 'T';    
        }
    function handleTurn() {
        let idx = squares.findIndex(function(square) {
        return square === event.target;
        });
        board[idx] = turn;
        
        turn = turn === 'O' ? 'X' : 'O';
        
        win = getWinner();
        render();
        };

    function render() {
        board.forEach(function(val, idx) {
        squares[idx].textContent = val;
        });
        messages.textContent = win === 'T' ? `That's a tie, try again!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
        };
                
               
                        
                        

                          

