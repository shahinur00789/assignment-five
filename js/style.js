document.getElementById('donate-noakhali-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const donateAmountNoakhali = getInputFieldValueById('donate-noakhali-amount');

    

    if(donateAmountNoakhali <= 0 || isNaN(donateAmountNoakhali)){
        
        return alert('Invalid Amount')
    }



    const noakhaliBDT = getTextValueById('noakhali-BDT');

     const balance = getTextValueById('balance');

    const noakhaliNewBDT = noakhaliBDT + donateAmountNoakhali;

    document.getElementById('noakhali-BDT').innerText=noakhaliNewBDT;

    

    const balanceRemaining = balance - donateAmountNoakhali;
    
    document.getElementById('balance').innerText=balanceRemaining;



      // add tanjection histry
      const historyItem = document.createElement("div");
      historyItem.className="bg-white p-3 rounded-xl border-2 border-gray-200 space-y-4";
      
      
      
      historyItem.innerHTML=`
      <p class="font-extrabold">${donateAmountNoakhali} taka is Donate for Flood at Noakhali, Bangladesh </p>
      <p class="text-xs text-gray-500">Date:${day} ${month} ${date} ${year} ${time} ${timezone}(Bangladesh Standard Time)</p>
      `;
      
      
      const historyContainer = document.getElementById('history-list');
      
      historyContainer.insertBefore(historyItem, historyContainer.firstChild)
      
})






const donationTab = document.getElementById('donation-btn')
const historiTab = document.getElementById('history-btn')
historiTab.addEventListener('click',function(){
    historiTab.classList.add(
        "bg-primary-c",
        "font-bold"
    );
    historiTab.classList.remove(
        "btn-text"
    )
    donationTab.classList.remove(
       "bg-primary-c",
    "font-bold",
    
);
donationTab.classList.add(
    "btn-text"
);
document.getElementById('donate-card').classList.add("hidden");
document.getElementById('history-list').classList.remove("hidden");

})


donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        "bg-primary-c",
        "font-bold",
       
    );
    donationTab.classList.remove(
        "btn-text"
    );
    historiTab.classList.remove(
        "bg-primary-c",
    "font-bold",
    
    );
    historiTab.classList.add(
        "btn-text"
    );
    document.getElementById('donate-card').classList.remove("hidden");
    document.getElementById('history-list').classList.add("hidden");
})