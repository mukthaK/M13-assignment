const $ = id => document.getElementById(id);

const bankAccount = function (ownerName){
    let balance = 0, owner = ownerName;
    return {
        withdrawal: function(withdrawalAmout) {
            if(withdrawalAmout > balance) {
                alert('You do not have enough fund in your account');
            } else {
                balance -= withdrawalAmout;
            }
        },
        deposit: function(depositAmount) {
            if (depositAmount <= 0){
                alert('Enter a valid amount to be deposited');
            } else {
                balance +=depositAmount;
            }
        },
        getBalance: function(){
            return balance;
        },
        getOwnerName: function(){
            return owner;
        }
    };
};

window.addEventListener('load', () => {
    let ba;
    $('name').addEventListener('click', () => {
        let name = prompt('Enter your name');
        console.log(name);
        ba = bankAccount(name);
        $('summary').innerHTML += 'Name: ' + ba.getOwnerName() + '<br>';
        $('summary').innerHTML += 'Balance: ' + ba.getBalance() + '<br>';
    });
    $('deposit').addEventListener('click', () => {
        let depositAmt = parseFloat(prompt('Enter the amount to deposit'));
        console.log(depositAmt);
        ba.deposit(depositAmt);
        $('summary').innerHTML += 'Deposit Amt: ' + depositAmt + '<br>';
        $('summary').innerHTML += 'Balance: ' + ba.getBalance() + '<br>';
    });
    $('withdrawal').addEventListener('click', () => {
        let withdrawAmt = parseInt(prompt('Enter the amount to withdraw'));
        console.log(withdrawAmt);
        ba.withdrawal(withdrawAmt);
        $('summary').innerHTML += 'Withdraw Amt: ' + withdrawAmt + '<br>';
        $('summary').innerHTML += 'Balance: ' + ba.getBalance() + '<br>';
    });
});




