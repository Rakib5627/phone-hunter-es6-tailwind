const loadPhones = async(searchText , isShowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    // console.log(data)
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones , isShowAll);
}


const displayPhones = (phones , isShowAll) =>{
    // console.log(phones)
    const phoneContainer = document.getElementById('phone-container');

    // clear cards
    phoneContainer.textContent = '';

    // show all button work

    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }

    else {
        showAllContainer.classList.add('hidden');
    }


    if(!isShowAll){
        phones = phones.slice(0,12);

    }

    
    phones.forEach(phone =>{
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="text-xl font-semibold text-center">${phone.phone_name}</h2>
            <p class="text-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
                <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
        toggleLoadingSpinner(false);
    })

}




const handleSearch = (isShowAll) => {

    toggleLoadingSpinner(true);
        
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhones(searchText , isShowAll);
    
}



const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}


const handleShowAll = () =>{
    handleSearch(true)

}

// loadPhones();