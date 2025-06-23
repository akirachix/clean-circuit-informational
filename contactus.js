
    const traderBtn = document.getElementById('traderBtn');
    const upcyclerBtn = document.getElementById('upcyclerBtn');
    let selectedRole = 'Trader';

    traderBtn.addEventListener('click', function(){
      traderBtn.classList.add('active');
      upcyclerBtn.classList.remove('active');
      selectedRole = 'Trader';
    });
    upcyclerBtn.addEventListener('click', function(){
      upcyclerBtn.classList.add('active');
      traderBtn.classList.remove('active');
      selectedRole = 'Upcycler';
    });

    document.querySelector('form').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('fullnameInput').value.trim();
      const email = document.getElementById('emailInput').value.trim();
      const password = document.getElementById('passwordInput').value;
    });