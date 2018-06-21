//Query the class or classes you want to count words on
const profile_values = document.querySelectorAll('.gpr-review-content');

//Loop how many classes you have on a page
for (let i = 0; i < profile_values.length; i++) {
    //trim and split the words into an array of strings
    const txtLen = profile_values[i].innerHTML.trim().split(' ').length;
    //change number for the desired length you want
    if(txtLen > 30){
        //split the words into an array
        const splitWords = profile_values[i].innerHTML.trim().split(' ');
        //slice it into how many words you want to have on a page
        const sliceWords = splitWords.slice(0, 27);
        //Join it and concatanate what you want
        profile_values[i].innerHTML = sliceWords.join(' ') + '...' + " <a href='#' class='read-more'>Read More</a>";
    }
}
